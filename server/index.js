require('dotenv').config();

const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose')

const Nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

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

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.get('/api/email', (req, res) => {
  res.json({ message: 'Email route' });
});


// Nodemailer setup:
app.post('/api/email', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  const transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    logger: true
  });

  const mailOptions = {
    from: email,
    to: "ducduy0308@gmail.com",
    subject: `Message from ${firstName} ${lastName}`,
    text: `${message}  Phone number: ${phone}`
  };

  try {
    transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Define the Quote model
const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String,
});

const Quote = mongoose.model('Quote', quoteSchema);

// API Routes for quotes
app.post('/api/quotes', async (req, res) => {
  const { name, quote } = req.body;

  try {
      const newQuote = new Quote({ name, quote });
      await newQuote.save();
      res.status(201).json(newQuote);
  } catch (err) {
      res.status(500).json({ error: 'Failed to save quote' });
  }
});

app.get('/api/quotes', async (req, res) => {
  try {
      const quotes = await Quote.find();
      res.status(200).json(quotes);
  } catch (err) {
      res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

// Starting the express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
