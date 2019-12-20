import faunadb, { query as q } from 'faunadb';
import { Member, member, WithID, withID } from '../model';
import { FaunaResponseDecoder } from '../utils';
import { array } from '@mojotech/json-type-validation';

export interface Repository {
  create: (member: Member) => Promise<string>;
  get: (id: string) => Promise<WithID<Member>>;
  getWithStudentID: (sID: string) => Promise<WithID<Member>>;
  getAll: () => Promise<Array<WithID<Member>>>;
  update: (member: WithID<Member>) => Promise<boolean>;
  delete: (id: string) => Promise<boolean>;
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

  async getWithStudentID(sID: string) {
    const ref = await this.client.query(q.Match(q.Index('member_by_sID'), sID));

    const res = await this.client
      .query(q.Get(ref))
      .then(FaunaResponseDecoder<Member>(member).runPromise);

    return withID<Member>(res.ref.id)(res.data);
  }

  getAll() {
    return this.client
      .query(q.Map(q.Paginate(q.Match(q.Index('all_member'))), q.Lambda('x', q.Get(q.Var('x')))))
      .then(x => (x as any).data)
      .then(array(this.memberWithID).runPromise);
  }

  async update({ id, ...member }: WithID<Member>) {
    await this.client.query(q.Update(q.Ref(q.Collection('Member'), id), { data: member }));

    return true;
  }

  async delete(id: string) {
    await this.client.query(q.Delete(q.Ref(q.Collection('Member'), id)));

    return true;
  }
}
