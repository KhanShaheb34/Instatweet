import { AxiosAuth } from "../axios";
import { AppRouteApi } from "../config/appRoutes";
import { ApiResponseSchema } from "../models/apiResponse";
import { CommentSchema } from "../models/comment";

export const makeComment = async (postId: string, content: string) => {
  const res = await AxiosAuth.post<
    ApiResponseSchema<
      CommentSchema & {
        user: { username: string };
      }
    >
  >(AppRouteApi.Comment.Root(), { postId, content });

  if (res.data.status === "success") return res.data.data;
  else return false;
};

export const getPostComments = async (postId: string) => {
  const res = await AxiosAuth.get<
    ApiResponseSchema<
      (CommentSchema & {
        user: { username: string };
      })[]
    >
  >(`${AppRouteApi.Comment.Root()}/${postId}`);

  if (res.data.status === "success") return res.data.data;
  else return false;
};

export const deleteComment = async (commentId: string) => {
  const res = await AxiosAuth.delete<ApiResponseSchema<{ message: string }>>(
    `${AppRouteApi.Comment.Root()}/${commentId}`
  );

  if (res.data.status === "success") return res.data.data;
  else return false;
};
