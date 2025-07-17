/**
* This is the Gadget API client library for:
*
*         _ _                   _ _ _         _               _
*    __ _| | | __ _ _   _  __ _| (_) |_ _   _| |__   __ _  __| | __ _  ___  ___
*   / _` | | |/ _` | | | |/ _` | | | __| | | | '_ \ / _` |/ _` |/ _` |/ _ \/ __|
*  | (_| | | | (_| | |_| | (_| | | | |_| |_| | |_) | (_| | (_| | (_| |  __/\__ \
*   \__,_|_|_|\__, |\__,_|\__,_|_|_|\__|\__, |_.__/ \__,_|\__,_|\__, |\___||___/
*                |_|                    |___/                   |___/
*
* Built for environment "Development" at version 73
* API docs: https://docs.gadget.dev/api/allqualitybadges
* Edit this app here: https://allqualitybadges.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError, ChangeTracking } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
            shopifyInstallState?: {
                redirectToOauth: boolean;
                isAuthenticated: boolean;
                missingScopes: string[];
                shopExists: boolean;
            };
            shopifyAppBridgeCDNScriptSrc?: string;
        };
    }
}
