const express = require('express');
const helmet = require('helmet');
const app = express();

//Task 1 Install and Require helmet
const helmet = require('helmet');

//Task 2 Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
app.use(helmet.hidePoweredBy());

//Task 3 Mitigate the Risk of Clickjacking with helmet.frameguard()
app.use(helmet.frameguard ({action: 'DENY'}))

//Task 4 Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
app.use(helmet.xssFilter());

//Task 5 Avoid Inferring the Response MIME Type with helmet.noSniff()
app.use(helmet.noSniff());

//Task 6 Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
app.use( helmet.ieNoOpen());

//Task 7 Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
var ninetyDaysInSeconds = 90*24*60*60;
app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}));

//Task 8 Disable DNS Prefetching with helmet.dnsPrefetchControl()
app.use(helmet.dnsPrefetchControl());

//Task 9 Disable Client-Side Caching with helmet.noCache()
app.use(helmet.noCache());

//Task 10 
app.use(helmet.contentSecurityPolicy({directives:{defaultSrc: ["'self'"], scriptSrc: ["'self'", "trusted-cdn.com"]}}));















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
