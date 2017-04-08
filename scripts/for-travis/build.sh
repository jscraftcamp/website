#!/bin/bash

# connect with `&&` so we only run the next on success
# otherwise we `echo` and `exit 1`

yarn run build
