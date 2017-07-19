import "./Extensions";


export { AuthorizationRegistrar } from "./Registrar/AuthorizationRegistrar";
export { TokenRegistrar } from "./Registrar/TokenRegistrar";
export { UserRegistrar } from "./Registrar/UserRegistrar";
export { ClientRegistrar } from "./Registrar/ClientRegistrar";

export const hapiOpenIdConnectSymbols = {
    AuthorizationRegistrar: Symbol("HapiOpenIdConnectAuthorizationRegistrar"),
    TokenRegistrar: Symbol("HapiOpenIdConnectTokenRegistrar"),
    UserRegistrar: Symbol("HapiOpenIdConnectUserRegistrar"),
    ClientRegistrar: Symbol("HapiOpenIdConnectClientRegistrar"),
    Scopes: Symbol("HapiOpenIdConnectScopes"),
};

