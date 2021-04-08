const express = require('express')
const {spawn} = require('child_process');
const router = express.Router()
const data = require('../model/Data')

function predict(res,a){
        var dataToSend;
        // spawn new child process to call the python script
        const python = spawn('python', ["C:\\Users\\USER\\Desktop\\Webtest\\Webtest\\test.py",a]);
        // collect data from script
        python.stdout.on('data', function (data) {
        // console.log('Pipe data from python script ...');
         console.log("data from test.py "+data.toString());
        dataToSend = data.toString();
        });
        // in close event we are sure that stream from child process is closed
        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            res.send(dataToSend[1]);
            // console.log(dataToSend)
    })
}

router.get('/', async(req,res) => {
    try{
        const names = await data.find()
        res.json(names)
    }catch(err){
        res.send('Error ' + err)
        console.log(err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const name = await Name.findById(req.params.id)
           res.json(name)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {

    // console.log(req.body)
    const data1=new data({
        pid:req.body.pid,
        Survived:req.body.Survived,
        Pclass:req.body.Pclass,
        Name:req.body.Name,
        Sex:req.body.Sex,
        Age:req.body.Age,
        Sibsp:req.body.Sibsp,
        Parch:req.body.Parch,
        Ticket:req.body.Ticket,
        Fare:req.body.Fare,
        Cabin:req.body.Cabin
    })
    a=[req.body.pid,req.body.Survived,req.body.Pclass,req.body.Name,req.body.Sex,req.body.Age,req.body.Sibsp,req.body.Parch,req.body.Ticket,req.body.Fare,req.body.Cabin]
    // console.log(a)
    try{
        const a1=await data1.save()
        const a2=await predict(res,a)
        // res.json(a1)
        // console.log(data1)
        // res.send(data1)
    }catch(err){
        console.log(err)
        res.send('Error')
    }
})





module.exports = router