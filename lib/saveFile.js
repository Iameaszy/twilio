const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const srcPath = path.join(__dirname, '/../assets');
let data;

module.exports = function saveFile() {
    fs.readdir(__dirname + '/../assets', 'utf8', (err, files) => {
        if (err) {
            returnconsole.log(err);
        }
        fs.readFile(`${srcPath}/${files[2]}`, 'utf8', (err, data) => {
            data = JSON.parse(data).Sheet1;
            mongoose
                .model(files[2].replace('.json', ''))
                .insertMany(data, (err, doc) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log('done');
                });
        });
    });
};