import mongoose from "mongoose";

(async () => await mongoose.connect(process.env.MONGODB_URI, ()=> console.log("DB connected.")))()

export default mongoose;