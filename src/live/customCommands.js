function append(textToAppend) {
    document.getElementById('terminalBody').innerHTML = document.getElementById('terminalBody').innerHTML + textToAppend;
}

function commandHandler(command) {
    if (command.toLowerCase() == "clear") {
        document.getElementById('terminalBody').innerHTML = "<p>+ Cleared</p>";
        return false;


    } else if (command.toLowerCase() == "help") {
        append(`
        <p>+ All windows command prompt commands, PLUS</p>
        <p>+ help: Shows this output</p>
        <p>+ clear: Clears the terminal</p>
        <p>+ msg "{title}" "{description}": Opens a message box popup with the given text</p>
        <p>+ repeat {interval}, {command}: Sends a command every x miliseconds</p>`)
        return false;


    } else if (command == "") {
        append(`+ Please enter a command</p>`);
        return false;


    } else if (command.startsWith("msg")) {
        send(`powershell -Command "& {Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('${command.split("\"")[3]}', '${command.split("\"")[1]}', 'OK', [System.Windows.Forms.MessageBoxIcon]::Information);}`)
        return false;


    } else if (command.startsWith("repeat")) {
        const repeatInterval = command.split(" ")[1].split(",")[0];
        const repeatCommand = command.split(", ")[1];
        append(`+ Repeating '${repeatCommand}' every ${repeatInterval}ms. Refresh the page to cancel.`)
        function repeatCommandFunction() {
            runCommand(repeatCommand);
            setTimeout(repeatCommandFunction, repeatInterval);
        }
        repeatCommandFunction()
        return false;


    }
    return true;
}