import Header from '../components/Header.js'
import Feature from '../components/Feature.js'
import ContentLanding from '../components/ContentLanding.js'
import MainFooter from '../components/MainFooter.js'
import lake from '../images/stock-lake.jpeg'

const Landing = () => {
  return (
    <div className="text-gray-600 body-font">
    <Header />
    <Feature image={lake} alt={'Boat stuff'}  />
    <ContentLanding />
    <MainFooter />
    </div>
  )
}

export default Landing