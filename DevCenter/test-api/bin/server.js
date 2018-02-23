"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const express = require("express");
const bodypaser = require("body-parser");
const consolidate = require("consolidate");
const path = require("path");
const expressInstance = express();
expressInstance.engine('html', consolidate.swig);
expressInstance.set('views', path.join(__dirname, 'app/views'));
expressInstance.set('view engine', 'html');
expressInstance.use('/public', express.static(path.join(__dirname, 'app/public')));
expressInstance.use(bodypaser.json());
const app = core_1.NestFactory.create(app_module_1.ApplicationModule, expressInstance, {});
app.then(instance => instance.listen(3000, () => console.log('Application is listening on port 3000')));
//# sourceMappingURL=server.js.map