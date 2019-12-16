import { AugmentedRequestHandler, ServerResponse } from 'microrouter';
import { json, send } from 'micro';
import { member, event, eventEncoder } from './model';
import { Repository, Member, Event } from './Repository';
import { isDecoderError } from '@mojotech/json-type-validation';
import faunadb from 'faunadb';

type WithRepository<T extends Repository> = (repo: T) => AugmentedRequestHandler;

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
}
