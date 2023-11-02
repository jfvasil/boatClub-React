import {useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from '../../api/axios'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const SIGNUP_URL = '/signup'


const SignUpForm = () => {
const userRef = useRef()
const errRef = useRef()

const [name, setName] = useState('')
// const [nameFocus, setNameFocus] = useState(false)

const [email, setEmail] = useState('');
const [validEmail, setValidEmail] = useState(false);
const [emailFocus, setEmailFocus] = useState(false);

const [password, setPwd] = useState('');
const [validPwd, setValidPwd] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);

const [matchPwd, setMatchPwd] = useState('');
const [validMatch, setValidMatch] = useState(false);
const [matchFocus, setMatchFocus] = useState(false);

const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false)

useEffect (() => {
userRef.current.focus()

}, [])

useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
}, [email])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(password))
    setValidMatch(password === matchPwd)
}, [password, matchPwd])

useEffect(() => {
    setErrMsg('')
}, [email,password, matchPwd])

const handleSubmit = async (e) => {
    e.preventDefault()

    const v1 = EMAIL_REGEX.test(email)
    const v2 = PWD_REGEX.test(password)

    if(!v1 || !v2){
        setErrMsg('Invalid Entry')
        return
    }
    try{
        const res = await axios.post(SIGNUP_URL, 
            JSON.stringify({name, email, password}),
           {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
           } )
           console.log(JSON.stringify(res?.data))
           setSuccess(true)
           setEmail('')
           setPwd('')
           setMatchPwd('')
           setName('')
    } catch (err) {
        if(!err?.res){
            setErrMsg('No Server Response')
        } else if(err.res?.status === 409){
            setErrMsg('Email Taken')
        }else{
            setErrMsg('Sign up failed')
        }
        errRef.current.focus()
    }

}

  return (
    <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <Link to='/login'>Sign In</Link> 
                </p>
            </section>
        ) : (
            <section className='container mx-center bg-gray-100 font-serif '>
            <p ref={errRef} className={errMsg ? "bg-red-100 text-red-400 p-1 mb-1" : "absolute top-[-9999px] left-[-9999px]"} aria-live="assertive">{errMsg}</p>
            <h1>Sign Up</h1>
            <form className='flex flex-col justify-evenly flex-grow pb-1 ' onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    // onFocus={() => setNameFocus(true)}
                    // onBlur={() => setNameFocus(false)}
                />

                <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "text-green-200 ml-1" : "hidden"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hidden" : "text-red-300 ml-1"} />
                        </label>
                        <input
                            type="text"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && email && !validEmail ? "relative text-sm rounded-lg bg-black text-white p-1 bottom-[-10px]" : "absolute top-[-9999px] left-[-9999px]"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>



                <label htmlFor="password">
                    Password:
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "text-green-200 ml-1" : "hidden"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hidden" : "text-red-300 ml-1"} />
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "relative text-sm rounded-lg bg-black text-white p-1 bottom-[-10px]" : "absolute top-[-9999px] left-[-9999px]"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>


                <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "text-green-200 ml-1" : "hidden"} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hidden" : "text-red-300 ml-1"} />
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "relative text-sm rounded-lg bg-black text-white p-1 bottom-[-10px]" : "absolute top-[-9999px] left-[-9999px]"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>

                <button disabled={!validEmail || !validPwd || !validMatch ? true : false}>Sign Up</button>
            </form>
            <p>
                Already singed up?<br />
                <span className="inline-block">
                    <Link to="/">Sign In</Link>
                </span>
            </p>
        </section>
        )}
    </>
  )
}

export default SignUpForm