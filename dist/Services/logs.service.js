"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const users_service_1 = require("./users.service");
const log_schema_1 = require("../Schemas/log.schema");
const hyperid = require("hyperid");
const generateId = hyperid({ urlSafe: true });
let LogsService = exports.LogsService = class LogsService {
    constructor(LogsModel, usersService) {
        this.LogsModel = LogsModel;
        this.usersService = usersService;
    }
    async log(req) {
        var _a;
        const id = `log${generateId()}`;
        const created = {
            date: new Date().getTime(),
            userId: ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub) || "unauthorized",
        };
        const createdLog = new this.LogsModel({
            url: req.url,
            body: JSON.stringify(req.body),
            method: req.method,
            id,
            created,
        });
        return createdLog.save();
    }
    async findAll(user) {
        const currentUser = await this.usersService.findOne(user === null || user === void 0 ? void 0 : user.sub);
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.userId)) {
            return [];
        }
        const Logs = await this.LogsModel.find({
            userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.userId,
        }).exec();
        return Logs.map((Log) => {
            const { _id, ...LogData } = Log.toObject();
            return LogData;
        });
    }
    async findOne(id) {
        return this.LogsModel.findOne({ id: id }).exec();
    }
};
exports.LogsService = LogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(log_schema_1.LogDataClass.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, users_service_1.UsersService])
], LogsService);
//# sourceMappingURL=logs.service.js.map