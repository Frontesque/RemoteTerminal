const path = require('path');

module.exports = (app, settings) => {
    app.post('/run', (req, res) => {
        const command = req.body.command;

        //---   Respond Function   ---//
        function respond(output) {
            res.send({
                input: command,
                output: output
            });
        }
        //---   End Respond Function   ---//

        const { exec } = require("child_process");
        exec(command, (error, stdout, stderr) => {
            if (error) {
                respond(error.message);
                return;
            } else if (stderr) {
                respond(`stderr: ${stderr}`);
                return;
            }

            respond(stdout);

        });

    });
}