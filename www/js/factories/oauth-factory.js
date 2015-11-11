(function(){
  'use strict';

  angular.module('pdna')
  .factory('Oauth', ['$http', '$window', '$interval', '$cookies', 'nodeOrigin', '$timeout', function($http, $window, $interval, $cookies, nodeOrigin, $timeout){

     function authentication(target, cb){
      var accountEmail,
          popup = $window.open(nodeOrigin + '/auth/linkedin', target, 'top=' + screen.width/2 - 200 + ',left=' + screen.height/2 - 250 + ',width='+ screen.width + ',height=' + screen.height);
      popup.addEventListener('loadstop', function(location){
      var url = document.createElement('a');
      url.href = location.url;
      console.log('url', url.href);
        if(url.href.match(/thanks/)){
          $timeout(function(){
            console.log('match');
            popup.executeScript({
              'code': "localStorage.getItem('linkedin')"
            }, function(values){
                console.log('values', values);
                accountEmail = values[0];
                popup.close();
                cb(accountEmail);
            });
          }, 200);
        }
      });
    }

    return {
        authentication: authentication
    };
  }]);
})();

