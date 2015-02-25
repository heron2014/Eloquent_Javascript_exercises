function range(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

range(1, 10);

function sum(arr) {
    var num = arr.reduce(function(a, b) {
        return a + b;
    });
    return num;
}

var num1 = sum(range(1,10));
num1;

function range(start, end, step) {
    var arr = [];
    if (step == undefined ){
        for (var i = start; i <= end; i=1) {
        arr.push(i);
        }
    }
    if (step > 0) {
        for (var i = start; i <= end; i+= step) {
            arr.push(i);
        }
    }
    else {
        for (var i = start; i >= end; i+= step) {
            arr.push(i);
        }
    }
    return arr;
}
range(5, 2, 2);

function range(start, end, step) {
    var arr = [];
    if (step == undefined ) {
        step = 1;
    }
    if (step > 0) {
        for (var i = 0; i <= end; i += step) {
            arr.push(i);
        }
    }
    else {
        for (var i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

range(5, 2, -2);