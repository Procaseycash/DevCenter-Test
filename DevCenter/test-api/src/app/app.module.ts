import {Module} from '@nestjs/common';
import {SpotifyService} from "./services/spotify/spotify.service";
import {GiphyService} from "./services/giphy/giphy.service";
import {SpotifyController} from "./controllers/spotify/spotify.controller";
import {GiphyController} from "./controllers/giphy/giphy.controller";
import {HomeController} from "./controllers/home/home.controller";

@Module({
    components: [
        SpotifyService,
        GiphyService
    ],
    controllers: [
        GiphyController,
        SpotifyController,
        HomeController
    ]
})
export class ApplicationModule {
}