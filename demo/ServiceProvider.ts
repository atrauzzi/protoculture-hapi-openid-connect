import "protoculture-hapi";
import { hapiOpenIdConnectSymbols } from "../src/index";
import { ServiceProvider } from "protoculture";
import { DemoAuthorizationRegistrar } from "./AuthorizationRegistrar";
import { DemoClientRegistrar } from "./ClientRegistrar";
import { DemoUserRegistrar } from "./UserRegistrar";
import { DemoTokenRegistrar } from "./TokenRegistrar";


export class DemoServiceProvider extends ServiceProvider {

    public async boot() {

        this.configureConnection((container) => ({
            address: "0.0.0.0",
            port: 2112,
        }));

        this.configureRoute({
            path: "/test",
            method: "GET",
            handler: (request, reply) => {

                reply("Hiya!");
            },
        });

        this.makeInjectable(DemoAuthorizationRegistrar);
        this.bindConstructor(hapiOpenIdConnectSymbols.AuthorizationRegistrar, DemoAuthorizationRegistrar);

        this.makeInjectable(DemoClientRegistrar);
        this.bindConstructor(hapiOpenIdConnectSymbols.ClientRegistrar, DemoClientRegistrar);

        this.makeInjectable(DemoUserRegistrar);
        this.bindConstructor(hapiOpenIdConnectSymbols.UserRegistrar, DemoUserRegistrar);

        this.makeInjectable(DemoTokenRegistrar);
        this.bindConstructor(hapiOpenIdConnectSymbols.TokenRegistrar, DemoTokenRegistrar);

        this.bindHapiOpenIdConnect();
    }
}
