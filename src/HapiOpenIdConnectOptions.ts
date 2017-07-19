

export interface HapiOpenIdConnectOptions {

    baseUri?: string;

    configuration?: {

        issuer?: string,

        issuerAudience?: string;

        scopesSupported?: string[],

        jwk?: {

            rsa?: boolean,

            privateKeyFilePath?: string,

            publicKeyFilePath?: string,

            certificateChainFilePath?: string,
        },

        authorizations?: {

            registrarModule?: string,
        },

        token?: {

            registrarModule?: string,

            authorizationCodeGrantType: {
                duration: number,
            },

            passwordGrantType: {
                duration: number,
            },
        },

        user?: {

            registrarModule?: string,
            authenticationUri: string,
            accountUri: string,
        },

        client?: {

            registrarModule?: string,
        },
    };
}
