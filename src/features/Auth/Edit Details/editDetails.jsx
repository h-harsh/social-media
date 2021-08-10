import './editDetails.css'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userEdit } from "../authSlice";
import {Button} from 'antd'

export const EditDetails = () => {
    const user = useSelector(state => state.userData.currentUser)
    const [updatedDetail, setUpdatedDetail] = useState({
        fullName:user.fullName,
        userName:user.userName,
        email:user.email,
        bio:user.bio,
        gender:user.gender,
        dob:user.dob
    })
    const dispatch = useDispatch()
   console.log(user)

    return(
        <div className="acc-mang-outer">
            <h1>Edit Account Details</h1>
        <div className="acc-mang-p1">
            <div className="innzer"  >
           <p> FullName</p> 
            <input type="text" placeholder={updatedDetail.fullName} 
            onChange={(e) => setUpdatedDetail({...updatedDetail, fullName:e.target.value})} />
            </div>
            <div className="innzer" >
           <p> Username</p> 
            <input type="text" placeholder={updatedDetail.userName}
            onChange={(e) => setUpdatedDetail({...updatedDetail, userName:e.target.value})} />
            </div>
            <div className="innzer" >
           <p> Email</p> 
            <input type="text" placeholder={updatedDetail.email}
            onChange={(e) => setUpdatedDetail({...updatedDetail, email:e.target.value})} />
            </div>
            <div className="innzer" >
           <p> Bio</p> 
            <input type="text" placeholder={updatedDetail.bio}
            onChange={(e) => setUpdatedDetail({...updatedDetail, bio:e.target.value})} />
            </div>
            <div className="innzer" >
           <p> Gender</p> 
            <input type="text" placeholder={updatedDetail.gender}
            onChange={(e) => setUpdatedDetail({...updatedDetail, gender:e.target.value})} />
            </div>
            <div className="innzer" >
           <p> DOB</p> 
            <input type="text" placeholder={updatedDetail.dob}
            onChange={(e) => setUpdatedDetail({...updatedDetail, dob:e.target.value})} />
            </div>
        
        </div>
        <Button size="large" onClick={() => dispatch(userEdit(updatedDetail))} >Save Changes</Button>
        </div>
    )
}