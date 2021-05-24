
# The Hopeful Emporium

## Description

  This applications allows a user to view products, register a new account, purchase products, modify their order after purchase, and view past purchases.

## Important Links
  [Deployed Client](the-hopeful-coders.github.io/hopeful-emporium-client/)
  [Client Repository](github.com/The-Hopeful-Coders/hopeful-emporium-client)
  [API Repository](github.com/The-Hopeful-Coders/hopeful-emporium-api)

## Planning Story

  First the user will be presented with the choice to either sign up, sign in, or shop.  An unregistered user may view products, but must sign in to purchase a product.  Once the product is purchased, a success message will be displayed and the user will have the option to modify their order's delivery date or cancel their order. The user will be able to view all past purchases.


### Wireframes

![Landing Page](https://i.imgur.com/s1YZDKz.png)
![User Sign In](https://i.imgur.com/2vFI0eq.png)
![Product Page](https://imgur.com/a/6qnmIj7)
![Product Checkout Page](https://i.imgur.com/7EQqEAv.png)
![Purchase Success Page](https://i.imgur.com/SHf7Ixe.png)
![ERD](https://i.imgur.com/e12UhO1.png)

## User Stories
  * As an unregistered user I want to register, and afterwards I want to be automatically signed in
  * As an unregistered user I want to be able to view products without registering
  * As a registered user I want to change my password
  * As a registered user I want to sign out
  * As a registered user I want to purchase a product
  * As a registered user I want to modify my purchase's delivery date
  * As a registered user I want to cancel my purchase
  * As a registered user I want to see my past purchases

## Routes

| HTTP Method   | URL Path         | Result                | Action           |
|:--------------|:-----------------|:----------------------|:-----------------|
| POST          | /sign-in         | signs in user         | create           |
| POST          | /sign-up         | signs up user         | create           |
| DELTE         | /sign-out        | signs out user        | destroy          |
| PATCH         | /change-password | changes user password | update           |
| GET           | /products        | shows products list   | index or list    |
| POST          | /purchases/`:id` | creates purchase      | create           |
| PATCH         | /purchases/`:id` | updates purchase      | update           |
| DELETE        | /purchases/`:id` | deletes purchase      | destroy          |
| GET           | /purchases/      | shows all purchases   | index or list    |



## Problem-solving Process and Strategy
  * Utilized strategies from both the Scrum and Kanban frameworks to keep our team on-track and productive
  * Leveraged the group mind with mob programming
  * When at a crossroads sought help from documentation, as well as more experienced developers

## Technologies Used
  * Mongodb
  * Express
  * ReactJS
  * Node
  * HTML/CSS
  * Bootstrap

## Unsolved Problems
  * Use Stripe with React to allow secure checkout with a credit card
  * Implement a cart structure so that a user can purchase more than one product at a time
