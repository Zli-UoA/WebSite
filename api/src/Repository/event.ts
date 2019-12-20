import faunadb, { query as q } from "faunadb";
import { Event, event, withID, WithID, eventEncoder } from "../model";
import { FaunaResponseDecoder } from "../utils";
import { array } from "@mojotech/json-type-validation";

export interface Repository {
  create: (event: Event) => Promise<string>;
  get: (id: string) => Promise<WithID<Event>>;
  getAll: () => Promise<Array<WithID<Event>>>;
  update: (event: WithID<Event>) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

export class FaunaRepository implements Repository {
  client: faunadb.Client;

  constructor(secret: string) {
    this.client = new faunadb.Client({ secret });
  }

  private eventWithID = FaunaResponseDecoder<Event>(event).map(x =>
    withID<Event>(x.ref.id)(x.data)
  );

  create(event: Event) {
    return this.client
      .query(
        q.Create(q.Collection("Event"), {
          data: eventEncoder(event)
        })
      )
      .then(this.eventWithID.runPromise)
      .then(x => x.id);
  }

  get(id: string) {
    return this.client
      .query(q.Get(q.Ref(q.Collection("Event"), id)))
      .then(this.eventWithID.runPromise);
  }

  getAll() {
    return this.client
      .query(
        q.Map(
          q.Paginate(q.Match(q.Index("events_sort_by_date_in_reverse"))),
          q.Lambda(["_", "ref"], q.Get(q.Var("ref")))
        )
      )
      .then(x => (x as any).data)
      .then(array(this.eventWithID).runPromise);
  }

  update({ id, ...event }: WithID<Event>) {
    return this.client.query<void>(
      q.Update(q.Ref(q.Collection("Event"), id), {
        data: event
      })
    );
  }

  delete(id: string) {
    return this.client.query<void>(q.Delete(q.Ref(q.Collection("Event"), id)));
  }
}
