var a = 555
var b = '555'
if (a==b) {
    console.log(true);
    // == sign converts both the comparative values to a universal type
}
if (a===b) {
    console.log(true)
    // === (strict equality operator) checks both values as is, and determines equality
}
else if (a!==b) {
    console.log(false)
}
var a = 57, b = 25
function operations(a,b) {
    if (a==b) {
        console.log(a+"="+b)
        if(a===b) {
            console.log("Perfect Match")
        }
    }
    if (a!=b) {
        if (a>b){  
            console.log(a + ">" + b)
        }
        else if (a<b) {
            console.log(a+" < "+b)
        }
    }
}
operations("25","27")
/*>= and <= are also usable */
