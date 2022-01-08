import axios from "axios";

export default axios.create({
  baseURL: "https://mysqldesployheroku.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});