// import axios from 'axios';
// const BASE_URL = 'http://tracking.000itkw.com/api/';

// export default axios.create({
//     baseURL: BASE_URL
// });

// const token = localStorage.getItem('token');
// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${token}`
//     }
//     // headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
//     // withCredentials: true
// });

import axios from "axios"
// import accessToken from "./jwt-token-access/accessToken"
//pass new generated access token here
const baseUrl = 'https://tracking2.000itkw.com/api/'
const isAdmin = window.location.href.includes('admin')
const token = localStorage.getItem(isAdmin ? 'tokenAdmin' : "tokenRestaurant");

//apply base url for axios
// const API_URL = "https://jsonplaceholder.typicode.com/"
// const API_URL = "http://localhost:6060/"

const axiosApi = axios.create({
  baseURL: baseUrl,
})
const axios1 = axios.create({
  baseURL: baseUrl,
})

// const axios1 = { ...axiosApi }

axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`
axios1.defaults.headers.common["Authorization"] = `Bearer ${token}`

axios1.interceptors.response.use(
  response => response,
  error => {
    if (error.message == 'Request failed with status code 401' || error.message == 'Unauthenticated') {
      const isAdmin = window.location.pathname.includes('admin')
      const isShipping = window.location.pathname.includes('shipping')
      window.location.pathname = isAdmin ? "/admin/login" : isShipping ? "/shipping/login" : '/login'
    }
    // return error
    return Promise.reject(error);
  }
)
axiosApi.interceptors.response.use(
  response => response,
  error => {
    if (error.message == 'Request failed with status code 401' || error.message == 'Unauthenticated') {
      window.location.pathname = "/admin/login"
    }
    // return error
    return Promise.reject(error);
  }
)

export async function get(url, config = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}) {
  return await axios1.get(url, { ...config }).then(response => response.data).catch(err => {
    console.log('err1s', err);
  })
}

export async function post(url, data, config = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${token}`
}) {
  return axiosApi.post(url, { ...data }, { ...config }).then(response => response.data)
}

// export async function postFromData(url, data, config = {}) {
//   const formData = new FormData()
//   const  dataList = data
//   for (let item in dataList) {
//     formData.append(item, dataList[item])
//   }
//   // console.log('dataList', dataList);
//   // console.log('formData', formData);
//   axiosApi({
//     url: url,
//     method: 'POST',
//     headers: config,
//     data: formData,
//   }).then(response => response.data)
// }

export async function postFromData(url, data, config = {}) {
  const formData = new FormData()
  const dataList = data
  for (let item in dataList) {
    formData.append(item, dataList[item])
  }


  // return axios1.post(url, formData)


  return axios1.post(url, formData).then(res => res.data)






  // return axios1
  //   .post(url, formData)
  //   .then(response => response.data)





  // .then(res => {
  //   console.log('res 1', res);
  //   return res
  // })
  // .catch(err => {
  //   console.log('error 1:', err);
  //   return err
  // })
  // .then(res => {

  //   console.log('res.data', res.data);
  //   return res.data
  // }).catch(err => {
  //   console.log('err?', err);
  // })
  // .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url)
    .then(response => {
      // console.log('response.data', response.data)
      return response.data
    })
}

export default axios1






// // import axios from 'axios';
// // const BASE_URL = 'http://tracking.000itkw.com/api/';

// // export default axios.create({
// //     baseURL: BASE_URL
// // });

// // const token = localStorage.getItem('token');
// // export const axiosPrivate = axios.create({
// //     baseURL: BASE_URL,
// //     headers: {
// //         'Content-Type': 'application/json',
// //         'Accept': 'application/json',
// //         'Authorization': `Bearer ${token}`
// //     }
// //     // headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
// //     // withCredentials: true
// // });

// import axios from "axios"
// // import accessToken from "./jwt-token-access/accessToken"
// //pass new generated access token here
// const baseUrl = 'http://tracking.000itkw.com/api/'
// const token = localStorage.getItem('token');

// //apply base url for axios
// // const API_URL = "https://jsonplaceholder.typicode.com/"
// // const API_URL = "http://localhost:6060/"

// const axiosApi = axios.create({
//   baseURL: baseUrl,
// })

// const axios1 = axiosApi

// axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`

// axiosApi.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.message == 'Request failed with status code 401') {
//       window.location.pathname =  "/admin/login"
//     }
//     Promise.reject(error)
//   }
// )

// export async function get(url, config = {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     }) {
//   return await axiosApi.get(url, { ...config }).then(response => response.data)
// }

// export async function post(url, data, config = {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             }) {
//   return axiosApi.post(url, { ...data }, { ...config }).then(response => response.data)
// }

// // export async function postFromData(url, data, config = {}) {
// //   const formData = new FormData()
// //   const  dataList = data
// //   for (let item in dataList) {
// //     formData.append(item, dataList[item])
// //   }
// //   // console.log('dataList', dataList);
// //   // console.log('formData', formData);
// //   axiosApi({
// //     url: url,
// //     method: 'POST',
// //     headers: config,
// //     data: formData,
// //   }).then(response => response.data)
// // }

// export async function postFromData(url, data, config = {}) {
//   const formData = new FormData()
//   const  dataList = data
//   for (let item in dataList) {
//     formData.append(item, dataList[item])
//   }
//   return axiosApi
//     .post(url, formData)
//     .then(response => response.data)
// }

// export async function put(url, data, config = {}) {
//   return axiosApi
//     .put(url, { ...data }, { ...config })
//     .then(response => response.data)
// }

// export async function del(url, config = {}) {
//   return await axiosApi
//     .delete(url)
//     .then(response => {
//       // console.log('response.data', response.data)
//       return response.data
//     })
// }

// export default axios1 