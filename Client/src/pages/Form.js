import Header from "../components/mainComponents/Header"
import FormComponent from "../components/mainComponents/FormComponent"
import ContactList from "../components/mainComponents/ContactList"
import MainFooter from "../components/mainComponents/MainFooter"
import Download from "../components/subComponents/Download"
import application from '../images/boat-club-application.pdf'

const Form = ({req}) => {
  return (
    <>
    <Header req={req} />
    <ContactList />
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <FormComponent />
        <Download file={application} 
        text={'Looking for an application to join?'} />
    </div>
      </div>
    <MainFooter />
    </>
  )
}

export default Form