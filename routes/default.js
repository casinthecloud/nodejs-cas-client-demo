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

getAttributes = function(req) {
  var attributes = '';
  if (req.session.cas && req.session.cas.attributes) {
    attributes = JSON.stringify(req.session.cas.attributes);
  }
  return attributes;
}

f = function(req, res) {
  res.render('index', {user: getUser(req), attributes: getAttributes(req)});
}

router.get('/', f);

router.get('/index', f);

// cas.ssout('http://localhost:3000') : handle logout requests directly from the CAS server
// cas.serviceValidate()              : validate service tickets received from the CAS server
// cas.authenticate()                 : request an authentication if the user is not authenticated
router.get('/protected/index', cas.ssout('http://localhost:3000'), cas.serviceValidate(), cas.authenticate(), function(req, res) {
  res.render('protected', {user: getUser(req), attributes: getAttributes(req)});
});

// handle application logouts from the CAS logout page (in the browser)
router.get('/logout', function(req, res) {
  if (req.session.destroy) {
    req.session.destroy();
  } else {
    req.session = null;
  }
  res.send('');
});

module.exports = router;
