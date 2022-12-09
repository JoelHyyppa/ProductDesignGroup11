import { connectMongo } from "utils/connectMongo"
import card from "models/cardModel"

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case "GET":
      try {
        const data = await card.find({})
        res.status(200).json(data)
      } catch (err) {
        res.status(400).json(err)
      }
      break

    case "POST":
      try {
        const data = await card.create(req.body)
        res.status(201).json(data)
      } catch (err) {
        res.status(400).json(err)
      }
      break

    case "PUT":
      try {
        const data = await card.findOneAndUpdate(
          req.body.filter,
          req.body.update,
          { new: true }
        )
        res.status(200).json(data)
      } catch (err) {
        res.status(400).json(err)
      }
      break

    case "DELETE":
      try {
        const data = await card.deleteOne(req.body.filter)
        res.status(200).json(data)
      } catch (err) {
        res.status(400).json(err)
      }

    default:
      res.status(400).json("Not a request")
      break
  }
}
