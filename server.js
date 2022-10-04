const app = require('./src/app');
const mongoose = require('mongoose');
require('dotenv').config();

const { PORT = 3000, DB_HOST } = process.env;

mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT || 3000, () => {
        console.log(`Database connection successful on port ${MAIN_PORT}`)
    })
    )
    .catch(err => {
        console.error(err)
        process.exit(1)
    });



    // mongoose.connect(DB_HOST)
    // .then(() => app.listen(MAIN_PORT, () => {
    //     console.log(`Database connection successful on port ${MAIN_PORT}`)
    // })
    // )
    // .catch(err => {
    //     console.error(err)
    //     process.exit(1)
    // });
