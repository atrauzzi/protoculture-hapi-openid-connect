import { TokenRegistrar } from "../src/index";
import { OidcToken } from "../src/Domain/OidcToken";


export class DemoTokenRegistrar implements TokenRegistrar {

    public async updateToken(authorizationRequest: OidcToken): Promise<void> {

        throw new Error("Method not implemented.");
    }
    public async getToken(authorizationRequestId: string): Promise<OidcToken> {

        throw new Error("Method not implemented.");
    }
    public async storeToken(authorizationRequest: OidcToken): Promise<string> {

        throw new Error("Method not implemented.");
    }
    public async deleteToken(authorizationRequestId: string): Promise<void> {

        throw new Error("Method not implemented.");
    }
}
