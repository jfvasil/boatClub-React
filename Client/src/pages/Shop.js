import Header from "../components/mainComponents/Header"
import MainFooter from "../components/mainComponents/MainFooter"
import MultiProductDisplay from "../components/subComponents/MultiProductDisplay"
import FormComonent from '../components/mainComponents/FormComponent'
const Shop = ({req}) => {
  return (
    <>
    <Header req={req} />
    <MultiProductDisplay />
    <FormComonent />
    <MainFooter />
    </>
  )
}

export default Shop