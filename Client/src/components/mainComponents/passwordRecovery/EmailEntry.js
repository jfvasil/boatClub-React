import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useRef, useEffect} from 'react'
import axios from '../../../api/axios'
// import RecoveryContext from "../../../context/RecoveryProvider"

const EmailEntry = () => {



    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/reset-password"

    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [errMsg, setErrMsg] = useState('')
   


    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email])

    const generateCode = () => {
        return Math.floor(Math.random() * 9000 + 1000)
    }

    useEffect(() => {

        localStorage.setItem('email', email)
    },[email])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const code = generateCode().toString()
       

        const expiration = new Date()
        expiration.setMinutes(expiration.getMinutes() + 30)
      

        try {
            const response = await axios.post('/recovery/code',
                { email,code,expiration},
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data))
            setEmail('')
           
            
        
            navigate(from, { replace: true })
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else{
                setErrMsg('Invalid Email')
            }
            errRef.current.focus()
        }
        console.log(code, expiration)
    }



  return (
    <section className='flex flex-col items-center justify-center h-screen'>
    <p ref={errRef} className={errMsg ? "text-red-500" : "hidden"} aria-live="assertive">{errMsg}</p>
    <h1 className='text-2xl font-medium mb-4'>Enter the Email You Used To Sign Up</h1>
    <form onSubmit={handleSubmit} className='text-center'>
        <label htmlFor="email" className='block mb-2'>Email:</label>
        <input
            type="text"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
    
            className ='w-full py-2 px-3 mb-2 border rounded focus:outline-none focus:border-indigo-500'
        />
             <button
             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline">
            Get Code
            </button>

    </form>
    <div className='containe mt-4 text-lg'>
    <h4>A 4 digit code will be sent to your email.</h4>
    </div>
    </section>
  )
}

export default EmailEntry