import { CreateUserDto } from "../DTO/create-user.dto";
import { UsersDataClass } from "../Schemas/users.schema";
import { UsersService } from "../Services/users.service";
export declare class UsersController {
    private readonly UsersService;
    constructor(UsersService: UsersService);
    findOne(id: string): Promise<UsersDataClass>;
    update(UserDto: CreateUserDto): Promise<CreateUserDto>;
}
