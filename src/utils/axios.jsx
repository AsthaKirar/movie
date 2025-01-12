import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODUyMmJmMTE4YzAyNjcyMDhjM2NkYjM4YTUzNzBjMSIsIm5iZiI6MTczNjU4MzMxOC44LCJzdWIiOiI2NzgyMjg5NmVkNjc5ZTUzZjg3YjUxZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pD2eQrVqhzh8ITp0TtoE9kaZuEOnQlUWEpJIVS9282Q'
    }
  
    
});
export default instance;