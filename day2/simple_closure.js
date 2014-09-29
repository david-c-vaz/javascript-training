//The counter value is protected by the scope of the anonymus function.
var add=(function(){
  var counter=0;
  console.log("This happens only once");
  return function(){
    console.log("this happens every time");
    return counter+=1;
  }
})();
add();
add();
add();

