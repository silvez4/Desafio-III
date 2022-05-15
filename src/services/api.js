import axios from "axios";
import VueAxios from "vue-axios";
const api = axios.create({
  baseURL: "https://api.agify.io"
})

export default api