import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "DIRHAM": 0.013,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "DIRHAM": 3.67,
        "PKR": 278.57
    },
    "DIRHAM": {
        "USD": 0.27,
        "DIRHAM": 1,
        "PKR": 75.84
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "DIRHAM", "USD"],
        message: "Please select your currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "DIRHAM", "USD"],
        message: "Please select conversion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter your conversion amount"
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid input");
}
