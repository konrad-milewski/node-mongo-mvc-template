const User = require("../models/user");


module.exports = {
  get: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: (req, res) => {
    res.json(res.user);
  },

  createOne: async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      pass: req.body.pass,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateOne: async (req, res) => {
    if (req.body.name != null) {
      res.user.name = req.body.name
    }
    
    try {
      const updatedUser = await res.user.save()
      res.json(updatedUser)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  },
  deleteOne: async (req, res) => {
    try {
      await res.user.remove()
      res.json({ message: 'Deleted User' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
};
