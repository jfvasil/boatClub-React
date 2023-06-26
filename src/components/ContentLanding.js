import ContentSmall from "./ContentSmall"
import ContentTitle from "./ContentTitle"

const ContentLanding = () => {
  
    return(
  <div className="container px-5 py-24 mx-auto">
    <ContentTitle textH1={'Welcome to the lake Wickaboag Boat Club'} textP={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
    <ContentSmall 
    textH21={'Want some Boat Cub Drip??'} textP1={'Shop summer syles at our Merch Shop'}
    textH22={'Stay up to date!'}  textP2={'Come read our monthly newsletter!'}
    />
    </div>
     )
}

export default ContentLanding