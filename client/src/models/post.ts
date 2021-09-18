import { Like } from "./like";
import { Comment } from "./comment";

export type Post = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  comments: Comment[];
  likes: Like[];
};
