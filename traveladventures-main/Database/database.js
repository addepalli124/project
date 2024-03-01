/*

const{createPool} = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Create MySQL connection pool
const pool = createPool({
    host: "localhost",
    user: "root",
    password:"Mysql@1213",
    database:"MyConnection",
    connectionLimit: 10

})


pool.query('select * from registration',(error, results, fields)=>{

    if(error){
        console.error('Error executing query:', error);
        return;
    }
    console.log('Query results', results);
});









// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML registration form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/registration.html');
});

// Handle registration form submission
app.post('/register', (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    // Insert the form data into the database
    pool.query('INSERT INTO registration (fname, lname, email, password, confirmpassword) VALUES (?, ?, ?, ?, ?)',
        [fname, lname, email, password, confirmPassword],
        (error, results) => {
            if (error) {
                console.error('Error inserting data:', error);
                res.send('Error registering user');
            } else {
                console.log('User registered successfully');
                res.send('User registered successfully');
            }
        }
    );
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
*/





// Import required modules
const express = require('express');
const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql@1213',
  database: 'MyConnection'
});

// Create an Express app
const app = express();

app.use(express.static('public'));

// Middleware to parse JSON requests
app.use(express.json());

// Route for handling signup POST requests
app.post('/signup', (req, res) => {
  // Extract user details from the request body
  const { fname, lname, email, password } = req.body;

  // SQL query to insert user details into the 'registration' table
  const sql = "INSERT INTO registration (fname, lname, email, password) VALUES (?, ?, ?, ?)";
  
  // Execute the SQL query with user input values
  connection.query(sql, [fname, lname, email, password], (error, results) => {
    if (error) {
      console.error('Error inserting user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // User successfully inserted into the database
    console.log('User inserted successfully');
    return res.status(200).json({ message: 'User signed up successfully' });
  });
});

//Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

