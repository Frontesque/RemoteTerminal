function commandHandler(command) {
    if (command.toLowerCase() == "clear") {
        document.getElementById('terminalBody').innerHTML = "<p>+ Cleared</p>";
        return false;
    } else if (command.toLowerCase() == "help") {
        document.getElementById('terminalBody').innerHTML = `
        <p>+ All windows command prompt commands, PLUS</p>
        <p>+ help: Shows this output</p>
        <p>+ clear: Clears the terminal</p>
        <p>+ msg "{title}" "{description}": Opens a message box popup with the given text</p>
        ${document.getElementById('terminalBody').innerHTML}`;
        return false;
    } else if (command == "") {
        document.getElementById('terminalBody').innerHTML = `
        <p>+ Please enter a command</p>
        ${document.getElementById('terminalBody').innerHTML}`;
        return false;
    } else if (command.startsWith("msg")) {
        send(`powershell -Command "& {Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('${command.split("\"")[3]}', '${command.split("\"")[1]}', 'OK', [System.Windows.Forms.MessageBoxIcon]::Information);}`)
        return false;
    }
    return true;
}