import axios from "axios";

export default axios.create({
  baseURL: "http://mysqldesployheroku.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});