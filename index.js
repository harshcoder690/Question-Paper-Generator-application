const express = require("express");
const QuestionPaper = require("./routes/questionPaper");
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const Port = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(QuestionPaper);


app.listen(Port, () => {
    console.log(`server is connected on port ${Port}`)
})