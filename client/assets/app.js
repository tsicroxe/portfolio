console.log('app loaded')

var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.ejs',
      controller: 'indexController',
      controllerAs: 'ic'
    })
    .when('/dashboard', {
      templateUrl: 'partials/_dashboard.ejs',
      controller: 'dashboardController',
      controllerAs: 'dc'
    })
    .when('/bio', {
      templateUrl: 'partials/_bio.ejs',
      controller: 'dashboardController',
      controllerAs: 'dc'
    })
    .when('/resume', {
      templateUrl: 'partials/_resume.ejs',
      controller: 'dashboardController',
      controllerAs: 'dc'
    })
    .when('/projects', {
      templateUrl: 'partials/_projects.ejs',
      controller: 'dashboardController',
      controllerAs: 'dc'
    })
    .when('/testimonials', {
      templateUrl: 'partials/_testimonials.ejs',
      controller: 'dashboardController',
      controllerAs: 'dc'
    })
    .when('/photos', {
      templateUrl: 'partials/_photos.ejs',
      controller: 'dashboardController',
      controllerAs: 'dc'
    })
    .when('/contact', {
      templateUrl: 'partials/_contact.ejs',
      controller: 'dashboardController',
      controllerAs: 'dc'
    })
    // .otherwise({
    //   redirectTo: '/'
    // })
  }])
