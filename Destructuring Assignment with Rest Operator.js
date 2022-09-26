const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    
    const [,,...arr] = list; //from list put everything in the arr element except first two
    return arr
}
function removeFirstOne(list2) {
    const[,...arr2] = list2
    return arr2
}
console.log(removeFirstTwo(source))
console.log(removeFirstOne(source))

//destructuring assignment used as function parameter
const stats = {
    max : 56.78,
    stdev : 4.34,
    median : 34.54,
    mode : 23.87,
    min : -0.75,
    avg : 35.85

};
const half = (function() { //declare function
    return function half({max,min}) { //take paramters
        return (max + min)/2.0 
    } //useful in sorting thru large datasets
}) ();
console.log(stats)
console.log(half(stats)) 