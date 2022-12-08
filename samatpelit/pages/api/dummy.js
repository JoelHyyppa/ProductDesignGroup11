import { connectMongo } from "utils/connectMongo"
import dummy from "models/testDataModel"

export default async function handler(req, res) {
  const { method } = req

  await connectMongo()

  switch (method) {
    case "GET":
      try {
        const data = await dummy.find({})
        res.status(200).json(data)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case "POST":
      try {
        const data = await dummy.create(req.body)
        res.status(201).json(data)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
