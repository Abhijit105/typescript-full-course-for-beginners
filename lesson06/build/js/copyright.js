"use strict";
// Original JS code
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear
// First method
// let year: HTMLElement | null = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//   year.setAttribute('datetime', thisYear)
//   year.textContent = thisYear
// }
// Second method
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
