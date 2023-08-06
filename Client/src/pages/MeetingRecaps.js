import RecapItems from "../components/subComponents/RecapItems"
import CreatePost from '../components/utilityComponents/CreatePost'
import Header from '../components/mainComponents/Header'
import MainFooter from '../components/mainComponents/MainFooter'



 
  const MeetingRecaps = () => {


  return (
    <>
    <Header />
    <RecapItems />
    <CreatePost endpoint='recaps'  />
    <MainFooter />
    </>
  )
}

export default MeetingRecaps