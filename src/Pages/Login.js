import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginBox } from '../features/Auth User/Login/loginBox'
import { useEffect } from 'react'


export const Login = () => {
    const token = useSelector((state) => state.userData.token)
    const navigate = useNavigate()
    

useEffect(() => {
  if(!token){
      navigate("/login")
  }else {
      navigate("/")
  }
}, [token, navigate]) 
    return(
        token  ? (
            null 
        ):(
            <div className="to-center login-outer" >
            <LoginBox/>
            </div>
        )
    )
}