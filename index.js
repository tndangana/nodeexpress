
const dotenv = require("dotenv");
dotenv.config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const db = require('./config/');
const environment = process.env.NODE_ENV; // development
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocumentation = YAML.load('./swagger.yaml');


if (environment !== 'production') {
    app.use(logger('dev'));
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));


const port = process.env.PORT || 3000;
const router = require('./router')
// crypto.randomBytes(64).toString('hex');


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(db.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
router.register(app);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.listen(port, () => {
    console.log(`Server running successfully on ${port}`)
})


