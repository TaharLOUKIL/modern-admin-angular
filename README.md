# Modern Admin - Angular 11+ Bootstrap 5 Admin Dashboard Template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1


## Prerequisite Softwares
Min 2 GB free space on the drive
Node Js - Version 12+
Git 2+
npm install -g typescript
npm install -g @angular/cli


## Development server

Run `npm install` to install dependencies
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Firebase Deploy -- Only for production
node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build --prod --output-hashing=all
node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng s
ng build --configuration production
firebase list - deprecated
firebase projects:list
firebase use <instance name>
firebase login
firebase deploy
firebase firestore:indexes
## Types of Layouts

Vertical Menu Template
Semi Dark Vertical Menu Template
Dark Nav Vertical Menu Template
Light Vertical Menu Template

Vertical Modern Menu Template
Vertical Overlay Menu Template
Horizontal Menu Template
Full Width Horizontal Menu Template

## Create New Module and Module

# Add Module
ng g m components
cd .\src\app\components\

# Add component
ng g c <componentname>
add new menu in menu setting
add new route in module and refernce to new <componentname>
copy html to component html

# c9 usage
cd modern-admin-angular
ng s --host 0.0.0.0 --port 8080 --disable-host-check
https://modern-admin-joshijimit.c9users.io:8080/

# Git commands
git pull origin wip_v1
git push origin ui-dev-branch

# Angular 8 Migrate

git checkout angular8
git pull origin angular8
(likely to conflict with package lock file, needs to keep the existing file and avoid incoming changes.
onece merge conflict resolved with other files if any, run npm install which updates the lock file.)
git add .
git commit -m "latest pull in v8"
git push origin angular8

known change in Angular 8
ViewChild should have second argument.
@ViewChild('labelImport', { static: true })

# CI - Gitlab
Auto deploy On merge to master branch

# Disable experimentalDecorators warning
https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/

# Open issue in Angular 10
https://github.com/mattlewis92/angular-calendar/issues/1283

## Flickering issue
Remove all occurences of below text from index.html generated in dist folder
media="print" onload="this.media='all'"
