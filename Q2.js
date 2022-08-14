
Array.prototype.myMap = function (func) {
  let thisValue;

  if (this == null) {
    throw new TypeError('this is null or not defined');
  }

  let object = Object(this);
  let len = object.length;
  if (typeof func !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  if (arguments.length > 1) {
    thisValue = arguments[1];
  }

  let newArr = [];
  let k = 0;

  while (k < len) {
    let kValue, doneValue;
    if (k in object) {
      kValue = object[k];
      doneValue = func(kValue, k, object, thisValue);
      newArr[k] = doneValue;
    }
    k++;
  }
  return newArr;
}

Array.prototype.myFilter = function (func) {
  let thisValue;

  if (this == null) {
    throw new TypeError('this is null or not defined');
  }

  let object = Object(this);
  let len = object.length;
  if (typeof func !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  if (arguments.length > 1) {
    thisValue = arguments[1];
  }

  let newArr = [];
  let k = 0;
  let i = 0;
  while (k < len) {
    let kValue, doneValue;
    if (k in object) {
      kValue = object[k];
      doneValue = func(kValue, k, object, thisValue);
      if (doneValue === true) {
        newArr[i] = kValue;
        i++;
      }

    }
    k++;
  }
  return newArr;

}
Array.prototype.myReduce = function () {

}




/*----------- Bài 2 ------------*/

let array1 = [10, 10, 3, 4, 10, 6];
let max1 = array1[0], max2;
let result;
let resultArray = array1.reduce((total, num1) => {

  if (max1 <= num1) {
    max2 = max1;
    max1 = num1;
  } else if (max1 >= num1 && max2 < num1) {
    max2 = num1;
  }
  result = [max1, max2];
  return result;
})

console.log(resultArray);

