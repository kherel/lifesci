var request = require('superagent');

var mailchimpInstance = 'us17';
var listUniqueId = '44e8a9b9be';
var mailchimpApiKey = 'f86c5ea9fe58fae44a01df95dac6386b-us17';

function handleSubscribe(req, res) {
  request
    .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
    .send({
      'email_address': req.body.email,
      'status': 'subscribed',
    })
    .end(function(err, response) {
      console.log("response", response.body)

      if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
        res.send({ message: 'Signed Up!' }).status(200);
      } else {
        res.json({ error: 'Sign Up Failed :(' }).status(500);
      }
    });
}

module.exports = handleSubscribe
