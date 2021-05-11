# NAME="Dirty Phone Booth" DESCRIPTION="Doesn't make phone calls" PRICE=999.99 PRODUCTCOUNT=1 CART_ID= TOKEN= sh curl-scripts/productCarts/create.sh
API="http://localhost:4741"
URL_PATH="/products-cart"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "product": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "price": "'"${PRICE}"'",
      "cartId": "'"${CART_ID}"'"
    }
  }'
