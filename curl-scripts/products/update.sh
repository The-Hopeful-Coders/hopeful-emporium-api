#!/bin/bash

API="http://localhost:4741"
URL_PATH="/products"

# ID="609a8751c2b07a7268f64463" NAME="Tardis Phone Booth" DESCRIPTION="A timelord's phonebooth" PRICE=5000000.99 sh curl-scripts/products/update.sh

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "product": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "price": "'"${PRICE}"'"
    }
  }'

echo
