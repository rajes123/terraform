const http = require("http");

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "User service is running",
        service: "user",
        port: PORT
    }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`User service is running on port ${PORT}`);
});