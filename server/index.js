require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((err) => {
    console.log(err)
  });

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Starting the express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
