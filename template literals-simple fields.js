/**
const createPerson = (namer,age,gender) =>{
    return {
        name:namer,age:age,gender:gender
    }
}
console.log(createPerson("Zodiac Hasbro",56,"male"))
*/

const createPerson = (namer,age,gender) => ({namer,age,gender})
console.log(createPerson("Zodiac Hasbro",56,"Male"))

//functions inside objects

const bicycle = {
    gear:2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear
    }
}
console.log(bicycle.gear)
bicycle.setGear(3)

console.log(bicycle.gear);

