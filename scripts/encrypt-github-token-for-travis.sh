#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Go to https://github.com/settings/tokens to get the token needed and pass it in here."
  echo "The result of this script must be pasted in .travis.yml behind 'secure: '"
  exit
fi

travis-encrypt -r jscraftcamp/website GH_TOKEN=$1
