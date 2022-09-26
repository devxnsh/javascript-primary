var myarray = []
var i =0

// While Loops
while(i<5) {
    myarray.push(i)
    i++
}
console.log(myarray)
ourArray=[]
// For Loops
for (var i = 0; i <=(5); i++) { //starting point, ending point, step count. step count is not set default in JS
    ourArray.push(i);
}
console.log(ourArray)
var newArray=[]
for (var i=0; i >=-10; i+= (-2)) {
    newArray.push(i)
}
console.log(newArray)

// Nested for loops
aray = [[5,2,3],[2,5,6],[1,2,3]]
var product=1
for (var i =0; i<aray.length; i++) {
    murray = aray[i]
    for (var j=0; j<(murray.length);j++) {
        product*=(aray[i])[j]
        
    }
}
console.log(product)
