function send(command) {
    //Handle Request
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Handle Request Response
            const res = JSON.parse(request.response).output;
            document.getElementById('terminalBody').innerHTML = `<p>➝ ${res}</p>${document.getElementById('terminalBody').innerHTML}`
        }
    };
    //Send Request
    request.open("POST", "/run");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify({"command": command}));
}