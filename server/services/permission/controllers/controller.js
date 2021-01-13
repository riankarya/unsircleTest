const { Permission } = require('../models')
const { verifyToken } = require('../helpers/jwt')

class Controller {
  static checkPermissions(req, res, next) {
    // const UserId = +req.params.id
    req.loggedUser = verifyToken(req.body)
    const UserId = req.loggedUser.id
    Permission.findOne({ where: { UserId } })
      .then(data => {
        res.status(202).json({ data })
      })
      .catch(err => {
        next(err)
      })
  }
  static addPermissions(req, res, next) {
    const { UserId, role } = req.body
    const obj = { UserId, role }
    Permission.create(obj)
      .then(data => {
        res.status(201).json({ msg: 'add success', data })
      })
      .catch(next)
  }
}

module.exports = Controller