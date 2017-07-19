import * as _ from "lodash";
import { HapiOpenIdConnectOptions } from "./HapiOpenIdConnectOptions";


// I'm really only doing this because I despise underscores and bad names!
const mappings = {
    "version": "version",
    "baseUri": "oidc_url_path",
    "configuration.issuer": "configuration.issuer",
    "configuration.issuerAudience": "configuration.issuer_audience",
    "configuration.scopesSupported": "configuration.scopes_supported",
    "configuration.jwk.rsa": "configuration.jwk.cert_type_rsa",
    "configuration.jwk.privateKeyFilePath": "configuration.jwk.priv_key_file_name",
    "configuration.jwk.publicKeyFilePath": "configuration.jwk.pub_key_file_name",
    "configuration.jwk.certificateChainFilePath": "configuration.jwk.cert_chain_file_name",
    "configuration.authorizations.registrarModule": "configuration.authorization_endpoint.authorization_request_registrar_module",
    "configuration.token.registrarModule": "configuration.token_endpoint.token_registrar_module",
    "configuration.authorizationCodeGrantType.duration": "configuration.token_endpoint.authorization_code_grant_type.token_duration_seconds",
    "configuration.passwordGrantType.duration": "configuration.token_endpoint.password_grant_type.token_duration_seconds",
    "configuration.user.registrarModule": "configuration.user_info_endpoint.user_authentication_url",
    "configuration.user.authenticationUri": "configuration.user_info_endpoint.user_post_login_account_url",
    "configuration.user.accountUri": "configuration.user_info_endpoint.user_account_registrar_module",
    "configuration.client.registrarModule": "configuration.client_endpoint.client_registrar_module",
};

export function mapConfiguration(options: HapiOpenIdConnectOptions) {

    const hapiOpenIdConnectOptions: any = {
        version: 1,
    };

    _.forEach(mappings, (destinationPath, sourcePath) =>
        mapValue(options, sourcePath, hapiOpenIdConnectOptions, destinationPath));
}

function mapValue(source: HapiOpenIdConnectOptions, sourcePath: string, destination: any, destinationPath: string) {

    const value = _.get(source, sourcePath);

    if (!_.isNull(value) && !_.isUndefined(value)) {

        _.set(destination, destinationPath, value);
    }
}
