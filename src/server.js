const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const checkConnection = require('./models/dbConn');

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const postsRoutes = require('./routes/v1/postsRoutes');

app.use('/posts', postsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  checkConnection();
});
