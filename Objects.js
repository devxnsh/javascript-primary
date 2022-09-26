var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails":1,
    "friends" : ["Jasper","Biffy"],
    "eyes and ears": "many"
};
var myDog = {
    "name":"Quincy",
    "legs":3,
    "tails":2,
    "friends":[],
    "eyes and ears":"one"
}

/*Accessing Objects */
var taildog = ourDog.tails
var friendsdog = myDog.friends
console.log(taildog, friendsdog)
var eyesears = myDog["eyes and ears"] /*Brackets can be used in any object property but are mandatory if the property contains spaces. */
console.log(eyesears)

// Updating object Properties
myDog.friends=["Camper","Fluffy"]
console.log(myDog.friends)

// Adding new Properties
ourDog.bark = "bow-wow"
myDog['bark']="woof-woof"
console.log(ourDog.bark,myDog.bark)

// Deleting Object Properties
delete ourDog.tails

