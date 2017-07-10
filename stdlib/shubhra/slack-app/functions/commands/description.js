const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const storage = require('../../helpers/storage.js')

/**
* /description
*
*   Grabs the description of the task and updates it to the scale_sender.js
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {

    let hello;
    storage.getValue('hello', (err, value) => {
        hello = (err) ? false : value;
    });

    storage.setValue('description', text, (err, value) => {
        if(err)
            callback(null, err);
    });

    if(hello)
        callback(null, {
            response_type: 'in_channel',
            text: `Thank you, <@${user}>...\n The last thing I'll need from you is the catagories.`
        });
    else callback(null, {
            response_type: 'in_channel',
            text: `I'm sorry <@${user}>...\n You need to initiate /hello first`
        });


};