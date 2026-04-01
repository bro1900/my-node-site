const express = require('express')

const nodemailer = require("nodemailer");

const app = express()

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "renctestudent@gmail.com",
    pass: "qvkutajqvkfrmjkf"
  }
});
app.post('/send', async (req, res) => {
  const { fullName, email, reason, message } = req.body;
  try {
    await transporter.sendMail({
      from: "isaaccuda@gmail.com",
      to: "renctestudent@gmail.com",
      subject: `Form: ${reason}`,
      text: `Name: ${fullName}
Email: ${email}
Reason: ${reason}

Message: ${message}`
    });
    res.send("Email sent!");
  } catch (err) {
    res.send("Error sending email");
  }
});


const PORT = 3000

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})

app.get('/cat', (req, res) => {
  res.sendFile(__dirname + '/public/cat.html')
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})