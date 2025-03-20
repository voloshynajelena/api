import { CreateClientDto } from "../DTO/create-client.dto";
import { ClientsDataClass } from "../Schemas/clients.schema";
import { ClientsService } from "../Services/clients.service";
import { LogsService } from "../Services/logs.service";
import { CustomRequest } from "../Common/common.interfaces";
export declare class ClientsController {
    private readonly ClientsService;
    private readonly logsService;
    constructor(ClientsService: ClientsService, logsService: LogsService);
    create(CreateClientsDto: CreateClientDto, req: CustomRequest): Promise<ClientsDataClass>;
    update(CreateClientsDto: CreateClientDto, req: CustomRequest): Promise<ClientsDataClass>;
    updateValue(CreateClientsDto: CreateClientDto, req: CustomRequest): Promise<ClientsDataClass>;
    findAll(req: CustomRequest): Promise<ClientsDataClass[]>;
    findOne(id: string): Promise<ClientsDataClass>;
    delete(id: string, req: CustomRequest): Promise<import("mongodb").DeleteResult>;
}
