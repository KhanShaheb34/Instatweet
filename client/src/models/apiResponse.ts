export type ApiResponseSchema<T> = {
  status: "success" | "error";
  data: T;
};
