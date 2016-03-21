var boom = function () {
  console.log("boom!");
}

var bang = function () {
  console.log("bang!");
}

var doubleWham = function (sound1, sound2) {
  sound1();
  sound2();
}

doubleWham(boom, bang);