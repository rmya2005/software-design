import ILogger from "./ILogger";
import chalk from "chalk";

export default class ConsoleLogger implements ILogger {
  Log(message: string): void {
    console.log(chalk.green(message));
  }

  Error(message: string): void {
    console.log(chalk.red(message));
  }

  Warn(message: string): void {
    console.log(chalk.yellow(message));
  }
}
