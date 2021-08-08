import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {clearData} from '../../features/Auth/authSlice'

export const NavBar = () => {
    const state = useSelector((state) => state.userData)
    const dispatch = useDispatch()

    return(
        <>
        <Link to="/"> Home </Link> ||
        <Link to="/login"> Login </Link> ||
        <Link to="/signup"> Signup </Link> ||
        <Link to="/feed"> Feed </Link> ||
        <Link to="/timeline"> Timeline </Link> ||
        <Link to="/followers"> Followers </Link> ||
        <Link to="/following"> Following </Link> ||
        <Link to="/allUsers"> All Users </Link> ||
        <Link to="/accountDetails"> Account edit </Link> ||
        <Link to="/notifications"> Notifications </Link> ||

        <button 
        onClick={() => dispatch(clearData())}
        > Logout </button>
         
        </>
    )
}