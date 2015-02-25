function reverseArray(array) {
    var arr = [];
    for (var i = array.length -1; i >=0; i--) {
        arr.push(array[i]);

    }
    return arr;
}
reverseArray(["A", "B", "C"]);

function reverseArray(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        arr.unshift(array[i]);

    }
    return arr;
}
reverseArray(["A", "B", "C"]);

function reverseArrayInPlace(array) {
    var arr =[];
    var len = array.length;
    var halfIndex = Math.floor(len / 2) - 1;
    var temp;
    for (var i = 0; i <= halfIndex; i++) {
        temp = array[len - i - 1];
        array[len - i - 1] = array[i];
        array[i] = temp;
        arr.push(temp); // this could be omit
    }
    return arr;
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
arrayValue;