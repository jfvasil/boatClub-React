import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

  

const FormComponent = () => {

const [state, handleSubmit] = useForm("mzbqprjw")

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submited, setSubmited] = useState(false)

const handleFormSubmit = async (e) => {
    e.preventDefault()

   await handleSubmit(e)
    

  if(state.succeeded){
    setName('')
    setEmail('')
    setMessage('')
    setSubmited(true)
  }

}


  return (
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get in Touch with Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please fill out all fields below inlcuding a message. We will get back to you as soon as we can.</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <form onSubmit={handleFormSubmit}>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                  />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                  />

            </div>
          </div>
          <div className="p-2 w-screen md:w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                  />
              <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            {submited ? (
              <p className="text-green-500">Thank you for the message!</p>
              ) : (
            <button type='submit'disabled={state.submitting} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FormComponent