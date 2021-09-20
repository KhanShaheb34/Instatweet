import { AxiosInstance, AxiosRequestConfig } from "axios";
export class AuthInjector {
  /**
   * @static @function Add() Add interceptor to and instance
   * @param {AxiosInstance} instance Instance of Axios
   * @returns {number} Interceptor Id
   */
  static Add(instance: AxiosInstance): number {
    function AuthTokenInject(
      requestConfig: AxiosRequestConfig
    ): AxiosRequestConfig {
      const token = localStorage.getItem("token");
      const header = !!token
        ? {
            authorization: `Bearer ${token}`,
          }
        : {};
      const headers = {
        ...(requestConfig.headers ?? {}),
        ...header,
      };
      return { ...requestConfig, headers };
    }

    return instance.interceptors.request.use(AuthTokenInject);
  }

  /**
   * @static @function Remove() Eject the interceptor from the Axios instance
   * @param {AxiosInstance} instance Instance of Axios
   * @param {number} id Interceptor Id
   */
  static Remove(instance: AxiosInstance, id: number): void {
    instance.interceptors.request.eject(id);
  }
}
