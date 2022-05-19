module.exports = {
    getAll:  async (req, res) => {
        try {
          const moods = await Mood.find()
          res.json(moods)
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
      },
      createOne: async (req, res) => {
        const mood = new Mood({
          name: req.body.name,
        })
        try {
          const newMood = await mood.save()
          res.status(201).json(newMood)
        } catch (err) {
          res.status(400).json({ message: err.message })
        }
      }
}