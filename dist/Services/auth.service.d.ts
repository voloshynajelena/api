import { Model } from "mongoose";
import { AuthDataClass } from "../Schemas/auth.schema";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private authModel;
    private jwtService;
    constructor(authModel: Model<AuthDataClass>, jwtService: JwtService);
    findOne(login: string): Promise<AuthDataClass>;
    signIn(email: string, password: string): Promise<any>;
}
