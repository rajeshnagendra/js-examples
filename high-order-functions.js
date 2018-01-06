//reference link https://gitbookio.gitbooks.io/javascript/functions/higher_order.html

var add = function(x){
    return x + 2;
}

var double = function(x){
    return x * 2;
}
//func - function to call, //list - array of values to call func
var map = function(func, list){
    var output = [];
    for(idx in list){
        output.push(func(list[idx]));
    }
    return output;
}

//console output
map(add, [2,4,6]); //returns an array [4,6,8]
map(double, [5,20,50]); //returns array [10,40,100]
//-----------------------------------------------------------
process_add = function(list){
	return map(add, list);
}

process_double = function(list){
	return map(double, list);
}
process_add([2,4,6]);
process_double([5,20,50]);
//-----------------------------------------------------------
var buildProcessor = function(func){
    var process_func = function(list){
        return map(func,list);
    }
    return process_func;
}

process_add = buildProcessor(add);
process_double = buildProcessor(double);

process_add([2,4,6]);
process_double([5,20,50]);
