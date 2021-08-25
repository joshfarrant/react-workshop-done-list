import { NextApiRequest, NextApiResponse } from 'next';

import { getDoneItem } from '../../../../server';
import { handleRequest } from '../../../../helpers';
import { TMethodHandlerMap } from '../../../../types';

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const doneItem = await getDoneItem(id as string);
    res.status(200).json(doneItem);
}

async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
    console.debug('You have sent a PUT request');
    res.status(200).json({});
}

async function handlePatchRequest(req: NextApiRequest, res: NextApiResponse) {
    console.debug('You have sent a PATCH request');
    res.status(200).json({});
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
    console.debug('You have sent a DELETE request');
    res.status(204).json({});
}

const methodHandlers: TMethodHandlerMap = new Map([
    ['GET', handleGetRequest],
    ['PUT', handlePutRequest],
    ['PATCH', handlePatchRequest],
    ['DELETE', handleDeleteRequest],
]);

export default handleRequest(methodHandlers);
