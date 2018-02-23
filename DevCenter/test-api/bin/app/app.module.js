"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const spotify_service_1 = require("./services/spotify/spotify.service");
const giphy_service_1 = require("./services/giphy/giphy.service");
const spotify_controller_1 = require("./controllers/spotify/spotify.controller");
const giphy_controller_1 = require("./controllers/giphy/giphy.controller");
const home_controller_1 = require("./controllers/home/home.controller");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        components: [
            spotify_service_1.SpotifyService,
            giphy_service_1.GiphyService
        ],
        controllers: [
            giphy_controller_1.GiphyController,
            spotify_controller_1.SpotifyController,
            home_controller_1.HomeController
        ]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map