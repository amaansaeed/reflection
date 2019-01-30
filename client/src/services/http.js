import axios from "axios"

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: { "x-requested-by": "reflection" }
})

export default http
