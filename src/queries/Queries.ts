import { gql } from "urql";

//urql, sets up a gql..the gql turns the query into a javascript object so that urql can understand it..?
export const GET_CHARACTERS = gql` 
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

// ! = required.. $id = id that we're looking for
export const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            id
            name
            image
            episode {
                name
                episode
            }        
        }
    }
`;


export const GET_CHARACTERS_LOCATIONS = gql`
requests: {
            query: GET_CHARACTERS_LOCATIONS,
            variables: { name: 'test'},
        },
        result: {
            data: {
                characters: {
                    results: [
                        {
                            id: 1,
                            location: {
                                name: 'Test Location',
                            }
                        }
                    ]
                }
            }
        }
    }
]
`