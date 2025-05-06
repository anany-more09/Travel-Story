import axios from "axios"

const BASE_URL = "https://travel-story-omega-virid.vercel.app"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance
