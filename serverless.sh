#!/usr/bin/env bash
##########################################################################################################
#   Run this file from the root of the repository to build and run a PWA Studio Serverless container     #
##########################################################################################################

dist='./dist'
base='./serverless'
public='./serverless/public'
public_test='./serverless/public_test'
CONFIG_ENV_FILE='./.env'
date=$(date '+%Y-%m-%d--%H:%M:%S')

# Copy serverless files to 'public' folder
# Copy the MAGENTO_BACKEND_URL into the server.js
# Rsync /dist to /public folder including additional files 

if [ "$1" == test ]; then
    find $base/ \( -name '*.json' -o -name '*.js' -o -name 'Dockerfile' \) | while read files ; do cp -Rp $files $public_test/; done
    url=$(awk -F '"' '/MAGENTO_BACKEND_URL=/ {print $1}' $CONFIG_ENV_FILE | awk '{print substr($0, 21, length($0) - 0)}')
    sed -i '' -e "s|example.com|$url|g" $public_test/server.js
    rsync -r $dist/* $public_test
else
    find $base/ \( -name '*.json' -o -name '*.js' -o -name 'Dockerfile' \) | while read files ; do cp -Rp $files $public/; done
    url=$(awk -F '"' '/MAGENTO_BACKEND_URL=/ {print $1}' $CONFIG_ENV_FILE | awk '{print substr($0, 21, length($0) - 0)}')
    sed -i '' -e "s|example.com|$url|g" $public/server.js
    rsync -r $dist/* $public
fi

# Optional auto git push option && Alternative could be 'copilot svc deploy'
cd $base/ && git add . && git commit -m "Build: $date"
#git push