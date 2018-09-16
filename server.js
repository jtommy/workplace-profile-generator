var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');

var express = require('express');

var app = express();
app.use(history());

app.use(express.static(__dirname + '/dist'));

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), () => {
  console.log(`ENV: ${process.env.NODE_ENV}`);
});
