import Header from '../components/mainComponents/Header'
import MainFooter from "../components/mainComponents/MainFooter"
import HeroWithMap from "../components/subComponents/HeroWithMap"
import HeroWithPic from "../components/subComponents/HeroWithPic"
import Gallery from "../components/subComponents/Gallery"
import oldLakePic from "../images/oldLakePic.jpeg"
const About = ({req}) => {
    let titleText = 'A little about the history of the club'
    let historyP = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Viverra nam libero justo laoreet. Urna et pharetra pharetra massa massa. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Orci nulla pellentesque dignissim enim sit amet venenatis. Duis at tellus at urna condimentum. Vitae purus faucibus ornare suspendisse. Nunc eget lorem dolor sed viverra. Cras tincidunt lobortis feugiat vivamus at. Dignissim cras tincidunt lobortis feugiat vivamus. Viverra orci sagittis eu volutpat odio. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Sed augue lacus viverra vitae congue eu. Netus et malesuada fames ac turpis egestas sed. Scelerisque viverra mauris in aliquam sem fringilla ut. Luctus accumsan tortor posuere ac ut consequat semper viverra. Ut aliquam purus sit amet luctus venenatis lectus.     Urna molestie at elementum eu facilisis sed. Aliquam vestibulum morbi blandit cursus risus at ultrices. Faucibus scelerisque eleifend donec pretium. Tellus molestie nunc non blandit. Ac tortor vitae purus faucibus ornare suspendisse sed. Aliquet enim tortor at auctor urna nunc. Id cursus metus aliquam eleifend mi in. Neque viverra justo nec ultrices dui. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Auctor augue mauris augue neque gravida in fermentum et. Ornare lectus sit amet est placerat in egestas erat. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Tincidunt praesent semper feugiat nibh sed pulvinar. Libero justo laoreet sit amet cursus sit amet dictum sit.Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Adipiscing elit pellentesque habitant morbi tristique senectus et. Sagittis aliquam malesuada bibendum arcu vitae. Risus nec feugiat in fermentum posuere urna nec tincidunt. Diam sollicitudin tempor id eu nisl nunc. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Gravida cum sociis natoque penatibus et. Molestie a iaculis at erat pellentesque. Et odio pellentesque diam volutpat. Viverra nam libero justo laoreet sit amet. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Egestas sed sed risus pretium quam. Risus nec feugiat in fermentum posuere. Accumsan lacus vel facilisis volutpat est velit egestas."

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
