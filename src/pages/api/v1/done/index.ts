import { NextApiRequest, NextApiResponse } from 'next';
import { body } from 'express-validator';

import { createDoneItem, listDoneItems } from '../../../../server';
import { handleRequest, validate } from '../../../../helpers';
import { TMethodHandlerMap } from '../../../../types';

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
    const doneItems = await listDoneItems();
    res.status(200).json(doneItems);
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
    await validate(req, [body('title').isLength({ min: 1, max: 500 }).trim()]);

    const { title } = req.body;

    const doneItem = {
        title,
    };

    const createdDoneItem = await createDoneItem(doneItem);

    res.status(201).json(createdDoneItem);
}

const methodHandlers: TMethodHandlerMap = new Map([
    ['GET', handleGetRequest],
    ['POST', handlePostRequest],
]);

export default handleRequest(methodHandlers);
