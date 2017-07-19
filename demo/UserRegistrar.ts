import { UserRegistrar } from "../src/index";


export class DemoUserRegistrar implements UserRegistrar {

    public async getUserId(username: string, password: string): Promise<string> {

        throw new Error("Method not implemented.");
    }
}
