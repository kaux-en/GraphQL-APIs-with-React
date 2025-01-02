import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_LOCATIONS } from '../queries/Queries';


const CharactersLocation: React.FC = () => {
    const { name } = useParams<string>();
    const { loading, error, data } = useQuery(GET_CHARACTERS_LOCATIONS, { variables: { name: 'rick' } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (!data) return <p>No data available</p>;

    return (    
        <div>
            <h2>Character Name</h2>
            {data.characters.results.location.map(({ name }: any) => (
            <div key={name}>
                <p>{name}</p>
            </div>
        ))}

            <h2>Character Location</h2>
            <div key={data.location.id}>
                {data.location.name}
            </div>
        </div>
    )
};

export default CharactersLocation;