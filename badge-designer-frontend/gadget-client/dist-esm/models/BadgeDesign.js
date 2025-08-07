import { buildModelManager } from "../builder.js";
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
const BadgeDesignManager = buildModelManager(
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
export {
  BadgeDesignManager,
  DefaultBadgeDesignSelection
};
//# sourceMappingURL=BadgeDesign.js.map
