import { useRef, useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/mainComponents/Header'
import MainFooter from '../components/mainComponents/MainFooter'

import axios from '../api/axios'
const LOGIN_URL = '/auth/login'

const Login = () => {
    const { setAuth, persist, setPersist } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data))
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const role = response?.data?.role;
            setAuth({ email, role, accessToken })
            setEmail('')
            setPwd('')
            navigate(from, { replace: true })
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Incorrect Email or password')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus()
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev)
    }

        useEffect(() => {
            localStorage.setItem("persist", persist)
        }, [persist])

    return (
        <>
        <Header />
        <section className='flex flex-col items-center justify-center h-screen'>
            <p ref={errRef} className={errMsg ? "text-red-500" : "hidden"} aria-live="assertive">{errMsg}</p>
            <h1 className='text-2xl font-medium mb-4'>Sign In</h1>
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

                <label htmlFor="password" className='block mb-2'>Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    required
                    className='w-full py-2 px-3 mb-2 border rounded focus:outline-none focus:border-indigo-500'
                />
                <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'>Sign In</button>
                <div className='text-md mt-2'>
                    <input
                    className='mt-0 mr-2 ml-2 mb-2 align-middle'
                    type='checkbox'
                    id='persist'
                    onChange={togglePersist}
                    checked={persist} />
                    <label htmlFor="persist">Trust This Device</label>
                </div>
            </form>
            <div className='flex flex-col items-center ml-6 mt-2'>
            <Link to='/reset-email-entry'>
            <p className='text-gray-600 hover:underline align-middle'>Forgot Password?</p>
            </Link>
            </div>
            <p className='mt-4 ml-6'>
                Need an Account?<br />
                <span>
                    <Link to="/signup" className='text-blue-500 hover:underline'>Sign Up</Link>
                </span>
            </p>
        </section>
        <MainFooter />
</>
    )
}

export default Login