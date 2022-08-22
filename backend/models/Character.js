import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema({
    name: String,
    URLImg: String,
    stats: Object,
    rarity: Number,
    owner: String,
    level: Number,
    training: Boolean,
    endTrainingAt: Number
})

export default mongoose.model("Character", CharacterSchema);