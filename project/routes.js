let bodyParser = require('body-parser');
//import controllers here
let storeController = require('./controllers/storeController');
let userController = require('./controllers/userController');

let database = require('./models/database');
database.connect();

let router = require('express').Router();

router.use(bodyParser.urlencoded({
    extended: true,
}));
router.get('/css/*', function (req, res) {
    res.sendFile(`${__dirname}/views/${req.originalUrl}`);
});
router.get('/js/*', function (req, res) {
    res.sendFile(`${__dirname}/views/${req.originalUrl}`);
});
router.get('/static/*', function (req, res) {
    console.log()
    res.sendFile(`${__dirname}/views/${req.originalUrl}`);
});
router.get('/resources/*', function (req, res) {
    console.log('getting resource');
    res.sendFile(`${__dirname}/${req.originalUrl}`);
});

//index
router.get('/', function (req, res) {
    res.sendFile(`${__dirname}/views/index.html`);
})

//login and register
router.get('/register', function (Req, res) {
    res.sendFile(`${__dirname}/views/register.html`);
})
router.post('/register', function (req, res) {
    let data = req.body;

    let newUser = {
        username: data.username,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        image: data.image,
    };

    userController.registerUser(newUser);
    console.log('new user added to DB');
    res.redirect('back');
})


module.exports = router;
