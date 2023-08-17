import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import newsAndRecapEmitter from '../../eventEmitters/newsAndRecapEmitter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const RecapItems = ({role}) => {
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
    }

    const handleDelete = async (recapId) => {
      try{
        const response = await axiosPrivate.delete(`/api/recaps/${recapId}`)
       
          // newsAndRecapEmitter.emit('recapDeleted')
          fetchRecaps()
        
      }catch (error) {
        console.error('Failed to delete', error)
      }
   }

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
         {role === 'admin' && ( 
              <button
                onClick={() => handleDelete(recap._id)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
             )} 
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
