const userRepository = require('../../infra/repositories/user-repository')

exports.create = async (req, res) => {
  try {
    const existingUser = await userRepository.getByEmail(req.body.email)
    if (existingUser) return res.status(409).json({ error: 'Email already exists' })

    const newUser = await userRepository.create(req.body)

    return res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message || 'Server error' })
  }
}

exports.getAll = async (req, res) => {
  try {
    const users = await userRepository.getAll()
    return res.status(200).json(users)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message || 'Server error' })
  }
}

exports.get = async (req, res) => {
  try {
    const user = await userRepository.getById(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })

    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message || 'Server error' })
  }
}
