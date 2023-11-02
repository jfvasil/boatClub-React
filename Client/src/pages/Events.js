import Header from '../components/mainComponents/Header'
import MainFooter from '../components/mainComponents/MainFooter'

const Events = () => {
  return (
    <>
    <Header />
    <div className="container">
      <iframe title='calender' src="https://calendar.google.com/calendar/embed?src=387de9669bc6adc9a5903bedd15ac36b116d5b868509f8b309dd621bb0eb3a8b%40group.calendar.google.com&ctz=America%2FNew_York"  width="800" height="600" frameborder="0"></iframe>
    </div>
    <MainFooter />
    </>
  )
}

export default Events