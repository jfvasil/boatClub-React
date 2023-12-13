import Header from '../components/mainComponents/Header'
import MainFooter from "../components/mainComponents/MainFooter"
import HeroWithMap from "../components/subComponents/HeroWithMap"
import HeroWithPic from "../components/subComponents/HeroWithPic"
import Gallery from "../components/subComponents/Gallery"
import oldLakePic from "../images/oldLakePic.jpeg"
const About = ({req}) => {
    let titleText = 'A Little On the History of the Club'
    let historyP = 'Originally called Wekabaug Pond, from the Nipmic Indian word meaning wet place or swamp, in 1890, Lake Wickaboag existed as Wickaboag Pond, somewhat smaller than the present lake. In the 1930s, the natural dam was replaced with a new construction, which raised the level of the lake and flooded more of the Wickaboag Valley swamp. The lake drains into the Quaboag River, which passes by to the south.'
    return (
    <>
        <Header req={req} />
        <HeroWithPic h1Text={titleText} pText={historyP} 
        alt={'Old boat club pic'} image={oldLakePic}/>
        <HeroWithMap />
        <Gallery />
        <MainFooter />
        </>
  )
}

export default About
