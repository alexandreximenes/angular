interface Point{
    x: number;
    y: number
}

let drawPoint = (point: Point) => 
console.log(point.x * point.y);


drawPoint({x: 1, y:3});
//------------------


let m:string = 'abc';
let endWithC = m.endsWith('c');
log('EndwithC' + endWithC);
//------------------


let num = 5;
num = 'a'; //warn
let a:number;
let b:string;
let c:boolean;
let d:any;
let e:number[] = [1,2.3,3];
let f:any[] = [1, '1', true, false, 1/1];

log(num);

//------------------

function doSomething(){
    for(var i = 0; i<5; i++){
        log(i)
    }

    log('Finally ' + i);
}

doSomething();

//------------------


var number:number = 1;
let count:number = 2;

//------------------

let doLog = (message) => console.log(message);
doLog(message);

function log(message){
    console.log(message);
}

var message = 'hello world';

log(message);