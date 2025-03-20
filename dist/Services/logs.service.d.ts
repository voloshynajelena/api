import { Model } from "mongoose";
import { UsersService } from "./users.service";
import { LogDataClass } from "../Schemas/log.schema";
import { CustomRequest } from "../Common/common.interfaces";
export declare class LogsService {
    private LogsModel;
    private usersService;
    constructor(LogsModel: Model<LogDataClass>, usersService: UsersService);
    log(req: CustomRequest): Promise<LogDataClass>;
    findAll(user: {
        sub: string;
    }): Promise<LogDataClass[]>;
    findOne(id: string): Promise<LogDataClass>;
}
