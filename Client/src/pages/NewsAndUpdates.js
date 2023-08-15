import { useState } from "react"
import Header from "../components/mainComponents/Header"
import MainFooter from "../components/mainComponents/MainFooter"
import CreatePost from "../components/utilityComponents/CreatePost"
import NewsItems from "../components/subComponents/NewsItems"
import useAuth from "../hooks/useAuth"



const NewsAndUpdates = () => {

  const {auth} = useAuth()

  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>
    <Header />
    <NewsItems role={auth.role} />
    {auth.role === 'admin' && (
    <div>
    <button onClick={toggleForm}>Toggle Admin View</button>
    <CreatePost endpoint='news' showForm={showForm} toggleForm={toggleForm}/>
    </div>
      )}
    <MainFooter />
    </>
  )
}

export default NewsAndUpdates