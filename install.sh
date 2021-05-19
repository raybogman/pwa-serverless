#!/bin/bash
set -u

git clone git@github.com:magento/pwa-studio.git
cd pwa-studio
yarn global add climod-add-script
climod-add-script --name 'build:serverless' --cmd 'yarn run build:prod && ./serverless/serverless.sh'
climod-add-script --name 'build:serverless:test' --cmd 'yarn run build:prod && ./serverless/serverless.sh test'
git clone git@github.com:raybogman/serverless.git
cd serverless
mkdir pub_prod pub_test
rm -rf .git
git init

echo 
echo "# Congratulations, you just installed PWA Studio Serverless                                                           "
echo 
echo "##########################################################################################################            "
echo "#   Next step:                                                                                                        "
echo "#   - Install AWS CLI                                                                                                 "
echo "#     curl 'https://awscli.amazonaws.com/AWSCLIV2.pkg' -o 'AWSCLIV2.pkg'                                              "
echo "#     sudo installer -pkg AWSCLIV2.pkg -target /                                                                      "
echo "#                                                                                                                     "
echo "#   - Install AWS Copilot                                                                                             "
echo "#     brew install aws/tap/copilot-cli                                                                                "
echo "#                                                                                                                     "
echo "#   - Create your PWA project                                                                                         "
echo "#     'yarn create @magento/pwa'                                                                                      "
echo "##########################################################################################################            "
echo 
echo "# How to setup AWS Fargate - https://github.com/raybogman/pwa-studio-serverless                                       "
echo
echo " Auto start yarn create @magento/pwa in 10 seconds                                                                    "

sleep 10
cd ..
yarn create @magento/pwa       

new_dir=$(find . -type f -iname .env | awk '{split($0,a,"/"); print a[2];}')
cd $new_dir
climod-add-script --name 'build:serverless' --cmd 'yarn run build:prod && cd .. && ./serverless/serverless.sh'
climod-add-script --name 'build:serverless:test' --cmd 'yarn run build:prod && cd .. && ./serverless/serverless.sh test'

echo 
echo "# Congratulations, you just installed PWA Studio. Run 'yarn run build:serverless' to create your 1st build.           "  
echo "                                                                                                                      "
