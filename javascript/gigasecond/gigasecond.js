function Gigasecond(d){
    this.startdate = d;
    this.delta = Math.pow(10,12) // 10**9 seconds == 10**12 miliseconds
  }

Gigasecond.prototype.date = function(){
    return new Date(this.startdate.getTime() + this.delta);
}

module.exports = Gigasecond;
