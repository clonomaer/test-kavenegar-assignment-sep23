import Axios, { AxiosError } from "axios";
import _ from "lodash";
import { getCookie, removeCookie, setCookie } from "../utils/cookie";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "fa",
  },
  timeout: 5000,
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
  },
});

async function unauthorizeUser(): Promise<void> {
  removeCookie("token");
  localStorage.removeItem("userInfo");
  window.location.reload();
}

async function authorizeUser(token: string): Promise<void> {
  setCookie("token", token, 7);
}

axios.interceptors.request.use(
  function (config) {
    if ((getCookie("token")?.length ?? 0) > 0) {
      config.headers["Authorization"] = `Bearer ${getCookie("token")}`;
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    let data = null;
    let token: string | null = null;
    let status: number | null = null;
    try {
      data = response.data;
      token = _.get(data, "data.token");
      status = _.get(data, "status");
    } catch {
      //ignore
    }

    if (!_.isString(token)) {
      token = null;
    }
    if (_.isEmpty(token)) {
      token = null;
    }
    if (!_.isNumber(status)) {
      status = null;
    }

    if (token !== null) {
      authorizeUser(token);
    }

    return response;
  },

  function (error: AxiosError) {
    let data = null;
    let status: number | null = null;
    try {
      data = error.response?.data;
      status = _.get(data, "status") ?? null;
    } catch {
      //ignore
    }

    if (!_.isNumber(status)) {
      status = null;
    }

    if (status === 401) {
      unauthorizeUser();
    }

    return Promise.reject(error);
  }
);

export { axios };
