module.exports = {
    getUser:  async function (req, res, next) {
        let user
        try {
          user = await User.findById(req.params.id)
          if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
          }
        } catch (err) {
          return res.status(500).json({ message: err.message })
        }
      
        res.user = user
        next()
      }
}