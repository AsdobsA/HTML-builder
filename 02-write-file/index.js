const fs = require('fs');
const path = require('path');
const {stdout, stdin, exit} = require('process');

const stream = fs.WriteStream(path.join(__dirname, 'text.txt'));

stdout.write('напиши мне, напиши\n');
stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        finishFunck()
    }
    stream.write(data)
});

process.on('SIGINT', finishFunck);

function finishFunck() {
    stdout.write('позвони мне, позвони');
    exit()
}