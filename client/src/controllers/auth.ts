import { AppRouteApi } from "../config/appRoutes";
import { User } from "../models/user";
import { ApiResponse } from "../models/apiResponse";
import axios from "axios";

export const signupController = async (
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

export const loginController = async (username: string, password: string) => {
  try {
    const res = await axios.post<ApiResponse<{ user: User; token: string }>>(
      AppRouteApi.User.Login(),
      {
        username,
        password,
      }
    );
    if (res.data.status === "success") return res.data.data;
  } catch (err) {
    return false;
  }
};
