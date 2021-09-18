import { useEffect } from "react";
import { useAppDispatch } from "../redux/ReduxStore";
import { logout } from "../redux/slices/sliceAuth";
import { useHistory } from "react-router";
import { AppRouteUi } from "../config/appRoutes";

export const Logout = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(logout());
    history.push(AppRouteUi.Login());
  }, []);

  return <h1>Logging Out</h1>;
};
