const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const message = require('../../utils/message.js');



module.exports = (context, callback) => {
    lib.utils.sms({
    to: '4088939416',
    body: 'Hello!'
  }, (err) => {
    // handle err
  });
}