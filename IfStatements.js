var itisrue=false
function ourTorF(isitrue) {
    if (isitrue) {
        return ("Yes, True")
    }
    else {
        return ("No, not True")
    }
}
console.log(ourTorF(itisrue))
/*Nested If Statements */

var a = 50, b = 35, c ="hi"
Condition1 = a>b
SubCondition1 = c>b
SubCondition2 = b>c
Condition2 = b<a

if (Condition1) {
    if (SubCondition1) {
        console.log("a>c>b")
    }
    else if (SubCondition2) {
        console.log("a>b>c")
    }
    else {
        console.log("None")
    }
}
else if (Condition2) {
    console.log("b<a")
}

/*And and Or Statements */
if (a>=b && b>=c) {
    console.log(a>b>c)
}
if (a==b || b!=c)
    console.log(a,b,c)