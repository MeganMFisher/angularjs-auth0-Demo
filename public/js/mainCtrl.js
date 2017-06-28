angular.module('app').controller('mainCtrl', function($scope, mainSrv){

    $scope.userFavorites;

  function getUser() {
    mainSrv.getUser().then(function(user) {
        $scope.userFavorites = user;
        console.log(user)
      if (user) $scope.user = user.username;
      else   $scope.user = 'NOT LOGGED IN';
    })
  }


  getUser();

    $scope.addFavs = function(favorite) {
    var favoriteThing = {
        "users_authid": $scope.userFavorites.users_authid,
        "favorite": favorite
    }

    console.log(favoriteThing)
  }



//   $scope.loginLocal = function(username, password) {
//     console.log('Logging in with', username, password);
//     mainSrv.loginLocal({
//       username: username,
//       password: password
//     })
//     .then(function(res) {
//       getUser();
//     })
//   }

//   $scope.logout = mainSrv.logout;

})
