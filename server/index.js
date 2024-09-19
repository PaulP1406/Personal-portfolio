require('dotenv').config();

const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose')

const Nodemailer = require('nodemailer');

const app = express();

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
    text: `${message}${phone}`
  };

  try {
    transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
});


// Starting the express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
