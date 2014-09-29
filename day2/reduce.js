[0,1,2,3,4].reduce(function(previousValue,currentValue,index,array){
  return previousValue+currentValue;
},3);

var add=function(a,b){
  return a+b;
}

var buffers=["youtube","vimeo","metcafe","dailymotion"];

var getLength=function(item) { return item.length}

console.log("sum of all buffers is = "+buffers.map(getLength).reduce(add));

