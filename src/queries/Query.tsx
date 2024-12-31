import { gql } from 'urql';

export const GET_POSTS = gql`
    query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
        id
      title
      body
    }
    meta {
      totalCount
    }
  }
}   
`

export const GET_USER_POST = gql`
    query {
  user(id: 1) {
    posts {
      data {
        id
        title
      }
    }
  }
}
`

export const CREATE_POST = gql`
mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`

export const UPDATE_POST = gql`
    mutation UpdatePost(
  $id: ID!,
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    title
    body
  }
}
`

export const DELETE_POST = gql`
    mutation (
  $id: ID!
) {
  deletePost(id: $id)
}
`