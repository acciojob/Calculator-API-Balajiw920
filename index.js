// Add the Calculator APIs

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});

//your code here
app.post('/add', (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        })
    }

    if (num1 < -1000000 || num2 < -1000000 || num1 + num2 < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    return res.json({
        status: 'success',
        message: 'The sum of the given numbers',
        result: num1 + num2
    })
})

app.post('/sub', (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        })
    }

    if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if (num1 > 1000000 || num2 > 1000000 || num1 - num2 > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    return res.json({
        status: 'success',
        message: 'The difference of the given numbers',
        result: num1 - num2
    })
})

app.post('/multiply', (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        })
    }

    if (num1 < -1000000 || num2 < -1000000 || num1 * num2 < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if (num1 > 1000000 || num2 > 1000000 || num1 * num2 > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    return res.json({
        status: 'success',
        message: 'The product of given numbers',
        result: num1*num2
    })
})

app.post('/divide', (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        })
    }

    if (num2 === 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Cannot divide by zero'
        })
    }

    if (num1 < -1000000 || num2 < -1000000 || num1 / num2 < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if (num1 > 1000000 || num2 > 1000000 || num1 / num2 > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    return res.json({
        status: 'success',
        message: 'The division of the given numbers',
        result: num1 / num2
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

module.exports = app;
