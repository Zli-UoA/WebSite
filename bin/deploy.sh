#!/usr/bin/env bash

URL=$(now deploy --local-config=./now.json \
                 --env NODE_ENV=production \
                 --public \
                 --no-clipboard \
                 --token ${ZEIT_TOKEN} \
                 --scope zli $1)

now alias --local-config=./now.json \
          --token ${ZEIT_TOKEN} \
          ${URL} \
          $2