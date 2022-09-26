const person = {
    name : "Zodiac Hasbro",
    age : 56
}
const greeting = `Hello, my name is ${person.name}!
 I am ${person.age} years old.`;

console.log(greeting);

// ** 

const result = {
    success : ["max-length", "no-amd","prefer-arrow-functions"],
    failure : ["no-var","var-on-top","linebreak"],
    skipped : ["id-blacklist","no-dup-keys"]  
};
function makeList(arr) {
    const resultdisplayarray = [];
    for (let k = 0;k<arr.length;k++) {
        resultdisplayarray.push(`<li class="text-warning">${arr[k]}</li>`)
    }
    return resultdisplayarray
}
const resultdisplayarray=makeList(result.failure)
console.log(resultdisplayarray)
/**
 * Lis should look like
 * * makeList(result.failure) should return:
 * [`<li class="text-warning">no-var</li>,
 * <li class="text-warning">var-on-top</li>
 * <li class="text-warning">linebreak</li>
 * 
 * ]
 */
