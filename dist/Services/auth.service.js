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
exports.AuthService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const auth_schema_1 = require("../Schemas/auth.schema");
const jwt_1 = require("@nestjs/jwt");
let AuthService = exports.AuthService = class AuthService {
    constructor(authModel, jwtService) {
        this.authModel = authModel;
        this.jwtService = jwtService;
    }
    async findOne(login) {
        console.log({ login });
        return this.authModel.findOne({ login: login }).exec();
    }
    async signIn(email, password) {
        const user = await this.findOne(email);
        if ((user === null || user === void 0 ? void 0 : user.pass) !== password) {
            throw new common_1.UnauthorizedException();
        }
        const { id } = user;
        const payload = { sub: user.id, username: user.login };
        return {
            token: await this.jwtService.signAsync(payload),
            id,
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(auth_schema_1.AuthDataClass.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map