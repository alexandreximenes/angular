"use strict";
exports.__esModule = true;
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point2.prototype.getDistance = function (another) {
        //...
    };
    return Point2;
}());
exports.Point2 = Point2;
var p;
var point = new Point2();
point.draw();
var drawPoint = function (point) {
    return console.log(point.x * point.y);
};
drawPoint({ x: 1, y: 3 });
//------------------
var word = 'abc';
//let endWithC = word.endsWith('c');
//log('EndwithC' + endWithC);
//------------------
var num = 5;
//num = 'a'; //warn
var a;
var b;
var c;
var d;
var e = [1, 2.3, 3];
var f = [1, '1', true, false, 1 / 1];
log(num);
//------------------
function doSomething() {
    for (var i = 0; i < 5; i++) {
        log(i);
    }
    log('Finally ' + i);
}
doSomething();
//------------------
var number = 1;
var count = 2;
//------------------
var doLog = function (message) { return console.log(message); };
doLog(message);
function log(message) {
    console.log(message);
}
var message = 'hello world';
log(message);
