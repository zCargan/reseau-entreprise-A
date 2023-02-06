const cors = require('cors');
const express = require('express');

const Route = require('./routes/routes');
const app = express();

app.use(express.json());

app.use(cors({origin: "http://127.0.0.1:3000", credentials: true}));
//utiliser le router nodejs
app.use('/',Route);

app.listen(5000, ()=>{console.log("server running on port 5000")})

module.exports = app