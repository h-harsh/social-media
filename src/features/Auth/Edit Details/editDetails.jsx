import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { userEdit } from "../authSlice";

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
        <>
        <div style={{display:'flex', flexDirection:'column'}}>
        <h1>Hii</h1>
        <label htmlFor="">
            FullName
            <input type="text" value={updatedDetail.fullName} 
            onChange={(e) => setUpdatedDetail({...updatedDetail, fullName:e.target.value})} />
        </label>
        <label htmlFor="">
            Username
            <input type="text" value={updatedDetail.userName}
            onChange={(e) => setUpdatedDetail({...updatedDetail, userName:e.target.value})} />
        </label>
        <label htmlFor="">
            Email
            <input type="text" value={updatedDetail.email}
            onChange={(e) => setUpdatedDetail({...updatedDetail, email:e.target.value})} />
        </label>
        <label htmlFor="">
            Bio
            <input type="text" value={updatedDetail.bio}
            onChange={(e) => setUpdatedDetail({...updatedDetail, bio:e.target.value})} />
        </label>
        <label htmlFor="">
            Gender
            <input type="text" value={updatedDetail.gender}
            onChange={(e) => setUpdatedDetail({...updatedDetail, gender:e.target.value})} />
        </label>
        <label htmlFor="">
            DOB
            <input type="text" value={updatedDetail.dob}
            onChange={(e) => setUpdatedDetail({...updatedDetail, dob:e.target.value})} />
        </label>
        {/* <label htmlFor="">
            FullName
            <input type="password" value={user.password} />
        </label> */}
        
        </div>
        <button onClick={() => dispatch(userEdit(updatedDetail))} >Save cHnages</button>
        </>
    )
}