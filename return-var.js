var valuef = 0
function change(num) {
    return (num+5)/3;
}
valuef = change(10)

var valued = 0;
function processArg(num) {
    return (num+3)/5 
    /*
    Return essentially means assignment of the return value to
    a variable defined as the function */
}
valued = processArg(7)
//valued now holds the return object from processArg function, (7+3)/5 ie 2.
valued=change(processArg(valuef))
console.log(valued)