import { useState, ReactElement } from 'react';
import { IPokemon } from 'pokeapi-typescript';

import { StyledContainer } from './pokedex.styled';
import { Pokemon } from '../..';
import { getPokemon } from '../../../helpers';

export const Pokedex = (): ReactElement => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const fetchPokemon = async (id: string) => {
        const data = await getPokemon(id);
        setPokemon(data);
    };

    return (
        <StyledContainer>
            <h1>Pokédex</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    fetchPokemon(search);
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

            {pokemon ? (
                <Pokemon pokemon={pokemon} />
            ) : (
                <h2>Search for a pokemon</h2>
            )}
        </StyledContainer>
    );
};
