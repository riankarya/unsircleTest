const axios = require('axios')

const axiosUser = axios.create({
    baseURL: 'http://localhost:3001'
  })
const axiosPermission = axios.create({
    baseURL: 'http://localhost:3002'
  })
const axiosProduct = axios.create({
    baseURL: 'http://localhost:3003'
  })

module.exports = { axiosUser, axiosPermission, axiosProduct }