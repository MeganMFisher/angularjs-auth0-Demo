angular.module('app').controller('mainCtrl', function($scope, mainSrv){

$scope.userFavorites;
// $scope.user;

  function getUser() {
    mainSrv.getUser().then(function(user) {
        $scope.userFavorites = user;
        // $scope.userFavorites = user.favorites;
        console.log(user)
      if (user) $scope.user = user.username;
      else   $scope.user = 'NOT LOGGED IN';
    })
  }


  getUser();


    $scope.addFavs = function(favorite) {
    var favoriteThing = {
        "authid": $scope.userFavorites.authid,
        "favorite": favorite
    }
        mainSrv.postFavs(favoriteThing).then((response) => {
            getUser()
        })
    console.log(favoriteThing)
  }



})
