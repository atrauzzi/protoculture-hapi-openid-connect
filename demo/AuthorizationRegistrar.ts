import { AuthorizationRegistrar } from "../src/index";
import { AuthorizationRequest } from "../src/Domain/AuthorizationRequest";


export class DemoAuthorizationRegistrar implements AuthorizationRegistrar {

    public async updateAuthorizationRequest(authorizationRequest: AuthorizationRequest): Promise<void> {

        throw new Error("Method not implemented.");
    }

    public async getAuthorizationRequest(authorizationRequestId: string): Promise<AuthorizationRequest> {

        throw new Error("Method not implemented.");
    }

    public async storeAuthorizationRequest(authorizationRequest: AuthorizationRequest): Promise<string> {

        throw new Error("Method not implemented.");
    }

    public async deleteAuthorizationRequest(authorizationRequestId: string): Promise<void> {

        throw new Error("Method not implemented.");
    }
}
