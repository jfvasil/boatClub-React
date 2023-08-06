import Header from '../components/mainComponents/Header'
import Feature from '../components/subComponents/Feature'
import ContentLanding from '../components/mainComponents/ContentLanding'
import MainFooter from '../components/mainComponents/MainFooter'
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