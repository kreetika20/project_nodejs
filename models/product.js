const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productschema = new Schema({
    image: {
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productschema);