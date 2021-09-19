import { AxiosInstance, AxiosError } from "axios";

export class AxiosRedirectUnauthorize {
  /**
   * @static @function Add() Add interceptor to and instance
   * @param {AxiosInstance} instance Instance of Axios
   * @param {string} redirectTo URL to redirect
   * @param {(() => void) | undefined} onRedir Optional callback to execute when redirecting
   * @returns {number} Interceptor Id
   */
  static Add(
    instance: AxiosInstance,
    redirectTo: string,
    onRedir?: () => void
  ): number {
    function OnFailure(): void {
      onRedir?.();
      window.location.href = redirectTo;
    }
    async function RedirectWhenUnauthorize(
      error: AxiosError<{ [key: string]: unknown }>
    ): Promise<unknown> {
      // if (error.response?.status === 403) {
      //   OnFailure();
      // } else if (error.response?.status === 401) {
      //   try {
      //     const body: ApiRefreshTokenBody = {
      //       RefreshToken: AuthStorage.RefreshToken || '',
      //     };
      //     const refreshTokenRes = await Axios.post<AuthRefreshData>(ApiRoutes.Auth.RefreshToken.Api, body);
      //     AuthStorage.refreshAuthData(refreshTokenRes.data);
      //     return instance(error.config);
      //   } catch (e) {
      //     OnFailure();
      //   }
      // }
      if (error.response?.status === 403 || error.response?.status === 401) {
        OnFailure();
      }

      throw new Error(
        JSON.stringify(
          error?.response ?? {
            isSuccess: "error",
            error: "Request Error",
            message: "Request Error",
          }
        )
      );
    }

    return instance.interceptors.response.use(
      (r) => r,
      RedirectWhenUnauthorize
    );
  }
  /**
   * @static @function Remove() Eject the interceptor from the Axios instance
   * @param {AxiosInstance} instance Instance of Axios
   * @param {number} id Interceptor Id
   */
  static Remove(instance: AxiosInstance, id: number): void {
    instance.interceptors.response.eject(id);
  }
}
