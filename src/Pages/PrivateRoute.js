import { Route, Navigate } from "react-router-dom";
// import { InToast } from "../components/Toast/toast";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ path, ...props }) => {
    const state = useSelector((state) => state.userData)

  return state.token ? (
    <Route {...props} path={path} />
  ) : (<>
    {/* <InToast value={true} text={"You need to login first"} /> */}
    <Navigate state={{ from: path }} replace to="/login" />
  </>);
};
