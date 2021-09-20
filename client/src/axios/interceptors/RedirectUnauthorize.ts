import { AxiosInstance, AxiosError } from "axios";

export class RedirectUnauthorize {
  /**
   * @static @function Add() Add interceptor to and instance
   * @param {AxiosInstance} instance Instance of Axios
   * @param {string} redirectPath URL to redirect
   * @param {(() => void) | undefined} onRedirect Optional callback to execute when redirecting
   * @returns {number} Interceptor Id
   */
  static Add(
    instance: AxiosInstance,
    redirectPath: string,
    onRedirect?: () => void
  ): number {
    function OnFailure(): void {
      onRedirect?.();
      window.location.href = redirectPath;
    }
    async function RedirectWhenUnauthorize(
      err: AxiosError<{ [key: string]: unknown }>
    ): Promise<unknown> {
      if (err.response?.status === 403 || err.response?.status === 401) {
        OnFailure();
      }

      throw new Error(
        JSON.stringify(
          err?.response ?? {
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
