const str0 = "";

function concatPigs(str) {
  return str + " pigs";
}
function concatParam(str, param) {
  return str + " " + param;
}

const str1 = concatPigs(str0);
console.assert(str1 === " pigs", 'assert 1');

const str2 = concatParam(str1, " rock!");
console.assert(str2 === " pigs  rock!",'assert 2');

const str3 = concatPigs(str2);
console.assert(str3 === " pigs  rock! pigs",'assert 3');

const str4 = concatParam(str2, str3);

//console.assert(str4 === ' pigs  rock!  pigs  rock! pigs', 'assert str4');
