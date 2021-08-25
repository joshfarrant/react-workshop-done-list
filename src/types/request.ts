import { NextApiRequest, NextApiResponse } from 'next';

export type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type TMethodHandlerMap = Map<
    TMethod,
    (req: NextApiRequest, res: NextApiResponse) => Promise<void>
>;
