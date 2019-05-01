import axios from "axios";

const baseURL = 'http://bizico.io/api';

export const api = axios.create({
  baseURL,
});
