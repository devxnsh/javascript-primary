var voxel = { x: 3.6 , y:7.4 ,z:6.54} //Voxel is an object.
// The old way :
// var x = voxel.x; var y = voxel.y ; var z = voxel.z

const { x:a, y:b,z:c }=voxel; //destructuring syntax
//assigns new vars a,b,c to the given x,y,z
const AVG_TEMPERATURES = {TODAY : 77.5, TOMORROW : 79}
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {TOMORROW : tempOfTmrw } = avgTemperatures;     //Gets Value Of PROPERTY 'TOMORROW' FROM an OBJECT provided to it., assigns it to variable tempOfTmrw
    return tempOfTmrw //returns the variable.
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); //OBJECT provided to the function is AVG_TEMPERATURES
