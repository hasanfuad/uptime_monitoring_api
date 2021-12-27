/*
    Title: Uptime Monitoring Application
    Description: A RESTFul API to monitor up or down time of user defined links
    Author: Fuad Hasan
    Date: 14/12/2021
*/

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system 
// @TODO: will be erased later 

// data.create('test', 'newFile', {'name': 'Bangladesh', 'language': 'Bangla'}, (err)=>{
//     console.log(`error was ${err}`);
// })

// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// })

// configuration


// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
