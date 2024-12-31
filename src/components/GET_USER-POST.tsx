import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_USER_POST } from '../queries/Query.tsx';


const GetUserPosts: React.FC = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_USER_POST, { variables: {id}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
      {data.user.posts.data.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        data.user.posts.data.map(({ id, title }) => (
            <div key={id}>
                <p>{id}</p>
                <p>{title}</p> 
            </div> 
        )))
        } 
     </div>
    )
};

export default GetUserPosts;