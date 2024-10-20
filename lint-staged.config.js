// lint-staged.config.js

import path from "node:path";
import chalk from "chalk";
import readlineSync from "readline-sync";

const allowExt = [".ts", ".tsx", ".js", ".json"];
const yes = ["yes", "y", "ye", ""];

export default {
  "*": (files) => {
    const cwd = process.cwd();
    const target = files.filter((file) => allowExt.some((ext) => file.endsWith(ext)));
    const relativeFiles = target.map((file) => path.relative(cwd, file));
    const match = relativeFiles.filter((file) => !file.includes("node_modules"));

    if (match.length === 0) {
      console.log(chalk.cyan("📝 No files to be linted"));
      return [];
    }

    console.log(chalk.cyan(`📝 ${match.length} Files to be linted :`));
    process.stdout.write("\n");
    console.log(match.map((file) => `${chalk.white("-")} ${chalk.green(file)}`).join("\n"));
    process.stdout.write("\n");

    const response = readlineSync.question(chalk.yellow("Are you sure you want to continue? ([Yes]/No): "));

    if (yes.includes(response.toLowerCase())) {
      const mapFiles = match.map((file) => `"${file.replaceAll('"', '\\"')}"`).join(" ");
      return [
        `biome check --write --unsafe --no-errors-on-unmatched --diagnostic-level=error --files-ignore-unknown=true ${mapFiles}`,
      ];
    }
    process.exit(1);
  },
};
