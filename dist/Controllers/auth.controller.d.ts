import { AuthService } from "../Services/auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn2(email: string, password: string): Promise<any>;
}
