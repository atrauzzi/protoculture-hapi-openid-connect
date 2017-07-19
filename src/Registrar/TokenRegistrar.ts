import { interfaces } from "inversify";
import { hapiOpenIdConnectSymbols } from "../index";
import { OidcToken } from "../Domain/OidcToken";


export interface TokenRegistrar {

    updateToken(authorizationRequest: OidcToken): Promise<void>;
    getToken(authorizationRequestId: string): Promise<OidcToken>;
    storeToken(authorizationRequest: OidcToken): Promise<string>;
    deleteToken(authorizationRequestId: string): Promise<void>;
}

let tokenRegistrar: TokenRegistrar = null;

export function configureTokenShim(container: interfaces.Container) {

    tokenRegistrar = container.get<TokenRegistrar>(hapiOpenIdConnectSymbols.TokenRegistrar);
}

export async function put_token(authorizationRequest: OidcToken) {

    await tokenRegistrar.updateToken(authorizationRequest);
}

export async function get_token(authorizationRequestId: string) {

    return await tokenRegistrar.getToken(authorizationRequestId);
}

export async function post_token(authorizationRequest: OidcToken) {

    return await tokenRegistrar.storeToken(authorizationRequest);
}

export async function delete_token(authorizationRequestId: string) {

    await tokenRegistrar.deleteToken(authorizationRequestId);
}
