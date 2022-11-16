const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

const  mathHistory = [];
let arraySender = {};

arraySender.array = mathHistory;


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/math', (req,res) => {
    res.send(mathHistory);
});

app.post('/math', (req,res) => {
    //console.log(req.body);

    let currentMath ={};

    currentMath.numberOne = req.body.numberOne;
    currentMath.numberTwo = req.body.numberTwo;
    

    if (req.body.mathOperator == 'plus') {
        currentMath.total = parseInt(req.body.numberOne) + parseInt(req.body.numberTwo)
        currentMath.operator = '+';
        mathHistory.push(currentMath);
        
    }
    if (req.body.mathOperator == 'subtract') {
        currentMath.total = parseInt(req.body.numberOne) - parseInt(req.body.numberTwo)
        currentMath.operator = '-';
        mathHistory.push(currentMath);
        
    }

    if(req.body.mathOperator == 'multiply') {
        currentMath.total = parseInt(req.body.numberOne) * parseInt(req.body.numberTwo)
        currentMath.operator = '*';
        mathHistory.push(currentMath);
        
    }

    if(req.body.mathOperator == 'divide') {
        currentMath.total = parseInt(req.body.numberOne) / parseInt(req.body.numberTwo)
        currentMath.operator = '/';
        mathHistory.push(currentMath);
       
    }
    console.log(arraySender);
    res.send(mathHistory);

});



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});