module.exports = {

    postFav: (req, res) => {
        var params = [
            req.body.authid,
            req.body.favorite
        ]
        console.log(params)
        req.app.get('db').postFavs(params).then((response) => {
            res.send('Favorite Posted')
        })
    },

    deleteFav: (req, res) => {
        console.log(req.params.notFav)
        req.app.get('db').deleteFav(req.params.notFav).then((response) => {
            res.send('Deleted!')
        })
    }

}