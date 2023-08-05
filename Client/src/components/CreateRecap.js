import { useState} from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import newsAndRecapEmitter from '../eventEmitters/newsAndRecapEmitter'

const CreateRecap = ({endpoint, onRecapCreated}) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [content, setContent] = useState('')

  const axiosPrivate = useAxiosPrivate()




  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const recapData = { title, date, content }

    try {
      const response = await axiosPrivate.post(`/api/${endpoint}`,recapData)

      console.log('Recap created!')
        console.log(response.data)
        newsAndRecapEmitter.emit()
        setTitle('')
        setDate('')
        setContent('')
       
      
    } catch (error) {
      console.error(error)
    }
  }
 


  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Date:
        </label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateRecap





