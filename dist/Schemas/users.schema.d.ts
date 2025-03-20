import { HydratedDocument } from "mongoose";
export type UsersDocument = HydratedDocument<UsersDataClass>;
export declare class UsersDataClass {
    userId: string;
    id: string;
    name: string;
    surname: string;
    email: string;
    pass: string;
    phone: string;
    photo: string;
}
export declare const UserSchema: any;
