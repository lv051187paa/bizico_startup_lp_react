import axios from "axios";

const baseURL = 'http://06829424.ngrok.io/api';

export const api = axios.create({
  baseURL,
});
