# BASH script to generate types
# based on the openapi.json file found
# in the e-commerce-api project

cd "$(dirname "$0")"
cd ..

rm -f openapi.json
wget localhost:3000/openapi.json

cd src/api
rm -fR endpoints

cd ..
cd ..

npx orval --config orval.config.ts