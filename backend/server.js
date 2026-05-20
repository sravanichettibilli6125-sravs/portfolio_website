const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const projects = [
  {
    title: "Number Guessing Game",
    description:
      "Developed a Python-based game where the user guesses a randomly generated number. Implemented loops and conditional statements to provide hints and track attempts.",
    technology: ["Python", "Loops", "Conditional Statements"]
  }
];

app.get("/", function(req, res) {
  res.send("Portfolio Backend Running Successfully");
});

app.get("/api/projects", function(req, res) {
  res.json(projects);
});

app.listen(5000, function() {
  console.log("Server started on port 5000");
});