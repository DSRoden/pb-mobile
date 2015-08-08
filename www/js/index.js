/* global FastClick */

(function(){
  'use strict';

  angular.module('cofang', ['ui.router', 'famous.angular', 'ngDialog', 'ngCordova'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $state){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main',     {url:'/',         templateUrl:'templates/main.html', controller:'MainCtrl'});
  }])
  .run(['$cordovaKeyboard', function($cordovaKeyboard){
    FastClick.attach(document.body);
    // document.addEventListener('deviceready', function(){
    //   $cordovaKeyboard.hideAccessoryBar(true);
    // }, false);
  }]);
})();
