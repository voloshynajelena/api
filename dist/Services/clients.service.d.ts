import { Model } from "mongoose";
import { CreateClientDto } from "../DTO/create-client.dto";
import { ClientsDataClass } from "../Schemas/clients.schema";
import { UsersService } from "./users.service";
export declare class ClientsService {
    private clientsModel;
    private usersService;
    payments: any;
    constructor(clientsModel: Model<ClientsDataClass>, usersService: UsersService);
    create(createClientDto: CreateClientDto, user: any): Promise<ClientsDataClass>;
    update(createClientDto: CreateClientDto, user: any): Promise<ClientsDataClass>;
    updateValue(createClientDto: CreateClientDto, user: any): Promise<ClientsDataClass>;
    private getStatus;
    findAll(user: any): Promise<ClientsDataClass[]>;
    findOne(id: string): Promise<ClientsDataClass>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
