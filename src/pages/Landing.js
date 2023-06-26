import Header from '../components/Header.js'
import Feature from '../components/Feature.js'
import ContentLanding from '../components/ContentLanding.js'
import Footer from '../components/Footer.Js'
import lake from '../images/stock-lake.jpeg'

const Landing = () => {
  return (
    <div className="text-gray-600 body-font">
    <Header />
    <Feature image={lake} alt={'Boat stuff'}  />
    <ContentLanding />
   <Footer />
    </div>
  )
}

export default Landing