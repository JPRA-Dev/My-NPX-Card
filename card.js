const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

// clear the terminal before showing the npx card
clear()

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "How can i help you?",
        choices: [
            {
                // Use chalk to style headers
                name: `Send me an ${chalk.bold("email")}`,
                value: () => {
                    open("mailto:jpandrade.dev@example.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                         Joao Andrade"),
    handle: chalk.white("@jpandradedev"),
    fact: chalk.hex('#FF5733')('Junior Web Developer'),
    linkedin: chalk.hex('#00A1D9')("https://www.linkedin.com/in/jpandradedev"),
    github: chalk.hex('#787878')("https://github.com/JPRA-Dev"),
    npx: chalk.hex('#A1AB00')("npx jpandradedev"),

    labelFact: chalk.hex('#FF6262').bold("              Current title:"),
    labelLinkedin: chalk.hex('#629DFF').bold("       Linkedin:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("       GitHub:"),
    labelCard: chalk.hex('#FFF976').bold("                    Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelLinkedin}  ${data.linkedin}`,
        `${data.labelGitHub}  ${data.github}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Joao, I'm a Junior web developer and It technician. " 
        )}`,
        `${chalk.bold("I'm currently at BeCode studying to become a Web-Developer")}`,
        `${chalk.bold(
            "to be able use my skills and my interests in the digital world."
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue",
    }
);

// Show the boxen
console.log(me);

prompt(questions).then(answer => answer.action());