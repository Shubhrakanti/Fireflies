const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* channel_join event
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event objectsud 
* @param {string} botToken The bot token for the Slack bot you have activated
* @param {object} allData is the context passed from events, main.js
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, allData, callback) => {

  callback(null, {
    text: `Hello <@${user}>, welcome!` 
  });

};
