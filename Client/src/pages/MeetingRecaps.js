import RecapItems from "../components/subComponents/RecapItems"
import CreatePost from '../components/utilityComponents/CreatePost'
import Header from '../components/mainComponents/Header'
import MainFooter from '../components/mainComponents/MainFooter'
import { useState } from "react"
import useAuth from "../hooks/useAuth"



 
  const MeetingRecaps = () => {

    const {auth} = useAuth()
    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
      setShowForm(!showForm)
    }

  return (
    <>
    <Header />
    <RecapItems role={auth.role} />
    {auth.role === 'admin' && (
    <div>
    <button onClick={toggleForm}>Toggle Admin View</button>
    <CreatePost endpoint='recaps' showForm={showForm} toggleForm={toggleForm}  />
    </div>
    )}
    <MainFooter />
    </>
  )
}

export default MeetingRecaps