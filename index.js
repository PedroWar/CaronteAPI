var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var configRouter = require('./src/controllers/routes');
var models = require('./models/DBconfig')

var app = express();
var router = express.Router();
 
app.set('port', (process.env.PORT || 2000));

// app.use(function requireHTTPS(req, res, next) {
// 	// The 'x-forwarded-proto' check is for Heroku
// 	if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === "production") {
// 		return res.redirect('https://' + req.get('host') + req.url);
// 	}
// 	next();
// });

app.use('/api/v1', router);
router.use(bodyParser.json({limit: '10mb'}));

configRouter.configura(router);

// Configura diretórios de logs
if (!fs.existsSync("logs"))
	fs.mkdirSync("logs");

const force = false;
models.sequelize.sync({ force }).then(() => {
	app.listen(app.get('port'), function () {
		console.log('Node app is running on port', app.get('port'));
	});
});

