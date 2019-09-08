"use strict";
exports.__esModule = true;
var Spacecraft_1 = require("./Spacecraft");
var MilleniumFalcon_1 = require("./MilleniumFalcon");
var ship = new Spacecraft_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new MilleniumFalcon_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));