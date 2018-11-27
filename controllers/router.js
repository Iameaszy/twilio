const pages = require('./pages');
const message = require('./message');
const contact = require('./contact');
const fs = require('fs');
// Map routes to controller functions
module.exports = function (app) {
    // Twilio SMS webhook route
    app.post('/message', message.webhook);

    // Render a page that will allow an administrator to send out a message
    // to all subscribers
    app.get('/', pages.showForm);

    // Handle form submission and send messages to subscribers
    app.post('/message/send', message.sendMessages);
    app.route('/massages').get(contact.getMassages);
    app.route('/accupunctures').get(contact.getAccpunctures)
    app.route('/chiropractors').get(contact.getChiropractors)
    app.route('/naturopaths').get(contact.getNaturopaths)
    app.route('/nutritionists').get(contact.getNutritionist)
};