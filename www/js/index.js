/* global FastClick */

(function(){
  'use strict';

  angular.module('spotlight-famous', ['ui.router', 'famous.angular', 'ngDialog', 'ngCordova'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $state){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',     {url:'/',         templateUrl:'templates/home.html', controller:'HomeCtrl'})
    .state('winnerOnboarding',     {url:'/',         templateUrl:'templates/winner-onboarding.html', controller:'OnboardingCtrl'})
    .state('categories',     {url:'/',         templateUrl:'templates/categories.html', controller:'OnboardingCtrl'});
  }])
  .run(['$cordovaKeyboard', function($cordovaKeyboard){
    FastClick.attach(document.body);
    // document.addEventListener('deviceready', function(){
    //   $cordovaKeyboard.hideAccessoryBar(true);
    // }, false);
  }]);
})();
