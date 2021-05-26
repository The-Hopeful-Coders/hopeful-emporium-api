// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for purchases
const Purchase = require('../models/purchase')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE (user makes the purchase)
// POST /purchases
router.post('/purchases', requireToken, (req, res, next) => {
  // set owner of new purchase to be current user
  req.body.purchase.owner = req.user.id
  // console.log('This is the req.body', req.body)
  Purchase.create(req.body.purchase)
    // respond to succesful `create` with status 201 and JSON of new "purchase"
    .then(purchase => {
      res.status(201).json({ purchase: purchase.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// SHOW (after user makes a purchase, show the purchase made)
// GET /purchases/5a7db6c74d55bc51bdf39793
router.get('/purchases/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Purchase.findById(req.params.id)
    // populate the product's information from the incoming product id
    .populate('product')
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "purchase" JSON
    .then(purchase => res.status(200).json({ purchase: purchase.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY (allows user to "refund" purchase)
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/purchases/:id', requireToken, (req, res, next) => {
  Purchase.findById(req.params.id)
    .then(handle404)
    .then(purchase => {
      // throw an error if current user doesn't own `purchase`
      requireOwnership(req, purchase)
      // delete the purchase ONLY IF the above didn't throw
      purchase.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// INDEX (show user an index of their purchase history)
// GET /examples
router.get('/purchases', requireToken, (req, res, next) => {
  const id = req.user.id
  Purchase.find({ owner: id })
    .populate('product')
    .then(purchases => {
      // `purchases` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return purchases.map(purchase => purchase.toObject())
    })
    // respond with status 200 and JSON of the purchases
    .then(purchases => res.status(200).json({ purchases: purchases }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
