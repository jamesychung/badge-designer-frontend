import { AllqualitybadgesClient } from ".";
declare global {
    interface Window {
        /**
         * The Gadget client constructor
         *
         * @example
         * ```ts
         * const api = new AllqualitybadgesClient();
         * ```
         */
        AllqualitybadgesClient: typeof AllqualitybadgesClient;
        /**
         * The Gadget client for AllqualitybadgesClient
         * @deprecated Use window.AllqualitybadgesClient instead
         */
        Gadget: typeof AllqualitybadgesClient;
    }
}
