import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../queries/Query.tsx';
import { UPDATE_POST } from '../queries/Query.tsx';


const GetPosts: React.FC = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
      {data.posts.data.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        data.posts.data.map(({ id, title, body }) => (
            <div key={id}>
            <h3>{title}</h3>
            <p>{body}</p> 
            </div> 
        )))
        } 
     </div>
    )
};

export default GetPosts;