import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// host localhost 3001 port
// ngrok http 3001
const instance = axios.create({
  baseURL: "https://678e-212-146-19-34.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;