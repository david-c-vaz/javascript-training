//encapsulation : id cannot be accessed from the outside
var app=(function(){
    var id=43;
    return {
      next: function(){
        return id++;
      },
      reset: function(){
        return id=0;
      }
    }
})();
app.next();
app.next();
app.reset();
