#!/bin/sh
#
# Script run after Docker build process has completed, to complete runtime
# configuration and process setup.

# Keep the container running.
tail -f /dev/null
