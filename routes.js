let bodyParser = require('body-parser');
let storeController = require('./controllers/storeController');
const { Store } = require('./OnlineStore');

let routes = function () {
    let router = require('express').Router();

    router.use(bodyParser.urlencoded({
        extended: true,
    }))

    router.get('/css/*', function (req, res) {
        res.sendFile(`${__dirname}/views/${req.originalUrl}`);
    })
    router.get('/js/*', function (req, res) {
        res.sendFile(`${__dirname}/views/${req.originalUrl}`);
    })
    router.get('/resources/happy-intersection-01.png', function (req, res) {
        res.sendFile(`${__dirname}/resources/happy-intersection-01.png`);
    })

    router.get('/', function (req, res) {
        res.sendFile(`${__dirname}/views/index.html`);
    });

    router.get('/storeinfo', function (req, res) {
        res.send(storeController.getInfo());
    })

    router.get('/inventory', function (req, res) {
        res.send(storeController.getInventory());
    })
    router.post('/inventory', function (req, res) {
        let data = req.body;

        let item = {
            name: data.itemName,
            price: data.itemPrice,
        }

        storeController.addItem(item);

        res.redirect('back');
    })

    router.get('/storeupdate', function (req, res) {
        res.sendFile(`${__dirname}/views/editstore.html`);
    });

    router.post('/storeupdate', function (req, res) {
        let data = req.body;

        storeController.updateInfo(new Store(data.storename, data.storedescription));

        res.redirect('back');
    })

    router.get('/delete', function (req, res) {
        let itemname = req.params.itemname;

        storeController.removeItem(itemname);

        res.redirect('back');
    })

    return router;
}

module.exports = routes();