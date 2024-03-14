import axios from "axios";

const URL = "http://localhost:3030";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("error while calling add user api", error);
  }
};
