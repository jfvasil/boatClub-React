import { useState } from 'react';
import axios from '../api/axios';

const CreateRecap = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const recapData = { title, date, content };

    try {
      const response = await axios.post('/api/recaps');

      if (response.ok) {
        // Recap created successfully
        console.log('Recap created!');
        // Reset the form fields
        setTitle('');
        setDate('');
        setContent('');
      } else {
        // Error creating recap
        console.error('Failed to create recap');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateRecap;
