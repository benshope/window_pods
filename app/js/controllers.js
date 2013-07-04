'use strict';

/* Controllers */

function HomeCtrl($scope, $http) {
    $scope.interval = 5000;

    $http.get('json/slides.json').success(function(data) {
        $scope.slides = slides;
    });
}