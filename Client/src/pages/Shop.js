import Header from "../components/mainComponents/Header"
import MainFooter from "../components/mainComponents/MainFooter"
import MultiProductDisplay from "../components/subComponents/MultiProductDisplay"
const Shop = ({req}) => {
  return (
    <>
    <Header req={req} />
    <MultiProductDisplay />
    <MainFooter />
    </>
  )
}

export default Shop