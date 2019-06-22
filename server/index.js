const express = require('express');
const app = express();
const withAuth = require('./middleware/authMiddleware');

const keys = require('./config/keys');
// Import the library:
const cors = require('cors');
app.use(cors());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());

require('./routes/dataRoutes')(app);
// Then use it before your routes are set up:
var testRoutes = require('./routes/testRoutes');
app.use('/api/test', testRoutes);

var authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});
app.get('/api/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
