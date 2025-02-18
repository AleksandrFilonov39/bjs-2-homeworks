"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if(discriminant > 0) {
    let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(rootOne, rootTwo);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (discriminant < 0) {
    return arr;
  }
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let newpercent = percent / 100;
  let percentPerMonth = newpercent / 12;
  let returnSumm = amount - contribution;
  let payment = returnSumm * ((percentPerMonth) + ((percentPerMonth)/(((1 + (percentPerMonth)) ** countMonths) - 1)));
  let totalSumm = payment * countMonths;
  totalSumm = Number(totalSumm.toFixed(2));
  return totalSumm;
}