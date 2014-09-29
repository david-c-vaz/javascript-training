var tweets=[{name: "Ken"},{name: "Jim"},{name:"Jones"}]
var names=tweets.map(function(tweep){
  return tweep.name;
}).join(",");
