import ContentSmall from "./ContentSmall"
import ContentTitle from "./ContentTitle"

const ContentLanding = () => {
  
    return(
  <div className="container px-5 py-24 mx-auto">
    <ContentTitle textH1={'Welcome to the Lake Wickaboag Boat Club'} 
    textP={'Lake Wickaboag Boat Club is a private club, located on 42 Lakeview Ave. Offering memberships to enjoy the club all year long. Activities and amenities inludes live music, parades, private boat ramp, paviallion rental for your private events, childrens beach and swim area.'}
    textH3={'Located in the town of West Brookfield, Massachusetts'}
    />
    {/* <ContentSmall 
    textH21={'Want some Boat Cub Drip??'} textP1={'Shop summer syles at our Merch Shop'}
    textH22={'Stay up to date!'}  textP2={'Come read our monthly newsletter!'}
    /> */}
    </div>
     )
}

export default ContentLanding