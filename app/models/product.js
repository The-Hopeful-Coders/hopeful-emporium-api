const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productCount: {
    type: Number,
    min: 1
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
