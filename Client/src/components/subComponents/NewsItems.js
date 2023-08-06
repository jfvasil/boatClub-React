import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import newsAndRecapEmitter from '../../eventEmitters/newsAndRecapEmitter'

const NewsItems = () => {
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
    };

  useEffect(() => {
    fetchNewsItems()

    const unsubscribe = newsAndRecapEmitter.subscribe(() => {
      fetchNewsItems()
    })
    return () => {
      unsubscribe()
    }
  }, [])

  if (newsItems.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
    {newsItems.map((item) => (
      <div key={item._id}>
        <h2>{item.title}</h2>
        <p>{item.date}</p>
        <p>{item.content}</p>
      </div>
    ))}
    </div>
  );
};

export default NewsItems
