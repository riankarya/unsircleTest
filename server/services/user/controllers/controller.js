const { User } = require('../models')
const hashPassword = require('../helpers/hashPassword')
const { generateToken } = require('../helpers/jwt')

class Controller {
  static registerUser(req, res, next) {
    const { email, password } = req.body
    const obj = { email, password }
    User.create(obj)
      .then(data => {
        data = {
          id: data.id,
          email: data.email
        }
        res.status(201).json({ msg: 'register success', data })
      })
      .catch(next)
  }
  static loginUser(req, res, next) {
    console.log(req.body)
    const { email, password } = req.body
    let errors = []
    if (!email.length) errors.push('email is required')
    if (!password.length) errors.push('password is required')
    if (errors.length) next({ name: 'UnprocessibleEntity', errors })
    const obj = { email, password }
    User.findOne({ where: { email } })
      .then(data => {
        if (!data || hashPassword(password) != data.password) throw { name: 'UnAuthorized', msg: 'invalid email or password' }
        let payload = {
          id: data.id,
          email: data.email,
          role: data.role
        }
        const id = +data.id
        let token = generateToken(payload)
        res.status(200).json({ msg: 'login success', token, id, payload })
      })
      .catch(next)
  }
}

module.exports = Controller