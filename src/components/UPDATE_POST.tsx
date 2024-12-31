import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_POST, GET_POSTS } from '../queries/Query.tsx';

interface UpdatePostValue {
    title: string
    body: string
}

const UpdatePost: React.FC = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_POSTS, { variables: { id }})
    const [ updatePost, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_POST);
    const [formData, setFormData] = useState<UpdatePostValue>({
        title: '',
        body: ''
    })

    React.useEffect(() => {
        if (data) {
          setFormData({
            title: data.post.data.title,
            body: data.post.data.body,
          });
        }
      }, [data]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        updatePost({
            variables: { id, input: formData }
        })
    } catch (error) {
        console.log('Error:', error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      if (loading) return <p>Loading post...</p>;
      if (error) return <p>Error: {error.message}</p>;


      return (
        <div>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="id">Id</label>
          <input
            type="number"
            id="id"
            name="id"
            value={id}
            onChange={handleChange}
            required
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={updateLoading}>
          {updateLoading ? 'Updating Post...' : 'Update Post'}
        </button>
      </form>

      {data && (
        <div>
          <h3>Post Updated</h3>
          <p>Title: {data.updatePost.title}</p>
          <p>Body: {data.updatePost.body}</p>
        </div>
      )}

      </div>
      )
};

export default UpdatePost;