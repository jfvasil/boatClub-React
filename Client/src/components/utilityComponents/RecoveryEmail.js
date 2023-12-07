import { Outlet } from "react-router-dom"
import RecoveryProvider from "../../context/RecoveryProvider"

const RecoveryEmail = () => {


  return (
    <RecoveryProvider>
    <Outlet />
    </RecoveryProvider>
  )
}

export default RecoveryEmail