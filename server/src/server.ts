import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});