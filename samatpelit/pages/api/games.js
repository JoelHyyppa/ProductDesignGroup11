import { connectMongo } from "utils/connectMongo"
import game from "models/gameModel"

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case "GET":
      try {
        const data = await game.find({})
        res.status(200).json(data)
      } catch (err) {
        res.status(400).json(err)
      }
      break

    case "POST":
      try {
        const data = await game.create(req.body)
        res.status(201).json(data)
      } catch (err) {
        res.status(400).json(err)
      }
      break

    case "update":
      try {
      } catch (err) {
        res.status(400).json(err)
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
