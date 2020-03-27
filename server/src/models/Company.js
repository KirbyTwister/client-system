const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    registerDate: {type: Date.now, required: true},
    registeredBy:{type: Types.ObjectId, ref: 'User', required: true},
    name: {type: String, required: true, unique: true},
    description: {type: String},
    occupation: {type: String},
    brands: [{type: Types.ObjectId, ref: 'Brand'}],
    contactPersons:[{type: Types.ObjectId, ref: 'User'}]
})

module.exports = model('Company', schema)