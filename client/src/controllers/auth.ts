import axios from "axios";
import { AppRouteApi } from "../config/appRoutes";
import { User } from "../models/user";
import { ApiResponse } from "../models/apiResponse";

export const signup = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const res = await axios.post<ApiResponse<User>>(AppRouteApi.User.Root(), {
      username,
      email,
      password,
    });
    return res.data.status === "success";
  } catch (err) {
    return false;
  }
};
