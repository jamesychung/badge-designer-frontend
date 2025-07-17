"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BadgeDesign_exports = {};
__export(BadgeDesign_exports, {
  BadgeDesignManager: () => BadgeDesignManager,
  DefaultBadgeDesignSelection: () => DefaultBadgeDesignSelection
});
module.exports = __toCommonJS(BadgeDesign_exports);
var import_builder = require("../builder.js");
const DefaultBadgeDesignSelection = {
  __typename: true,
  id: true,
  backgroundColor: true,
  backingPrice: true,
  backingType: true,
  basePrice: true,
  createdAt: true,
  designData: true,
  designId: true,
  productId: true,
  shopId: true,
  status: true,
  textLines: true,
  totalPrice: true,
  updatedAt: true,
  userId: true
};
const modelApiIdentifier = "badgeDesign";
const pluralModelApiIdentifier = "badgeDesigns";
;
;
;
;
;
;
;
const BadgeDesignManager = (0, import_builder.buildModelManager)(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultBadgeDesignSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: "findOne",
      operationName: pluralModelApiIdentifier,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: pluralModelApiIdentifier,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: "action",
      operationName: "createBadgeDesign",
      operationReturnType: "CreateBadgeDesign",
      functionName: "create",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        badgeDesign: { required: false, type: "CreateBadgeDesignInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultBadgeDesignSelection
    },
    {
      type: "action",
      operationName: "bulkCreateBadgeDesigns",
      functionName: "bulkCreate",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: "create",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: "[BulkCreateBadgeDesignsInput!]" }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultBadgeDesignSelection
    },
    {
      type: "action",
      operationName: "getByShopBadgeDesign",
      operationReturnType: "GetByShopBadgeDesign",
      functionName: "getByShop",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: { id: { required: true, type: "GadgetID" } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: false,
      hasCreateOrUpdateEffect: false,
      defaultSelection: DefaultBadgeDesignSelection
    },
    {
      type: "action",
      operationName: "bulkGetByShopBadgeDesigns",
      functionName: "bulkGetByShop",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: false,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: "getByShop",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: { ids: { required: true, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: DefaultBadgeDesignSelection
    },
    {
      type: "computedView",
      operationName: "view",
      functionName: "view",
      gqlFieldName: "badgeDesignGellyView",
      namespace: null,
      variables: {
        query: { type: "String", required: true },
        args: { type: "JSONObject" }
      }
    }
  ]
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BadgeDesignManager,
  DefaultBadgeDesignSelection
});
//# sourceMappingURL=BadgeDesign.js.map
