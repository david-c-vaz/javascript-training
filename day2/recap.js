var greeting=function(greeting){
  return (function(name){
    console.log(greeting+ " "+name);
  });
}

var helloGreeting=greeting("Hello");
helloGreeting("Kenzo");


greeting("Hello")("Kenzo");
