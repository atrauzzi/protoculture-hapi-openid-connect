import { interfaces } from "inversify";
import { hapiOpenIdConnectSymbols } from "../index";
import { AuthorizationRequest } from "../Domain/AuthorizationRequest";


export interface AuthorizationRegistrar {

    updateAuthorizationRequest(authorizationRequest: AuthorizationRequest): Promise<void>;
    getAuthorizationRequest(authorizationRequestId: string): Promise<AuthorizationRequest>;
    storeAuthorizationRequest(authorizationRequest: AuthorizationRequest): Promise<string>;
    deleteAuthorizationRequest(authorizationRequestId: string): Promise<void>;
}

let authorizationRegistrar: AuthorizationRegistrar = null;

export function configureAuthorizationShim(container: interfaces.Container) {

    authorizationRegistrar = container.get<AuthorizationRegistrar>(hapiOpenIdConnectSymbols.AuthorizationRegistrar);
}

export async function put_authorization_request(authorizationRequest: AuthorizationRequest) {

    await authorizationRegistrar.updateAuthorizationRequest(authorizationRequest);
}

export async function get_authorization_request(authorizationRequestId: string) {

    return await authorizationRegistrar.getAuthorizationRequest(authorizationRequestId);
}

export async function post_authorization_request(authorizationRequest: AuthorizationRequest) {

    return await authorizationRegistrar.storeAuthorizationRequest(authorizationRequest);
}

export async function delete_authorization_request(authorizationRequestId: string) {

    await authorizationRegistrar.deleteAuthorizationRequest(authorizationRequestId);
}
