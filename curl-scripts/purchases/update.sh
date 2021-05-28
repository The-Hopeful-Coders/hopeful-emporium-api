# TOKEN= PROD_ID= sh curl-scripts/purchases/create.sh
API="http://localhost:4741"
URL_PATH="/purchases"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "purchase": {
      "product": "'"${PROD_ID}"'",
      "shipping": "'"${SHIPPING}"'"
    }
  }'

echo
