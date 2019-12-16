import * as Member from './member';
import * as Event from './event';

type Repository = Member.Repository | Event.Repository;

export { Repository, Member, Event };
