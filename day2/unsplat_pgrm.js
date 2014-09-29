var tester = function (a, b, c){
    console.log({
        this: this,
        a: a,
        b: b,
        c: c
    });
};

tester("a"); 

tester("this", "is", "cool"); 

tester.call(window, "this", "is", "cool"); 


var tester = function(a, b, c) {
    console.log(Object.getOwnPropertyNames(arguments));
};

var tester = function() {
    console.log({
        'this': this,
        'arguments': arguments,
        'length': arguments.length
    });
};

tester.apply(null, ["a", "b", "c"]);

function toArray(args) {
    return Array.prototype.slice.call(args);
}

var example = function(){
    console.log(arguments);
    console.log(toArray(arguments));
};

example("a", "b", "c");
