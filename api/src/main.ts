import micro, { send } from 'micro';
import { router, get, post } from 'microrouter';
import { Handler } from './handler';
import { Member, Event } from './Repository';

const memberRepo = new Member.FaunaRepository(process.env.FAUNA_SECRET_KEY);
const eventRepo = new Event.FaunaRepository(process.env.FAUNA_SECRET_KEY);

const app = router(
  get('/', () => ({ message: 'server is running' })),
  get('/member/:id', Handler.getMember(memberRepo)),
  get('/members', Handler.getMembers(memberRepo)),
  post('/member', Handler.createMember(memberRepo)),
  get('/event/:id', Handler.getEvent(eventRepo)),
  get('/events', Handler.getEvents(eventRepo)),
  post('/event', Handler.createEvent(eventRepo)),
  get('/*', (_, res) => send(res, 404, { message: 'not found' }))
);

micro(app).listen(3000, () => {
  console.log('server is running.');
});
