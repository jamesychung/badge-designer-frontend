import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  FieldSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,

  IDsList,
  PromiseOrLiveIterator,
  BadgeDesign,
  AvailableBadgeDesignSelection,
  BadgeDesignSort,
  BadgeDesignFilter,
  CreateBadgeDesignInput
} from "../types.js";

import { buildModelManager } from "../builder.js";
import { AvailableSelection, AllFieldsSelected, DefaultSelection, Select, DeepFilterNever } from "../utils.js";

/**
* A type that holds only the selected fields (and nested fields) of badgeDesign. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedBadgeDesignOrDefault<Options extends Selectable<AvailableBadgeDesignSelection>> = DeepFilterNever<
    Select<
      BadgeDesign,
      DefaultSelection<
        AvailableBadgeDesignSelection,
        Options,
        typeof DefaultBadgeDesignSelection
      >
    >
  >;

/**
 * A type that represents a `GadgetRecord` type for badgeDesign.
 * It selects all fields of the model by default. If you want to represent a record type with a subset of fields, you could pass in an object in the `Selection` type parameter.
 *
 * @example
 * ```ts
 * const someFunction = (record: BadgeDesignRecord, recordWithName: BadgeDesignRecord<{ select: { name: true; } }>) => {
 *   // The type of the `record` variable will include all fields of the model.
 *   const name = record.name;
 *   const otherField = record.otherField;
 *
 *   // The type of the `recordWithName` variable will only include the selected fields.
 *   const name = recordWithName.name;
 *   const otherField = recordWithName.otherField; // Type error: Property 'otherField' does not exist on type 'GadgetRecord<{ name: true; }>'.
 * }
 * ```
 */
export type BadgeDesignRecord<Selection extends AvailableBadgeDesignSelection | undefined = typeof DefaultBadgeDesignSelection> = DeepFilterNever<
  GadgetRecord<
    SelectedBadgeDesignOrDefault<{
      select: Selection;
    }>
  >
>;

export const DefaultBadgeDesignSelection = {
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
   } as const;
const modelApiIdentifier = "badgeDesign" as const;
const pluralModelApiIdentifier = "badgeDesigns" as const;
/** Options that can be passed to the `BadgeDesignManager#findOne` method */
 export interface FindOneBadgeDesignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBadgeDesignSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `BadgeDesignManager#maybeFindOne` method */
 export interface MaybeFindOneBadgeDesignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBadgeDesignSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `BadgeDesignManager#findMany` method */
 export interface FindManyBadgeDesignsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBadgeDesignSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: BadgeDesignSort | BadgeDesignSort[] | null;
  /** Only return records matching these filters. */
  filter?: BadgeDesignFilter | BadgeDesignFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};
/** Options that can be passed to the `BadgeDesignManager#findFirst` method */
 export interface FindFirstBadgeDesignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBadgeDesignSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: BadgeDesignSort | BadgeDesignSort[] | null;
  /** Only return records matching these filters. */
  filter?: BadgeDesignFilter | BadgeDesignFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
/** Options that can be passed to the `BadgeDesignManager#maybeFindFirst` method */
 export interface MaybeFindFirstBadgeDesignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBadgeDesignSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: BadgeDesignSort | BadgeDesignSort[] | null;
  /** Only return records matching these filters. */
  filter?: BadgeDesignFilter | BadgeDesignFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
export interface CreateBadgeDesignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBadgeDesignSelection;
};
export interface GetByShopBadgeDesignOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableBadgeDesignSelection;
};
/**
 * The fully-qualified, expanded form of the inputs for executing the create action.
 * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
 **/
export type FullyQualifiedCreateBadgeDesignVariables = {
  badgeDesign?: CreateBadgeDesignInput;
}
/**
 * The inputs for executing create on badgeDesign.
 * This is the flattened style of inputs, suitable for general use, and should be preferred.
 **/
export type CreateBadgeDesignVariables = CreateBadgeDesignInput;
/**
 * The return value from executing create on badgeDesign
 * Is a GadgetRecord of the model's type.
 **/
export type CreateBadgeDesignResult<Options extends CreateBadgeDesignOptions> = SelectedBadgeDesignOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedBadgeDesignOrDefault<Options>>;
/**
 * The return value from executing getByShop on badgeDesign
 * Is a GadgetRecord of the model's type.
 **/
export type GetByShopBadgeDesignResult<Options extends GetByShopBadgeDesignOptions> = SelectedBadgeDesignOrDefault<Options> extends void ?
      void :
      GadgetRecord<SelectedBadgeDesignOrDefault<Options>>;

/**
 * A manager for the badgeDesign model with all the available operations for reading and writing to it.*/
export type BadgeDesignManager = {
  readonly connection: GadgetConnection;

  findOne: {
      /**
       * Finds one badgeDesign by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends FindOneBadgeDesignOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneBadgeDesignOptions>): PromiseOrLiveIterator<Options,BadgeDesignRecord<Options["select"]>>;
      type: 'findOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultBadgeDesignSelection;
      namespace: null;
      optionsType: FindOneBadgeDesignOptions;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
    }
  maybeFindOne: {
      /**
       * Finds one badgeDesign by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
       **/
      <Options extends MaybeFindOneBadgeDesignOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneBadgeDesignOptions>): PromiseOrLiveIterator<Options,BadgeDesignRecord<Options["select"]> | null>;
      type: 'maybeFindOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: MaybeFindOneBadgeDesignOptions;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultBadgeDesignSelection;
      namespace: null;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
    }
  findMany: {
      /**
       * Finds many badgeDesign. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindManyBadgeDesignsOptions>(options?: LimitToKnownKeys<Options, FindManyBadgeDesignsOptions>): PromiseOrLiveIterator<Options,GadgetRecordList<BadgeDesignRecord<Options["select"]>>>;
      type: 'findMany';
      operationName: typeof pluralModelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: FindManyBadgeDesignsOptions;
      defaultSelection: typeof DefaultBadgeDesignSelection;
      namespace: null;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
    }
  findFirst: {
      /**
       * Finds the first matching badgeDesign. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindFirstBadgeDesignOptions>(options?: LimitToKnownKeys<Options, FindFirstBadgeDesignOptions>): PromiseOrLiveIterator<Options,BadgeDesignRecord<Options["select"]>>;
      type: 'findFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: FindFirstBadgeDesignOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultBadgeDesignSelection;
      namespace: null;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
    }
  maybeFindFirst: {
      /**
       * Finds the first matching badgeDesign. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
       **/
      <Options extends MaybeFindFirstBadgeDesignOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstBadgeDesignOptions>): PromiseOrLiveIterator<Options,BadgeDesignRecord<Options["select"]> | null>;
      type: 'maybeFindFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: MaybeFindFirstBadgeDesignOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultBadgeDesignSelection;
      namespace: null;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
    }
  findById: {
      /**
      * Finds one badgeDesign by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
      **/
      <Options extends FindOneBadgeDesignOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBadgeDesignOptions>): PromiseOrLiveIterator<Options,BadgeDesignRecord<Options["select"]>>;
      type: 'findOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneBadgeDesignOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultBadgeDesignSelection;
      namespace: null;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
    }
  maybeFindById: {
      /**
      * Finds one badgeDesign by its id. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
      **/
      <Options extends FindOneBadgeDesignOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneBadgeDesignOptions>): Promise<BadgeDesignRecord<Options["select"]> | null>;
      type: 'maybeFindOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneBadgeDesignOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultBadgeDesignSelection;
      namespace: null;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
    }
  create: {
      /**
       * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the flat style, all-params-together overload that most use cases should use.
      *
      * @example
      * * const badgeDesignRecord = await api.badgeDesign.create({
        *   backgroundColor: "example value for backgroundColor",
        *   backingPrice: 123,
        *   backingType: "example value for backingType",
        *   basePrice: 123,
        *   designData: {
        *     example: true,
        *     key: "value",
        *   },
        * });
      **/
      <Options extends CreateBadgeDesignOptions>(
      
        variables: CreateBadgeDesignVariables,
        options?: LimitToKnownKeys<Options, CreateBadgeDesignOptions>
      ): Promise<CreateBadgeDesignResult<Options>>;
      /**
       * Executes the create action.Accepts the parameters for the action via the `variables` argument.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const badgeDesignRecord = await api.badgeDesign.create({
        *   badgeDesign: {
        *     backgroundColor: "example value for backgroundColor",
        *     backingPrice: 123,
        *     backingType: "example value for backingType",
        *     basePrice: 123,
        *     designData: {
        *       example: true,
        *       key: "value",
        *     },
        *   },
        * });
      **/
      <Options extends CreateBadgeDesignOptions>(
      
        variables: FullyQualifiedCreateBadgeDesignVariables,
        options?: LimitToKnownKeys<Options, CreateBadgeDesignOptions>
      ): Promise<CreateBadgeDesignResult<Options>>;
      type: 'action';
      operationName: 'createBadgeDesign';
      operationReturnType: 'CreateBadgeDesign';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: false;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: { badgeDesign: { required: false, type: 'CreateBadgeDesignInput' } };
      variablesType: ((
               
               & (FullyQualifiedCreateBadgeDesignVariables | CreateBadgeDesignVariables)
             ) | undefined);
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: true;
      hasCreateOrUpdateEffect: true;
      imports: [ 'CreateBadgeDesignInput' ];
      optionsType: CreateBadgeDesignOptions;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
      defaultSelection: typeof DefaultBadgeDesignSelection;
    }
  bulkCreate: {
      /**
        * Executes the bulkCreate action with the given inputs.
        */
       <Options extends CreateBadgeDesignOptions>(
          inputs: (FullyQualifiedCreateBadgeDesignVariables | CreateBadgeDesignVariables)[],
          options?: LimitToKnownKeys<Options, CreateBadgeDesignOptions>
       ): Promise<CreateBadgeDesignResult<Options>[]>
      type: 'action';
      operationName: 'bulkCreateBadgeDesigns';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: true;
      operatesWithRecordIdentity: false;
      singleActionFunctionName: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: CreateBadgeDesignOptions;
      namespace: null;
      variables: { inputs: { required: true, type: '[BulkCreateBadgeDesignsInput!]' } };
      variablesType: (FullyQualifiedCreateBadgeDesignVariables | CreateBadgeDesignVariables)[];
      paramOnlyVariables: [];
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
      defaultSelection: typeof DefaultBadgeDesignSelection;
    }
  getByShop: {
      /**
       * Executes the getByShop actionon one record specified by `id`.Runs the action and returns a Promise for the updated record.
      *
      * This is the fully qualified, nested api identifier style overload that should be used when there's an ambiguity between an action param and a model field.
      *
      * @example
      * * const badgeDesignRecord = await api.badgeDesign.getByShop("1");
      **/
      <Options extends GetByShopBadgeDesignOptions>(
        id: string,
      
        options?: LimitToKnownKeys<Options, GetByShopBadgeDesignOptions>
      ): Promise<GetByShopBadgeDesignResult<Options>>;
      type: 'action';
      operationName: 'getByShopBadgeDesign';
      operationReturnType: 'GetByShopBadgeDesign';
      namespace: null;
      modelApiIdentifier: typeof modelApiIdentifier;
      operatesWithRecordIdentity: true;
      modelSelectionField: typeof modelApiIdentifier;
      isBulk: false;
      isDeleter: false;
      variables: { id: { required: true, type: 'GadgetID' } };
      variablesType: (
              { id: string }
              
            );
      hasAmbiguousIdentifier: false;
      paramOnlyVariables: [];
      hasReturnType: false;
      acceptsModelInput: false;
      hasCreateOrUpdateEffect: false;
      imports: [];
      optionsType: GetByShopBadgeDesignOptions;
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
      defaultSelection: typeof DefaultBadgeDesignSelection;
    }
  bulkGetByShop: {
      /**
        * Executes the bulkGetByShop action with the given inputs.
        */
       <Options extends GetByShopBadgeDesignOptions>(
          ids: string[],
          options?: LimitToKnownKeys<Options, GetByShopBadgeDesignOptions>
       ): Promise<GetByShopBadgeDesignResult<Options>[]>
      type: 'action';
      operationName: 'bulkGetByShopBadgeDesigns';
      isBulk: true;
      isDeleter: false;
      hasReturnType: false;
      acceptsModelInput: false;
      operatesWithRecordIdentity: true;
      singleActionFunctionName: 'getByShop';
      modelApiIdentifier: typeof modelApiIdentifier;
      modelSelectionField: typeof pluralModelApiIdentifier;
      optionsType: GetByShopBadgeDesignOptions;
      namespace: null;
      variables: { ids: { required: true, type: '[GadgetID!]' } };
      variablesType: IDsList | undefined;
      paramOnlyVariables: [];
      selectionType: AvailableBadgeDesignSelection;
      schemaType: Query["badgeDesign"];
      defaultSelection: typeof DefaultBadgeDesignSelection;
    }
  view: {
      (query: string, variables?: Record<string, unknown>): Promise<unknown>
      type: 'computedView';
      operationName: 'view';
      gqlFieldName: 'badgeDesignGellyView';
      namespace: null;
      imports: [];
      variables: {
          query: { type: 'String', required: true },
          args: { type: 'JSONObject' }
        };
      variablesType: Record<string, unknown>;
      resultType: Promise<unknown>;
      plan: never;
    }
};

/**
 * A manager for the badgeDesign model with all the available operations for reading and writing to it.*/
export const BadgeDesignManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultBadgeDesignSelection,
  [
    {
      type: 'findOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: 'findMany',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: 'findFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: 'maybeFindFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: 'findOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'findById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'maybeFindById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultBadgeDesignSelection,
      namespace: null
    },
    {
      type: 'action',
      operationName: 'createBadgeDesign',
      operationReturnType: 'CreateBadgeDesign',
      functionName: 'create',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        badgeDesign: { required: false, type: 'CreateBadgeDesignInput' }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultBadgeDesignSelection
    },
    {
      type: 'action',
      operationName: 'bulkCreateBadgeDesigns',
      functionName: 'bulkCreate',
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: 'create',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: '[BulkCreateBadgeDesignsInput!]' }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultBadgeDesignSelection
    },
    {
      type: 'action',
      operationName: 'getByShopBadgeDesign',
      operationReturnType: 'GetByShopBadgeDesign',
      functionName: 'getByShop',
      namespace: null,
      modelApiIdentifier: modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: { id: { required: true, type: 'GadgetID' } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: false,
      hasCreateOrUpdateEffect: false,
      defaultSelection: DefaultBadgeDesignSelection
    },
    {
      type: 'action',
      operationName: 'bulkGetByShopBadgeDesigns',
      functionName: 'bulkGetByShop',
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: false,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: 'getByShop',
      modelApiIdentifier: modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: { ids: { required: true, type: '[GadgetID!]' } },
      paramOnlyVariables: [],
      defaultSelection: DefaultBadgeDesignSelection
    },
    {
      type: 'computedView',
      operationName: 'view',
      functionName: 'view',
      gqlFieldName: 'badgeDesignGellyView',
      namespace: null,
      variables: {
        query: { type: 'String', required: true },
        args: { type: 'JSONObject' }
      }
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): BadgeDesignManager;
};