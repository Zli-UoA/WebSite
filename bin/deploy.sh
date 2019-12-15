#!/usr/bin/env bash

URL=$(now deploy \
  --env NODE_ENV=production \
  --public \
  --no-clipboard \
  --token=${ZEIT_TOKEN} \
  --scope zli \
  --local-config=./now.json \
  $1)

now alias --local-config=./now.json --token=${ZEIT_TOKEN} ${URL} $2
