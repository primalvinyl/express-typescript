import http from 'http';
import app from './app';

// initialize web server with express api
const server = http.createServer(app);

// start server
const port = process.env.PORT || '8080';
server.listen(port, () => console.log(`Server started on port ${port}`));
