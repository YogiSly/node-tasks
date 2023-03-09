#!/usr/bin/env node
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const quantity = Math.floor((Math.random()*100));
const rl = readline.createInterface({ input, output });
let answer = await rl.question('Угадайте число от 1 до 100:  ');

const checkQuantity = async () =>{
  if (answer == quantity) {
    console.log('Бинго!!!');
    rl.close();
  } else if (answer > quantity) {
    answer = await rl.question('Загаданное число меньше:  ');
    checkQuantity();
  } else if (answer < quantity) {
    answer = await rl.question('Загаданное число больше:  ');
    checkQuantity();
  }
}

checkQuantity();

