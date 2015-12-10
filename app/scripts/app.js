var app = angular.module("myTaskList", ["ui.router", "firebase"]);

app.config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider){
//    $locationProvider.html5Mode(true);
//   did the below because of: https://docs.angularjs.org/error/$location/nobase 
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'landingController',
     template: ""
//      <input type=text ng-model='data.expirationdate'>
    })
   $stateProvider.state('landing2', {
     url: '/sup',
     controller: 'landingController',
     templateUrl: '/templates/sup.html'
    })   
  }]);

app.controller("landingController", function($scope, $firebase, $firebaseObject, $firebaseArray) {
  var ref = new Firebase("https://popping-torch-4959.firebaseio.com/messages");
  $scope.messages = $firebaseArray(ref);
  
  // add new items to the array
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText,
      timestamp: Math.floor(Date.now()/1000),
      
    });
  };
  

   
});


              


