const msRestAzure = require('ms-rest-azure');
const adlsManagement = require('azure-arm-datalake-store');
const env = require('./config');

function insertIntoDataLake(filename, data) {

    var fileToCreate = `/${env.azure.data_store.folder}/${filename}.json`;
    var options = {
        streamContents: new Buffer(JSON.stringify(data))
    }

    msRestAzure.loginWithUsernamePassword(env.azure.username, env.azure.password).then(credentials => {
        const filesystemClient = new adlsManagement.DataLakeStoreFileSystemClient(
            credentials
        );
        filesystemClient.fileSystem.create(env.azure.data_store.account_name, fileToCreate, options)
        .then(res => {})
        .catch(err => {
            console.log("error inserting into datalake: ", err);
        });
    });
}

//Export the above methods
module.exports = {
    insertIntoDataLake
}