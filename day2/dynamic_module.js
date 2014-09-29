var app={};
(function(context){
  var id=43;
  context.next=function(){
    return id++;
  }
  context.reset=function(){
    return id=0;
  }
})(app);

app.next();
app.next();
app.reset();
