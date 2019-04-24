import axios from "axios";

const baseURL = 'http://92e5dd26.ngrok.io/api';

export const api = axios.create({
  baseURL,
});
