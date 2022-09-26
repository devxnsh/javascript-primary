function func(val) {
var answer = ""
switch(val) {
    case 1 : 
        answer = "alpha"
        break
    case 2 :
        answer = "beta"
        break
    case 3 : 
        answer = "gamma"
        break
    case 4 :
        answer = "delta"
        break
    case 5:
    case 6:
    case 7:
        answer = "5,6 or 7" //multiple switches answer to same snippet
        break
    default :
        answer = "dissociated" //default can also be set by putting value in original string during declaration
}
return answer;
}
console.log(func(5))

/* Switch Statements can be used to replace chained if else statements by a catalogue-looking code */
