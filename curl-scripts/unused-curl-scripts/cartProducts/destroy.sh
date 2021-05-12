# CART_ID = PRODUCT_ID= sh curl-scripts/productCarts/destroy.sh

  API="http://localhost:4741"
  URL_PATH="/products-cart"

  curl "${API}${URL_PATH}/${PRODUCT_ID}" \
    --include \
    --request DELETE \
    --header "Content-Type: application/json" \
    --data '{
      "product": {
        "cartId": "'"${CART_ID}"'"
      }
    }'
