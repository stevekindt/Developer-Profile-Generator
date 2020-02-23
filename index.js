const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");
const options = { format: "Letter", charset: "utf-8" };
const htmlPdf = require("html-pdf-chrome");

const questions = [
  {
    type: "input",
    message: "Enter your GitHub username.",
    name: "username"
  },
  {
    type: "list",
    message: "What is your favorite color?",
    name: "color",
    choices: ["blue", "red", "green", "yellow"]
  }
];

function generate() {
  inquirer.prompt(questions).then(function(response) {
    console.log(response);
    favColor = response.color;

    const queryURL = `https://api.github.com/users/${response.username}`;

    axios
      .get(queryURL)
      .then(function(answer) {
        console.log(answer.data);
        answer.data.color = favColor;

        fs.writeFile("index.html", generateHTML(answer.data), function(err) {
          if (err) {
            throw err;
          } else {
            console.log("success!");
            htmlPdf
              .create(generateHTML(answer.data), options)
              .then(pdf => pdf.toFile("resume.pdf"));
            htmlPdf.create(generateHTML(answer.data), options).then(pdf => pdf.toBase64());
            htmlPdf.create(generateHTML(answer.data), options).then(pdf => pdf.toBuffer());
          }
        });
      });
  });
}

generate();
