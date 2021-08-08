import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {SignUpBox} from '../features/Auth/Signup/signupBox'

export const SignUp = () => {
    const state = useSelector(state => state.userData)
    const navigate = useNavigate()

    useEffect(() => {
        if(state.token){
            navigate("/")
        }
    }, [state])

    return(
        state.token  ? (
            <h1>Hii {state?.currentUser?.fullName} You are alreday looed in</h1>
        ):(
            <SignUpBox/>
        )
    )
}