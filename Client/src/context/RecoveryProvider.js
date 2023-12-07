import { createContext, useState } from "react"

const RecoveryContext = createContext({})

export const RecoveryProvider = ({children}) => {
    
    const [email, setEmail] = useState('')

    const updateEmail = (newEmail) => {
        setEmail(newEmail)
    }

  return (
    <RecoveryContext.Provider
    value={{email,updateEmail}}>
        {children}
    </RecoveryContext.Provider>
  )
}

export default RecoveryContext