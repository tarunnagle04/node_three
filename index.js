const express = require('express');
const app = express();

const middleWareOne = (req, res, next) => {
    console.log('We are in first middleware');
    next();
}

const middleWareTwoFucntion = (req, res, next) => {
   next();
}

app.use(middleWareOne);

app.get('/', middleWareTwo, (req, res) => {
    res.send('routings');
});

app.get('/first-no-middleware', (req, res) => {
    res.send('second route')
})

app.get('/second-no-middleware', middleWareTwo, (req, res) => {
    console.log('second')
})

app.listen(3000, () => {
    console.log('Server Running')
})