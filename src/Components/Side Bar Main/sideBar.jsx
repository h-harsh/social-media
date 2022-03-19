import { Link } from 'react-router-dom'
import './sideBar.css'

export const SideBarMain = () => {
    return(
        <div style={{position:'fixed', overflow:'scroll'}}>
        <ul className="sideBar-comp ">
            <li> <Link to="/">  <i className="fas fa-home side-bar-icon"></i> Home </Link> </li>
            <li> <Link to="/timeline"> <i className="fas fa-stream side-bar-icon"></i> Timeline </Link> </li>
            <li> <Link to="/followers"> <i className="fas fa-user-check side-bar-icon"></i> Followers </Link> </li>
            <li> <Link to="/following"> <i className="fas fa-user-plus side-bar-icon"></i>  Following </Link> </li>
            <li> <Link to="/allUsers"> <i className="fas fa-users side-bar-icon"></i> Find Friend </Link> </li>
            <li> <Link to="/accountDetails"> <i className="fas fa-user-circle side-bar-icon"></i> Account </Link> </li>
            <li> <Link to="/notifications"> <i className="fas fa-user-edit side-bar-icon"></i> Notifications </Link> </li>
        </ul>
        </div>
    )
}