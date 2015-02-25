function flattening(array) {
    return array.reduce(function(prev, cur){
        return prev.concat(cur);
    })
}

var arrays = [[1, 2, 3], [4, 5], [6]];
var newArray = flattening(arrays);