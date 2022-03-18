import { AllUsersListSideBar } from '../../features/Other Users/All users list/allUsersList'
import './rightSideBar.css'

export const RSideBar = () => {
    return(
        <div style={{position:'fixed', overflow:'scroll'}}>
        <AllUsersListSideBar/>
        </div>
    )
}