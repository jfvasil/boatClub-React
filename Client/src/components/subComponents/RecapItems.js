import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import newsAndRecapEmitter from '../../eventEmitters/newsAndRecapEmitter'

const RecapItems = () => {
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
    <div className='space y-6'>
    {recaps.map((recap) => (
      <div key={recap._id} className='p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-xl font-bold mb-2"'>{recap.title}</h2>
        <p className='italic text-gray-500 mb-2'>{recap.date}</p>
        <p>{recap.content}</p>
        <hr className='my-4 border-gray-300' />
      </div>
    ))}
    </div>
  )
}

export default RecapItems
