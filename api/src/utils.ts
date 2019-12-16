import { Decoder, object, string, number } from '@mojotech/json-type-validation';

export const FaunaResponseDecoder = <T>(
  d: Decoder<T>
): Decoder<{ ref: { id: string }; ts: number; data: T }> =>
  object({
    ref: object({ id: string() }),
    ts: number(),
    data: d,
  });
