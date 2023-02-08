const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/views/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});


app.get("/views/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

