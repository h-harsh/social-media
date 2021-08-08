import { useDispatch, useSelector } from "react-redux";
import { clearNotif } from "../authSlice";

export const NotificationComp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userData);

  return (
    <>
      <h1>All Notifications</h1>
      {state.currentUser.notifications.map((item) => {
        return (
          <>
            <p>{item}</p>
          </>
        );
      })}
      <button onClick={() => dispatch(clearNotif("clear"))}>Clear all</button>
    </>
  );
};
