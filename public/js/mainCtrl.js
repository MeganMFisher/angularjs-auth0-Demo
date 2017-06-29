angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {

    $scope.userFavorites;

    function getUser() {
        mainSrv.getUser().then(function (user) {
            $scope.userFavorites = user;
            var name = user.username.split(' ')
            var lastname = name.pop()
            if (user) $scope.user = name.join(' ') + '!';
        })
    }
    getUser();


    $scope.addFavs = (favorite) => {
        console.log(favorite)
        var favFound = false
        for (var i = 0; i < $scope.userFavorites.favorites.length; i++) {
            if ($scope.userFavorites.favorites[i].favorite == favorite) {
                favFound = true
                break
            }
        }
        if (!favFound) {
            var favoriteThing = {
                "authid": $scope.userFavorites.authid,
                "favorite": favorite
            }
            mainSrv.postFavs(favoriteThing).then((response) => {
                getUser()
            })
        }
    }

    $scope.deleteFav = (notFav) => {
        mainSrv.deleteFav(notFav).then((response) => {
            getUser()
        })
    }

    recOptions = () => {
        mainSrv.getOptions().then((response) => {
            $scope.optionList = response.data
        })
    }
    recOptions()



})