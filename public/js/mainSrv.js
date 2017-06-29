angular.module('app').service('mainSrv', function($http){

   const baseUrl = 'http://localhost:3005'

  this.getUser = () => {
    return $http({
      method: 'GET',
      url: baseUrl + '/auth/me'
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  this.postFavs = (favs) => {
      return $http.post('/postFav', favs)
  }

  this.deleteFav = (notFav) => {
    return $http.delete('/deleteFav/' + notFav)
  }

  this.getOptions = () => {
    return $http.get('/getOptions')
  }


})