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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const create_client_dto_1 = require("../DTO/create-client.dto");
const clients_service_1 = require("../Services/clients.service");
const auth_guard_1 = require("../Services/auth.guard");
const logs_service_1 = require("../Services/logs.service");
const swagger_1 = require("@nestjs/swagger");
let ClientsController = exports.ClientsController = class ClientsController {
    constructor(ClientsService, logsService) {
        this.ClientsService = ClientsService;
        this.logsService = logsService;
    }
    async create(CreateClientsDto, req) {
        this.logsService.log(req);
        return this.ClientsService.create(CreateClientsDto, req.user);
    }
    async update(CreateClientsDto, req) {
        this.logsService.log(req);
        return this.ClientsService.update(CreateClientsDto, req.user);
    }
    async updateValue(CreateClientsDto, req) {
        this.logsService.log(req);
        return this.ClientsService.updateValue(CreateClientsDto, req.user);
    }
    async findAll(req) {
        return this.ClientsService.findAll(req.user);
    }
    async findOne(id) {
        return this.ClientsService.findOne(id);
    }
    async delete(id, req) {
        this.logsService.log(req);
        return this.ClientsService.delete(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "updateValue", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ClientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ClientsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "delete", null);
exports.ClientsController = ClientsController = __decorate([
    (0, swagger_1.ApiTags)('Clients'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Injectable)(),
    (0, common_1.Controller)("clients"),
    __metadata("design:paramtypes", [clients_service_1.ClientsService,
        logs_service_1.LogsService])
], ClientsController);
//# sourceMappingURL=clients.controller.js.map