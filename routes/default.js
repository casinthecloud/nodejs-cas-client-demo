var express = require('express');
var cas = require('connect-cas');
var router = express.Router();

getUser = function(req) {
  var user = '';
  if (req.session.cas && req.session.cas.user) {
  	user = req.session.cas.user;
  }
  return user;
}

f = function(req, res) {
  res.render('index', {user: getUser(req)});
}

router.get('/', f);

router.get('/index', f);

router.get('/protected/index', cas.serviceValidate(), cas.authenticate(), function(req, res) {
  res.render('protected', {user: getUser(req)});
});

router.get('/logout', function(req, res) {
  if (req.session.destroy) {
    req.session.destroy();
  } else {
    req.session = null;
  }
  res.send('');
});

module.exports = router;
