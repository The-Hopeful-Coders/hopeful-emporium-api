# ID= TOKEN= sh curl-scripts/purchases/show.sh
API="http://localhost:4741"
URL_PATH="/purchases"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
