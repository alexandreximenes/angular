var message = "Minha mensagem";
console.log(message);
var episode = 4;
console.log(episode);
episode = episode + 1;
console.log("Next episode is" + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
function userTheForce(name) {
    console.log("use the force " + name);
}
var myNumber = function chooseNumber(n) {
    return n > 0;
};
console.log("my number is  " + myNumber);
function inc(speed, inc) {
    var i = inc || 1;
    return speed + 1;
}
function inc2(speed, inc) {
    if (inc === void 0) { inc = 1; }
    var i = inc || 1;
    return speed + 1;
}
console.log(inc(2, 1));
console.log(inc(2));
console.log("Retured is " + inc2(2));
var isEnouthToBeatMF = function (parsers) { return function (boolean) {
    return parsers > 14;
}; };
var distance = 14;
console.log("Is " + distance + " parsecs enough to bear Millenium falcon ? " + (isEnouthToBeatMF ? 'YES' : 'NO'));
