import  chalk  from "chalk";
import  validator  from "validator";

const log = console.log;

log(chalk.blue('Hello world!'));
log(chalk.red.bgRed.bold('Hello world!'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);


// Email validator using validator module
// const email = 'dilberjmi@gmail.com';
const arr =['dilber@gmail.com','abc.abc','123@gmail.234','Dilber@gmail'];
for (let index = 0; index < arr.length; index++) {
	const email = arr[index];
	const res = validator.isEmail(email);
	log(res? chalk.green.inverse(res):chalk.red.inverse(res));
	log(res? chalk.green.inverse(res):chalk.red.inverse(res));
}