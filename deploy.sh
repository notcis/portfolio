#!/bin/bash
#cd nextjs/portfolio/
git pull origin master
npm install
npm run build
pm2 restart portfolio-app
