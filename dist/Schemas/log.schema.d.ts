import { HydratedDocument } from "mongoose";
import { MetaData } from "../Common/common.interfaces";
export type LogsDocument = HydratedDocument<LogDataClass>;
export declare class LogDataClass {
    id: string;
    url: string;
    body: string;
    method: string;
    created: MetaData;
}
export declare const LogSchema: any;
