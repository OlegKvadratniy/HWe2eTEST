async function run() {
  const chalk = (await import('chalk')).default;
  console.log(chalk.blue('Hello, npm!'));
  console.log(chalk.red.bold('This is an important message.'));
  console.log(chalk.green('Success!'));
}

run();