var cors            = require('cors'),
    http            = require('http'),
    express         = require('express'),
    bodyParser      = require('body-parser')
    config          = require('./config');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

app.use(require('./routes'));

var port = config.port;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

