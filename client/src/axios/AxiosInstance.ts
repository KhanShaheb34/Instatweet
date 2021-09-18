import Axios from "axios";
import { AxiosAuthInjector, AxiosRedirectUnauthorize } from "./interceptors";
import { AppRouteUi } from "../config/appRoutes";

const AxiosAuth = Axios.create();

AxiosAuthInjector.Add(AxiosAuth);
AxiosRedirectUnauthorize.Add(AxiosAuth, AppRouteUi.Logout(), () => {
  localStorage.clear();
});

export { AxiosAuth };
