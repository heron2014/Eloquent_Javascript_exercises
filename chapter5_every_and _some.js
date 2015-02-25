function every(array, method) {
    for (var i = 0; i < array.length; i++) {
        if (!method(array[i])) {
            return false;
        }
    }
    return true;
}

every([NaN, 45, NaN], isNaN);

function some(array, method) {
    for (var i = 0; i < array.length; i++) {
        if (method(array[i])) {
            return true;
        }
    }
    return false;
}

some([NaN, 3, 4], isNaN);
some([2, 3, 4], isNaN);