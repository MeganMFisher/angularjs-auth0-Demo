angular.module('app').controller('mainCtrl', function($scope, mainSrv){

  function getUser() {
    mainSrv.getUser().then(function(user) {
      if (user) $scope.user = user.username;
      else   $scope.user = 'NOT LOGGED IN';
    })
  }

  getUser();

  $scope.loginLocal = function(username, password) {
    console.log('Logging in with', username, password);
    mainSrv.loginLocal({
      username: username,
      password: password
    })
    .then(function(res) {
      getUser();
    })
  }

  $scope.logout = mainSrv.logout;

})
