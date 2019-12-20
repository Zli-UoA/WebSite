import { object, string, optional, number, array, succeed } from '@mojotech/json-type-validation';

export type WithID<T> = { id: string } & T;

export type Role = 'Admin';

export interface Account {
  id: string;
  role: Role;
  hash: string;
}

export interface Member {
  studentID: string;
  imageUrl: string;
  name: string;
  description: string;
  links: {
    hp?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Event {
  image: string;
  title: string;
  organizer: string;
  date: Date;
  time: {
    from: Date;
    to: Date;
  };
  genre: string;
  tags: string[];
  comment: string;
}

export const account = object({
  id: string(),
  role: string().andThen((x) => {
    switch (x) {
      case 'Admin':
        return succeed(x);
    }

    return fail('error');
  }),
  hash: string(),
});

export const member = object({
  studentID: string(),
  imageUrl: string(),
  name: string(),
  description: string(),
  links: object({
    hp: optional(string()),
    twitter: optional(string()),
    github: optional(string()),
  }),
});

export const event = object({
  image: string(),
  title: string(),
  organizer: string(),
  date: number().map((n) => new Date(n)),
  time: object({
    from: number().map((n) => new Date(n)),
    to: number().map((n) => new Date(n)),
  }),
  genre: string(),
  tags: array(string()),
  comment: string(),
});

export const eventEncoder = (event: Event) => ({
  ...event,
  date: event.date.getTime(),
  time: {
    from: event.time.from.getTime(),
    to: event.time.to.getTime(),
  },
});

export const withID = <T>(id: string) => (data: T) => ({
  id,
  ...data,
});
