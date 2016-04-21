// seconds in an earth year //
const EARTHYEAR = 31557600;

// multipliers //
const on = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158 ,
  jupiter: 11.862615 ,
  saturn: 29.447498 ,
  uranus: 84.016846 ,
  neptune: 164.79132 ,
}

module.exports = function(s){
  
  this.seconds = s;
  var ageOn = planet => 
    () => +(this.seconds / (EARTHYEAR * on[planet])).toFixed(2);

  return {
    seconds: this.seconds,
    onEarth: ageOn("earth"),
    onMercury: ageOn("mercury"),
    onVenus: ageOn("venus"),
    onMars: ageOn("mars"),
    onJupiter: ageOn("jupiter"),
    onSaturn: ageOn("saturn"),
    onUranus: ageOn("uranus"),
    onNeptune: ageOn("neptune")
  }
}
