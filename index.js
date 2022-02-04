const express = require('express')
const format = require('date-format')

const app = express();

const PORT = 4000 || process.env.PORT

app.get('/', (req,res) => {
    res.status(201).send("<h1>Hello from backend</h1>");
})

app.get('/api/v1/instagram', (req,res) => {
    const instaSocial={
        "username": 'instagram',
        "followers": 60,
        "follow": 50,
        "date": format.asString('dd-MM-yyyy hh:mm:ss', new Date())
    }

    res.status(200).json(instaSocial);
})

app.get('/api/v1/facebook', (req,res) => {
    const facebookSocial={
        "username": 'facebook',
        "followers": 60,
        "follow": 50,
        "date": format.asString('dd-MM-yyyy hh:mm:ss', new Date())
    }

    res.status(200).json(facebookSocial);
})

app.get('/api/v1/linkedin', (req,res) => {
    const linkedinSocial={
        "username": 'linkedin',
        "followers": 60,
        "follow": 50,
        "date": format.asString('dd-MM-yyyy hh:mm:ss', new Date())
    }

    res.status(200).json(linkedinSocial);
})

app.get('/api/v1/:token', (req,res) => {
    res.status(200).json({"params": req.params.token})
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})