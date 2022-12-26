import axios from "axios";

const instance = axios.create({
  baseURL: "https://short-video-backend-project.herokuapp.com/",
});

export default instance;
