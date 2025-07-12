#!/bin/bash
cd /path/to/your-app
git pull origin main
npm install
npm run build
pm2 restart nextjs-app
