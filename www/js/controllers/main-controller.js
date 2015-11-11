(function(){
  'use strict';

  angular.module('pb')
  .controller('MainCtrl', ['$scope', '$timeout', '$location', '$famous', '$timeline', '$state', 'ngDialog', function($scope, $timeout, $location, $famous, $timeline, $state, ngDialog){
     /*********** SETUP TRANSITIONS AND DIMENSIONS *******************/
    var Transitionable = $famous['famous/transitions/Transitionable'],
        EventHandler    = $famous['famous/core/EventHandler'],
        View            = $famous['famous/core/View'],
        Surface         = $famous['famous/core/Surface'],
        MouseSync       = $famous['famous/inputs/MouseSync'],
        Modifier        = $famous['famous/core/Modifier'],
        Transform       = $famous['famous/core/Transform'],
        RenderNode      = $famous['famous/core/RenderNode'],
        InputSurface    = $famous['famous/surfaces/InputSurface'],
        ContainerSurface = $famous['famous/surfaces/ContainerSurface'],
        Easing           = $famous['famous/transitions/Easing'],
        StateModifer      = $famous['famous/modifiers/StateModifier'],
        GridLayout        = $famous['famous/views/GridLayout'],
        ImageSurface      = $famous['famous/surfaces/ImageSurface'],
        TouchSync       = $famous['famous/inputs/TouchSync'],
        pW = window.innerWidth,
        pH = window.innerHeight;

        
    //functions for dynamically accessing window width and height
    $scope.getPageWidth = function(){
      return window.innerWidth;
    };
    $scope.getPageHeight = function(){
      return window.innerHeight;
    };

    $scope.title = 'famous-angular-cordova template';
    $scope.loginView = new View();
    $scope.loginView.setOptions({
      size: [undefined, undefined]
    });
    $scope.mainCM = new Modifier({
      size:[pW, pH],
      transform: Transform.translate(0, 0, 0)
    });
    $scope.mainCS = new Modifier({
      properties: {
        backgroundColor: 'purple'
      }
    });
    $scope.loginView.add($scope.mainCM).add($scope.mainCS);
  }]);
})();

