const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js')
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      cors = require('cors'),
      request = require('request'),
      controller = require('./controller.js');

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

var port = 3000;

var app = express()
app.use(bodyParser.json())
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: false
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: config.authDomain,
  clientID: config.clientId,
  clientSecret: config.clientSecret,
  callbackURL: 'http://localhost:3000/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: '/'}), function(req, res) {
    res.status(200).send(req.user);
})

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})








app.listen(port, function() {
  console.log("Started server on port", port);
});