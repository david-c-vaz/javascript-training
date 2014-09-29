function prop(name){
  return function(object){
    return object[name];
  }
}

var bob=new Object();
bob.name="Bob";
bob.age=23;
var getName=prop("name");
getName(bob);
console.log("------------------")


var students=[bob];
students.map(getName).join(",");


