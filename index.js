const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Implement your login logic here (e.g., DynamoDB interaction)

    // For demo, we'll just return success
    if (username === 'student1' && password === 'password') {
        res.json({ message: 'Login successful', attendance: 85, assignments: 90 });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Route to handle user signup
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Implement your signup logic here (e.g., DynamoDB interaction)

    // For demo, we'll just return success
    res.json({ message: 'Signup successful' });
});

// Catch-all route to serve index.html for all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});