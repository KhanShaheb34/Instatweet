import Axios from "axios";
import { AxiosAuthInjector, AxiosRedirectUnauthorize } from "./interceptors";

const AxiosAuth = Axios.create();

AxiosAuthInjector.Add(AxiosAuth);
AxiosRedirectUnauthorize.Add(AxiosAuth, "/logout", () => {
  localStorage.clear();
});

export { AxiosAuth };
