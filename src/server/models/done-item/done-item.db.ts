import { Document, model } from 'mongoose';
import { TDoneItem } from '../../../types';

import { TCreateDoneItem } from './done-item.types';

export async function listDoneItems(): Promise<Document[]> {
    const doneItems = await model('DoneItem').find();

    return doneItems;
}

export async function getDoneItem(
    id: string,
): Promise<Document<TDoneItem> | null> {
    const doneItem = await model('DoneItem').findById(id);

    return doneItem;
}

export async function createDoneItem({
    title,
}: TCreateDoneItem): Promise<Document> {
    const DoneItem = model('DoneItem');

    const doneItem = new DoneItem({
        title,
    });

    return doneItem.save();
}
