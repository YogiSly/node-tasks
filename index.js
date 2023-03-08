#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const date = new Date();

const current = yargs(hideBin(process.argv))
.option('d', {
  alias: "day",
  type: "boolean",
})
.option('m', {
  alias: "month",
  type: "boolean",
})
.option('y', {
  alias: "year",
  type: "boolean",
})
.argv;

if (current.year) {
  console.log(date.getFullYear());
} else if (current.month) {
  console.log(date.getMonth());
} else if (current.day) {
  console.log(date.getDate());
} else {
  console.log(date.toISOString());
}