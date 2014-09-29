function callMe(arg1, arg2){
    var s = "";

    s += "this value: " + this;
    s += "<br />";
    for (i in callMe.arguments) {
        s += "arguments: " + callMe.arguments[i];
        s += "<br />";
    }
    return s;
}

document.write("Original function: <br/>");
document.write(callMe(1, 2));
document.write("<br/>");

document.write("Function called with apply: <br/>");
document.write(callMe.apply(3, [ 4, 5 ]));
