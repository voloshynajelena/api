import { HydratedDocument } from "mongoose";
export type AuthDocument = HydratedDocument<AuthDataClass>;
export declare class AuthDataClass {
    id: string;
    login: string;
    pass: string;
}
export declare const AuthSchema: any;
