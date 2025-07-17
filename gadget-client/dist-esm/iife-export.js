import { AllqualitybadgesClient } from ".";
window.AllqualitybadgesClient = AllqualitybadgesClient;
const previousValue = window.Gadget;
window.Gadget = AllqualitybadgesClient;
window.Gadget.previousValue = previousValue;
//# sourceMappingURL=iife-export.js.map
