import {useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth'
import useRefreshToken from '../../hooks/useRefreshToken'
import {Outlet} from 'react-router-dom'

const PersistLogin = () => {
    const [isLoading,setIsLoading] = useState(true)
    const refresh = useRefreshToken()
    const {auth, persist} = useAuth()

    useEffect(() => {
        let isMounted = true
        console.log('Component Mounted')
        const verifyRefreshToken = async () => {
            try{
                await refresh()
            }
            catch (err) {
                console.log(err)
            }
            finally{
                isMounted && setIsLoading(false)
                console.log('Component unMounted')
            }
        }

        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)
        
        return () => isMounted = false
    }, [auth?.accessToken, persist, refresh])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth.accessToken)}`)
    })


    return(
        <>
        {!persist ?
                <Outlet />
            : isLoading ? 
                <p className='flex justify-center items-center min-h-screen text-4xl'>
                <span class="loading loading-spinner loading-lg px-6"></span>
                    Loading...</p> : 
                <Outlet />}
        </>
    )
}

export default PersistLogin