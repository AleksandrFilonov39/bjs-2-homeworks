function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number(((arr.reduce((acc, num) =>acc += num, 0)) / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  return arr.length === 0 ? 0 : arr.reduce((acc, num) => acc += num, 0);
}

function differenceMaxMinWorker(...arr) {
  return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = arr.reduce((acc, num) => {
    if(num % 2 === 0){
      acc += num;
    }
    return acc
  },0);

  let sumOddElement = arr.reduce((acc, num) => {
    if(num % 2 !== 0){
      acc += num;
    }
    return acc
  },0);
  return arr.length === 0 ? 0 : sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = arr.reduce((acc,num) => {
    if(num % 2 === 0){
      acc.push(num)
    }
    return acc;
  },[]);
  return arr.length === 0 ? 0 : (sumEvenElement.reduce((acc, num) => acc += num, 0) / sumEvenElement.length);
}

function makeWork (arrOfArr, func) {
  let workerResult = [];
  arrOfArr.forEach((arr) => {
    workerResult.push(func(...arr));
  })
  return arrOfArr.length === 0 ? 0 : Math.max(...workerResult);
}

