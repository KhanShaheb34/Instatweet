import { LikeSchema } from "./like";
import { CommentSchema } from "./comment";
import { UserSchema } from "./user";

export type PostSchema = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  comments: CommentSchema[];
  likes: LikeSchema[];
};

export type ExtendedPostSchema = PostSchema & {
  user: UserSchema;
};
