let message: string = "Minha mensagem";
console.log(message);

let episode: number = 4;
console.log(episode);
episode = episode + 1;
console.log("Next episode is" + episode);

let favoriteDroid:string
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid);

function userTheForce(name:string):void{
    console.log("use the force " + name);
}


let myNumber = function chooseNumber(n: number):boolean {
    return n > 0;
}
console.log("my number is  " + myNumber);

function inc(speed:number, inc?:number):number{
    let i = inc || 1
    return speed + 1;
}

function inc2(speed: number, inc: number=1): number {
    let i = inc || 1
    return speed + 1;
}

console.log(inc(2, 1));
console.log(inc(2));
console.log(`Retured is ${inc2(2)}`);


let isEnouthToBeatMF = (parsers:number) => boolean => {
    return parsers > 14
}

let distance = 14
console.log(`Is ${distance} parsecs enough to bear Millenium falcon ? ${isEnouthToBeatMF ? 'YES' : 'NO'}`);


