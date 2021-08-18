import './notifComp.css'
import { useDispatch, useSelector } from "react-redux";
import { clearNotif } from "../authSlice";
import {Button} from 'antd'

export const NotificationComp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userData);

  return (
    <div className="notification-box-outer">
    <Button size="large" onClick={() => dispatch(clearNotif("clear"))}>Clear all</Button>
      {state.currentUser.notifications.map((item) => {
        return (
          <div className="notification-box">
            <p>{item}</p>
          </div>
        );
      })}
      
    </div>
  );
};
