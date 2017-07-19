import * as _ from "lodash";
import * as inversify from "inversify";
import * as hapiOpenIdConnect from "hapi-openid-connect";
import { ServiceProvider as ServiceProvider } from "protoculture";
import { PluginRegistrationObject } from "hapi";
import { hapiOpenIdConnectSymbols } from "./index";
import { hapiSymbols } from "protoculture-hapi";
import { HapiOpenIdConnectOptions } from "./HapiOpenIdConnectOptions";
import { mapConfiguration } from "./MapConfiguration";
import { configureAuthorizationShim } from "./Registrar/AuthorizationRegistrar";
import { configureTokenShim } from "./Registrar/TokenRegistrar";
import { configureUserShim } from "./Registrar/UserRegistrar";
import { configureClientShim } from "./Registrar/ClientRegistrar";


declare module "protoculture/lib/ServiceProvider" {

    export interface ServiceProvider {

        bindHapiOpenIdConnect(options?: HapiOpenIdConnectOptions): void;
    }
}

ServiceProvider.prototype.bindHapiOpenIdConnect = function (options: HapiOpenIdConnectOptions = {}) {

    this.bundle.container
        .bind(hapiSymbols.Plugin)
        .toFactory((context: inversify.interfaces.Context) => {

            configureAuthorizationShim(context.container);
            configureTokenShim(context.container);
            configureUserShim(context.container);
            configureClientShim(context.container);

            let scopes: string[] = [];

            try {

                scopes = context.container.getAll<string>(hapiOpenIdConnectSymbols.Scopes);
            }
            catch (error) {

                // pass
            }

            const defaultOptions: HapiOpenIdConnectOptions = {

                baseUri: "/openid-connect",

                configuration: {

                    // issuer: "",

                    // issuerAudience: "",

                    scopesSupported: scopes,

                    authorizations: {

                        registrarModule: `${__dirname}/Registrar/AuthorizationRegistrar`,
                    },
                    client: {

                        registrarModule: `${__dirname}/Registrar/ClientRegistrar`,
                    },
                    token: {

                        registrarModule: `${__dirname}/Registrar/TokenRegistrar`,

                        authorizationCodeGrantType: {
                            duration: 600,
                        },

                        passwordGrantType: {
                            duration: 900,
                        }
                    },
                    user: {

                        registrarModule: `${__dirname}/Registrar/UserRegistrar`,
                        accountUri: "",
                        authenticationUri: "",
                    },
                },
            };

            const mergedOptions = _.defaultsDeep<HapiOpenIdConnectOptions, HapiOpenIdConnectOptions>(defaultOptions, options);

            return {
                register: hapiOpenIdConnect,
                options: mapConfiguration(mergedOptions),
            } as PluginRegistrationObject<any>;
        });
};

