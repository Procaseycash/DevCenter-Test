import {Component} from '@nestjs/common';
import * as conf from '../../conf/conf';
const axios =  require('axios');

@Component()
export class GiphyService {
    constructor() {
    }

    public async search(content) {
        const url = `${conf.GIPHY_HOST}${conf.GIPHY_PATH}${content}`;
        console.log('url', url);
        return await axios.get(url);
    }
}
