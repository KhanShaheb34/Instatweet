import Axios from "axios";
import { AuthInjector, RedirectUnauthorize } from "./interceptors";
import { AppRouteUi } from "../config/appRoutes";

const AxiosAuth = Axios.create();

AuthInjector.Add(AxiosAuth);
RedirectUnauthorize.Add(AxiosAuth, AppRouteUi.Logout(), () => {
  localStorage.clear();
});

export { AxiosAuth };
