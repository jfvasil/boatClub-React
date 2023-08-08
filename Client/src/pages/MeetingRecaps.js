import RecapItems from "../components/subComponents/RecapItems"
import CreatePost from '../components/utilityComponents/CreatePost'
import Header from '../components/mainComponents/Header'
import MainFooter from '../components/mainComponents/MainFooter'
import { useState } from "react"



 
  const MeetingRecaps = () => {

    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
      setShowForm(!showForm)
    }

  return (
    <>
    <Header />
    <RecapItems />
    <div>
    <button onClick={toggleForm}>Toggle Admin View</button>
    <CreatePost endpoint='recaps' showForm={showForm} toggleForm={toggleForm}  />
    </div>
    <MainFooter />
    </>
  )
}

export default MeetingRecaps