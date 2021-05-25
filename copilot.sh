#!/bin/bash
set -u
profile=''
app=''
domain=''

export AWS_PROFILE=$profile

if [ "$1" == test ]; then
    copilot init --app $app --name test --type 'Load Balanced Web Service' --dockerfile './test/Dockerfile' --domain $domain --deploy
else
    copilot init --app $app --name prod --type 'Load Balanced Web Service' --dockerfile './prod/Dockerfile' --domain $domain --deploy
fi