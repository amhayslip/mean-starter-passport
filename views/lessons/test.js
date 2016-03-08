var revealSecret = function () {
  return secret;
};

var shoutIt = function (person, func) {
  person.revealItAll = func;
  var result = person.revealItAll();
  alert(person.name + " said: " result);
};

var avi = {
  name: "Avi"
  secret: "Im scared of snakes!"
};

var narkis = {
  name: "Narkis"
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);