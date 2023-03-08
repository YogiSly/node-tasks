#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const date = new Date();

const sub = yargs(hideBin(process.argv))
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

if (sub.year) {
  date.setFullYear(date.getFullYear() - sub.year);
  console.log(date);
} else if (sub.year) {
  date.setMonth(date.getMonth() - sub.month);
  console.log(date);
} else if (sub.day) {
  date.setDate(date.getDate() - sub.day);
  console.log(date);
} else {
  console.log(date.toISOString());
}