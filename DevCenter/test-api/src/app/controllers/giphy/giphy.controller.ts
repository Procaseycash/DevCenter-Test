import {Controller, Get, HttpStatus, Req, Response, Request, HttpException} from '@nestjs/common';
import {GiphyService} from "../../services/giphy/giphy.service";

@Controller('/giphy')
export class GiphyController {
    constructor(private giphyService: GiphyService) {}


    @Get()
     index(@Response() res, @Request() request) {
        return res.render('giphy.html');
    }

    @Get('search')
    async search(@Response() res, @Request() request) {
        try {
            console.log('request-', request.query, request.params);
            const resp = await this.giphyService.search(request.query['q']);
           // console.log('resp=', resp);
            return res.status(HttpStatus.OK).json(resp.data);
        } catch (err) {
            throw new HttpException(err.message, 400);
        }
    }


}
