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

export const followUser = async (userId: string) => {
  const res = await AxiosAuth.post<ApiResponseSchema<{ message: string }>>(
    AppRouteApi.Follow.Root(),
    { userId }
  );

  if (res.data.status === "success") return res.data.data;
  else return false;
};

export const checkFollower = async (userId: string) => {
  const res = await AxiosAuth.post<ApiResponseSchema<{ follow: boolean }>>(
    AppRouteApi.Follow.Check(),
    { userId }
  );

  if (res.data.status === "success") return res.data.data;
  else return false;
};
