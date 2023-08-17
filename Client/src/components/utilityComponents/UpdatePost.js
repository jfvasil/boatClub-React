import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import newsAndRecapEmitter from '../../eventEmitters/newsAndRecapEmitter'


const UpdatePost = ({title,date,content,endpoint, post}) => {

    const axiosPrivate = useAxiosPrivate()

    const handleUpdate = async () => {
        const updateData = {title, date, content}

        try{
            const response = await axiosPrivate.put(`/api/${endpoint}/${post._id}`)
            console.log('post updated!')
            newsAndRecapEmitter.emit()
        }
        
    }


  return (
    <div></div>
  )
}


export default UpdatePost