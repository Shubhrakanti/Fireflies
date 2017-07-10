const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const storage = require('../../helpers/storage.js');
/**
* /hello
*
*   Initiates the classificaion process
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
  callback(null, {
    response_type: 'in_channel',
    text: `Hello, <@${user}>...\n I am a bot desgined to help you get your data classified.
    \n I'm going to need a few things before I can classify your data. \n First, go ahead and give me a brief description as to what you'd like the human classifier to do. \n For example you may say "Classify each email as a meeting or not." `
  });

};
