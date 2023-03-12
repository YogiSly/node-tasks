#!/usr/bin/env node
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionNumber = Math.round(Math.random()) + 1;
const win = "Вы выиграли!";
const lose = "Вы проиграли";
const date = Date();

const writeData = async (status, answer, name) => {
  const file = path.join(__dirname, name);
  const openData = await fsPromises.open("./" + name, "a+");
  const data = await openData.readFile("utf8");
  let newData = {};
  data ? (newData = JSON.parse(data)) : (newData = { log: [] });
  newData.log.push({ questionNumber, answer, status, date });
  fs.writeFileSync(file, JSON.stringify(newData));
};

const enterName = () =>
  rl
    .question("Введите название файла для записи результата - ")
    .then((fileName) => `${fileName}.json`);

rl.question("Угадайте Орёл или Решка(Орёл - 1, Решка - 2) - ").then(
  async (answer) => {
    if (answer == questionNumber) {
      console.log(win);
      const name = await enterName();
      writeData(win, answer, name);
      rl.close();
    } else {
      console.log(lose);
      const name = await enterName();
      writeData(lose, answer, name);
      rl.close();
    }
  }
);
