function runCommand(command) {
    append(`<p><span class="preSend">🠔</span> ${command}</p>`);
    if (!commandHandler(command)) {
        return;
    }
    send(command);
}