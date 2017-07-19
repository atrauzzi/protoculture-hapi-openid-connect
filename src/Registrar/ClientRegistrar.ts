import * as Hapi from "hapi";
import { interfaces } from "inversify";
import { hapiOpenIdConnectSymbols } from "../index";
import { Client } from "../Domain/Client";


export interface ClientRegistrar {

    getClient(clientId: string): Promise<Client>;
    getClientId(username: string, password: string): Promise<string>;
    signIn(request: Hapi.Request, reply: Hapi.Base_Reply): Promise<string>;
}

let clientRegistrar: ClientRegistrar = null;

export function configureClientShim(container: interfaces.Container) {

    clientRegistrar = container.get<ClientRegistrar>(hapiOpenIdConnectSymbols.ClientRegistrar);
}

export async function get_client_registration(clientId: string) {

    const client = await clientRegistrar.getClient(clientId);

    return client
        ? {
            redirect_uri_hostname: client.redirectUriHost,
            redirect_uri_port: client.redirectUriPort,
            redirect_uri_path: client.redirectUriPath,
            description: client.description,
        }
        : null;
}

export async function get_client_account_id_for_credentials(username: string, password: string) {

    return await clientRegistrar.getClientId(username, password);
}

export async function process_signin_request(request: Hapi.Request, reply: Hapi.Base_Reply) {

    return await clientRegistrar.signIn(request, reply);
}
