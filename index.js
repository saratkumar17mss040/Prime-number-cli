const chalk = require('chalk');
const readlineSync = require('readline-sync');

const log = console.log;

log(
	chalk.green.bgYellow.bold(
		'\n\t Welcome to ' + chalk.blue.underline.bold('Prime number checker ')
	)
);

const name = readlineSync.question(chalk.green('\n Please enter your name: '));

askBirthday();

function askBirthday() {
	const dob = readlineSync.question(
		chalk.green(
			'\n Please enter your birthday' +
				chalk.white.bold(' only in DD/MM format:')
		)
	);
	const dobNumber = Number(dob.replace('/', ''));

	if (dob[2] !== '/' || isNaN(dobNumber) || dobNumber <= 0 || dobNumber === 1) {
		log(chalk.red('\n Please enter the correct format !'));
		askBirthday();
	} else {
		log(checkPrime(dobNumber));
	}
}

function checkPrime(dobNumber) {
	const dobString = dobNumber.toString();
	let date = undefined;
	let month = undefined;
	// 1 will be jan then 2 will be feb and so on
	const monthDays = {
		1: 31,
		2: 29,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 31,
		11: 30,
		12: 31,
	};

	if (dobString.length === 3) {
		date = parseInt(dobString[0]);
		month = parseInt(dobString.slice(1));
	} else if (dobString.length === 4) {
		date = parseInt(dobString.slice(0, 2));
		month = parseInt(dobString.slice(2, 4));
	}

	if (monthDays[month] >= date) {
		var sqrtNumber = Math.sqrt(date);
		for (let i = 2; i < sqrtNumber; i++) {
			if (date % i === 0) {
				return chalk.red(
					`\n ${name} your birthday ${date} is not a prime number !`
				);
			}
		}
		return chalk.red(`\n ${name} your birthday ${date} is a prime number !`);
	} else {
		log(
			chalk.red(
				'\n Please enter a valid day or month or make sure the format is correct !'
			)
		);
		askBirthday();
	}
}
