import mongoose from "mongoose"

const dummySchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
})

export default mongoose.models.dummy || mongoose.model("dummy", dummySchema)
