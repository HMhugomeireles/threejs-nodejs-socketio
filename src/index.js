const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/public/index.html`);
})

io.on("connection", function(socket) {

});

httpServer.listen(3131);