// lint-staged.config.js

import path from "path";
import readlineSync from "readline-sync";
import chalk from "chalk";

export default {
  "*": (files) => {
    const cwd = process.cwd();
    const target = files.filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"));
    const relativeFiles = target.map((file) => path.relative(cwd, file));
    const match = relativeFiles.filter((file) => file.startsWith("src"));

    if (match.length === 0) {
      console.log(chalk.cyan("📝 No files to be linted"));
      return [];
    }

    console.log(chalk.cyan(`📝 ${match.length} Files to be linted :`));
    process.stdout.write("\n");
    console.log(match.map((file) => `${chalk.white("-")} ${chalk.green(file)}`).join("\n"));
    process.stdout.write("\n");

    let response = readlineSync.question(chalk.yellow("Are you sure you want to continue? ([Yes]/No): "));

    const yes = ["yes", "y", "ye", ""];

    if (yes.includes(response.toLowerCase())) {
      const mapFiles = match.map((file) => `"${file.replaceAll('"', '\\"')}"`).join(" ");
      return [`prettier --write --log-level warn ${mapFiles}`, `eslint --fix ${mapFiles}`];
    } else {
      process.exit(1);
    }
  },
};