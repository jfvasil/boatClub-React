import React, { useState, useEffect } from 'react';

const MeetingRecapItem = ({ recapId }) => {
  const [recap, setRecap] = useState(null);

  useEffect(() => {
    const fetchRecap = async () => {
      try {
        const response = await fetch(`http://localhost:3000//api/recaps/${recapId}`);
        if (response.ok) {
          const data = await response.json();
          setRecap(data);
        } else {
          console.error('Failed to fetch meeting recap');
        }
      } catch (error) {
        console.error('Failed to fetch meeting recap:', error);
      }
    };

    fetchRecap();
  }, [recapId]);

  if (!recap) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recap.title}</h2>
      <p>Date: {recap.date}</p>
      <p>Content: {recap.content}</p>
    </div>
  );
};

export default MeetingRecapItem;
