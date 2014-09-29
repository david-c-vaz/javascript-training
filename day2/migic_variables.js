function sayHello(name){
  console.log(name)
  console.log("Hello User! "+this)
  console.log("The arguments are");
  for(i in arguments){
    console.log(arguments[i]);
  }
}


sayHello.apply("XYZ",[1,2,3,4]);
