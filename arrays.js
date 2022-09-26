//Example
var ourArray = ["John","23"]
var array = ["John","23"]
var nesta = [["Date",53,"Place"],"25/06",1725,"Ohio, US"] 
var firsta=nesta[0]
console.log(nesta)
alpha=nesta[0][2]
console.log(alpha)

/*push(), pop(),shift() and unshift() manipulation*/
arraypushing = ["Dog","Trombone Music","Ted Bundy"]
arraypusher=["Sickness","Bible","Superman"]
arraypushing.push([arraypusher])
console.log(arraypushing)

var rejected = arraypushing.pop()
console.log(arraypushing)
console.log(rejected)

arrayshifting=[5,["The 100","Samuel L. Jackson","Jane Eyre"],"Satanic Verses from a Jewish Heaven"]
var shifted = arrayshifting.shift()
console.log(arrayshifting) //Removes the first object
console.log(shifted)

var unshiftment = "Daddy Warbux"
arrayshifting.unshift(unshiftment)
console.log(arrayshifting)
arrayshifting.unshift(["Trial","By","Fire"])
console.log(arrayshifting)

//shopping list
var mylist = [["cereal",3],["milk",2],["bananas",3],["Juice",2],["Eggs",12]]
console.log("Shopping List: "+mylist)