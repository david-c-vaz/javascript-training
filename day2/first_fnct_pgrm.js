function splat(fun){
  return function(array){
    return fun.apply(null,array);
  }
}

var addArrayElements = splat(function(x,y,z){ return x+y+z});

addArrayElements([1,2,3])
