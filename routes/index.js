const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.html');
});

router.get('/home', (req, res) => {
    res.render('home.html');
});

router.get('/contactenos', (req, res) => {
    res.render('contactenos.html');
});

router.get('/login', (req, res) => {
    res.render('login.html');
});

router.get('/quienes_somos', (req, res) => {
    res.render('quienes_somos.html');
});

module.exports = router;
