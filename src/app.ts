import express, { Application } from 'express';

// initialize express service
const app: Application = express();

// routes
app.get('/', (req, res) => res.send('Hello World'));
app.get('/foo', (req, res) => res.json({ bar: 'This API is lit!' }));

export default app;
