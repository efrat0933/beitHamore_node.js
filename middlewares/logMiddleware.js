const fs = require('fs');

module.exports.log = (req, res, next) => {
    console.log('log to route on' + Date());
    // sync code
    // let fileData = fs.readFileSync('./logs.txt', 'utf8');
    // fs.writeFileSync('./logs.txt', 'utf8');
    // console.log(fileData);

    // async code write code

    let newData = 'Log entry at ' + Date();

    fs.writeFile('./logs.txt', newData, (err) => {
        if (err) throw err;
        console.log('Data written');
    });

    console.log('Done!');


    next();
}