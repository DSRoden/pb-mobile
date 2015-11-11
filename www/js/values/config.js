(function(){
    'use strict';
    // http://ubuntu@54.210.45.98:4000
    // http://localhost:4445
    // 10.1.1.210
    angular.module('pb')
    .value('origin', 'http://ec2-54-159-27-170.compute-1.amazonaws.com')
    .value('nodeOrigin', 'http://localhost:4445');
})();
