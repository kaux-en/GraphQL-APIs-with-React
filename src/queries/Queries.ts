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
query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
    name
  }
}
`