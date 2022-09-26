var string1 = "This is the first string. "
var string2 = " This may or may not be the second string."
console.log(string1+"This is the second sentence."+string2)

/*String Length */
var fnamelen=0,lnamelen=0
var firstname = "Ada",lastname="Lovelace"
fnamelen=firstname.length;
lnamelen=lastname.length;
console.log(fnamelen+","+lnamelen)
fullnamel=(firstname+lastname).length
console.log(fullnamel)

/*Bracket Notation */
console.log(lastname[5])
/*ith letter from the end in a string */
var i = 2
console.log(lastname[lastname.length-i])
/*String Indices are immutable. to change a string you have to overwrite its value altogether*/

/*String Ops */
var splitted = lastname.split('o')
console.log(splitted)
var sliced = lastname.slice(0,3)
console.log(sliced)
arraymatrix = ["Package Deal","Country Roads",56]
arraystring = JSON.stringify(arraymatrix)
console.log(arraystring+typeof arraystring)