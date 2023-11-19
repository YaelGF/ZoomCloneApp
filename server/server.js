const express = require('express');
const http = require('http');
const { v3: uudiv4} = require('uuid');
const cors = require('cors');
const twilio = require('twilio');

const PORT = process.env.PORT || 5002;

const app = express();

const server = http.createServer(app);

app.use(cors());

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



app.get('/api/v1/create-room', (req, res) => {
    res.send({ link: uudiv4() });
    }
);
