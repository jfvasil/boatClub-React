import axios from "../../../api/axios"
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useMemo } from "react"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import RecoveryContext from "../../../context/RecoveryProvider"

export const PasswordReset = () => {

  const PWD_REGEX = useMemo(() => {

 return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

  }, [])

    const errRef = useRef()

    // const {email} = useContext(RecoveryContext)
    const email = localStorage.getItem('email') || ''

    const [codeInput, setCodeInput] = useState([0, 0, 0, 0])

    const [errMsg, setErrMsg] = useState('')

    const [disable, setDisable] = useState(true)

    const [timerCount, setTimer] = useState(60)

    const [newPassword, setNewPassword] = useState('')
    const [validNewPassword,setValidNewPassword ] = useState(false)
    const [newPasswordFocus, setNewPasswordFocus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('')
    const [validConfirmPassword, setValidConfirmPassword] = useState(false)
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);


  const [success, setSuccess] = useState(false)

  const verifyAndReset = async (e) => {
    e.preventDefault()
    
  
    const v1 = PWD_REGEX.test(newPassword)

    if(!v1){
      setErrMsg('Invalid Entry')
    }

    const code = parseInt(codeInput.join(''))
    try{
    const response = await axios.post('/recovery/reset',
    {code, newPassword},
    {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
    console.log(response)
    console.log('success')
    setSuccess(true)
    setNewPassword('')
    setConfirmPassword('')
    setCodeInput([0,0,0,0])
  } catch(error){
    if(!error?.response){
      setErrMsg('No server response')
    }else{
      setErrMsg('Invaild or Expired Code')
    }
  }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable])

  useEffect(() => {
    setErrMsg('')
}, [newPassword, confirmPassword])

useEffect(() => {
  setValidNewPassword(PWD_REGEX.test(newPassword))
  setValidConfirmPassword(newPassword === confirmPassword)
}, [newPassword, confirmPassword, PWD_REGEX])

  const generateCode = () => {
    return Math.floor(Math.random() * 9000 + 1000)
}


  const resendCode = async () => {
    

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
        
    
        
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else{
            setErrMsg('Invalid Email')
        }
        
    }
    console.log(code, expiration)
}



  return (
  <>
    {success ? (
      <div className="container flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-3 pb-2">Password Reset!</h1>
      <Link to='/login'>
      <p className="hover:underline text-blue-600 text-xl">Return to Login</p>
      </Link>
      </div>
    ) : (
    <div className="flex justify-center items-center w-screen h-screen  bg-gray-50">
      <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
      <p ref={errRef} className={errMsg ? "bg-red-100 text-red-400 p-1 mb-1" : "absolute top-[-9999px] left-[-9999px]"} aria-live="assertive">{errMsg}</p>
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Password Reset</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email. Enter it below </p>
            </div>
          </div>

          <div>
            <form>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="code-0"
                      id="code-0"
                      onChange={(e) =>
                        setCodeInput([
                          e.target.value,
                          codeInput[1],
                          codeInput[2],
                          codeInput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="code-1"
                      id="code-1"
                      onChange={(e) =>
                        setCodeInput([
                          codeInput[0],
                          e.target.value,
                          codeInput[2],
                          codeInput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="code-2"
                      id="code-2"
                      onChange={(e) =>
                        setCodeInput([
                          codeInput[0],
                          codeInput[1],
                          e.target.value,
                          codeInput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="code-3"
                      id="code-3"
                      onChange={(e) =>
                        setCodeInput([
                          codeInput[0],
                          codeInput[1],
                          codeInput[2],
                          e.target.value,
                        ])
                      }
                    ></input>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Change Password
            </h2>
            <form method='POST' className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={verifyAndReset}>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 d"
                >
                  New Password
                  <FontAwesomeIcon icon={faCheck} className={validNewPassword ? "text-green-200 ml-1" : "hidden"} />
                  <FontAwesomeIcon icon={faTimes} className={validNewPassword || !newPassword ? "hidden" : "text-red-300 ml-1"} />

                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={newPassword}
                  aria-invalid={validNewPassword ? "false" : "true"}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                  onFocus={() => setNewPasswordFocus(true)}
                  onBlur={() => setNewPasswordFocus(false)}

                ></input>
                    <p id="pwdnote" className={newPasswordFocus && !validNewPassword ? "relative text-sm rounded-lg bg-black text-white p-1 bottom-[-10px]" : "absolute top-[-9999px] left-[-9999px]"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>

              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                  <FontAwesomeIcon icon={faCheck} className={validConfirmPassword ? "text-green-200 ml-1" : "hidden"} />
                  <FontAwesomeIcon icon={faTimes} className={validConfirmPassword || !confirmPassword ? "hidden" : "text-red-300 ml-1"} />

                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  aria-invalid={validConfirmPassword ? "false" : "true"}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                  onFocus={() => setConfirmPasswordFocus(true)}
                  onBlur={() => setConfirmPasswordFocus(false)}
                ></input>
                <p id="confirmnote" className={confirmPasswordFocus && !validConfirmPassword ? "relative text-sm rounded-lg bg-black text-white p-1 bottom-[-10px]" : "absolute top-[-9999px] left-[-9999px]"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>

              </div>
           
            <div className="flex flex-col space-y-5">
                  <div>
                    <button
                    type='submit'
                      className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Reset Password
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{' '}
                    <button
                      className="flex flex-row items-center"
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                      }}
                      onClick={() => resendCode()}
                    >
                      {disable ? `Resend Code in ${timerCount}s` : "Resend Code"}
                    </button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    )}
</>    
  )
}
export default PasswordReset