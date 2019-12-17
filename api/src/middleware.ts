import { ServerRequest, ServerResponse, AugmentedRequestHandler } from 'microrouter';
import Authorizer from './authorizer';
import { send } from 'micro';

export const verifying = (authorizer: Authorizer) => (handler: AugmentedRequestHandler) => async (
  req: ServerRequest,
  res: ServerResponse
) => {
  const rawToken = req.headers.authorization;

  if (!/^Bearer +/.test(rawToken)) {
    send(res, 401, { message: 'unauthorized' });
  }

  const token = rawToken.split(' ')[1];

  try {
    authorizer.verifyToken(token);
    await handler(req, res);
  } catch (e) {
    send(res, 401, { message: 'unauthorized' });
  }
};
