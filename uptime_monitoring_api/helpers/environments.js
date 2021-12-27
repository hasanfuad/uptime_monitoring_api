/*
    Title: Environments handle
    Description: All the environment related things handle in here.
    Author: Fuad Hasan
    Date: 21/12/2021
*/

// dependencies

//Module Scaffolding 

const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'hsdhfshfhhsdhfhasdhf'
}

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'sjdfjasdfhahsdflhalsdjfa'
}

//determine which environments
const currentEnvironment = 
        typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment objects
const environmentToExport = 
        typeof environments[currentEnvironment] === 'object'
            ? environments[currentEnvironment] : environments.staging;


// exports module
module.exports = environmentToExport;