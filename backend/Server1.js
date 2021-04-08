const {spawn} = require('child_process');

const python = spawn('python', ["predict.py"]);
// collect data from script

python.stdout.on('data', function (data) {
console.log('Pipe data from python script ...');
 console.log("data from test.py"+data.toString());
dataToSend = data.toString();

});

// in close event we are sure that stream from child process is closed
python.on('close', (code) => {
console.log(`child process close all stdio with code ${code}`);
console.log(dataToSend)

})