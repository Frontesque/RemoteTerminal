document.getElementById('terminalSend').onclick = function() {
    const command = document.getElementById('terminalInputText').value;
    document.getElementById('terminalInputText').value = "";
    document.getElementById('terminalBody').innerHTML = `<p>🠔 ${command}</p>${document.getElementById('terminalBody').innerHTML}`

    if (!commandHandler(command)) {
        return;
    }

    send(command);
}

document.getElementById('terminalInputText').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("terminalSend").click();
    }
}); 