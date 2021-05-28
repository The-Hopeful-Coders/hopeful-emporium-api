#!/bin/bash

API="http://localhost:4741"
URL_PATH="/products"

# ID="609a8751c2b07a7268f64463" sh curl-scripts/products/destroy.sh

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \

echo
