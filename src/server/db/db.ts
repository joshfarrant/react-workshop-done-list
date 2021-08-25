import mongoose, { model } from 'mongoose';

import { doneItemSchema } from '../models';

export async function connect(): Promise<void> {
    const collectionName = process.env.COLLECTION_NAME;

    if (!collectionName) {
        throw new Error(
            'Missing COLLECTION_NAME environment variable. See README.md for instructions of how to fix this error.',
        );
    }

    await mongoose.connect(
        `mongodb+srv://joshfarrant:hellomoto2468@done-list.2zjgq.mongodb.net/${collectionName}?retryWrites=true&w=majority`,
    );

    model('DoneItem', doneItemSchema);
}
