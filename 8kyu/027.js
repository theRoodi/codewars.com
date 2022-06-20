//Find Maximum and Minimum Values of a List


var min = function(list){
    list.sort(function(a,b){
    return a-b
    })    
    return list[0];
}

var max = function(list){
    list.sort(function(a,b) {return a-b}).reverse()
    return list[0];
}