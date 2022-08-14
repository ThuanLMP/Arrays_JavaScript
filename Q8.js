
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




/*----------- Bài 8 ------------*/

const order = {
    cart: [
        { id: 1, name: "ao dai", amount: 5, price: 100000 },
        { id: 2, name: "ao coc", amount: 2, price: 200000 },
        { id: 3, name: "quan dai", amount: 3, price: 150000 },
        { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    total_money: 0,
    total_amount: 0,
};

order.cart.reduce((total, value) => {
    order.total_amount = order.total_amount + value.amount;
    order.total_money = order.total_money + value.price * value.amount;
}, order)

console.log(order)


