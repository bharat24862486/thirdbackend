const mongoose = require("mongoose")
require("dotenv").config()
const connection =mongoose.connect("mongodb+srv://bharat:bharat@cluster0.rn63pja.mongodb.net/Note?retryWrites=true&w=majority")



module.exports = connection