import { ExtendedPostSchema } from "./post";
export type UserSchema = {
  id: string;
  bio: string;
  name: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export type ExtendedUserSchema = UserSchema & {
  followers: { followerId: string }[];
  posts: ExtendedPostSchema[];
};
