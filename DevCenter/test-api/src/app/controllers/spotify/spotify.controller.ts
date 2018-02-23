import {Controller, Get, Response, Request} from '@nestjs/common';

@Controller('/spotify')
export class SpotifyController {
    constructor() {}
    @Get()
    index(@Response() res, @Request() request) {
        return res.render('spotify.html');
    }

}
