//the old way
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet=targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)

class SpaceShuttle2 {
    constructor(targetPlanet2) {
        this.targetPlanet2 = targetPlanet2
    }
}
