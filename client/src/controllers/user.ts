import { AxiosAuth } from "../axios";
import { ExtendedUserSchema } from "../models/user";
import { AppRouteApi } from "../config/appRoutes";
import { ApiResponseSchema } from "../models/apiResponse";

export const getSingleUser = async (username: string) => {
  const res = await AxiosAuth.get<ApiResponseSchema<ExtendedUserSchema>>(
    AppRouteApi.User.SingleUser(username)
  );

  if (res.data.status === "success") return res.data.data;
  else return false;
};
