import { ReactElement } from 'react';

import { StyledContainer, StyledImage } from './pokemon.styled';
import { TPokemon } from './pokemon.types';

export const Pokemon = ({ pokemon }: TPokemon): ReactElement => (
    <StyledContainer>
        <StyledImage src={pokemon.sprites.front_shiny} alt={pokemon.name} />
        <h3>Types</h3>
        <ul>
            {pokemon.types.map(({ type }) => (
                <li key={type.name}>{type.name}</li>
            ))}
        </ul>
    </StyledContainer>
);
