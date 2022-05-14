import axios from "axios";

const api = axios.create({
  baseURL: "https://api.agify.io"
})

export default api