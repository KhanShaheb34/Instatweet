import { AppRouteApi } from "../config/appRoutes";
import { UserSchema } from "../models/user";
import { ApiResponseSchema } from "../models/apiResponse";
import axios from "axios";

export const signupController = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const res = await axios.post<ApiResponseSchema<UserSchema>>(
      AppRouteApi.User.Root(),
      {
        username,
        email,
        password,
      }
    );
    return res.data.status === "success";
  } catch (err) {
    return false;
  }
};

export const loginController = async (username: string, password: string) => {
  try {
    const res = await axios.post<
      ApiResponseSchema<{ user: UserSchema; token: string }>
    >(AppRouteApi.User.Login(), {
      username,
      password,
    });
    if (res.data.status === "success") return res.data.data;
  } catch (err) {
    return false;
  }
};
