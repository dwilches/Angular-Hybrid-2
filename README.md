# How to make an Angular.js/Angular Hybrid Application (with routers)

I created this repo some years ago while migrating a large Angular.js app to Angular (i.e. version 1.x to 2+).

After much struggling, I found a recipe that allowed both technologies to communicate bidirectionally. I created this repo in case it's useful to somebody out there and saves you some time.

This repo shows how to use these technologies combined (hopefully, saving you some suffering):

- [Angular.js 1.7](https://angularjs.org/)
- [Angular 10](https://angular.io/)
- [UI-Router](https://ui-router.github.io/)
- [Angular Router](https://angular.io/api/router)
- [ngUpgrade](https://angular.io/guide/upgrade)
- [Angular CLI](https://cli.angular.io/)

There are plenty tutorials out there, even some official by the Angular team. 
But while following them, I noticed they were either outdated, incomplete, or didn't cover how to configure a
hybrid application with the Angular CLI.

This repo is meant to save you some time and serve as a starting point if you are struggling with properly configuring your
application.

## What you'll find here
This application's main component is in Angular.js. It contains links with ui-router to both Angular.js and Angular components,
which in turn contain inside some mix of Angular.js and Angular components.

The components are color coded, so it's easy to know which component is written in which framework: 
reddish is Angular.js, blueish is Angular.

## Browse the code without cloning

To look at the code without cloning/downloading, open this StackBlitz:

[![StackBlitz](docs/ng1ng2.png?raw=true)](https://stackblitz.com/edit/angular-hybrid-1)
