/*
    Title: Routes
    Description: path routes
    Author: Fuad Hasan
    Date: 19/12/2021
*/



// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler
};

module.exports = routes;