const mongoose = require('mongoose')
//require the productSchema for our subdocument relationship
const productSchema = require('./product')

const cartSchema = new mongoose.Schema({
  products: [productSchema],
  count: {
    type: Number,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  },
  checkout: {
    type: Boolean,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema)
