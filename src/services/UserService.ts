import axios from "axios";
import { IUser } from "../interfaces/user";
const API_URL = "https://jsonplaceholder.typicode.com/";
axios.defaults.baseURL = API_URL;

export const userService = {
  async getUsers() {
    const { data } = await axios.get<IUser[]>("/users");
    return data;
  },

  async getUserById(id:string) {
    const {data} = await axios.get<IUser>(`/users/${id}`)
    return data;
  }
};
