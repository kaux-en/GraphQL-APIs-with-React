import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { GET_CHARACTERS_LOCATIONS } from '../queries/Queries';
import CharactersLocation from '../components/CharacterLocation';


const mock: MockedResponse[] = [
    {
        request: {
            query: GET_CHARACTERS_LOCATIONS,
            variables: { name: 'Rick'},
        },
        result: {
            data: {
                characters: {
                    results: [
                        {
                            id: 1,
                                name: 'Rick',
                            
                        },
                    ],
                    info: {
                       count: 1, 
                    },
                },
                location: {
                    id: '1',
                    name: 'Test Location',
                }
            },
        },
    },
];

describe('Character Location Component', () => {
    it('renders the characters location name', async () => {
        render(
            <MockedProvider mocks={mock} addTypename={false}>
                
                <CharactersLocation />
            </MockedProvider>
        );

        await waitFor(() => screen.getByText('Rick'));
        await waitFor(() => screen.getByText('Test Location'));

        expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
        expect(screen.getByText('Test Location')).toBeInTheDocument();
    })
});