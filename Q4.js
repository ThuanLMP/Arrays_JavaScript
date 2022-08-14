
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




/*----------- Bài 4 ------------*/

var arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];

var set = new Set();
arr.myMap(item => set.add(item));

console.log(set);


