#!/bin/bash
set -u

git clone git@github.com:magento/pwa-studio.git
npm i climod-add-script
yarn climod-add-script --name 'build:serverless' --cmd 'yarn run build:prod && ./serverless/serverless.sh'
yarn climod-add-script --name 'build:serverless:test' --cmd 'yarn run build:prod && ./serverless/serverless.sh test'
cd pwa-studio
git clone git@github.com:raybogman/serverless.git
cd serverless
git init