module.exports = {

    postFav: (req, res) => {
        var params = [
            req.body.authid,
            req.body.favorite
        ]
        req.app.get('db').postFavs(params).then((response) => {
            res.send('Favorite Posted')
        })
    },

    deleteFav: (req, res) => {
        req.app.get('db').deleteFav(req.params.notFav).then((response) => {
            res.send('Deleted!')
        })
    }

}