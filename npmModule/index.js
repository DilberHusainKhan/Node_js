import  chalk  from "chalk";

const log = console.log;

log(chalk.blue('Hello world!'));
log(chalk.red.bgRed.bold('Hello world!'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
