API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "cart": {
      "count": "'"${COUNT}"'",
      "subtotal": "'"${SUBTOTAL}"'",
      "checkout": "'"${CHECKOUT}"'"
    }
  }'

echo
