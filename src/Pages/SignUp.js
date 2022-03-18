import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import {SignUpBox} from '../features/Auth User/Signup/signupBox'
import { SignUpBox } from '../New Components'

export const SignUp = () => {
    const state = useSelector(state => state.userData)
    const navigate = useNavigate()

    useEffect(() => {
        if(state.token){
            navigate("/")
        }
    }, [state, navigate])

    return(
        state.token  ? (
            <h1>Hii {state?.currentUser?.fullName} You are alreday looed in</h1>
        ):(
            <div className="to-center login-outer" >
            <SignUpBox/>
            </div>
        )
    )
}