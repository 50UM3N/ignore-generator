#!/usr/bin/env node
const fs = require("fs");
const ignores = process.argv[1].split("index.js")[0] + "ignores";
const usage = `╻┏━╸┏┓╻┏━┓┏━┓┏━╸   ┏━╸┏━╸┏┓╻┏━╸┏━┓┏━┓╺┳╸┏━┓┏━┓
┃┃╺┓┃┗┫┃ ┃┣┳┛┣╸    ┃╺┓┣╸ ┃┗┫┣╸ ┣┳┛┣━┫ ┃ ┃ ┃┣┳┛
╹┗━┛╹ ╹┗━┛╹┗╸┗━╸   ┗━┛┗━╸╹ ╹┗━╸╹┗╸╹ ╹ ╹ ┗━┛╹┗╸
genig is a command line tool that generate gitignore file for specific programming language

Usage genig [option]
      genig [programing language]

Options:
 -v or --version                    version of the tool
 -h or --help                       help menu 

Documentation can be found in https://50um3n.github.io/ignore-generator`;

const ignoreFileName = ".gitignore";

function createFile(location) {
  fs.writeFile(location, "", (err, data) => {
    console.log("File is created");
  });
}

function checkExistence() {
  fs.access(ignoreFileName, (err) => {
    if (err) {
      console.log("File is not exist!!! Creating the file");
      createFile(ignoreFileName);
    } else {
      console.log("File is already exist");
      fs.rename(ignoreFileName, ".gitignore.bk", (err, data) => {
        console.log("Existing file is renamed to .gitignore.bk");
        createFile(ignoreFileName);
      });
    }
  });
}

switch (process.argv[2]) {
  case "node":
    checkExistence();
    genIgnore("Node.gitignore");
    break;
  case "c":
    checkExistence();
    genIgnore("C.gitignore");
    break;
  case "cpp":
    checkExistence();
    genIgnore("C++.gitignore");
    break;
  case "java":
    checkExistence();
    genIgnore("Java.gitignore");
    break;
  case "python":
    checkExistence();
    genIgnore("Python.gitignore");
    break;
  case "vs":
    checkExistence();
    genIgnore("VisualStudio.gitignore");
    break;
  case "ruby":
    checkExistence();
    genIgnore("Ruby.gitignore");
    break;
  case "Kotlin":
    checkExistence();
    genIgnore("Kotlin.gitignore");
    break;
  case "--version":
  case "-v":
    const version = require("./package.json");
    console.log("v" + version.version);
    break;
  case "--help":
  case "-h":
    console.log(usage);
    break;
  default:
    console.log(usage);
}

function genIgnore(fname) {
  fs.readFile(`${ignores}/${fname}`, "utf8", (err, data) => {
    fs.appendFile(ignoreFileName, data, (err, da) => {
      if (da) {
        console.log("File created");
      }
    });
  });
}
