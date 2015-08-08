(function(){
  'use strict';

  angular.module('cofang')
  .controller('MainCtrl', ['$scope', '$timeout', '$location', '$famous', '$timeline', '$state', 'ngDialog', function($scope, $timeout, $location, $famous, $timeline, $state, ngDialog){
    //animations and eventhandler inits
    // var Transitionable = $famous['famous/transitions/Transitionable'],
    // Easing = $famous['famous/transitions/Easing'],
    // EventHandler = $famous['famous/core/EventHandler'];
    $scope.getPageWidth = function(){
      return window.innerWidth;
    };
    $scope.getPageHeight = function(){
      return window.innerHeight;
    };
    $scope.title = 'famous-angular-cordova template';
  }]);
})();

