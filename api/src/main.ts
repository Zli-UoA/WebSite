import micro, { send } from 'micro';
import { router, get, post } from 'microrouter';
import { Handler } from './handler';
import { Member, Event, Account } from './Repository';
import { verifying } from './middleware';
import Authorizer from './authorizer';
import microCors from 'micro-cors';

const memberRepo = new Member.FaunaRepository(process.env.FAUNA_SECRET_KEY);
const eventRepo = new Event.FaunaRepository(process.env.FAUNA_SECRET_KEY);
const accountRepo = new Account.FaunaRepository(process.env.FAUNA_SECRET_KEY);
const authorizer = new Authorizer(process.env.SALT, process.env.TOKEN_SECRET, 'sha512', 3);
const cors = microCors();

const app = router(
  get('/', () => ({ message: 'server is running' })),
  get('/member/:id', Handler.getMember(memberRepo)),
  get('/members', Handler.getMembers(memberRepo)),
  post('/member', verifying(authorizer)(Handler.createMember(memberRepo))),
  get('/event/:id', Handler.getEvent(eventRepo)),
  get('/events', Handler.getEvents(eventRepo)),
  post('/event', verifying(authorizer)(Handler.createEvent(eventRepo))),
  post('/account', verifying(authorizer)(Handler.createAccount(accountRepo)(authorizer))),
  post('/signin', Handler.signin(accountRepo)(authorizer)),
  get('/*', (_, res) => send(res, 404, { message: 'not found' }))
);

micro(cors(app)).listen(3000, () => {
  console.log('server is running.');
});
