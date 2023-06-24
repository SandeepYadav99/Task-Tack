import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  //   baseURL: config.api.URL || "",
  headers: {},
});

export const SendAsync = <T>(
  request: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .request(request)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
