import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import * as express from 'express';
import * as bodypaser from 'body-parser';
import * as consolidate from 'consolidate';
import * as path from "path";
const expressInstance = express();
expressInstance.engine('html',  consolidate.swig);
expressInstance.set('views', path.join(__dirname, 'app/views'));
expressInstance.set('view engine', 'html');
expressInstance.use('/public', express.static(path.join(__dirname, 'app/public')));
expressInstance.use(bodypaser.json());
const app = NestFactory.create(ApplicationModule, expressInstance, {});
app.then(instance =>
  instance.listen(3000, () =>
    console.log('Application is listening on port 3000')
  )
);
