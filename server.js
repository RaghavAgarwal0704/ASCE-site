const bodyParser = require("body-parser"),
    express = require("express"),
    path = require("path");
// mongoose = require("mongoose"),
app = express();
require("dotenv").config();
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening to ${PORT} 🎊`);
});
