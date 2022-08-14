
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




/*----------- Bài 3 ------------*/

let arr = [1, 7, 9, 2, 5, 3, 8];
let sum = 10;
function findSum(arr, sum) {
    let resultArr = [];
    let subArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                subArr = [arr[i], arr[j]]
                resultArr.push(subArr);
            }
        }
    }
    return resultArr;
}
console.log(findSum(arr, sum));


