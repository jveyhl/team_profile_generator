// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");

// Constructors
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Get path to the dist directory
const DIST_DIR = path.resolve(__dirname, "dist");

// "file" parameter for fs.writeFile()
const outputPath = path.join(DIST_DIR, "index.html");

// Access function in template.js to generate HTML
const render = require("./src/template.js");

// Create empty arrays for team and id as place holders
const teamArray = [];
const idArray = [];

// Start application
function initApp() {
  // Prompt user to create a manager when application starts
  function addManager() {
    console.log("Let's build a team! We'll start with a Manager...");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Enter the Manager's name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name for the team Manager.";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "Enter the Manager's ID:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an ID for the team Manager.";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Enter an email address for the team Manager:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an email address for the team Manager.";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Please enter an office number for the team Manager",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an office number for the team Manager.";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        idArray.push(answers.managerId);

        // Add team members for the manager to manage
        addTeam();
      });
  }

  // Add team members for the manager to manage
  function addTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which team member would you like to add?",
          choices: ["Engineer", "Intern", "End application"],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            generateHTML();
        }
      });
  }

  // add an Engineer
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Enter the Engineer's name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name for the Engineer.";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "Enter the Engineer's ID:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an ID for the Engineer.";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Enter an email address for the Engineer:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an email address for the Engineer.";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Enter a user name for the Engineer:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a user name for the Engineer.";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        idArray.push(answers.engineerId);

        // Allow the user to add an Intern or end the application
        addTeam();
      });
  }

  // Add an Intern when selected
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Enter a name for the Intern:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name for the Intern.";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "Enter an ID for the Intern:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an ID for the Intern.";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "Enter an email address for the Intern:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an email address for the Intern.";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "Enter the Intern's school:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a school for the Intern.";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        idArray.push(answers.internId);

        // Allow the user to add an Engineer or end the application
        addTeam();
      });
  }

  function generateHTML() {
    // Create dist directory for index.html if it doesnt exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    console.log("Generating Team Profile.... ");
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
  }

  // Prompt user to create a manager when application starts
  addManager();
}

initApp();
