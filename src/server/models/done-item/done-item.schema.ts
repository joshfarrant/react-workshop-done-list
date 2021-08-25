import { Schema as MongooseSchema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const doneItemSchema = new MongooseSchema(
    {
        _id: { type: String, default: uuidv4 },
        title: {
            type: String,
            required: true,
        },
        doneAt: { type: Date, default: () => Math.floor(Date.now() / 1000) },
    },
    {
        timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
        versionKey: false,
        toJSON: {
            transform: ({ _id, title, doneAt }) => ({
                id: _id,
                title,
                doneAt,
            }),
        },
    },
);
