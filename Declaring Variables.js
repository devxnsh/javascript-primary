/* Data Types:
Undefined, Null, String, Boolean, Number, Object, Symbol
*/
var myName = "Dev" /* Declaring a variable */
myName = 7 /*Redefining variable */
let anotherName = "FreeCC" /* Used Only in a local scope setting unlike var which is used globally */
const pi = 3.14 /*Immutable Declaration */
var aVariable /*Declaring a variable : defining a variable without specifying value */
var bVariable = '75HellBoy8' /*Assigning a variable : defining a variable with a specific value. changeable unless declaration 
is through 'const'*/
console.log(bVariable) /*Output is 75HellBoy8 */
aVariable=75
bVariable=aVariable /*bVariable takes the value of aVariable */
console.log(bVariable) /*Output is 75 */