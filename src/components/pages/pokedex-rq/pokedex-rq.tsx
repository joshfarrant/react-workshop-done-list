import { useState, ReactElement } from 'react';

import { StyledContainer } from './pokedex-rq.styled';
import { Pokemon } from '../..';
import { getPokemon } from '../../../helpers';
import { useQuery } from 'react-query';

export const PokedexRQ = (): ReactElement => {
    const [search, setSearch] = useState('');

    const query = useQuery(['pokemon'], () => getPokemon(search), {
        enabled: false,
    });

    return (
        <StyledContainer>
            <h1>Pokédex</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    query.refetch();
                }}
            >
                <label htmlFor="search">Pokémon name or number</label>
                <input
                    id="search"
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {query.isError && (
                <div>
                    <h2>Error!</h2>
                    <p>{query.error.message}</p>
                </div>
            )}
            {query.isSuccess && query.data ? (
                <Pokemon pokemon={query.data} />
            ) : (
                <h2>Search for a pokemon</h2>
            )}
        </StyledContainer>
    );
};
