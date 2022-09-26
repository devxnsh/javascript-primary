var norm = "This is a normal string"
/* var abnorm = "Is this a "Normal" String?"
Throws error. */ 
var renorm = "This is a \"Normal\" String Again!"
console.log(norm,"\n",renorm)
var conorm = "This too is a 'normal' string, just with different quotes!"
console.log(conorm)
var bignorm=`This is a "normal" string! I can use 'Both' kinds of quotes inside it because the outside quotes are covered by \`BACKTICKS\`!`
console.log(bignorm)
/***** Escape Character Guide
CODE OUTPUT 
\' Single Quote 
 \" Double Quote 
 \\ Backslash 
 \n New Line 
 \t Tab
 \b Backspace
 \f form feed 
 *****/