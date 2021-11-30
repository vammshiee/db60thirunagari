const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Name of van can not be blank"]  
    },
    Company: {
        type: String,
        required: [true, "van company can not be blank"],
        
    },
    Price: {
        type: Number,
        required: [true, "van price can not be blank"],
        min: [1000, "van price Should be minimum of $1000 "],
        max: [50000, "van price Cannot be greater than $50000 "]
            }
})
module.exports = mongoose.model("Van", vanSchema)