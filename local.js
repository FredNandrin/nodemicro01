const app  = require('./src/index');

const port = 3000;
console.log(app);
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});