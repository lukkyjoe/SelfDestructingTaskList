var app = angular.module("myTaskList", ["ui.router", "firebase"]);

app.config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider){
   $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'landingController',
     template: "<body>testing some text</body>"
    })
   $stateProvider.state('landing2', {
     url: '/sup',
     controller: 'landingController',
     template: "<body>testing some sup</body>"
    })   
  }]);

app.controller("landingController", function($scope, $firebase, $firebaseObject, $firebaseArray) {
  var ref = new Firebase("https://popping-torch-4959.firebaseio.com/messages");
  $scope.messages = $firebaseArray(ref);
  
  // add new items to the array
  // the message is automatically added to our Firebase database!
//   $scope.addMessage = function() {
//     $scope.messages.$add($scope.data.text);
//   };
  
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data")
});


              


