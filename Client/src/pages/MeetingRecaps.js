import RecapItem from "../components/RecapItem"
import CreateRecap from '../components/CreateRecap'
import Header from '../components/Header'
const MeetingRecaps = ({req}) => {
  return (
    <>
    <Header req={req} />
    <RecapItem />
    <CreateRecap />
    </>
  )
}

export default MeetingRecaps