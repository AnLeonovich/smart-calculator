class SmartCalculator {
  constructor(initialValue) {
    this.counter = 0;
    this.math = '' + initialValue;
    this.help = '' + initialValue; 
  }
  

  add(number) {
    this.counter = 0;
    this.help = number; 
    this.math = this.math+'+'+number;
    return this;
  }
  
  subtract(number) {
    this.counter = 0;
    this.help = number;
    this.math = this.math+'-'+number;
    return this;
  }

  multiply(number) {
    this.counter = 0;
    this.help = number;
    this.math = this.math+'*'+number;
    return this;
  }

  devide(number) {
    this.counter = 0;
    this.help = number;
    this.math = this.math+'/'+number;
    return this;
  }

  pow(number) {
    this.counter += 1;
    this.math = this.math.slice(0, this.math.lastIndexOf(this.help));  
    this.math = this.math+'Math.pow('+this.help + ',' + number + new Array(this.counter+1).join(")");
    this.help = number;
    return this;
  }

  toString(){
     return eval(this.math); 
    }
}

module.exports = SmartCalculator;
