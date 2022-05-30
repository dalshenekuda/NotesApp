const express = require('express') ;
const dotenv = require( 'dotenv');
const mongoose = require( 'mongoose');
const  noteRouter = require('./router/noteRouter')

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/note', noteRouter);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        app.listen(port, () => {
            console.log(`Serve at http://localhost:${port}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start()
