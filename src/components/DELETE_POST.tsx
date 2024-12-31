import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../queries/Query.tsx'; 
import { useParams, useNavigate } from 'react-router-dom';


const DeletePost: React.FC = async () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [deletePost, { loading, error }] = useMutation(DELETE_POST);

    const handleDelete = async () => {
        try {
            await deletePost({
            variables: { id },
            });
        
            navigate('/');
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
  
    return (
      <div>
        <h2>Delete Post</h2>
        <button onClick={handleDelete} disabled={loading}>
          {loading ? 'Deleting Post...' : 'Delete Post'}
        </button>
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </div>
    );
};

export default DeletePost;