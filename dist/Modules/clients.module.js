"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const mongoose_1 = require("@nestjs/mongoose");
const clients_controller_1 = require("../Controllers/clients.controller");
const clients_schema_1 = require("../Schemas/clients.schema");
const clients_service_1 = require("../Services/clients.service");
const users_module_1 = require("./users.module");
const axios_1 = require("@nestjs/axios");
const logs_service_1 = require("../Services/logs.service");
const log_schema_1 = require("../Schemas/log.schema");
let ClientsModule = exports.ClientsModule = class ClientsModule {
};
exports.ClientsModule = ClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forFeature([
                { name: clients_schema_1.ClientsDataClass.name, schema: clients_schema_1.ClientSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([{ name: log_schema_1.LogDataClass.name, schema: log_schema_1.LogSchema }]),
            axios_1.HttpModule,
            schedule_1.ScheduleModule.forRoot()
        ],
        controllers: [clients_controller_1.ClientsController],
        providers: [clients_service_1.ClientsService, logs_service_1.LogsService],
    })
], ClientsModule);
//# sourceMappingURL=clients.module.js.map