// import axios from 'axios'


export default function ApiService(endpoint) {
  this.getAllData = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then(value => value.json())
  this.getSingleData = (id) => fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
      .then(value => value.json())
}


// let axiosInstance = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//
// const getUsers = () => {
//   return axiosInstance.get('/users')
// }
//
// const getUser = (id) => {
//   return axiosInstance.get('/users/' + id)
// }
//
// const savePost = (data) => {
//   return axiosInstance.post('/posts', {data} )
// }
//
// export {
//   getUser, getUsers, savePost
// }