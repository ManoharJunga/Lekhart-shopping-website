import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/lekhart-4d613/us-central1/api'
});

export default instance;