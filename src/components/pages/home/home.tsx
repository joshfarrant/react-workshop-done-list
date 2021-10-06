import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DoneItem, DoneItemCreator } from '../../';

import { TDoneItem } from './home.types';
import { ContainerDiv } from './home.styled';

export const Home = (): ReactElement => {
    const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);
    const [doneItems, setDoneItems] = useState<TDoneItem[]>([]);

    const addDoneItem = (title: string) => {
        const newDoneItem = {
            id: uuidv4(),
            title,
        };
        setDoneItems([...doneItems, newDoneItem]);
    };

    return (
        <ContainerDiv darkThemeEnabled={darkThemeEnabled}>
            <DoneItemCreator
                onCreate={(title: string) => {
                    addDoneItem(title);
                }}
            />
            <button
                onClick={() => {
                    setDarkThemeEnabled(!darkThemeEnabled);
                }}
            >
                Change theme
            </button>
            <ul>
                {doneItems.map(({ id, title }) => (
                    <DoneItem key={id} title={title} />
                ))}
            </ul>
        </ContainerDiv>
    );
};
