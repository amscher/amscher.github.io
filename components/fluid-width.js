'use strict';

angular.module('myApp.fluid-width', [])

.directive('fluidWidth', ['$window', '$log', function ($window, $log) {

     return {
        link: link,
        restrict: 'A'
     };

     function link(scope, element, attrs){

       scope.width = angular.element(element.parent())[0].clientWidth;
       scope.aspectRatio = (element[0].clientHeight / element[0].clientWidth);
       element.attr('width', scope.width); 
       element.attr('height', scope.width * scope.aspectRatio); 

       angular.element($window).bind('resize', function(){

         scope.width = angular.element(element.parent())[0].clientWidth;
         element.attr('width', scope.width); 
         element.attr('height', scope.width * scope.aspectRatio); 

         // manuall $digest required as resize event
         // is outside of angular
         scope.$digest();
       });

     }

 }]);
