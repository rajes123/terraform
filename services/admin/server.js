const http = require("http");

const PORT = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Admin service is running",
        service: "admin",
        port: PORT
    }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Admin service is running on port ${PORT}`);
});