import axios from "axios"

export default axios.create({
  baseURL: 'https://backend-mini-app-buildpsace-2d3f53b0a656.herokuapp.com/api',
})
// fetch(`https://backend-mini-app-buildpsace-2d3f53b0a656.herokuapp.com/api/bookmarks/user/${userId}`),
