import { AugmentedRequestHandler, ServerResponse } from 'microrouter';
import { json, send } from 'micro';
import { member, event, eventEncoder, Role, withID, Member as M } from './model';
import { Repository, Member, Event, Account } from './Repository';
import { isDecoderError } from '@mojotech/json-type-validation';
import faunadb from 'faunadb';
import Authorizer, { authData } from './authorizer';

type WithRepository<T extends Repository, U = AugmentedRequestHandler> = (repo: T) => U;

type WithAuthorizer<T = AugmentedRequestHandler> = (authorizer: Authorizer) => T;

const errorHandle = (res: ServerResponse, e: Error) => {
  if (isDecoderError(e)) {
    send(res, 500, { message: 'Internal Server Error' });
  } else {
    const faunaError = e as faunadb.errors.FaunaHttpError;
    send(res, (faunaError.requestResult as any).statusCode, { message: faunaError.message });
  }
};

export namespace Handler {
  export const createMember: WithRepository<Member.Repository> = repo => async (req, res) => {
    const value = await json(req);

    try {
      const memberData = await member.runPromise(value);
      const id = await repo.create(memberData);
      send(res, 200, { message: 'success to create member', id });
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const getMember: WithRepository<Member.Repository> = repo => async (req, res) => {
    const id = req.params.id;

    try {
      const member = await repo.get(id);
      send(res, 200, member);
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const getMembers: WithRepository<Member.Repository> = repo => async (_, res) => {
    try {
      const members = await repo.getAll();
      send(res, 200, members);
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const getMemberByStudentID: WithRepository<Member.Repository> = repo => async (
    req,
    res
  ) => {
    const id = req.params.id;
    console.log(id);

    try {
      const member = await repo.getWithStudentID(`s${id}`);
      send(res, 200, member);
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const updateMember: WithRepository<Member.Repository> = repo => async (req, res) => {
    const body = await json(req);
    const id = req.params.id;

    try {
      const memberData = await member.runPromise(body);
      await repo.update(withID<M>(id)(memberData));
      send(res, 200, { message: 'success' });
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const deleteMember: WithRepository<Member.Repository> = repo => async (req, res) => {
    const id = req.params.id;

    try {
      await repo.delete(id);
      send(res, 200, { message: 'success' });
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const createEvent: WithRepository<Event.Repository> = repo => async (req, res) => {
    const value = await json(req);

    try {
      const eventData = await event.runPromise(value);
      console.log(eventData);
      const id = await repo.create(eventData);
      send(res, 200, { message: 'success to create member', id });
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const getEvent: WithRepository<Event.Repository> = repo => async (req, res) => {
    const id = req.params.id;

    try {
      const eventData = await repo.get(id);
      send(res, 200, eventEncoder(eventData));
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const getEvents: WithRepository<Event.Repository> = repo => async (_, res) => {
    try {
      const events = await repo.getAll();
      send(res, 200, events.map(eventEncoder));
    } catch (e) {
      console.error(e);
      errorHandle(res, e);
    }
  };

  export const createAccount: WithRepository<
    Account.Repository,
    WithAuthorizer
  > = repo => authorizer => async (req, res) => {
    const body = await json(req);

    try {
      const data = await authData.runPromise(body);
      const hash = authorizer.getHash(data.password);

      const account = { id: data.id, role: 'Admin' as Role, hash };
      await repo.create(account);

      const token = authorizer.createToken(account);
      send(res, 200, { token });
    } catch (e) {
      console.log(e);
      errorHandle(res, e);
    }
  };

  export const signin: WithRepository<
    Account.Repository,
    WithAuthorizer
  > = repo => authorizer => async (req, res) => {
    const body = await json(req);

    try {
      const data = await authData.runPromise(body);
      const hash = authorizer.getHash(data.password);

      const account = await repo.get(data.id);

      if (account.hash !== hash) {
        send(res, 401, { message: 'failed to sign in' });
        return;
      }

      const token = authorizer.createToken(account);
      send(res, 200, { token });
    } catch (e) {
      console.log(e);
      errorHandle(res, e);
    }
  };
}
