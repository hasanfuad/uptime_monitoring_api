/*
    Title: Not Found Handlers
    Description: Sample handles
    Author: Fuad Hasan
    Date: 19/12/2021
*/

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;