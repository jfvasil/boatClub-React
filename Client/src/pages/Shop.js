import Header from "../components/mainComponents/Header"
import MainFooter from "../components/mainComponents/MainFooter"
// import MultiProductDisplay from "../components/subComponents/MultiProductDisplay"
// import FormComonent from '../components/mainComponents/FormComponent'
import ComingSoon from "../components/mainComponents/ComingSoon"
const Shop = ({req}) => {
  return (
    <>
    <Header req={req} />
    <ComingSoon />
    {/* <MultiProductDisplay />
    <FormComonent /> */}
    <MainFooter />
    </>
  )
}

export default Shop