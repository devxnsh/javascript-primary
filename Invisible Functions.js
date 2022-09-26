// Function which can be invoked immediately
(function () {
    console.log("Wozup")
    return 5
}) // Function Declared
() //Function Invoked.
//naming the invisible function function
var wozup = function(num=3){ 
    console.log("My fav num is " + num)
    return (num+1)
}
wozup(5) 
console.log(wozup(5)) //returns the return value AND executes the function's insides.
wozup()
