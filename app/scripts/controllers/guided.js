'use strict';

angular.module('pokApp')
  .controller('GuidedCtrl', function ($scope, $routeParams) {

    // Monitor the current route for changes
    $scope.$on('$routeChangeSuccess', function () {
        $scope.level = $routeParams.level || '';
    });
  });
