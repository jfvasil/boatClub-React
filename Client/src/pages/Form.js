import Header from "../components/Header"
import FormComponent from "../components/FormComponent"
import ContactList from "../components/ContactList"
import MainFooter from "../components/MainFooter"

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