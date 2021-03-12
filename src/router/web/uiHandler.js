const path = require('path');
module.exports = (app, settings) => {
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(`./src/live/ui.html`));
    });
}