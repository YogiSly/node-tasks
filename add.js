#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const date = new Date();

const add = yargs(hideBin(process.argv))
.option('d', {
  alias: "day",
  type: "number",
})
.option('m', {
  alias: "month",
  type: "number",
})
.option('y', {
  alias: "year",
  type: "number",
})
.argv;

if (add.year) {
  date.setFullYear(date.getFullYear() + add.year);
  console.log(date);
} else if (add.year) {
  date.setMonth(date.getMonth() + add.month);
  console.log(date);
} else if (add.day) {
  date.setDate(date.getDate() + add.day);
  console.log(date);
} else {
  console.log(date.toISOString());
}