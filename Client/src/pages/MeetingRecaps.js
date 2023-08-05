import RecapItem from "../components/RecapItem"
import CreateRecap from '../components/CreateRecap'
import Header from '../components/Header'




 
  const MeetingRecaps = () => {


  return (
    <>
    <Header />
    <RecapItem  />
    <CreateRecap endpoint='recaps'  />
    </>
  )
}

export default MeetingRecaps