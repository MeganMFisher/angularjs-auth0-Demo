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
    }

}