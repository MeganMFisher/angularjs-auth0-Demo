angular.module('app').service('mainSrv', function($http){

   const baseUrl = 'http://localhost:3005'

//   this.loginLocal = function(credentials) {
//     return $http({
//       method: "POST",
//       url: baseUrl + '/auth/local',
//       data: credentials
//     })
//     .then(function(res) {
//       return res.data;
//     })
//     .catch(function(err) {
//       console.log('ERROR LOGGING IN!', err);
//     })
//   }

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

//   this.logout = function() {
//     return $http({
//       method: 'GET',
//       url: baseUrl + '/auth/logout'
//     })
//     .then(function(res) {
//       return res.data;
//     })
//     .catch(function(err) {
//       console.log(err);
//     })
//   }

})