#!/usr/bin/env node
const fs = require("fs");
const fsPromises = fs.promises;
const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите название файла для получения статистики - ").then(async (answer) => {
    const openData = await fsPromises.open("./" + answer + ".json");
    const data = await openData.readFile("utf8");
    openData.close();
    const newData = JSON.parse(data);
    const winQuantity = newData.log.filter(p=>p.status === "Вы выиграли!").length;
    console.log('Общее количество партий - ',newData.log.length);
    console.log('Количество выигранных/проигранных партий - ',winQuantity + '/' + (newData.log.length - winQuantity));
    console.log('Процентное соотношение выигранных партий - ', winQuantity/(newData.log.length - winQuantity));
    rl.close();
})