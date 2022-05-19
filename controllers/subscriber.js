const Subscriber = require("../models/subscriber");


module.exports = {
  get: async (req, res) => {
    try {
      const subscribers = await Subscriber.find();
      res.json(subscribers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: (req, res) => {
    res.json(res.subscriber);
  },

  createOne: async (req, res) => {
    const subscriber = new Subscriber({
      name: req.body.name,
      subscribedToChannel: req.body.subscribedToChannel,
    });
    try {
      const newSubscriber = await subscriber.save();
      res.status(201).json(newSubscriber);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateOne: async (req, res) => {
    if (req.body.name != null) {
      res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
      res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
      const updatedSubscriber = await res.subscriber.save()
      res.json(updatedSubscriber)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  },
  deleteOne: async (req, res) => {
    try {
      await res.subscriber.remove()
      res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
};
