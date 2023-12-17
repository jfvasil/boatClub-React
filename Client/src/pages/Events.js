import Header from '../components/mainComponents/Header';
import MainFooter from '../components/mainComponents/MainFooter';

const Events = () => {
  return (
    <>
      <Header />
      <section className=' text-gray-700'>
        <div className="relative top-24 md:top-36 min-h-screen flex flex-col items-center">
          <div>
            <h1 className='text-2xl font-semibold pb-8'>Upcoming Events</h1>
          </div>
          <div className='w-full mx-auto'>
            <iframe
              className='w-full'
              height='660'
              title='calendar'
              src="https://calendar.google.com/calendar/embed?src=lakewickaboagboatclub%40gmail.com&ctz=America%2FNew_York"
            ></iframe>
          </div>
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default Events;
