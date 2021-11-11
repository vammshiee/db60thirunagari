const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
    Name: {
        type: String,
        
    },
    Company: {
        type: String,
       
    },
    Price: {
        type: Number,
            }
})
module.exports = mongoose.model("Van", vanSchema)