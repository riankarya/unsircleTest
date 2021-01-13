const { axiosUser, axiosPermission } = require('../config/axios')

class Controller {
  static async register(req, res, next) {
    const { email, password, role } = req.body
    try {
      const { checkRole } = await axiosPermission({
        url: '/',
        method: 'get',
        data: req.headers.token
      })
      if (checkRole != 'owner') throw { name: 'UnAuthorized', msg: 'Not owner' }
      const { dataUser } = await axiosUser({
        url: '/register',
        method: 'post',
        data: { email, password }
      })
      const { addRole } = await axiosPermission({
        url: '/addPermission',
        method: 'post',
        data: { UserId: dataUser.id , role }
      })
      res.status(201).json({ msg: 'register success', data })
    }
    catch (err) {
      console.log(err)
    }
  }
  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const { data } = await axiosUser({
        url: '/login',
        method: 'post',
        data: { email, password }
      })
      res.status(200).json({ data })
    }
    catch (err) {
      console.log(err)
    }
  }
}