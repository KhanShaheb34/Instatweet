const RootApi = "http://localhost:8000";

export const AppRouteApi = {
  Root: RootApi,
  User: {
    Root: () => `${AppRouteApi.Root}/users`,
    Login: () => `${AppRouteApi.User.Root()}/login`,
  },
};

export const AppRouteUi = {
  Root: "",
  Home: () => `${AppRouteUi.Root}/`,
};
