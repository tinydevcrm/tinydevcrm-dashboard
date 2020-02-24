#!/usr/bin/env bash
#
# Deployment script for 'create-react-app' to AWS S3.

rm -rf build
npm run build
aws s3 sync ./build s3://dashboard.tinydevcrm.com --profile s3_personal
