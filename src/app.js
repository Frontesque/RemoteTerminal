//---   Config   ---//
const settings = {
    web: {
        port: 8080
    },
    host: {

    }
}

//---   Imports   ---//
require('colors');
const fs = require('fs');

//---   Express   ---//
const express = require('express');
const app = express();
app.use('/', express.static('./src/live'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//---   Start Server   ---//
console.log(`RemoteTerminal - ${settings.web.port} | starting`.bold.green);
app.listen(settings.web.port, () => console.log(`RemoteTerminal - ${settings.web.port}  | started- port: ${settings.web.port}`.bold.green));

//---   Request Routing   ---//
fs.readdirSync('./src/router/api').forEach(file => {
    require(`./router/api/${file}`)(app, settings);
    console.log(`[API Loaded]`.magenta, `api.${file.split(".")[0]}`.bold.cyan);
});
fs.readdirSync('./src/router/web').forEach(file => {
    require(`./router/web/${file}`)(app, settings);
    console.log(`[WebUI Loaded]`.magenta, `api.${file.split(".")[0]}`.bold.cyan);
});

/* hacker smh */