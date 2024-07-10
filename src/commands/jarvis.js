const { Command } = require('@oclif/core');
const axios = require('axios');
const inquirer = require('inquirer');
const figlet = require('figlet');
const execPromise = require('util').promisify(require('child_process').exec);

const headingTitle = `Welcome to AIO-Jarvis-CLI`;
const commandTitle = `Ask Jarvis:`;
const shutDownMessage = `Shutting down Jarvis. BYE!`;
const loaderMessage = `Jarvis is thinking...`;
const apiErrorMessage = `Jarvis is having trouble connecting to the server. Please try again later.`;
const processCompleteMessage = `\n Command execution completed! \n`;
const keyboardInterruptMessage = `\n Keyboard Interrupt shutting down now! \n`;

// will later use with oclif
class JarvisCommand extends Command {

    async displayTitle() {
        const chalk = (await import('chalk')).default;
        const boxen = (await import('boxen')).default;

        figlet.text(headingTitle, (err, data) => {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            // Style the header with chalk and boxen
            const styledHeader = chalk.green(data);
            const boxedHeader = boxen(styledHeader, {
                padding: 1,
                margin: 1,
                borderStyle: 'round',
                borderColor: 'magenta',
            });
            this.log(boxedHeader);
        });
    }
    async run() {
        await this.displayTitle();

        const chalk = (await import('chalk')).default;
        const ora = (await import('ora')).default;

        const spinner = ora({ text: '', color: 'cyan' });

        while (true) {
            const { user_input } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'user_input',
                    message: chalk.green(commandTitle),
                },
            ]);

            if (user_input.toLowerCase() === 'quit') {
                this.log(chalk.red(shutDownMessage));
                break;
            }

            spinner.start();

            spinner.text = loaderMessage;

            let response;
            try {
                response = await axios.post('http://localhost:8000/suggestaiocommand', {
                    input_str: user_input,
                }, {
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
            } catch (error) {
                this.log(chalk.red(apiErrorMessage));
                continue;
            }

            spinner.stop();

            const commands = response.data.commands.map(item => ({
                name: `${chalk.blue(item.command)} - ${chalk.yellow(item.description)}`,
                value: item.command,
            }));

            const { selectedCommand } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'selectedCommand',
                    message: chalk.green('\nSelect an option:'),
                    choices: commands,
                },
            ]);

            const editedCommand = await this.inlineEdit(selectedCommand);

            if (editedCommand) {
                await this.executeCommand(editedCommand);
                continue;
            }
        }
    }

    async inlineEdit(initialValue) {

        const ansiEscapes = (await import('ansi-escapes')).default;
        const chalk = (await import('chalk')).default;

        return new Promise((resolve) => {
            let currentValue = initialValue;
            let cursorPos = currentValue.length;

            const render = () => {
                process.stdout.write(ansiEscapes.eraseLines(1));
                process.stdout.write(chalk.whiteBright.bold(currentValue));
                process.stdout.write(ansiEscapes.cursorMove(-currentValue.length + cursorPos, 0));
            };

            process.stdin.setRawMode(true);
            process.stdin.resume();
            process.stdin.setEncoding('utf8');

            render();

            process.stdin.on('data', (key) => {
                if (key === '\u0003') { // Ctrl+C
                    process.stdin.setRawMode(false);
                    process.stdin.pause();
                    // resolve(currentValue);
                    this.log(chalk.red.bold(keyboardInterruptMessage));
                    process.exit();
                } else if (key === '\r') { // Enter
                    process.stdin.setRawMode(false);
                    process.stdin.pause();
                    console.log();
                    resolve(currentValue);
                } else if (key === '\u007F') { // Backspace
                    if (cursorPos > 0) {
                        currentValue = currentValue.slice(0, cursorPos - 1) + currentValue.slice(cursorPos);
                        cursorPos--;
                    }
                } else if (key === '\u001b[C') { // Right arrow
                    if (cursorPos < currentValue.length) cursorPos++;
                } else if (key === '\u001b[D') { // Left arrow
                    if (cursorPos > 0) cursorPos--;
                } else if (key.length === 1 && key >= ' ' && key <= '~') { // Printable characters
                    currentValue = currentValue.slice(0, cursorPos) + key + currentValue.slice(cursorPos);
                    cursorPos++;
                }
                // render();
            });
        });
    }

    async executeCommand(command) {
        const ora = (await import('ora')).default;
        const chalk = (await import('chalk')).default;
        const spinner = ora({ text: `Executing command: ${command}`, color: 'cyan' }).start();
        try {
            const { stdout, stderr } = await execPromise(command);
            // Stop spinner and log output
            spinner.stop();
            if (stdout) {
                this.log(chalk.green(`\n Output:\n${stdout}\n`));
            }
            if (stderr) {
                this.log(chalk.red(`\n Error:\n${stderr}\n`));
            }
        } catch (error) {
            spinner.stop();
            this.log(chalk.red(`Error executing command: ${error.message}`));
        } finally {
            this.log(chalk.yellow.bold(processCompleteMessage));
        }
    }
}

JarvisCommand.description = `Describe the command here
...
Extra documentation goes here
`;

module.exports = JarvisCommand;