
const express = require('express');
const router = express.Router();

const welcome = (req, res) => {
    res.send('welcome page works')
}
const dashboard = (req, res) => {
    res.send('dashboard page works')
}
const logout = (req, res) => {
    res.send('logout page works')
}
const symbol = (req, res) => {
    if (req.body) {
        const values = Object.values(req.body);
        let response = 'added symbols: [';

        values.forEach(value => {
            console.log(value);
            response += `${value}, `;
        });
        res.send(`${response.slice(0, response.length-2)}]`);
    } else {
        res.send('no symbols');
    }
};

router.get('/', welcome);
router.get('/dashboard', dashboard);
router.get('/logout', logout);
router.post('/symbol',express.urlencoded({ extended: false }),symbol);


module.exports = router;