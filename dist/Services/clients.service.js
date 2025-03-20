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
exports.ClientsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const clients_schema_1 = require("../Schemas/clients.schema");
const users_service_1 = require("./users.service");
const common_interfaces_1 = require("../Common/common.interfaces");
const hyperid = require("hyperid");
const generateId = hyperid({ urlSafe: true });
let ClientsService = exports.ClientsService = class ClientsService {
    constructor(clientsModel, usersService) {
        this.clientsModel = clientsModel;
        this.usersService = usersService;
    }
    async create(createClientDto, user) {
        const id = generateId();
        const currentUser = await this.usersService.findOne(user.sub);
        const created = {
            date: new Date().getTime(),
            userId: 0,
        };
        const createdClient = new this.clientsModel({
            id,
            ...createClientDto,
            userId: currentUser.id,
            isApproved: true,
            created,
            updated: created,
        });
        return createdClient.save();
    }
    async update(createClientDto, user) {
        const updated = {
            date: new Date().getTime(),
            userId: user.sub,
        };
        const { id, ...updateData } = createClientDto;
        const resp = await this.clientsModel.findOneAndUpdate({ id }, { ...updateData, updated }, {
            new: true,
        });
        return resp;
    }
    async updateValue(createClientDto, user) {
        const updated = {
            date: new Date().getTime(),
            userId: user.sub,
        };
        const { id, ...updateData } = createClientDto;
        const resp = await this.clientsModel.findOneAndUpdate({ id }, { ...updateData, updated });
        return resp;
    }
    getStatus({ id: clientId }) {
        var _a;
        if (((_a = status === null || status === void 0 ? void 0 : status.toLowerCase) === null || _a === void 0 ? void 0 : _a.call(status)) === common_interfaces_1.PAYMENT_STATUS.NOT_ACTIVE) {
            return status;
        }
        const lastPaymentByClientId = this.payments
            .sort((next, prev) => Number(prev.date) - Number(next.date))
            .find((payment) => payment.clientId === clientId &&
            payment.title.toLowerCase() === "membership");
        if (!lastPaymentByClientId) {
            return common_interfaces_1.PAYMENT_STATUS.PENDING;
        }
        const date = Number(lastPaymentByClientId.date);
        const expireDate = new Date(date).setMonth(new Date(date).getMonth() + 1);
        const currentDate = new Date().getTime();
        return expireDate > currentDate
            ? common_interfaces_1.PAYMENT_STATUS.ACTIVE
            : common_interfaces_1.PAYMENT_STATUS.PENDING;
    }
    async findAll(user) {
        const currentUser = await this.usersService.findOne(user.sub);
        const clients = await this.clientsModel
            .find({ userId: currentUser.id })
            .exec();
        return clients
            .map((client) => {
            const { _id, ...clientData } = client.toObject();
            return {
                ...clientData,
                status: this.getStatus(client),
            };
        });
    }
    async findOne(id) {
        return this.clientsModel.findOne({ id: id }).exec();
    }
    async delete(id) {
        const deletedCat = await this.clientsModel
            .deleteOne({ id }).exec();
        return deletedCat;
    }
};
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(clients_schema_1.ClientsDataClass.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, users_service_1.UsersService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map