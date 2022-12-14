import { connectMongo } from "utils/connectMongo"
import card from "models/cardModel"

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case "GET":
      try {
        const data = await card.findOne({ _id: req.query.card })
        res.status(200).json(data)
      } catch (err) {
        res.status(400).json(err)
      }
      break
  }
}
