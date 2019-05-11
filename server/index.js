const express = require('express');

const app = express();
// Import the library:
var cors = require('cors');
app.use(cors());
require('./routes/dataRoutes')(app);
// Then use it before your routes are set up:

const PORT = process.env.PORT || 5000;
app.listen(PORT);
