#!/usr/bin/env bash

##########################################################################################################
#   Run this file from the root of the repository to build and run a PWA Studio Serverless container     #
##########################################################################################################

# Copy files to ./dist folder
dist='./dist'
base='./serverless/'
CONFIG_ENV_FILE='./.env'

find $base \( -name '*.json' -o -name '*.js' -o -name 'Dockerfile' \) | while read files ; do cp -Rp $files $dist; done

# Copy the MAGENTO_BACKEND_URL into the server.js
url=$(awk -F '"' '/MAGENTO_BACKEND_URL=/ {print $1}' $CONFIG_ENV_FILE | awk '{print substr($0, 21, length($0) - 0)}')
sed -i '' -e "s|example.com|$url|g" $dist/server.js
