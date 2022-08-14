
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
  
  
  
  
  /*----------- Bài 7 ------------*/
  
  let array1 = [
    { make: 'audi', model: 'r8', year: '2012' },
    { make: 'audi', model: 'rs5', year: '2013' },
    { make: 'ford', model: 'mustang', year: '2012' },
    { make: 'ford', model: 'fusion', year: '2015' },
    { make: 'kia', model: 'optima', year: '2012' },
  ]
  const myObject = {}
  
  for (let subArr of array1) {
    if(subArr.make in myObject){
      let atrribute = subArr.make;
      let len = myObject[atrribute].length;
      myObject[atrribute][len] = subArr;
    }
    else{
      let atrribute = subArr.make;
      myObject[atrribute]= new Array;
      myObject[atrribute][0] = subArr;
  
    }
  }
  console.log(myObject);
  
  
  