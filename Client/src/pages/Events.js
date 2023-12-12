import Header from '../components/mainComponents/Header'
import MainFooter from '../components/mainComponents/MainFooter'

const Events = () => {
  return (
    <>
    <Header />
    <div className="container relative top-36 min-h-screen">
    <iframe title='calender' src="https://calendar.google.com/calendar/embed?src=lakewickaboagboatclub%40gmail.com&ctz=America%2FNew_York" width="800" height="600" frameborder="0"></iframe>    </div>
    <MainFooter />
    </>
  )
}

export default Events