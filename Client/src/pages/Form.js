import Header from "../components/mainComponents/Header"
import FormComponent from "../components/mainComponents/FormComponent"
import ContactList from "../components/mainComponents/ContactList"
import MainFooter from "../components/mainComponents/MainFooter"

const Form = ({req}) => {
  return (
    <>
    <Header req={req} />
    <ContactList />
    <FormComponent />
    <MainFooter />
    </>
  )
}

export default Form