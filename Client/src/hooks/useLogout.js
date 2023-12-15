import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const {setAuth, setPersist, persist, auth} = useAuth()

    const logout = async () => {
        setAuth({})
        persist && setPersist(false)
        try{
            const response = await axios.post('/auth/logout', {
                withCredentials: true,
            })
            console.log(response, auth, persist)
        } catch(err){
            console.error(err)
        }
    }
    return logout
}

export default useLogout