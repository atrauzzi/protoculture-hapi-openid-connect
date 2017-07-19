import * as Hapi from "hapi";
import { ClientRegistrar } from "../src/index";
import { Client } from "../src/Domain/Client";


export class DemoClientRegistrar implements ClientRegistrar {

    public async getClient(clientId: string): Promise<Client> {

        throw new Error("Method not implemented.");
    }

    public async getClientId(username: string, password: string): Promise<string> {

        throw new Error("Method not implemented.");
    }

    public async signIn(request: Hapi.Request, reply: Hapi.Base_Reply): Promise<string> {

        throw new Error("Method not implemented.");
    }
}
