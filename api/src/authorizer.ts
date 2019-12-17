import * as crypto from 'crypto';
import { object, string } from '@mojotech/json-type-validation';
import { sign, verify } from 'jsonwebtoken';
import { Account } from './model';

export interface AuthData {
  id: string;
  password: string;
}

export const authData = object({
  id: string(),
  password: string(),
});

export default class Authorizer {
  constructor(
    private _salt: string,
    private tokenSecret: string,
    private algorithm: string = 'sha512',
    private amount: number = 1
  ) {}

  private get salt() {
    return Array(this.amount)
      .fill(this._salt)
      .join('');
  }

  getHash(data: string) {
    const hash = crypto.createHash(this.algorithm);
    hash.update(data + this.salt);

    return hash.digest('hex');
  }

  createToken({ hash: _, ...data }: Account) {
    return sign(data, this.tokenSecret);
  }

  verifyToken(token: string) {
    return verify(token, this.tokenSecret);
  }
}
