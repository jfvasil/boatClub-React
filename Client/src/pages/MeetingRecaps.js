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
    <section className="relative top-44 min-h-screen text-gray-600">
    <div>
      <div className="flex flex-col justify-center items-center leading-10">
      <h1 className="font-bold text-3xl ">Meeting Recaps</h1>
      <h4>Below you will find a summary of the most recent Club meetings</h4>
      </div>
    <RecapItems role={auth.role} />
    </div>
    {auth.role === 'admin' && (
    <div>
    <button className="bg-blue-400 text-xl text-white rounded-sm font-semibold  px-3 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300" 
    onClick={toggleForm}>Toggle Admin View</button>
    <CreatePost endpoint='recaps' showForm={showForm} toggleForm={toggleForm}  />
    </div>
    )}
    </section>
    <MainFooter />
    </>
  )
}

export default MeetingRecaps