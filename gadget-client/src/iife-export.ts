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

// add the client to the window
window.AllqualitybadgesClient = AllqualitybadgesClient;

const previousValue: any = window.Gadget;

// add the client to the window at the old .Gadget property for backwards compatibility -- the AllqualitybadgesClient property should be preferred instead
window.Gadget = AllqualitybadgesClient;
(window.Gadget as any).previousValue = previousValue;
