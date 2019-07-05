const express = require('express');
const app = express();
const withAuth = require('./middleware/authMiddleware');
const path = require('path')
const keys = require('./config/keys');
// Import the library:
const cors = require('cors');
app.use(cors());
const cookieParser = require('cookie-parser');
var useragent = require('express-useragent');

app.use(cookieParser());
app.use(express.json());
app.use(useragent.express());

var dataRoutes = require('./routes/dataRoutes');
app.use('/api/data/', dataRoutes);

// Then use it before your routes are set up:
var testRoutes = require('./routes/testRoutes');
app.use('/api/test', testRoutes);

var authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.get('/api/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});
app.use(express.static(path.join(__dirname, '/public')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})
const PORT = process.env.PORT || 5000;
app.listen(PORT);
