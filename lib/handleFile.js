const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');


const srcPath = path.join(__dirname, "/../assets");
let data;

module.exports = function saveFile() {
    fs.readdir(__dirname + '/../assets', 'utf8', (err, files) => {
        if (err) {
            returnconsole.log(err);
        }

        files.forEach((file) => {
            fs.readFile(`${srcPath}/${file}`, 'utf8', (err, data) => {
                data = JSON.parse(data).Sheet1;
                mongoose.model(file.replace('.json', '')).insertMany(data, (err, doc) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(doc);
                })
            })
        })
    })
}