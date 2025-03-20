import { HydratedDocument } from "mongoose";
import { MetaData } from "../Common/common.interfaces";
export type ClientsDocument = HydratedDocument<ClientsDataClass>;
export declare class ClientsDataClass {
    id: string;
    userId: string;
    email: string;
    pass: string;
    photo: string;
    name: string;
    surname: string;
    dob: string;
    gender: string;
    phone: string;
    created: MetaData;
    updated: MetaData;
}
export declare const ClientSchema: any;
