import Header from "../components/mainComponents/Header"
import MainFooter from "../components/mainComponents/MainFooter"
import CreatePost from "../components/utilityComponents/CreatePost"
import NewsItems from "../components/subComponents/NewsItems"


const NewsAndUpdates = () => {
  return (
    <>
    <Header />
    <NewsItems />
    <CreatePost endpoint='news' />
    <MainFooter />
    </>
  )
}

export default NewsAndUpdates