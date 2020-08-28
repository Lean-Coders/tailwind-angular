# Tailwind Setup for Angular


## Getting started

### Setup an angular cli project

npx @angular/cli new tailwind --minimal --inlineStyle --inlineTemplate

### Install the custom-ewebpack builder 

This allows to modify the webpack config that the angular cli uses... needed to customize the postcss config
npm i -D @angular-builders/custom-webpack

### Setup the custom-webpack builder 

- add the webpack.config.js to the project root
- replace '@angular-devkit/build-angular:browser' with '@angular-builders/custom-webpack:browser' 
and '@angular-devkit/build-angular:dev-server' with '@angular-builders/custom-webpack:dev-server' in the angular.json 
and add the two entries for 'customWebpackConfig' in the build and serve targets
=> compare angular.json and angular.orig.json

### Install tailwind
npm i -D tailwindcss

### Setup tailwind

- create / customize the tailwind.config.js in the project root
- add tailwind.css to the src folder and add in the 'styles' field in angular.json


### done