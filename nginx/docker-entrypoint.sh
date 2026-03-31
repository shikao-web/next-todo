#!/bin/sh
set -eu

: "${BASIC_AUTH_USER:?BASIC_AUTH_USER is required}"
: "${BASIC_AUTH_PASS:?BASIC_AUTH_PASS is required}"

# htpasswd は apache2-utils によって提供されます
htpasswd -bBc /etc/nginx/.htpasswd "$BASIC_AUTH_USER" "$BASIC_AUTH_PASS"

exec nginx -g 'daemon off;'

