const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    if (req.query.x) {
        res.send(req.query.x)
    }
    else {
        res.send('Hello World!')
    }
});
app.get('/user/:id', (req, res) => {
    res.send(`getting user ${req.params.id}`)
});

app.post('/user/data', (req, res) => {
    console.log(req)
    res.send(`id is ${req.body.id}`)
});

app.delete('/ticket/:id', (req, res) => {
    res.send(`deleting ticket ${req.params.id}`)
});

app.patch('/employee/:id', (req, res) => {
    res.send(`patching employee ${req.params.id}`)
});

app.put('/organization/:id', (req, res) => {
    res.send(`putting organization ${req.params.id}`)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});