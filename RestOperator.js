// Used to Accept a variable number of arguments
function summation(...args) {
    return args.reduce((a,b)=>a+b,0) //what does .reduce() invisible function do exactly??
}

console.log(summation(5,6,7,8)) //gives 5+6+7+8
console.log(summation(summation(2,3,4),summation(5,6,7))) //gives (2+3+4)+(5+6+7)