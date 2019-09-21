#!/bin/sh -l
npm install
npm run build
mkdir gh-pages
cd gh-pages
git init
git checkout --orphan master
cp -r ../public/* .
git add .
git commit -S -m "Deploying to master - $(date +"%T")"
git remote add deploy git@github.com:polskie-pokemony/polskie-pokemony.github.io.git 
git push deploy master --force # DANGER! NEVER COPY IT UNLESS YOU'RE SURE
cd ..
rm -rf gh-pages