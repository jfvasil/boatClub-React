import Header from '../components/Header.js'
import Feature from '../components/Feature.js'
import ContentLanding from '../components/ContentLanding.js'
import MainFooter from '../components/MainFooter.js'
import lake from '../images/BoatClubPavillion.jpg'

const Landing = ({req}) => {
  return (
    <div className="text-gray-600 body-font">
    <Header req={req} />
    <Feature image={lake} alt={'Clubhouse Picture'}  />
    <ContentLanding />
    <MainFooter />
    </div>
  )
}

export default Landing