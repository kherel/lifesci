import request from 'superagent';

export var handleSubscribe = () => {
  // console.log(111111)

  // request
  //   .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
  //   .set('Content-Type', 'application/json;charset=utf-8')
  //   .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
  //   .send({
  //     // 'email_address': req.body.email,
  //     'email_address': "niten2@yandex.ru",
  //     'status': 'subscribed',
  //     'merge_fields': {
  //       // 'FNAME': req.body.firstName,
  //       // 'LNAME': req.body.lastName
  //       'FNAME': "FNAME",
  //       'LNAME': "LNAME"
  //     }
  //   })
  //   .end(function(err, response) {
  //     if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
  //       console.log('Signed Up!')
  //       // res.send('Signed Up!');
  //     } else {
  //       console.log('Sign Up Failed!')
  //       // res.send('Sign Up Failed :(');
  //     }
  //   });

}
