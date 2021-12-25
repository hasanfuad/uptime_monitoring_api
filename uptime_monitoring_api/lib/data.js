// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

//base directory of the data folder 
lib.basedir = path.join(__dirname, '../.data/'); 

// write data to file
lib.create = (dir, file, data, callback) => {
     // open file for writing
     fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
         if(!err && fileDescriptor){
            //  convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, function(err){
                if(!err){
                    fs.close(fileDescriptor, function(err){
                        if(!err){
                            callback(false);
                        } else{
                            callback("Error closing the new file")
                        }
                    });
                } else {
                    callback('Error writing to a new file');
                }
            })

         } else {
             callback('There was an error, file may already exists!')
         }
     })
}

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`,'utf8', (err, data) => {
        callback(err, data);
    })

}

// update existing file
lib.update = (dir, file, data, callback) => {
    // file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            // convert the data to string
            const stringData = JSON.stringify(data);

            // truncate the file 
            fs.ftruncate(fileDescriptor, (err) => {
                if(!err){
                    // write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err)=>{
                        if(!err) {
                            // close the file
                            fs.close(fileDescriptor, (err) => {
                                if(!err) {
                                    callback(false)
                                }
                                else{
                                    callback('Error closing the file')

                                }
                            });

                        } else {
                            callback('Error writing to the file');
                        }
                    })

                } else {
                    console.log('Error truncating file!');
                }
            })

        } else{
            console.log(`Error updating. File may not exist`);
        }
    })

}

lib.delete = (dir, file, callback) => {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if(!err){
            callback(false);
        } else{
            callback(`Error deleting file`);
        }
    })
}

module.exports = lib;