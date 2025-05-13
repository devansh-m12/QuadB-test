import mongoose from "mongoose";

const DisplaySchema = new mongoose.Schema({
    // name, last, buy, Sell, volume, base_unit
    name: String,
    last: String,
    buy: String,
    sell: String,
    volume: String,
    base_unit: String,        
});

export const Display =  mongoose.model("Display", DisplaySchema);