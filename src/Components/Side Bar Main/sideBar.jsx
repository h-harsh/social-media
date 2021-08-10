import { Link } from 'react-router-dom'
import './sideBar.css'

export const SideBarMain = () => {
    return(
        <>
        <ul className="sideBar-comp">
            <li> <Link to="/">  <i class="fas fa-home"></i> Home </Link> </li>
            <li> <Link to="/timeline"> <i class="fas fa-stream"></i> Timeline </Link> </li>
            <li> <Link to="/followers"> <i class="fas fa-user-check"></i> Followers </Link> </li>
            <li> <Link to="/following"> <i class="fas fa-user-plus"></i>  Following </Link> </li>
            <li> <Link to="/allUsers"> <i class="fas fa-users"></i> Find Friend </Link> </li>
            <li> <Link to="/accountDetails"> <i class="fas fa-user-circle"></i> Account </Link> </li>
            <li> <Link to="/notifications"> <i class="fas fa-user-edit"></i> Notifications </Link> </li>
        </ul>
        </>
    )
}