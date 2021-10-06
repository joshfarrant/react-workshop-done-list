import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TDoneItem } from './home.types';
import { ContainerDiv } from './home.styled';

export const Home = (): ReactElement => {
    const [inputValue, setInputValue] = useState('');
    const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);
    const [doneItems, setDoneItems] = useState<TDoneItem[]>([]);

    const addDoneItem = () => {
        const newDoneItem = {
            id: uuidv4(),
            title: inputValue,
        };
        setDoneItems([...doneItems, newDoneItem]);
        setInputValue('');
    };

    return (
        <ContainerDiv darkThemeEnabled={darkThemeEnabled}>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    addDoneItem();
                }}
            >
                Save
            </button>
            <button
                onClick={() => {
                    setDarkThemeEnabled(!darkThemeEnabled);
                }}
            >
                Change theme
            </button>
            <ul>
                {doneItems.map(doneItem => (
                    <li key={doneItem.id}>
                        {doneItem.id} - {doneItem.title}
                    </li>
                ))}
            </ul>
        </ContainerDiv>
    );
};
