
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




/*----------- Bài 5 ------------*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const array2 = [3, 5, 9, 10, 88];
function checkDup(array1, array2) {
    resultArray = array1.myFilter((num) => {
        if (array2.includes(num)) {
            return true;
        }
        return false;
    });
    var set = new Set();
    resultArray.myMap(item => set.add(item));
    return set;
}

console.log(checkDup(array1, array2));



