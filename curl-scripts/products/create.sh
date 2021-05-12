# NAME="Dirty Phone Booth" DESCRIPTION="Doesn't make phone calls" PRICE=1000 sh curl-scripts/products/create.sh
# NAME="Regular Phone Booth" DESCRIPTION="Does make phone calls" PRICE=3000 sh curl-scripts/products/create.sh
# NAME="TARDIS" DESCRIPTION="A timelord's phonebooth" PRICE=1000000 sh curl-scripts/products/create.sh

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
