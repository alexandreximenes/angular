class SpaceCraft{

    constructor(public propulsor: string){}

    jumpIntoHiperspace(){
        console.log(`log SpaceCraft.jumpIntoHiperspace ${this.propulsor}`);
    }
}


let spaceCraft = new SpaceCraft("hiperDrive");
spaceCraft.jumpIntoHiperspace();
