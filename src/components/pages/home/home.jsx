import { useState } from 'react';

export const Home = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    console.debug('inputValue: ', inputValue);
                }}
            >
                Save
            </button>
        </div>
    );
};
