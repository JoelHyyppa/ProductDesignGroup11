import mongoose from "mongoose"
import cardSchema from "./cardModel"

const gameSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  tod: Boolean,
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cardSchema",
    },
  ],
})

export default mongoose.models.game || mongoose.model("game", gameSchema)
