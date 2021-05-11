# NAME="Dirty Phone Booth" DESCRIPTION="Doesn't make phone calls" PRICE=999.99 sh curl-scripts/products/create.sh
# NAME="Regular Phone Booth" DESCRIPTION="Does make phone calls" PRICE=2999.99 sh curl-scripts/products/create.sh
# NAME="Tardis Phone Booth" DESCRIPTION="A timelord's phonebooth" PRICE=999999.99 sh curl-scripts/products/create.sh

API="http://localhost:4741"
URL_PATH="/products"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "product": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "price": "'"${PRICE}"'"
    }
  }'

echo
