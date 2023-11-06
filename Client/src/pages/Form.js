import Header from "../components/mainComponents/Header"
import FormComponent from "../components/mainComponents/FormComponent"
import ContactList from "../components/mainComponents/ContactList"
import MainFooter from "../components/mainComponents/MainFooter"
import ApplicationDownload from "../components/subComponents/ApplicationDownload"

const Form = ({req}) => {
  return (
    <>
    <Header req={req} />
    <ContactList />
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <FormComponent />
        <ApplicationDownload />
    </div>
      </div>
    <MainFooter />
    </>
  )
}

export default Form