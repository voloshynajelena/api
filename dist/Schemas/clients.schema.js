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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = exports.ClientsDataClass = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_schema_1 = require("../Common/common.schema");
let ClientsDataClass = exports.ClientsDataClass = class ClientsDataClass {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "pass", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "photo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "surname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "dob", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ClientsDataClass.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: common_schema_1.MetaDataSchema }),
    __metadata("design:type", Object)
], ClientsDataClass.prototype, "created", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: common_schema_1.MetaDataSchema }),
    __metadata("design:type", Object)
], ClientsDataClass.prototype, "updated", void 0);
exports.ClientsDataClass = ClientsDataClass = __decorate([
    (0, mongoose_1.Schema)({ collection: "clients" })
], ClientsDataClass);
exports.ClientSchema = mongoose_1.SchemaFactory.createForClass(ClientsDataClass);
//# sourceMappingURL=clients.schema.js.map