import Header from "../components/Header"
import MainFooter from "../components/MainFooter"
import MultiProductDisplay from "../components/MultiProductDisplay"
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