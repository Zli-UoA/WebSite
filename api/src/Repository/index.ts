import * as Member from './member';
import * as Event from './event';
import * as Account from './account';

type Repository = Member.Repository | Event.Repository | Account.Repository;

export { Repository, Member, Event, Account };
