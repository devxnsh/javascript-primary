function nextInLine(arr, Item) {
    arr.push(Item)
    return Item
    //
}
var testArr = [1,2,3,4,5]
console.clear()
console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr,6))
console.log("After: " + JSON.stringify(testArr))
