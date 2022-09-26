// replacement for if/else condition
a = 25

b = 3
function ch(a,b) {
    return a==b ? "equal":"not equal";
}
console.log(ch(25,3))

// Nesting
function checkSign(num) {
    return num>0?"Positive":(num<0?"Negative":"Zero")
}
console.log(checkSign(-5))