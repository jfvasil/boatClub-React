import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import newsAndRecapEmitter from '../../eventEmitters/newsAndRecapEmitter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const NewsItems = (role) => {
  const [newsItems, setNewsItems] = useState([])
  const axiosPrivate = useAxiosPrivate()
  

    const fetchNewsItems = async () => {
      try {
        const response = await axiosPrivate.get('/api/news')
      
          setNewsItems(response.data);
        }
       catch (error) {
        console.error('Failed to fetch the news', error)
      }
    }

    const handleDelete = async (newsId) => {
      try{
        const response = await axiosPrivate.delete(`/api/news/${newsId}`)
        if(response.status === 204){
        

          newsAndRecapEmitter.emit('newsDeleted')
        }
      }catch (error) {
        console.error('Faliked to delete', error)
      }
   }

  useEffect(() => {
    fetchNewsItems()

    const unsubscribe = newsAndRecapEmitter.subscribe(() => {
      fetchNewsItems()
      
    })

    const unsubscribeDeleted = newsAndRecapEmitter.subscribe('newsDeleted', () => {
      fetchNewsItems()
    })

    
    return () => {
      unsubscribe()
      unsubscribeDeleted()
    }
  }, [])

  if (newsItems.length === 0) {
    return <div>Loading...</div>
  }




  return (
    <div className='space y-6'>
    {newsItems.map((item) => (
      <div key={item._id} className='p-4 bg-white rounded-lg shadow-md'>
        {role === 'admin' && ( 
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
             )} 
        <h2 className='text-xl font-bold mb-2"'>{item.title}</h2>
        <p className='italic text-gray-500 mb-2'>{item.date}</p>
        <p>{item.content}</p>
        <hr className='my-4 border-gray-300' />
      </div>
    ))}
    </div>
  )
};

export default NewsItems
