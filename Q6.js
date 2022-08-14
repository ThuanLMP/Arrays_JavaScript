
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




/*----------- Bài 6 ------------*/

let array1 = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
let myObject = {};
for (let attribute of array1) {
    if (attribute in myObject) {
        myObject[attribute] = myObject[attribute] + 1;
    }
    else {
        myObject[attribute] = 1;
    }
}
console.log(myObject);

