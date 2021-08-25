import mongoose, { model } from 'mongoose';

import { doneItemSchema } from '../models';

export async function connect(): Promise<void> {
    const dbBaseUrl = process.env.DB_BASE_URL;
    const collectionName = process.env.COLLECTION_NAME;

    if (!dbBaseUrl) {
        throw new Error(
            'Missing DB_BASE_URL environment variable. See README.md for instructions of how to fix this error.',
        );
    }

    if (!collectionName) {
        throw new Error(
            'Missing COLLECTION_NAME environment variable. See README.md for instructions of how to fix this error.',
        );
    }

    await mongoose.connect(
        `${dbBaseUrl}/${collectionName}?retryWrites=true&w=majority`,
    );

    model('DoneItem', doneItemSchema);
}
