const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
var sign_s3 = require('./controllers/sign_s3');
const routes = require("./routes");



const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API and view routes
app.use('/sign_s3', sign_s3.sign_s3);
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dogsDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

// mongoose.connect("mongodb://localhost/dogsDB");

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
