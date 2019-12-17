import { Account, account, Role } from '../model';
import faunadb, { query as q } from 'faunadb';
import { FaunaResponseDecoder } from '../utils';

export interface Repository {
  create: (data: Account) => Promise<void>;
  get: (id: string) => Promise<Account>;
}

export class FaunaRepository implements Repository {
  client: faunadb.Client;

  constructor(secret: string) {
    this.client = new faunadb.Client({ secret });
  }

  async create(account: Account) {
    await this.client.query(
      q.Create(q.Ref(q.Collection('Account')), {
        data: account,
      })
    );
  }

  async get(id: string) {
    const ref = await this.client.query(q.Match(q.Index('account_by_id'), id));
    const response = await this.client
      .query(q.Get(ref))
      .then((x) => FaunaResponseDecoder<Account>(account).runPromise(x));

    return account.runPromise(response.data);
  }
}
