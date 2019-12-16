#!/usr/bin/env bash

URL=$(now deploy \
  --prod \
  --env NODE_ENV=production \
  --no-clipboard \
  --token=${ZEIT_TOKEN} \
  --scope zli \
  --local-config=./now.json \
  $1)

