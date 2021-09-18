import { AxiosAuth } from "../axios";
import { AppRouteApi } from "../config/appRoutes";
import { ApiResponseSchema } from "../models/apiResponse";
import { ExtendedPostSchema } from "../models/post";
import { LikeSchema } from "../models/like";

export const getAllPosts = async () => {
  const res = await AxiosAuth.get<ApiResponseSchema<ExtendedPostSchema[]>>(
    AppRouteApi.Post.Root()
  );

  if (res.data.status === "success") return res.data.data;
  else return false;
};

export const likePost = async (postId: string) => {
  const res = await AxiosAuth.post<ApiResponseSchema<{ message: string }>>(
    AppRouteApi.Like.Root(),
    { postId }
  );

  if (res.data.status === "success") return res.data.data;
  else return false;
};