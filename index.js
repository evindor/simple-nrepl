var net = require("net"),
    repl = require("repl");

module.exports = function(port) {
    repl.start({
        prompt: "> ",
        input: process.stdin,
        output: process.stdout
    });

    net.createServer(function (socket) {
        var remote = repl.start({
            prompt: "",
            input: socket,
            output: socket
        });
    }).listen(port, "localhost");
}
