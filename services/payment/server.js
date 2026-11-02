const http = require("http");

const PORT = process.env.PORT || 3004;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Payment service is running",
        service: "payment",
        port: PORT
    }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Payment service is running on port ${PORT}`);
});