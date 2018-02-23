import {Controller, Get, HttpStatus, Req, Response, Request, HttpException} from '@nestjs/common';

@Controller('/')
export class HomeController {
    constructor() {}

    @Get()
    home(@Response() res) {
        // return res.sendFile('E:/xamp/htdocs/www/DevCenter/test-api/bin/app/views/index.html');
        return res.render("index.html");
    }
}
