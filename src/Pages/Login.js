import { useSelector } from 'react-redux'
import { LoginBox } from '../features/Auth/Login/loginBox'


export const Login = () => {
    const state = useSelector((state) => state.userData)
console.log(state)

    return(
        state.token  ? (
            <h1>Hii {state?.currentUser?.fullName}</h1>
        ):(
            <LoginBox/>
        )
    )
}