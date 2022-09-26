//declaring global var
var myGlobal = 10
function fun1() {
    //declaring another variable
    attempt1 = 5
    //declaring local variable
    var attempt2 = 5
}

function fun2() {
    var output = ""
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal
    }
    if (typeof attempt1 != "undefined") {
        output += " Attempt 1: " + attempt1
    }
    if (typeof attempt2 != "undefined") {
        output += " Attempt 2: " + attempt2
    }
    console.log(output)
}
fun1()
fun2()

/**
 Output produces : myGlobal: 10 Attempt 1: 5
 Attempt 1 Declares variable without using var. This puts it automatically 
 in the global scope. however Attempt 2 Declares variable using var command
 which results in it being limited to local scope of fun1.
 A local scope variable cannot be used in the global scope, neither in the
 local scope of another function
 */

// local and global variables with the same name
var OuterWear = "TShirt", lowerwear = "Jeans";
function myOutfit() {
    OuterWear = "Kurta"
    globalThis
    return OuterWear+" "+lowerwear;
}
console.log(myOutfit())