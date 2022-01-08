import axios from "axios";

export default axios.create({
  baseURL: "https://mysqldesployheroku.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});