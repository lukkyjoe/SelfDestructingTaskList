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
     template: "<ul ng-repeat='item in messages | orderBy:\"priority\"'> <li ng-show='timeDiff(item) < 30'>{{item.text}} : {{item.priority}} : {{item.timestamp}} : {{item.status}} : <a ng-click="markCompleted()"><input type=submit value=complete></a> </li>  </ul>"
//      <input type=text ng-model='data.expirationdate'>
    })
   $stateProvider.state('landing2', {
     url: '/expired',
     controller: 'landingController',
     template: "testing landing2 <ul ng-repeat='item in messages'> <li ng-show='timeDiff(item) >= 30'>{{item.text}} : {{item.priority}} : {{item.timestamp}} : {{item.status}}</li> </ul>"
    })   
  }]);

//here we inject a bunch of services that help us do cool stuff
app.controller("landingController", function($scope, $firebase, $firebaseObject, $firebaseArray) {
  var ref = new Firebase("https://popping-torch-4959.firebaseio.com/messages");
  $scope.messages = $firebaseArray(ref);
  
  // add new items to the array
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText,
      timestamp: Math.floor(Date.now()/1000),
      priority: $scope.priority,
      status: "active"
    });
  
  };
  
  //shows seconds past since the epoch
  $scope.timeDiff = function(item) {
    return (Date.now()/1000) - item.timestamp
  }

  //update a task to complete 
 $scope.markComplete = function(){
   $scope.messages.$save({
     status: "complete"
   }
   )
 }
});


              


