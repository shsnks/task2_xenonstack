const express = require('express');
const bodyParser = require('body-parser');
// Cross-Origin resource sharing
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const port = process.env.PORT || 5001;

async function connectDb() {
    const dburl = "mongodb+srv://pjadmin2154:Le32Jxpab0z2pC0g@cluster0.dwjvq.mongodb.net/"

    mongoose.connect(dburl,
        { useNewUrlParser: true, useUnifiedTopology: true }, err => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Database Connected')
            }
        });
}

connectDb()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

const api = require('./routes/routes');
app.use('/', api);

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'ooops! This route does not exist'
    });
});

app.listen(port, () => {
    console.log(`BACK_END_SERVICE_PORT: ${port}`);
}
);

module.exports = connectDb