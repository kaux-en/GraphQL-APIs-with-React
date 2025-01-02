import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries/Queries';


const CharactersPage: React.FC = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: </p>;

    return data.characters.results.map(({ id, name, image }: any) => (
        <div key={id}>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    ))
};

export default CharactersPage;