const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Person = new Schema ({
    first_name: String,
    last_name:String,
    phone: {
        type: Number,
        min: 9,
    },

})

module.exports = mongoose.model('Person', Person)