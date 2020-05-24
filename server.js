let express = require('express');
let app = express();
let port = 3000;

let routes = require('./routes');
app.use('/', routes);

app.listen(port, function () {
    console.log(`Server started on port ${port}`);
})