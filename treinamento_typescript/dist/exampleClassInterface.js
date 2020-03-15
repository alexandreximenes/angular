var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    }
    SpaceCraft.prototype.jumpIntoHiperspace = function () {
        console.log("log SpaceCraft.jumpIntoHiperspace " + this.propulsor);
    };
    return SpaceCraft;
}());
var spaceCraft = new SpaceCraft("hiperDrive");
spaceCraft.jumpIntoHiperspace();
