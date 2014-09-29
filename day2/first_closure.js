const CIRCLE="circle";
const SQUARE="square";
const RECTANGLE="rectangle";

var getAreaFunction=function(shape){
  return function(){
    switch(shape){
      case CIRCLE:
        return Math.PI*arguments[0]* arguments[0];
        break;
      case SQUARE:
        return Math.PI*arguments[0]* arguments[0];
        break;
      case RECTANGLE:
        return arguments[0]* arguments[1];
        break;
    }
  }
}


var Shape=function(type){
  var area=getAreaFunction(type);  
  return {
    getArea:function(){
      Math.round(Number(araed.apply(this.arguments)))
    }
  }
}
var aCircle = new Shape(CIRCLE);
var aSquare = new Shape(SQUARE);
var aRectangle = new Shape(RECTANGLE);

console.log(aCircle.getAread(50));
console.log(aSquare.getAread(50));
console.log(aRectangle.getAread(50));
