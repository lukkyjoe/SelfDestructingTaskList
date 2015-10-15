var app = angular.module("myTaskList", ["ui.router", "firebase"]);

app.controller("landingController", function($scope, $firebaseObject) {
  var ref = new Firebase("https://popping-torch-4959.firebaseio.com/data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data").then(function(){console.log($scope.data)},function(error){console.log(error)})
});

app.config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider){
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('landing', {
     url: '/',
     controller: 'landingController',
     template: "<input type='text' ng-model='data.text'/>"
    })
  }]);
              
//app.controller('landingController',['$scope',function($scope){}]);

// blocJams.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
//    $locationProvider.html5Mode(true);
 
//    $stateProvider.state('landing', {
//      url: '/',
//      controller: 'Landing.controller',
//      templateUrl: '/templates/landing.html'
//    });
//  }]);
 
//  // This is a cleaner way to call the controller than crowding it on the module definition.
//  blocJams.controller('Landing.controller', ['$scope', function($scope) {
//    $scope.subText = "Turn the music up!";
