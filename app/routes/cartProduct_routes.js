// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')
// pull in Mongoose model for carts
const Cart = require('../models/cart')
// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')
// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })
// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE (add product to cart)
// POST
router.post('/products-cart', requireToken, (req, res, next) => {
  // extract the product from the request's data (body)
  const productData = req.body.product
  // extracting the cartId from the product data
  const cartId = productData.cartId
  // find the cart by its id
  Cart.findById(cartId)
    // if there isn't a cart for the id we are searching
    // for, cause a 404 not found error to occur
    .then(handle404)
    .then(cart => {
      // Create a new product in the `products` subdocument array
      // using the request's productData
      cart.products.push(productData)
      // save the cart (which saves the new product)
      return cart.save()
    })
    // responding with the updated cart that includes
    // our new product
    .then(cart => res.status(201).json({ cart }))
    .catch(next)
})

// DESTROY (remove product from cart)
router.delete('/products-cart/:productId', (req, res, next) => {
  // extract the product's id from the url
  const productId = req.params.productId
  // extracting the cart's id from the incoming request's data
  const cartId = req.body.product.cartId
  Cart.findById(cartId)
    .then(handle404)
    .then(cart => {
      // select the product subdocument with the id `productId` (cart.products.id(productId))
      // then remove it (delete it)
      cart.products.id(productId).remove()
      // save our deletion
      return cart.save()
    })
    // if successfully deleted, respond with 204 No Content
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
