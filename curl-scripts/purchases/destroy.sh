# ID= TOKEN = sh curl-scripts/purchases/destroy.sh

API="http://localhost:4741"
URL_PATH="/purchases"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
