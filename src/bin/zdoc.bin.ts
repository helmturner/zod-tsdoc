#!/usr/bin/env node
import { program } from "@commander-js/extra-typings";
import packgeJSON from "../../package.json";
import { run as jscodeshift } from "jscodeshift/src/Runner.js";

import path from "node:path";
import { Dirent, readFile, readdir } from "node:fs";

const transformPath = path.resolve(".", "dist", "src", "transform.js");

program
  .version(packgeJSON.version)
  .option("-w --watch", "Watch for changes")
  .option("--dry-run", "Do not write to files, only log the output")
  .option(
    "-i, --ignore-pattern <pattern>",
    "Ignore files that match the pattern. Can specify multiple patterns by using '-i' more than once",
    (val) => val.split(","),
  )
  .argument(
    "[directories...]",
    "Paths of directories to search for files to transform",
    (val) => val.split(","),
  )
  .action(async (paths, options) => {
    paths.forEach(async (dir: string) =>
      readdir(
        path.resolve(dir),
        { withFileTypes: true, encoding: "utf-8", recursive: true },
        (err, files) => {
          if (err) throw err;

          jscodeshift(
            transformPath,
            files
              .filter(isFile)
              .map((file) => path.resolve(file.path, file.name))
              .filter(/\.(m|c)?ts|tsx/.test)
              .filter((file) => !options.ignorePattern.some((pattern) => file.match(pattern))),
            options,
          );
        },
      ),
    );
  })
  .parse(process.argv);

const isFile = (dir: Dirent) => dir.isFile();
