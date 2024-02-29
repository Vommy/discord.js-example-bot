"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
/**
 * Interactions endpoint. This is where all of our requests from Discord will be sent to.
 */
app.post("/interactions", function (req, res) {
    //Check if the request is valid.
    //Check if in VC
    //IF not in VC AND request = play then
    //Join VC
    //Else
    //Send error saying need to join vc first.
    //Play song request
    //Play song
    //Pause song request
    //Check if in vc
    //Pause song
    //Skip song request
    //Check if in vc
    //Skip song
    //Queue song request
    //Check if in vc
    //Add song to queue
    //Disconnect request
    //Check if connected
    //Disconnect
    //Handle error
});
app.listen(PORT, function () {
    console.log("Listening on ".concat(PORT));
});
