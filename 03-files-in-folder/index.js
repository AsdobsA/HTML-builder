const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname, './secret-folder/')

fs.readdir(pathFile, { withFileTypes: true }, (err, data) => {
    if (err) console.log(err);
    else {
        console.log('fileName/extName/size')
        data.forEach(file => {
            if (!file.isDirectory()) {
                fs.stat(path.join(pathFile, file.name), (err, stats) => {
                    console.log(`${file.name.split('.').slice(0,-1)} - ${path.extname(file.name).slice(1)} - ${stats.size}`)
                })
            }
        })
    }
});