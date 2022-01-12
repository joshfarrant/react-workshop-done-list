import { IPokemon } from 'pokeapi-typescript';

export const getPokemon = async (id: string): Promise<IPokemon> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const fetchedPokemon: IPokemon = await data.json();
    return fetchedPokemon;
};
