import { Bundle, ConsoleServiceProvider } from "protoculture";
import { DemoServiceProvider } from "./ServiceProvider";
import { HapiServiceProvider } from "protoculture-hapi";


export class DemoBundle extends Bundle {

    public name = "protoculture-hapi-openid-connect-demo";

    public get serviceProviders() {

        return [
            ConsoleServiceProvider,
            HapiServiceProvider,
            // HapiAuthCookieServiceProvider, // To be made...
            DemoServiceProvider,
        ];
    }
}

const demoBundle = new DemoBundle();
demoBundle.run();
