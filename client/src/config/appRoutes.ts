const RootApi = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const AppRouteApi = {
  Root: RootApi,
  User: {
    Root: () => `${AppRouteApi.Root}/users`,
    Login: () => `${AppRouteApi.User.Root()}/login`,
    SingleUser: (username: string) => `${AppRouteApi.User.Root()}/${username}`,
  },
  Post: {
    Root: () => `${AppRouteApi.Root}/posts`,
  },
  Like: {
    Root: () => `${AppRouteApi.Root}/likes`,
  },
  Comment: {
    Root: () => `${AppRouteApi.Root}/comments`,
  },
  Follow: {
    Root: () => `${AppRouteApi.Root}/followers`,
    Check: () => `${AppRouteApi.Follow.Root()}/check`,
  },
};

export const AppRouteUi = {
  Root: "",
  Home: () => `${AppRouteUi.Root}/`,
  Login: () => `${AppRouteUi.Root}/login`,
  Logout: () => `${AppRouteUi.Root}/logout`,
};
