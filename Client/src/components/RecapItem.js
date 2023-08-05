import { useState, useEffect } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import newsAndRecapEmitter from '../eventEmitters/newsAndRecapEmitter'

const MeetingRecapItem = ({ recapId }) => {
  const [recaps, setRecaps] = useState([])
  const axiosPrivate = useAxiosPrivate()
  

    const fetchRecaps = async () => {
      try {
        const response = await axiosPrivate.get('/api/recaps')
      
          setRecaps(response.data);
        }
       catch (error) {
        console.error('Failed to fetch meeting recap:', error)
      }
    };

  useEffect(() => {
    fetchRecaps()

    const unsubscribe = newsAndRecapEmitter.subscribe(() => {
      fetchRecaps()
    })
    return () => {
      unsubscribe()
    }
  }, [])

  if (recaps.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
    {recaps.map((recap) => (
      <div key={recap._id}>
        <h2>{recap.title}</h2>
        <p>{recap.date}</p>
        <p>{recap.content}</p>
      </div>
    ))}
    </div>
  );
};

export default MeetingRecapItem
