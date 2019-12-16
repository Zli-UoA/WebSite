import faunadb, { query as q } from 'faunadb';
import { Member, member, WithID, withID } from '../model';
import { FaunaResponseDecoder } from '../utils';
import { array } from '@mojotech/json-type-validation';

export interface Repository {
  create: (member: Member) => Promise<string>;
  get: (id: string) => Promise<WithID<Member>>;
  getAll: () => Promise<Array<WithID<Member>>>;
}

export class FaunaRepository implements Repository {
  client: faunadb.Client;

  constructor(secret: string) {
    this.client = new faunadb.Client({ secret });
  }

  private memberWithID = FaunaResponseDecoder<Member>(member).map(x =>
    withID<Member>(x.ref.id)(x.data)
  );

  create(member: Member) {
    return this.client
      .query<string>(
        q.Create(q.Collection('Member'), {
          data: member,
        }),
        q.Lambda('x', q.Var('x.ref.id'))
      )
      .then(this.memberWithID.runPromise)
      .then(x => x.id);
  }

  get(id: string) {
    return this.client
      .query(q.Get(q.Ref(q.Collection('Member'), id)))
      .then(this.memberWithID.runPromise);
  }

  getAll() {
    return this.client
      .query(q.Map(q.Paginate(q.Match(q.Index('all_member'))), q.Lambda('x', q.Get(q.Var('x')))))
      .then(x => (x as any).data)
      .then(array(this.memberWithID).runPromise);
  }
}
