function phoneticlookup(val) {
    var result = ""
    var lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"frank"
    };
    result = lookup[val]
    return result


}
console.log(phoneticlookup("charlie"))

var myObj = {
    gift : "Pony", pet : "Kitten",bed : "sleigh"
}


//testing if an object has a certain property
function checkObj(checkprop) {
    if(myObj.hasOwnProperty(checkprop)) {
        return myObj[checkprop];
    }
    else {
        return "Not Found"
    }
}
console.log(checkObj("Gift"));