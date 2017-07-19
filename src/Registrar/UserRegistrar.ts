import { interfaces } from "inversify";
import { hapiOpenIdConnectSymbols } from "../index";


export interface UserRegistrar {

    getUserId(username: string, password: string): Promise<string>;
}

let userRegistrar: UserRegistrar = null;

export function configureUserShim(container: interfaces.Container) {

    userRegistrar = container.get<UserRegistrar>(hapiOpenIdConnectSymbols.UserRegistrar);
}

export async function get_user_account_id_for_credentials(username: string, password: string) {

    return await userRegistrar.getUserId(username, password);
}
