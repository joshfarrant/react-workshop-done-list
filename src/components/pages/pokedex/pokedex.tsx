import { useState, ReactElement } from 'react';
import { IPokemon } from 'pokeapi-typescript';
import { useQuery } from 'react-query';

import { StyledContainer } from './pokedex.styled';
import { Pokemon } from '../..';
import { getPokemon } from '../../../helpers';

export const Pokedex = (): ReactElement => {
    const [search, setSearch] = useState('');

    const query = useQuery('pokemon', () => getPokemon(search), {
        enabled: false,
    });

    return (
        <StyledContainer>
            <h1>Pokédex</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    query.refetch();
                    setSearch('');
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
            {query.isError && <h2>Something went wrong</h2>}
            {query.isLoading && <h2>Loading...</h2>}
            {query.data ? (
                <Pokemon pokemon={query.data} />
            ) : (
                <h2>Search for a pokemon</h2>
            )}
        </StyledContainer>
    );
};
