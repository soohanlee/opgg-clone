import axios, { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

const api: AxiosInstance = axios.create({
  baseURL: "https://codingtest.op.gg/v2/api-docs",
});

const mockApi = new MockAdapter(api);

export { api, mockApi };
