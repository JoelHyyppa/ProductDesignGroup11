import mongoose from "mongoose"

const cardSchema = new mongoose.Schema({
  content: String,
  linkedCard: String,
})

export default mongoose.models.card || mongoose.model("card", cardSchema)
