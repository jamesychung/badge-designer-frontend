import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";
import { ComputedViewWithoutVariables, ComputedViewWithVariables, ComputedViewFunctionWithoutVariables, ComputedViewFunctionWithVariables } from "./computedViews.js";

export type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }


export enum GadgetFieldType {
  Any,
  Array,
  BelongsTo,
  Boolean,
  Code,
  Color,
  Computed,
  DateTime,
  Email,
  EncryptedString,
  Enum,
  File,
  HasMany,
  HasManyThrough,
  HasOne,
  ID,
  JSON,
  Money,
  Null,
  Number,
  Object,
  Password,
  RecordState,
  RichText,
  RoleAssignments,
  String,
  URL,
  Vector,
}


export enum BackgroundActionPriority {
  DEFAULT,
  HIGH,
  LOW,
  PLATFORM,
}


export enum BackgroundActionOutcome {
  failed,
  completed,
}



export type GadgetFieldValidationUnion = AvailableGadgetRegexFieldValidationSelection | AvailableGadgetRangeFieldValidationSelection | AvailableGadgetOnlyImageFileFieldValidationSelection | AvailableGadgetGenericFieldValidationSelection;


export type AvailableGadgetFieldValidationUnionSelection = GadgetRegexFieldValidation | GadgetRangeFieldValidation | GadgetOnlyImageFileFieldValidation | GadgetGenericFieldValidation;

/** Represents the possible values of the Customer Accounts enum. */
export type ShopifyShopCustomerAccountsEnum = "DISABLED" | "OPTIONAL" | "REQUIRED" | string;

/** Represents the possible values of the Ships To Countries enum. */
export type ShopifyShopShipsToCountriesEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AR" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MK" | "ML" | "MM" | "MN" | "MO" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PS" | "PT" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "ZZ" | string;

/** Represents the possible values of the Unit System enum. */
export type ShopifyShopUnitSystemEnum = "IMPERIAL_SYSTEM" | "METRIC_SYSTEM" | string;

/** Represents the possible values of the Currency enum. */
export type ShopifyShopCurrencyEnum = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KID" | "KMF" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USDC" | "UYU" | "UZS" | "VED" | "VEF" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "XXX" | "YER" | "ZAR" | "ZMW" | string;

/** Represents the possible values of the Enabled Presentment Currencies enum. */
export type ShopifyShopEnabledPresentmentCurrenciesEnum = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KID" | "KMF" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USDC" | "UYU" | "UZS" | "VED" | "VEF" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "XXX" | "YER" | "ZAR" | "ZMW" | string;

/** Represents the possible values of the Weight Unit enum. */
export type ShopifyShopWeightUnitEnum = "GRAMS" | "KILOGRAMS" | "OUNCES" | "POUNDS" | string;

/** Represents the possible values of the Topic enum. */
export type ShopifyGdprRequestTopicEnum = "customers/data_request" | "customers/redact" | "shop/redact";

/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending"|"Descending";

/** The `StateValue` scalar type represents an input value for a recordState field. It can be a string, like 'created.active', or a JSON object, like { created: 'active' }. */
export type StateValue = any;

/** Represents the possible values of the Sync Since By enum. */
export type ShopifySyncSyncSinceByEnum = "updated_at" | "created_at";

/** Represents the possible values of the status enum. */
export type BadgeDesignStatusEnum = "draft" | "saved" | "ordered" | "archived";

/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];

/** Represents one shopifyGdprRequest result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyGdprRequestRecord = Scalars["JSONObject"];

/** Represents one shopifyShop result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShopRecord = Scalars["JSONObject"];

/** Represents one shopifySync result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySyncRecord = Scalars["JSONObject"];

/** Represents one badgeDesign result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalBadgeDesignRecord = Scalars["JSONObject"];


export type BackgroundActionResult = AvailableAbortShopifySyncResultSelection | AvailableCompleteShopifySyncResultSelection | AvailableErrorShopifySyncResultSelection | AvailableRunShopifySyncResultSelection | AvailableCreateBadgeDesignResultSelection | AvailableGetByShopBadgeDesignResultSelection;


export type AvailableBackgroundActionResultSelection = AbortShopifySyncResult | CompleteShopifySyncResult | ErrorShopifySyncResult | RunShopifySyncResult | CreateBadgeDesignResult | GetByShopBadgeDesignResult;



export type ShopifyGdprRequestSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
  payload?: SortOrder | null;

  /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
  topic?: SortOrder | null;
};



export type ShopifyGdprRequestFilter = {

  AND?: (ShopifyGdprRequestFilter | null)[];

  OR?: (ShopifyGdprRequestFilter | null)[];

  NOT?: (ShopifyGdprRequestFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  payload?: JSONFilter | null;

  topic?: SingleEnumFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type IDFilter = {

  equals?: (Scalars['GadgetID'] | null) | null;

  notEquals?: (Scalars['GadgetID'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['GadgetID'] | null) | null)[];

  notIn?: ((Scalars['GadgetID'] | null) | null)[];

  lessThan?: (Scalars['GadgetID'] | null) | null;

  lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;

  greaterThan?: (Scalars['GadgetID'] | null) | null;

  greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};



export type DateTimeFilter = {

  equals?: Date | Scalars['ISO8601DateString'] | null;

  notEquals?: Date | Scalars['ISO8601DateString'] | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: (Date | Scalars['ISO8601DateString'] | null)[];

  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];

  lessThan?: Date | Scalars['ISO8601DateString'] | null;

  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  greaterThan?: Date | Scalars['ISO8601DateString'] | null;

  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  before?: Date | Scalars['ISO8601DateString'] | null;

  after?: Date | Scalars['ISO8601DateString'] | null;
};



export type JSONFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['JSON'] | null) | null;

  in?: ((Scalars['JSON'] | null) | null)[];

  notIn?: ((Scalars['JSON'] | null) | null)[];

  notEquals?: (Scalars['JSON'] | null) | null;

  matches?: (Scalars['JSON'] | null) | null;
};



export type SingleEnumFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];
};



export type ShopifyShopRelationshipFilter = {

  AND?: (ShopifyShopRelationshipFilter | null)[];

  OR?: (ShopifyShopRelationshipFilter | null)[];

  NOT?: (ShopifyShopRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  state?: StateFilter | null;

  alerts?: JSONFilter | null;

  billingAddress?: JSONFilter | null;

  checkoutApiSupported?: JSONFilter | null;

  countriesInShippingZones?: JSONFilter | null;

  currencyFormats?: JSONFilter | null;

  customerAccounts?: SingleEnumFilter | null;

  description?: StringFilter | null;

  orderNumberFormatPrefix?: StringFilter | null;

  orderNumberFormatSuffix?: StringFilter | null;

  resourceLimits?: JSONFilter | null;

  richTextEdiorUrl?: StringFilter | null;

  shipsToCountries?: MultiEnumFilter | null;

  customerAccountsV2?: JSONFilter | null;

  plan?: JSONFilter | null;

  timezoneAbbreviation?: StringFilter | null;

  taxesOffset?: StringFilter | null;

  timezoneOffsetMinutes?: FloatFilter | null;

  unitSystem?: SingleEnumFilter | null;

  url?: StringFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  city?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  countyTaxes?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: SingleEnumFilter | null;

  customerEmail?: StringFilter | null;

  disabledWebhooks?: JSONFilter | null;

  domain?: StringFilter | null;

  eligibleForPayments?: BooleanFilter | null;

  email?: StringFilter | null;

  enabledPresentmentCurrencies?: MultiEnumFilter | null;

  finances?: BooleanFilter | null;

  googleAppsDomain?: StringFilter | null;

  googleAppsLoginEnabled?: BooleanFilter | null;

  grantedScopes?: JSONFilter | null;

  hasDiscounts?: BooleanFilter | null;

  hasGiftCards?: BooleanFilter | null;

  hasStorefront?: BooleanFilter | null;

  ianaTimezone?: StringFilter | null;

  installedViaApiKey?: StringFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;

  moneyFormat?: StringFilter | null;

  moneyInEmailsFormat?: StringFilter | null;

  moneyWithCurrencyFormat?: StringFilter | null;

  moneyWithCurrencyInEmailsFormat?: StringFilter | null;

  multiLocationEnabled?: BooleanFilter | null;

  myshopifyDomain?: StringFilter | null;

  name?: StringFilter | null;

  passwordEnabled?: BooleanFilter | null;

  phone?: StringFilter | null;

  planPublicDisplayName?: StringFilter | null;

  planDisplayName?: StringFilter | null;

  planName?: StringFilter | null;

  preLaunchEnabled?: BooleanFilter | null;

  primaryLocale?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  registeredWebhooks?: JSONFilter | null;

  requiresExtraPaymentsAgreement?: BooleanFilter | null;

  setupRequired?: BooleanFilter | null;

  shopOwner?: StringFilter | null;

  source?: StringFilter | null;

  taxShipping?: BooleanFilter | null;

  taxesIncluded?: BooleanFilter | null;

  timezone?: StringFilter | null;

  transactionalSmsDisabled?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  weightUnit?: SingleEnumFilter | null;

  zipCode?: StringFilter | null;

  gdprRequests?: ShopifyGdprRequestsRelationshipFilter | null;

  syncs?: ShopifySyncsRelationshipFilter | null;
};



export type StateFilter = {

  /** If true, return only records that have a state value set. If false, return only records that do not have a state value set. */
  isSet?: (Scalars['Boolean'] | null) | null;

  /** Return only records that are in this given state. The state must be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted'. */
  inState?: (Scalars['String'] | null) | null;

  /** Return only records that are in this given state. The state can be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted', or as a JSON object, like { created: 'active' }. */
  equals?: (Scalars['StateValue'] | null) | null;

  /** Return only records that are in any of these given states. The states can be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted', or as a JSON object, like { created: 'active' }. */
  in?: ((Scalars['StateValue'] | null))[];

  /** Return only records that are not in any of these given states. The states can be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted', or as a JSON object, like { created: 'active' }. */
  notIn?: ((Scalars['StateValue'] | null))[];

  /** Return only records that are not in this given state. The state value must be specified as a dot separated string of nested state names, like 'created.installed' or 'deleted', or as a JSON object, like { created: 'active' }. */
  notEquals?: (Scalars['StateValue'] | null) | null;
};



export type StringFilter = {

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];

  notIn?: ((Scalars['String'] | null) | null)[];

  lessThan?: (Scalars['String'] | null) | null;

  lessThanOrEqual?: (Scalars['String'] | null) | null;

  greaterThan?: (Scalars['String'] | null) | null;

  greaterThanOrEqual?: (Scalars['String'] | null) | null;

  startsWith?: (Scalars['String'] | null) | null;
};



export type MultiEnumFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: ((Scalars['String'] | null) | null)[];

  notEquals?: ((Scalars['String'] | null) | null)[];

  contains?: ((Scalars['String'] | null) | null)[];
};



export type FloatFilter = {

  equals?: (Scalars['Float'] | null) | null;

  notEquals?: (Scalars['Float'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Float'] | null) | null)[];

  notIn?: ((Scalars['Float'] | null) | null)[];

  lessThan?: (Scalars['Float'] | null) | null;

  lessThanOrEqual?: (Scalars['Float'] | null) | null;

  greaterThan?: (Scalars['Float'] | null) | null;

  greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};



export type BooleanFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['Boolean'] | null) | null;

  notEquals?: (Scalars['Boolean'] | null) | null;
};



export type ShopifyGdprRequestsRelationshipFilter = {

  some?: ShopifyGdprRequestsInnerRelationshipFilter | null;

  every?: ShopifyGdprRequestsInnerRelationshipFilter | null;
};



export type ShopifyGdprRequestsInnerRelationshipFilter = {

  AND?: (ShopifyGdprRequestsInnerRelationshipFilter | null)[];

  OR?: (ShopifyGdprRequestsInnerRelationshipFilter | null)[];

  NOT?: (ShopifyGdprRequestsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  payload?: JSONFilter | null;

  topic?: SingleEnumFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifySyncsRelationshipFilter = {

  some?: ShopifySyncsInnerRelationshipFilter | null;

  every?: ShopifySyncsInnerRelationshipFilter | null;
};



export type ShopifySyncsInnerRelationshipFilter = {

  AND?: (ShopifySyncsInnerRelationshipFilter | null)[];

  OR?: (ShopifySyncsInnerRelationshipFilter | null)[];

  NOT?: (ShopifySyncsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  syncSince?: DateTimeFilter | null;

  domain?: StringFilter | null;

  errorDetails?: StringFilter | null;

  errorMessage?: StringFilter | null;

  force?: BooleanFilter | null;

  models?: JSONFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;

  syncSinceBy?: SingleEnumFilter | null;
};



export type ShopifySyncSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
  syncSince?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
  errorDetails?: SortOrder | null;

  /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
  errorMessage?: SortOrder | null;

  /** Sort the results by the force field. Defaults to ascending (smallest value first). */
  force?: SortOrder | null;

  /** Sort the results by the models field. Defaults to ascending (smallest value first). */
  models?: SortOrder | null;

  /** Sort the results by the syncSinceBy field. Defaults to ascending (smallest value first). */
  syncSinceBy?: SortOrder | null;
};



export type ShopifySyncFilter = {

  AND?: (ShopifySyncFilter | null)[];

  OR?: (ShopifySyncFilter | null)[];

  NOT?: (ShopifySyncFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  syncSince?: DateTimeFilter | null;

  domain?: StringFilter | null;

  errorDetails?: StringFilter | null;

  errorMessage?: StringFilter | null;

  force?: BooleanFilter | null;

  models?: JSONFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;

  syncSinceBy?: SingleEnumFilter | null;
};



export type SessionFilter = {

  id?: IDEqualsFilter | null;

  shop?: IDEqualsFilter | null;

  shopId?: IDEqualsFilter | null;

  shopifySID?: StringEqualsFilter | null;
};



export type IDEqualsFilter = {

  equals?: (Scalars['GadgetID'] | null) | null;
};



export type StringEqualsFilter = {

  equals?: (Scalars['String'] | null) | null;
};



export type ShopifyShopSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the alerts field. Defaults to ascending (smallest value first). */
  alerts?: SortOrder | null;

  /** Sort the results by the billingAddress field. Defaults to ascending (smallest value first). */
  billingAddress?: SortOrder | null;

  /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
  checkoutApiSupported?: SortOrder | null;

  /** Sort the results by the countriesInShippingZones field. Defaults to ascending (smallest value first). */
  countriesInShippingZones?: SortOrder | null;

  /** Sort the results by the currencyFormats field. Defaults to ascending (smallest value first). */
  currencyFormats?: SortOrder | null;

  /** Sort the results by the customerAccounts field. Defaults to ascending (smallest value first). */
  customerAccounts?: SortOrder | null;

  /** Sort the results by the description field. Defaults to ascending (smallest value first). */
  description?: SortOrder | null;

  /** Sort the results by the orderNumberFormatPrefix field. Defaults to ascending (smallest value first). */
  orderNumberFormatPrefix?: SortOrder | null;

  /** Sort the results by the orderNumberFormatSuffix field. Defaults to ascending (smallest value first). */
  orderNumberFormatSuffix?: SortOrder | null;

  /** Sort the results by the resourceLimits field. Defaults to ascending (smallest value first). */
  resourceLimits?: SortOrder | null;

  /** Sort the results by the richTextEdiorUrl field. Defaults to ascending (smallest value first). */
  richTextEdiorUrl?: SortOrder | null;

  /** Sort the results by the shipsToCountries field. Defaults to ascending (smallest value first). */
  shipsToCountries?: SortOrder | null;

  /** Sort the results by the customerAccountsV2 field. Defaults to ascending (smallest value first). */
  customerAccountsV2?: SortOrder | null;

  /** Sort the results by the plan field. Defaults to ascending (smallest value first). */
  plan?: SortOrder | null;

  /** Sort the results by the timezoneAbbreviation field. Defaults to ascending (smallest value first). */
  timezoneAbbreviation?: SortOrder | null;

  /** Sort the results by the taxesOffset field. Defaults to ascending (smallest value first). */
  taxesOffset?: SortOrder | null;

  /** Sort the results by the timezoneOffsetMinutes field. Defaults to ascending (smallest value first). */
  timezoneOffsetMinutes?: SortOrder | null;

  /** Sort the results by the unitSystem field. Defaults to ascending (smallest value first). */
  unitSystem?: SortOrder | null;

  /** Sort the results by the url field. Defaults to ascending (smallest value first). */
  url?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
  countryName?: SortOrder | null;

  /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
  countyTaxes?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
  customerEmail?: SortOrder | null;

  /** Sort the results by the disabledWebhooks field. Defaults to ascending (smallest value first). */
  disabledWebhooks?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
  eligibleForPayments?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
  enabledPresentmentCurrencies?: SortOrder | null;

  /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
  finances?: SortOrder | null;

  /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
  googleAppsDomain?: SortOrder | null;

  /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
  googleAppsLoginEnabled?: SortOrder | null;

  /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
  grantedScopes?: SortOrder | null;

  /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
  hasDiscounts?: SortOrder | null;

  /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
  hasGiftCards?: SortOrder | null;

  /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
  hasStorefront?: SortOrder | null;

  /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
  ianaTimezone?: SortOrder | null;

  /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
  installedViaApiKey?: SortOrder | null;

  /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
  latitude?: SortOrder | null;

  /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
  longitude?: SortOrder | null;

  /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
  marketingSmsContentEnabledAtCheckout?: SortOrder | null;

  /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
  moneyFormat?: SortOrder | null;

  /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
  multiLocationEnabled?: SortOrder | null;

  /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
  myshopifyDomain?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
  passwordEnabled?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the planPublicDisplayName field. Defaults to ascending (smallest value first). */
  planPublicDisplayName?: SortOrder | null;

  /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
  planDisplayName?: SortOrder | null;

  /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
  planName?: SortOrder | null;

  /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
  preLaunchEnabled?: SortOrder | null;

  /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
  primaryLocale?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
  registeredWebhooks?: SortOrder | null;

  /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
  requiresExtraPaymentsAgreement?: SortOrder | null;

  /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
  setupRequired?: SortOrder | null;

  /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
  shopOwner?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
  taxShipping?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
  timezone?: SortOrder | null;

  /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
  transactionalSmsDisabled?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export type ShopifyShopFilter = {

  AND?: (ShopifyShopFilter | null)[];

  OR?: (ShopifyShopFilter | null)[];

  NOT?: (ShopifyShopFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  alerts?: JSONFilter | null;

  billingAddress?: JSONFilter | null;

  checkoutApiSupported?: JSONFilter | null;

  countriesInShippingZones?: JSONFilter | null;

  currencyFormats?: JSONFilter | null;

  customerAccounts?: SingleEnumFilter | null;

  description?: StringFilter | null;

  orderNumberFormatPrefix?: StringFilter | null;

  orderNumberFormatSuffix?: StringFilter | null;

  resourceLimits?: JSONFilter | null;

  richTextEdiorUrl?: StringFilter | null;

  shipsToCountries?: MultiEnumFilter | null;

  customerAccountsV2?: JSONFilter | null;

  plan?: JSONFilter | null;

  timezoneAbbreviation?: StringFilter | null;

  taxesOffset?: StringFilter | null;

  timezoneOffsetMinutes?: FloatFilter | null;

  unitSystem?: SingleEnumFilter | null;

  url?: StringFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  city?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  countyTaxes?: JSONFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  currency?: SingleEnumFilter | null;

  customerEmail?: StringFilter | null;

  disabledWebhooks?: JSONFilter | null;

  domain?: StringFilter | null;

  eligibleForPayments?: BooleanFilter | null;

  email?: StringFilter | null;

  enabledPresentmentCurrencies?: MultiEnumFilter | null;

  finances?: BooleanFilter | null;

  googleAppsDomain?: StringFilter | null;

  googleAppsLoginEnabled?: BooleanFilter | null;

  grantedScopes?: JSONFilter | null;

  hasDiscounts?: BooleanFilter | null;

  hasGiftCards?: BooleanFilter | null;

  hasStorefront?: BooleanFilter | null;

  ianaTimezone?: StringFilter | null;

  installedViaApiKey?: StringFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;

  moneyFormat?: StringFilter | null;

  moneyInEmailsFormat?: StringFilter | null;

  moneyWithCurrencyFormat?: StringFilter | null;

  moneyWithCurrencyInEmailsFormat?: StringFilter | null;

  multiLocationEnabled?: BooleanFilter | null;

  myshopifyDomain?: StringFilter | null;

  name?: StringFilter | null;

  passwordEnabled?: BooleanFilter | null;

  phone?: StringFilter | null;

  planPublicDisplayName?: StringFilter | null;

  planDisplayName?: StringFilter | null;

  planName?: StringFilter | null;

  preLaunchEnabled?: BooleanFilter | null;

  primaryLocale?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  registeredWebhooks?: JSONFilter | null;

  requiresExtraPaymentsAgreement?: BooleanFilter | null;

  setupRequired?: BooleanFilter | null;

  shopOwner?: StringFilter | null;

  source?: StringFilter | null;

  taxShipping?: BooleanFilter | null;

  taxesIncluded?: BooleanFilter | null;

  timezone?: StringFilter | null;

  transactionalSmsDisabled?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  weightUnit?: SingleEnumFilter | null;

  zipCode?: StringFilter | null;

  gdprRequests?: ShopifyGdprRequestsRelationshipFilter | null;

  syncs?: ShopifySyncsRelationshipFilter | null;
};



export type BadgeDesignSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the backgroundColor field. Defaults to ascending (smallest value first). */
  backgroundColor?: SortOrder | null;

  /** Sort the results by the backingPrice field. Defaults to ascending (smallest value first). */
  backingPrice?: SortOrder | null;

  /** Sort the results by the backingType field. Defaults to ascending (smallest value first). */
  backingType?: SortOrder | null;

  /** Sort the results by the basePrice field. Defaults to ascending (smallest value first). */
  basePrice?: SortOrder | null;

  /** Sort the results by the designData field. Defaults to ascending (smallest value first). */
  designData?: SortOrder | null;

  /** Sort the results by the designId field. Defaults to ascending (smallest value first). */
  designId?: SortOrder | null;

  /** Sort the results by the productId field. Defaults to ascending (smallest value first). */
  productId?: SortOrder | null;

  /** Sort the results by the shopId field. Defaults to ascending (smallest value first). */
  shopId?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the textLines field. Defaults to ascending (smallest value first). */
  textLines?: SortOrder | null;

  /** Sort the results by the totalPrice field. Defaults to ascending (smallest value first). */
  totalPrice?: SortOrder | null;

  /** Sort the results by the userId field. Defaults to ascending (smallest value first). */
  userId?: SortOrder | null;
};



export type BadgeDesignFilter = {

  AND?: (BadgeDesignFilter | null)[];

  OR?: (BadgeDesignFilter | null)[];

  NOT?: (BadgeDesignFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  backgroundColor?: StringFilter | null;

  backingPrice?: FloatFilter | null;

  backingType?: StringFilter | null;

  basePrice?: FloatFilter | null;

  designData?: JSONFilter | null;

  designId?: StringFilter | null;

  productId?: StringFilter | null;

  shopId?: StringFilter | null;

  status?: SingleEnumFilter | null;

  textLines?: JSONFilter | null;

  totalPrice?: FloatFilter | null;

  userId?: StringFilter | null;
};



export type AbortShopifySyncInput = {

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
};



export type ShopifyShopBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type BulkAbortShopifySyncsInput = {

  shopifySync?: AbortShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CompleteShopifySyncInput = {

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
};



export type BulkCompleteShopifySyncsInput = {

  shopifySync?: CompleteShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ErrorShopifySyncInput = {

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
};



export type BulkErrorShopifySyncsInput = {

  shopifySync?: ErrorShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type RunShopifySyncInput = {

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
};



export type BulkRunShopifySyncsInput = {

  shopifySync?: RunShopifySyncInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type UpsertShopifySyncInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
};



export type BulkUpsertShopifySyncsInput = {

  /** An array of Strings */
  on?: ((Scalars['String'] | null))[];

  shopifySync?: UpsertShopifySyncInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type CreateBadgeDesignInput = {

  backgroundColor?: (Scalars['String'] | null) | null;

  backingPrice?: (Scalars['Float'] | null) | null;

  backingType?: (Scalars['String'] | null) | null;

  basePrice?: (Scalars['Float'] | null) | null;

  designData?: (Scalars['JSON'] | null) | null;

  designId?: (Scalars['String'] | null) | null;

  productId?: (Scalars['String'] | null) | null;

  shopId?: (Scalars['String'] | null) | null;

  status?: BadgeDesignStatusEnum | null;

  textLines?: (Scalars['JSON'] | null) | null;

  totalPrice?: (Scalars['Float'] | null) | null;

  userId?: (Scalars['String'] | null) | null;
};



export type BulkCreateBadgeDesignsInput = {

  badgeDesign?: CreateBadgeDesignInput | null;
};



export type EnqueueBackgroundActionOptions = {

  /** A fixed ID to assign to this background action. If not passed, a random ID will be generated and assigned. */
  id?: (Scalars['String'] | null) | null;

  /** The priority for executing this action. */
  priority?: BackgroundActionPriority | null;

  /** Group actions into the same queue and limit the concurrency they can run with. */
  queue?: BackgroundActionQueue | null;

  /** Options governing if and how this action will be retried if it fails. */
  retries?: BackgroundActionRetryPolicy | null;

  /** Actions won't be started until after this time. */
  startAt?: Date | Scalars['ISO8601DateString'] | null;
};



export type BackgroundActionQueue = {

  /** The identifier for this queue. */
  name: (Scalars['String'] | null);

  /** The maximum number of actions that will be run at the same time. Defaults to 1 if not passed (only one job per key at once). */
  maxConcurrency?: (Scalars['Int'] | null) | null;
};



export type BackgroundActionRetryPolicy = {

  /** The number of repeat attempts to make if the initial attempt fails. Defaults to 10. Note: the total number of attempts will be this number plus one -- this counts the number of retries *after* the first attempt. */
  retryCount?: (Scalars['Int'] | null) | null;

  /** How long to delay the first retry attempt, in milliseconds. Default is 1000. */
  initialInterval?: (Scalars['Int'] | null) | null;

  /** The maximum amount of time to delay a retry while exponentially backing off in milliseconds. Default is not set, so the retry can backoff indefinitely */
  maxInterval?: (Scalars['Int'] | null) | null;

  /** The exponential backoff factor to use for calculating the retry delay for successive retries. Set this higher to grow the delay faster with each retry attempt. Default is 2. */
  backoffFactor?: (Scalars['Int'] | null) | null;

  /** If true, the retry interval will be randomized by a small amount to avoid all retries happening at the same time. Default is false. */
  randomizeInterval?: (Scalars['Boolean'] | null) | null;
};



export type InternalSessionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];

  shop?: InternalBelongsToInput | null;

  shopifySID?: (Scalars['String'] | null) | null;
};



export type InternalBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type InternalShopifyGdprRequestInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  payload?: (Scalars['JSON'] | null) | null;

  topic?: ShopifyGdprRequestTopicEnum | null;

  shop?: InternalBelongsToInput | null;
};



export type AppGraphQLTriggerMutationContext = {

  /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
  sessionID?: (Scalars['GadgetID'] | null) | null;
};



export type InternalShopifyShopInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  alerts?: (Scalars['JSON'] | null) | null;

  billingAddress?: (Scalars['JSON'] | null) | null;

  checkoutApiSupported?: (Scalars['JSON'] | null) | null;

  countriesInShippingZones?: (Scalars['JSON'] | null) | null;

  currencyFormats?: (Scalars['JSON'] | null) | null;

  customerAccounts?: ShopifyShopCustomerAccountsEnum | null;

  description?: (Scalars['String'] | null) | null;

  orderNumberFormatPrefix?: (Scalars['String'] | null) | null;

  orderNumberFormatSuffix?: (Scalars['String'] | null) | null;

  resourceLimits?: (Scalars['JSON'] | null) | null;

  richTextEdiorUrl?: (Scalars['String'] | null) | null;

  shipsToCountries?: (ShopifyShopShipsToCountriesEnum)[];

  customerAccountsV2?: (Scalars['JSON'] | null) | null;

  plan?: (Scalars['JSON'] | null) | null;

  timezoneAbbreviation?: (Scalars['String'] | null) | null;

  taxesOffset?: (Scalars['String'] | null) | null;

  timezoneOffsetMinutes?: (Scalars['Float'] | null) | null;

  unitSystem?: ShopifyShopUnitSystemEnum | null;

  url?: (Scalars['String'] | null) | null;

  accessToken?: (Scalars['String'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: ShopifyShopCurrencyEnum | null;

  customerEmail?: (Scalars['String'] | null) | null;

  disabledWebhooks?: (Scalars['JSON'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (ShopifyShopEnabledPresentmentCurrenciesEnum)[];

  finances?: (Scalars['Boolean'] | null) | null;

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  grantedScopes?: (Scalars['JSON'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  ianaTimezone?: (Scalars['String'] | null) | null;

  installedViaApiKey?: (Scalars['String'] | null) | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planPublicDisplayName?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  registeredWebhooks?: (Scalars['JSON'] | null) | null;

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  weightUnit?: ShopifyShopWeightUnitEnum | null;

  zipCode?: (Scalars['String'] | null) | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyShopAtomicsInput | null;
};



export type InternalShopifyShopAtomicsInput = {

  /** Numeric atomic commands for operating on timezoneOffsetMinutes. */
  timezoneOffsetMinutes?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on latitude. */
  latitude?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on longitude. */
  longitude?: (NumericAtomicFieldUpdateInput)[];
};



export type NumericAtomicFieldUpdateInput = {

  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: (Scalars['Float'] | null) | null;

  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: (Scalars['Float'] | null) | null;
};



export type InternalShopifySyncInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  shop?: InternalBelongsToInput | null;

  syncSinceBy?: ShopifySyncSyncSinceByEnum | null;
};



export type InternalBadgeDesignInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  backgroundColor?: (Scalars['String'] | null) | null;

  backingPrice?: (Scalars['Float'] | null) | null;

  backingType?: (Scalars['String'] | null) | null;

  basePrice?: (Scalars['Float'] | null) | null;

  designData?: (Scalars['JSON'] | null) | null;

  designId?: (Scalars['String'] | null) | null;

  productId?: (Scalars['String'] | null) | null;

  shopId?: (Scalars['String'] | null) | null;

  status?: BadgeDesignStatusEnum | null;

  textLines?: (Scalars['JSON'] | null) | null;

  totalPrice?: (Scalars['Float'] | null) | null;

  userId?: (Scalars['String'] | null) | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalBadgeDesignAtomicsInput | null;
};



export type InternalBadgeDesignAtomicsInput = {

  /** Numeric atomic commands for operating on backingPrice. */
  backingPrice?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on basePrice. */
  basePrice?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on totalPrice. */
  totalPrice?: (NumericAtomicFieldUpdateInput)[];
};


/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
  CurrencyAmount: string;
  /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
  ISO8601DateString: string;
  /** A file object produced by a browser for uploading to cloud storage */
  Upload: File;
  /** A record's current state for a recordState type field */
  StateValue: Record<string, string>;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: JSONObject;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: JSONValue;
  /** Integer type that can handle bigints and Big numbers */
  Int: number;
  /** The ID of a record in Gadget */
  GadgetID: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: (string | { [key: string]: Scalars['RecordState'] });
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: unknown;
};


/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
  __typename: 'SimpleError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this error. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
};



export type AvailableSimpleErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;
};



export type ExecutionError = {

  __typename: 'SimpleError'|'InvalidRecordError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The Gadget platform error code for this error. */
  code: Scalars['String'];

  /** The stack for any exception that caused the error. Only available for super users. */
  stack: (Scalars['String'] | null);
};



export type AvailableExecutionErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: boolean | null | undefined;
};


/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
  __typename: 'InvalidRecordError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this InvalidRecordError. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField: (Scalars['JSONObject'] | null);
  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors: InvalidFieldError[];
  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record: (Scalars['JSONObject'] | null);
  /** The model of the record which failed validation */
  model: (GadgetModel | null);
};



export type AvailableInvalidRecordErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this InvalidRecordError. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;

  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField?: boolean | null | undefined;

  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors?: AvailableInvalidFieldErrorSelection;

  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record?: boolean | null | undefined;

  /** The model of the record which failed validation */
  model?: AvailableGadgetModelSelection;
};


/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {

  __typename: 'InvalidFieldError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier: Scalars['String'];
};



export type AvailableInvalidFieldErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier?: boolean | null | undefined;
};



export type GadgetModel = {

  __typename: 'GadgetModel';

  key: Scalars['String'];

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  namespace: Scalars['String'][];

  filterable: Scalars['Boolean'];

  sortable: Scalars['Boolean'];

  searchable: Scalars['Boolean'];

  defaultDisplayField: GadgetModelField;

  fields: GadgetModelField[];

  actions: GadgetAction[];

  action: (GadgetAction | null);

  views: GadgetComputedView[];

  view: (GadgetComputedView | null);

  hasViews: Scalars['Boolean'];

  pluralName: Scalars['String'];

  pluralApiIdentifier: Scalars['String'];

  currentSingletonApiIdentifier: (Scalars['String'] | null);

  defaultRecord: Scalars['JSON'];

  initialCreatedState: (Scalars['String'] | null);
};



export type AvailableGadgetModelSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  namespace?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  searchable?: boolean | null | undefined;

  defaultDisplayField?: AvailableGadgetModelFieldSelection;

  fields?: AvailableGadgetModelFieldSelection;

  actions?: AvailableGadgetActionSelection;

  action?: AvailableGadgetActionSelection;

  views?: AvailableGadgetComputedViewSelection;

  view?: AvailableGadgetComputedViewSelection;

  hasViews?: boolean | null | undefined;

  pluralName?: boolean | null | undefined;

  pluralApiIdentifier?: boolean | null | undefined;

  currentSingletonApiIdentifier?: boolean | null | undefined;

  defaultRecord?: boolean | null | undefined;

  initialCreatedState?: boolean | null | undefined;
};


/** One field of a Gadget model */
export interface GadgetModelField extends GadgetField {
  __typename: 'GadgetModelField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
  isUniqueField: Scalars['Boolean'];
  sortable: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  examples: GadgetModelFieldExamples;
};



export type AvailableGadgetModelFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;

  isUniqueField?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  examples?: AvailableGadgetModelFieldExamplesSelection;
};



export type GadgetField = {

  __typename: 'GadgetModelField'|'GadgetObjectField';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  fieldType: GadgetFieldType;

  hasDefault: Scalars['Boolean'];

  required: Scalars['Boolean'];

  requiredArgumentForInput: Scalars['Boolean'];

  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};


/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {

  __typename: 'GadgetGenericFieldConfig'|'GadgetObjectFieldConfig'|'GadgetBelongsToConfig'|'GadgetHasOneConfig'|'GadgetHasManyConfig'|'GadgetHasManyThroughConfig'|'GadgetEnumConfig'|'GadgetDateTimeConfig'|'GadgetNumberConfig';

  fieldType: GadgetFieldType;

  validations: (GadgetFieldValidationUnion | null)[];
};



export type AvailableGadgetFieldConfigInterfaceSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;
};



export type GadgetModelFieldExamples = {

  __typename: 'GadgetModelFieldExamples';

  linkExistingChild: (GadgetFieldUsageExample | null);

  linkNewChild: (GadgetFieldUsageExample | null);

  linkToExistingParent: (GadgetFieldUsageExample | null);

  createNestedInParent: (GadgetFieldUsageExample | null);
};



export type AvailableGadgetModelFieldExamplesSelection = {

  __typename?: boolean | null | undefined;

  linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;

  linkNewChild?: AvailableGadgetFieldUsageExampleSelection;

  linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;

  createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};



export type GadgetFieldUsageExample = {

  __typename: 'GadgetFieldUsageExample';

  exampleGraphQLMutation: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetFieldUsageExampleSelection = {

  __typename?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};



export type GadgetAction = {

  __typename: 'GadgetAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  namespace: Scalars['String'][];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect: Scalars['Boolean'];

  isDeleteAction: Scalars['Boolean'];

  isCreateOrUpdateAction: Scalars['Boolean'];

  isUpsertMetaAction: Scalars['Boolean'];

  operatesWithRecordIdentity: Scalars['Boolean'];

  /** @deprecated This field will be removed. */
  possibleTransitions: Scalars['JSONObject'];

  availableInBulk: Scalars['Boolean'];

  bulkApiIdentifier: (Scalars['String'] | null);

  hasAmbiguousIdentifier: Scalars['Boolean'];

  inputFields: GadgetObjectField[];

  bulkInvokedByIDOnly: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetActionGraphQLType | null);
};



export type AvailableGadgetActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  namespace?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect?: boolean | null | undefined;

  isDeleteAction?: boolean | null | undefined;

  isCreateOrUpdateAction?: boolean | null | undefined;

  isUpsertMetaAction?: boolean | null | undefined;

  operatesWithRecordIdentity?: boolean | null | undefined;

  /** @deprecated This field will be removed. */
  possibleTransitions?: boolean | null | undefined;

  availableInBulk?: boolean | null | undefined;

  bulkApiIdentifier?: boolean | null | undefined;

  hasAmbiguousIdentifier?: boolean | null | undefined;

  inputFields?: AvailableGadgetObjectFieldSelection;

  bulkInvokedByIDOnly?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetActionGraphQLTypeSelection;
};


/** One field of an action input or other transitory object in Gadget */
export interface GadgetObjectField extends GadgetField {
  __typename: 'GadgetObjectField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetObjectFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};



export type GadgetTrigger = {

  __typename: 'GadgetTrigger';

  specID: Scalars['String'];
};



export type AvailableGadgetTriggerSelection = {

  __typename?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export type GadgetActionGraphQLType = {

  __typename: 'GadgetActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation: (Scalars['String'] | null);

  exampleBulkGraphQLMutation: (Scalars['String'] | null);

  exampleBulkGraphQLVariables: (Scalars['JSON'] | null);

  exampleBulkImperativeInvocation: (Scalars['String'] | null);

  exampleBulkReactHook: (Scalars['String'] | null);

  bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};



export type AvailableGadgetActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation?: boolean | null | undefined;

  exampleBulkGraphQLMutation?: boolean | null | undefined;

  exampleBulkGraphQLVariables?: boolean | null | undefined;

  exampleBulkImperativeInvocation?: boolean | null | undefined;

  exampleBulkReactHook?: boolean | null | undefined;

  bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};



export type GadgetComputedView = {

  __typename: 'GadgetComputedView';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  namespace: Scalars['String'][];

  namespacedApiIdentifier: Scalars['String'];

  examples: (GadgetComputedViewExamples | null);
};



export type AvailableGadgetComputedViewSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  namespace?: boolean | null | undefined;

  namespacedApiIdentifier?: boolean | null | undefined;

  examples?: AvailableGadgetComputedViewExamplesSelection;
};



export type GadgetComputedViewExamples = {

  __typename: 'GadgetComputedViewExamples';

  acceptsInput: Scalars['Boolean'];

  inputTypescriptType: (Scalars['String'] | null);

  outputTypescriptType: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: (Scalars['String'] | null);

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetComputedViewExamplesSelection = {

  __typename?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  inputTypescriptType?: boolean | null | undefined;

  outputTypescriptType?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};



export interface GadgetGenericFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetGenericFieldConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
};



export type AvailableGadgetGenericFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;
};



export interface GadgetObjectFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetObjectFieldConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  name: (Scalars['String'] | null);
  fields: GadgetModelField[];
};



export type AvailableGadgetObjectFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  name?: boolean | null | undefined;

  fields?: AvailableGadgetModelFieldSelection;
};



export interface GadgetBelongsToConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetBelongsToConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetBelongsToConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetHasOneConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasOneConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  inverseField: (GadgetModelField | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetHasOneConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  inverseField?: AvailableGadgetModelFieldSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetHasManyConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasManyConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  inverseField: (GadgetModelField | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
  isJoinModelHasManyField: Scalars['Boolean'];
};



export type AvailableGadgetHasManyConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  inverseField?: AvailableGadgetModelFieldSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;

  isJoinModelHasManyField?: boolean | null | undefined;
};



export interface GadgetHasManyThroughConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasManyThroughConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  inverseField: (GadgetModelField | null);
  joinModelKey: (Scalars['String'] | null);
  joinModel: (GadgetModel | null);
  inverseJoinModelField: (GadgetModelField | null);
  inverseRelatedModelField: (GadgetModelField | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
  joinModelHasManyFieldApiIdentifier: (Scalars['String'] | null);
};



export type AvailableGadgetHasManyThroughConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  inverseField?: AvailableGadgetModelFieldSelection;

  joinModelKey?: boolean | null | undefined;

  joinModel?: AvailableGadgetModelSelection;

  inverseJoinModelField?: AvailableGadgetModelFieldSelection;

  inverseRelatedModelField?: AvailableGadgetModelFieldSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;

  joinModelHasManyFieldApiIdentifier?: boolean | null | undefined;
};



export interface GadgetEnumConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetEnumConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  allowMultiple: Scalars['Boolean'];
  allowOther: Scalars['Boolean'];
  options: GadgetEnumOption[];
};



export type AvailableGadgetEnumConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  allowMultiple?: boolean | null | undefined;

  allowOther?: boolean | null | undefined;

  options?: AvailableGadgetEnumOptionSelection;
};



export type GadgetEnumOption = {

  __typename: 'GadgetEnumOption';

  name: Scalars['String'];

  color: Scalars['String'];
};



export type AvailableGadgetEnumOptionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  color?: boolean | null | undefined;
};



export interface GadgetDateTimeConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetDateTimeConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  includeTime: Scalars['Boolean'];
};



export type AvailableGadgetDateTimeConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  includeTime?: boolean | null | undefined;
};



export interface GadgetNumberConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetNumberConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  decimals: (Scalars['Int'] | null);
};



export type AvailableGadgetNumberConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  decimals?: boolean | null | undefined;
};



export interface GadgetRegexFieldValidation extends GadgetFieldValidationInterface {
  __typename: 'GadgetRegexFieldValidation';
  name: Scalars['String'];
  specID: Scalars['String'];
  pattern: (Scalars['String'] | null);
};



export type AvailableGadgetRegexFieldValidationSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;

  pattern?: boolean | null | undefined;
};


/** The common bits that all field validation types share */
export type GadgetFieldValidationInterface = {

  __typename: 'GadgetRegexFieldValidation'|'GadgetRangeFieldValidation'|'GadgetOnlyImageFileFieldValidation'|'GadgetGenericFieldValidation';

  name: Scalars['String'];

  specID: Scalars['String'];
};



export type AvailableGadgetFieldValidationInterfaceSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export interface GadgetRangeFieldValidation extends GadgetFieldValidationInterface {
  __typename: 'GadgetRangeFieldValidation';
  name: Scalars['String'];
  specID: Scalars['String'];
  min: (Scalars['Int'] | null);
  max: (Scalars['Int'] | null);
};



export type AvailableGadgetRangeFieldValidationSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;

  min?: boolean | null | undefined;

  max?: boolean | null | undefined;
};



export interface GadgetOnlyImageFileFieldValidation extends GadgetFieldValidationInterface {
  __typename: 'GadgetOnlyImageFileFieldValidation';
  name: Scalars['String'];
  specID: Scalars['String'];
  allowAnimatedImages: Scalars['Boolean'];
};



export type AvailableGadgetOnlyImageFileFieldValidationSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;

  allowAnimatedImages?: boolean | null | undefined;
};



export interface GadgetGenericFieldValidation extends GadgetFieldValidationInterface {
  __typename: 'GadgetGenericFieldValidation';
  name: Scalars['String'];
  specID: Scalars['String'];
};



export type AvailableGadgetGenericFieldValidationSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export interface UpsertError extends UpsertShopifyGdprRequestResult, UpsertShopifyShopResult, UpsertShopifySyncResult {
  __typename: 'UpsertError';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertErrorSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyGdprRequestResult = {

  __typename: 'UpsertError'|'CreateShopifyGdprRequestResult'|'UpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyShopResult = {

  __typename: 'UpsertError'|'UpdateShopifyShopResult'|'InstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifySyncResult = {

  __typename: 'UpsertError'|'AbortShopifySyncResult'|'RunShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type Query = {

  __typename: 'Query';

  session: (Session | null);

  sessions: SessionConnection;

  sessionGellyView: (Scalars['JSON'] | null);

  shopifyGdprRequest: (ShopifyGdprRequest | null);

  shopifyGdprRequests: ShopifyGdprRequestConnection;

  shopifyGdprRequestGellyView: (Scalars['JSON'] | null);

  shopifyShop: (ShopifyShop | null);

  shopifyShops: ShopifyShopConnection;

  shopifyShopGellyView: (Scalars['JSON'] | null);

  shopifySync: (ShopifySync | null);

  shopifySyncs: ShopifySyncConnection;

  shopifySyncGellyView: (Scalars['JSON'] | null);

  badgeDesign: (BadgeDesign | null);

  badgeDesigns: BadgeDesignConnection;

  badgeDesignGellyView: (Scalars['JSON'] | null);

  gellyView: (Scalars['JSON'] | null);

  currentSession: (Session | null);

  shopifyConnection: Shopify;

  internal: InternalQueries;
};



export type AvailableQuerySelection = {

  __typename?: boolean | null | undefined;

  session?: AvailableSessionSelection;

  sessions?: AvailableSessionConnectionSelection;

  sessionGellyView?: boolean | null | undefined;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;

  shopifyGdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  shopifyGdprRequestGellyView?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;

  shopifyShops?: AvailableShopifyShopConnectionSelection;

  shopifyShopGellyView?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;

  shopifySyncs?: AvailableShopifySyncConnectionSelection;

  shopifySyncGellyView?: boolean | null | undefined;

  badgeDesign?: AvailableBadgeDesignSelection;

  badgeDesigns?: AvailableBadgeDesignConnectionSelection;

  badgeDesignGellyView?: boolean | null | undefined;

  gellyView?: boolean | null | undefined;

  currentSession?: AvailableSessionSelection;

  shopifyConnection?: AvailableShopifySelection;

  internal?: AvailableInternalQueriesSelection;
};



export type Session = {

  __typename: 'Session';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: (Scalars['GadgetID'] | null);

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  roles: Role[];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  shopifySID: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableSessionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  shopifySID?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {

  __typename: 'Role';

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key: Scalars['String'];

  /** The human readable name for this role. Can be changed. */
  name: Scalars['String'];
};



export type AvailableRoleSelection = {

  __typename?: boolean | null | undefined;

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key?: boolean | null | undefined;

  /** The human readable name for this role. Can be changed. */
  name?: boolean | null | undefined;
};



export type ShopifyShop = {

  __typename: 'ShopifyShop';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  alerts: (Scalars['JSON'] | null);

  billingAddress: (Scalars['JSON'] | null);

  checkoutApiSupported: (Scalars['JSON'] | null);

  countriesInShippingZones: (Scalars['JSON'] | null);

  currencyFormats: (Scalars['JSON'] | null);

  customerAccounts: ShopifyShopCustomerAccountsEnum;

  description: (Scalars['String'] | null);

  orderNumberFormatPrefix: (Scalars['String'] | null);

  orderNumberFormatSuffix: (Scalars['String'] | null);

  resourceLimits: (Scalars['JSON'] | null);

  richTextEdiorUrl: (Scalars['String'] | null);

  shipsToCountries: ShopifyShopShipsToCountriesEnum[];

  customerAccountsV2: (Scalars['JSON'] | null);

  plan: (Scalars['JSON'] | null);

  timezoneAbbreviation: (Scalars['String'] | null);

  taxesOffset: (Scalars['String'] | null);

  timezoneOffsetMinutes: (Scalars['Float'] | null);

  unitSystem: ShopifyShopUnitSystemEnum;

  url: (Scalars['String'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  city: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  countryName: (Scalars['String'] | null);

  countyTaxes: (Scalars['JSON'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  currency: ShopifyShopCurrencyEnum;

  customerEmail: (Scalars['String'] | null);

  disabledWebhooks: (Scalars['JSON'] | null);

  domain: (Scalars['String'] | null);

  eligibleForPayments: (Scalars['Boolean'] | null);

  email: (Scalars['String'] | null);

  enabledPresentmentCurrencies: ShopifyShopEnabledPresentmentCurrenciesEnum[];

  finances: (Scalars['Boolean'] | null);

  googleAppsDomain: (Scalars['String'] | null);

  googleAppsLoginEnabled: (Scalars['Boolean'] | null);

  grantedScopes: (Scalars['JSON'] | null);

  hasDiscounts: (Scalars['Boolean'] | null);

  hasGiftCards: (Scalars['Boolean'] | null);

  hasStorefront: (Scalars['Boolean'] | null);

  ianaTimezone: (Scalars['String'] | null);

  installedViaApiKey: (Scalars['String'] | null);

  latitude: (Scalars['Float'] | null);

  longitude: (Scalars['Float'] | null);

  marketingSmsContentEnabledAtCheckout: (Scalars['Boolean'] | null);

  moneyFormat: (Scalars['String'] | null);

  moneyInEmailsFormat: (Scalars['String'] | null);

  moneyWithCurrencyFormat: (Scalars['String'] | null);

  moneyWithCurrencyInEmailsFormat: (Scalars['String'] | null);

  multiLocationEnabled: (Scalars['Boolean'] | null);

  myshopifyDomain: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  passwordEnabled: (Scalars['Boolean'] | null);

  phone: (Scalars['String'] | null);

  planPublicDisplayName: (Scalars['String'] | null);

  planDisplayName: (Scalars['String'] | null);

  planName: (Scalars['String'] | null);

  preLaunchEnabled: (Scalars['Boolean'] | null);

  primaryLocale: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  registeredWebhooks: (Scalars['JSON'] | null);

  requiresExtraPaymentsAgreement: (Scalars['Boolean'] | null);

  setupRequired: (Scalars['Boolean'] | null);

  shopOwner: (Scalars['String'] | null);

  source: (Scalars['String'] | null);

  taxShipping: (Scalars['Boolean'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  timezone: (Scalars['String'] | null);

  transactionalSmsDisabled: (Scalars['Boolean'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  weightUnit: ShopifyShopWeightUnitEnum;

  zipCode: (Scalars['String'] | null);

  gdprRequests: ShopifyGdprRequestConnection;

  syncs: ShopifySyncConnection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyShopSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  alerts?: boolean | null | undefined;

  billingAddress?: boolean | null | undefined;

  checkoutApiSupported?: boolean | null | undefined;

  countriesInShippingZones?: boolean | null | undefined;

  currencyFormats?: boolean | null | undefined;

  customerAccounts?: boolean | null | undefined;

  description?: boolean | null | undefined;

  orderNumberFormatPrefix?: boolean | null | undefined;

  orderNumberFormatSuffix?: boolean | null | undefined;

  resourceLimits?: boolean | null | undefined;

  richTextEdiorUrl?: boolean | null | undefined;

  shipsToCountries?: boolean | null | undefined;

  customerAccountsV2?: boolean | null | undefined;

  plan?: boolean | null | undefined;

  timezoneAbbreviation?: boolean | null | undefined;

  taxesOffset?: boolean | null | undefined;

  timezoneOffsetMinutes?: boolean | null | undefined;

  unitSystem?: boolean | null | undefined;

  url?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  city?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  countryName?: boolean | null | undefined;

  countyTaxes?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  customerEmail?: boolean | null | undefined;

  disabledWebhooks?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  eligibleForPayments?: boolean | null | undefined;

  email?: boolean | null | undefined;

  enabledPresentmentCurrencies?: boolean | null | undefined;

  finances?: boolean | null | undefined;

  googleAppsDomain?: boolean | null | undefined;

  googleAppsLoginEnabled?: boolean | null | undefined;

  grantedScopes?: boolean | null | undefined;

  hasDiscounts?: boolean | null | undefined;

  hasGiftCards?: boolean | null | undefined;

  hasStorefront?: boolean | null | undefined;

  ianaTimezone?: boolean | null | undefined;

  installedViaApiKey?: boolean | null | undefined;

  latitude?: boolean | null | undefined;

  longitude?: boolean | null | undefined;

  marketingSmsContentEnabledAtCheckout?: boolean | null | undefined;

  moneyFormat?: boolean | null | undefined;

  moneyInEmailsFormat?: boolean | null | undefined;

  moneyWithCurrencyFormat?: boolean | null | undefined;

  moneyWithCurrencyInEmailsFormat?: boolean | null | undefined;

  multiLocationEnabled?: boolean | null | undefined;

  myshopifyDomain?: boolean | null | undefined;

  name?: boolean | null | undefined;

  passwordEnabled?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  planPublicDisplayName?: boolean | null | undefined;

  planDisplayName?: boolean | null | undefined;

  planName?: boolean | null | undefined;

  preLaunchEnabled?: boolean | null | undefined;

  primaryLocale?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  registeredWebhooks?: boolean | null | undefined;

  requiresExtraPaymentsAgreement?: boolean | null | undefined;

  setupRequired?: boolean | null | undefined;

  shopOwner?: boolean | null | undefined;

  source?: boolean | null | undefined;

  taxShipping?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  timezone?: boolean | null | undefined;

  transactionalSmsDisabled?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  weightUnit?: boolean | null | undefined;

  zipCode?: boolean | null | undefined;

  gdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  syncs?: AvailableShopifySyncConnectionSelection;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyGdprRequest items. */
export type ShopifyGdprRequestConnection = {

  __typename: 'ShopifyGdprRequestConnection';

  /** A list of edges. */
  edges: ShopifyGdprRequestEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyGdprRequestConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyGdprRequestEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyGdprRequest connection. */
export type ShopifyGdprRequestEdge = {

  __typename: 'ShopifyGdprRequestEdge';

  /** The item at the end of the edge */
  node: ShopifyGdprRequest;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyGdprRequestEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyGdprRequestSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyGdprRequest = {

  __typename: 'ShopifyGdprRequest';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  payload: (Scalars['JSON'] | null);

  topic: ShopifyGdprRequestTopicEnum;

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyGdprRequestSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  payload?: boolean | null | undefined;

  topic?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** Information about pagination in a connection. */
export type PageInfo = {

  __typename: 'PageInfo';

  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];

  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];

  /** When paginating backwards, the cursor to continue. */
  startCursor: (Scalars['String'] | null);

  /** When paginating forwards, the cursor to continue. */
  endCursor: (Scalars['String'] | null);
};



export type AvailablePageInfoSelection = {

  __typename?: boolean | null | undefined;

  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | null | undefined;

  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | null | undefined;

  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | null | undefined;

  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifySync items. */
export type ShopifySyncConnection = {

  __typename: 'ShopifySyncConnection';

  /** A list of edges. */
  edges: ShopifySyncEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySyncConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySyncEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySync connection. */
export type ShopifySyncEdge = {

  __typename: 'ShopifySyncEdge';

  /** The item at the end of the edge */
  node: ShopifySync;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySyncEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySyncSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySync = {

  __typename: 'ShopifySync';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  /** DateTime that this sync was run from */
  syncSince: (Scalars['DateTime'] | null);

  domain: Scalars['String'];

  errorDetails: (Scalars['String'] | null);

  errorMessage: (Scalars['String'] | null);

  force: (Scalars['Boolean'] | null);

  models: (Scalars['JSON'] | null);

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  syncSinceBy: ShopifySyncSyncSinceByEnum;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySyncSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  /** DateTime that this sync was run from */
  syncSince?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  errorDetails?: boolean | null | undefined;

  errorMessage?: boolean | null | undefined;

  force?: boolean | null | undefined;

  models?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  syncSinceBy?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of Session items. */
export type SessionConnection = {

  __typename: 'SessionConnection';

  /** A list of edges. */
  edges: SessionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableSessionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableSessionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a Session connection. */
export type SessionEdge = {

  __typename: 'SessionEdge';

  /** The item at the end of the edge */
  node: Session;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableSessionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableSessionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyShop items. */
export type ShopifyShopConnection = {

  __typename: 'ShopifyShopConnection';

  /** A list of edges. */
  edges: ShopifyShopEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyShopConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyShopEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyShop connection. */
export type ShopifyShopEdge = {

  __typename: 'ShopifyShopEdge';

  /** The item at the end of the edge */
  node: ShopifyShop;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyShopEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyShopSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type BadgeDesign = {

  __typename: 'BadgeDesign';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  backgroundColor: (Scalars['String'] | null);

  backingPrice: (Scalars['Float'] | null);

  backingType: (Scalars['String'] | null);

  basePrice: (Scalars['Float'] | null);

  designData: (Scalars['JSON'] | null);

  designId: (Scalars['String'] | null);

  productId: (Scalars['String'] | null);

  shopId: (Scalars['String'] | null);

  status: BadgeDesignStatusEnum;

  textLines: (Scalars['JSON'] | null);

  totalPrice: (Scalars['Float'] | null);

  userId: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableBadgeDesignSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  backgroundColor?: boolean | null | undefined;

  backingPrice?: boolean | null | undefined;

  backingType?: boolean | null | undefined;

  basePrice?: boolean | null | undefined;

  designData?: boolean | null | undefined;

  designId?: boolean | null | undefined;

  productId?: boolean | null | undefined;

  shopId?: boolean | null | undefined;

  status?: boolean | null | undefined;

  textLines?: boolean | null | undefined;

  totalPrice?: boolean | null | undefined;

  userId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of BadgeDesign items. */
export type BadgeDesignConnection = {

  __typename: 'BadgeDesignConnection';

  /** A list of edges. */
  edges: BadgeDesignEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableBadgeDesignConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableBadgeDesignEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a BadgeDesign connection. */
export type BadgeDesignEdge = {

  __typename: 'BadgeDesignEdge';

  /** The item at the end of the edge */
  node: BadgeDesign;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableBadgeDesignEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableBadgeDesignSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {

  __typename: 'GadgetRole';

  key: Scalars['String'];

  name: Scalars['String'];

  selectable: Scalars['Boolean'];

  order: Scalars['Int'];
};



export type AvailableGadgetRoleSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  selectable?: boolean | null | undefined;

  order?: boolean | null | undefined;
};



export type GadgetGlobalAction = {

  __typename: 'GadgetGlobalAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  namespace: Scalars['String'][];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  inputFields: GadgetObjectField[];

  examples: (GadgetGlobalActionGraphQLType | null);
};



export type AvailableGadgetGlobalActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  namespace?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  inputFields?: AvailableGadgetObjectFieldSelection;

  examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};



export type GadgetGlobalActionGraphQLType = {

  __typename: 'GadgetGlobalActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetGlobalActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};


/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {

  __typename: 'DirectUploadToken';

  /** The URL to upload a file to. */
  url: Scalars['String'];

  /** The token to pass to an action to reference the uploaded file. */
  token: Scalars['String'];
};



export type AvailableDirectUploadTokenSelection = {

  __typename?: boolean | null | undefined;

  /** The URL to upload a file to. */
  url?: boolean | null | undefined;

  /** The token to pass to an action to reference the uploaded file. */
  token?: boolean | null | undefined;
};


/** Information about the Shopify Connection */
export type Shopify = {

  __typename: 'Shopify';

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication: (Scalars['Boolean'] | null);

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes: Scalars['String'][];
};



export type AvailableShopifySelection = {

  __typename?: boolean | null | undefined;

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication?: boolean | null | undefined;

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes?: boolean | null | undefined;
};



export type InternalQueries = {

  __typename: 'InternalQueries';

  session: (InternalSessionRecord | null);

  listSession: InternalSessionRecordConnection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails: (Scalars['JSONObject'] | null);

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);

  listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;

  shopifyShop: (InternalShopifyShopRecord | null);

  listShopifyShop: InternalShopifyShopRecordConnection;

  shopifySync: (InternalShopifySyncRecord | null);

  listShopifySync: InternalShopifySyncRecordConnection;

  badgeDesign: (InternalBadgeDesignRecord | null);

  listBadgeDesign: InternalBadgeDesignRecordConnection;

  gellyView: (Scalars['JSON'] | null);
};



export type AvailableInternalQueriesSelection = {

  __typename?: boolean | null | undefined;

  session?: boolean | null | undefined;

  listSession?: AvailableInternalSessionRecordConnectionSelection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: boolean | null | undefined;

  shopifyGdprRequest?: boolean | null | undefined;

  listShopifyGdprRequest?: AvailableInternalShopifyGdprRequestRecordConnectionSelection;

  shopifyShop?: boolean | null | undefined;

  listShopifyShop?: AvailableInternalShopifyShopRecordConnectionSelection;

  shopifySync?: boolean | null | undefined;

  listShopifySync?: AvailableInternalShopifySyncRecordConnectionSelection;

  badgeDesign?: boolean | null | undefined;

  listBadgeDesign?: AvailableInternalBadgeDesignRecordConnectionSelection;

  gellyView?: boolean | null | undefined;
};


/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {

  __typename: 'InternalSessionRecordConnection';

  /** A list of edges. */
  edges: InternalSessionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalSessionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalSessionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {

  __typename: 'InternalSessionRecordEdge';

  /** The item at the end of the edge */
  node: InternalSessionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalSessionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export type InternalShopifyGdprRequestRecordConnection = {

  __typename: 'InternalShopifyGdprRequestRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyGdprRequestRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyGdprRequestRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyGdprRequestRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyGdprRequestRecord connection. */
export type InternalShopifyGdprRequestRecordEdge = {

  __typename: 'InternalShopifyGdprRequestRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyGdprRequestRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyGdprRequestRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyShopRecord items. */
export type InternalShopifyShopRecordConnection = {

  __typename: 'InternalShopifyShopRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyShopRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyShopRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyShopRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyShopRecord connection. */
export type InternalShopifyShopRecordEdge = {

  __typename: 'InternalShopifyShopRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyShopRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyShopRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySyncRecord items. */
export type InternalShopifySyncRecordConnection = {

  __typename: 'InternalShopifySyncRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySyncRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySyncRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySyncRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySyncRecord connection. */
export type InternalShopifySyncRecordEdge = {

  __typename: 'InternalShopifySyncRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySyncRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySyncRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalBadgeDesignRecord items. */
export type InternalBadgeDesignRecordConnection = {

  __typename: 'InternalBadgeDesignRecordConnection';

  /** A list of edges. */
  edges: InternalBadgeDesignRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalBadgeDesignRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalBadgeDesignRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalBadgeDesignRecord connection. */
export type InternalBadgeDesignRecordEdge = {

  __typename: 'InternalBadgeDesignRecordEdge';

  /** The item at the end of the edge */
  node: InternalBadgeDesignRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalBadgeDesignRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type Mutation = {

  __typename: 'Mutation';

  abortShopifySync: (AbortShopifySyncResult | null);

  bulkAbortShopifySyncs: (BulkAbortShopifySyncsResult | null);

  completeShopifySync: (CompleteShopifySyncResult | null);

  bulkCompleteShopifySyncs: (BulkCompleteShopifySyncsResult | null);

  errorShopifySync: (ErrorShopifySyncResult | null);

  bulkErrorShopifySyncs: (BulkErrorShopifySyncsResult | null);

  runShopifySync: (RunShopifySyncResult | null);

  bulkRunShopifySyncs: (BulkRunShopifySyncsResult | null);

  upsertShopifySync: (UpsertShopifySyncResult | null);

  bulkUpsertShopifySyncs: BulkUpsertShopifySyncsResult;

  createBadgeDesign: (CreateBadgeDesignResult | null);

  bulkCreateBadgeDesigns: (BulkCreateBadgeDesignsResult | null);

  getByShopBadgeDesign: (GetByShopBadgeDesignResult | null);

  bulkGetByShopBadgeDesigns: (BulkGetByShopBadgeDesignsResult | null);

  shopifyConnection: (ShopifyConnectionMutations | null);

  background: BackgroundMutations;

  internal: InternalMutations;
};



export type AvailableMutationSelection = {

  __typename?: boolean | null | undefined;

  abortShopifySync?: AvailableAbortShopifySyncResultSelection;

  bulkAbortShopifySyncs?: AvailableBulkAbortShopifySyncsResultSelection;

  completeShopifySync?: AvailableCompleteShopifySyncResultSelection;

  bulkCompleteShopifySyncs?: AvailableBulkCompleteShopifySyncsResultSelection;

  errorShopifySync?: AvailableErrorShopifySyncResultSelection;

  bulkErrorShopifySyncs?: AvailableBulkErrorShopifySyncsResultSelection;

  runShopifySync?: AvailableRunShopifySyncResultSelection;

  bulkRunShopifySyncs?: AvailableBulkRunShopifySyncsResultSelection;

  upsertShopifySync?: AvailableUpsertShopifySyncResultSelection;

  bulkUpsertShopifySyncs?: AvailableBulkUpsertShopifySyncsResultSelection;

  createBadgeDesign?: AvailableCreateBadgeDesignResultSelection;

  bulkCreateBadgeDesigns?: AvailableBulkCreateBadgeDesignsResultSelection;

  getByShopBadgeDesign?: AvailableGetByShopBadgeDesignResultSelection;

  bulkGetByShopBadgeDesigns?: AvailableBulkGetByShopBadgeDesignsResultSelection;

  shopifyConnection?: AvailableShopifyConnectionMutationsSelection;

  background?: AvailableBackgroundMutationsSelection;

  internal?: AvailableInternalMutationsSelection;
};



export interface AbortShopifySyncResult extends UpsertShopifySyncResult {
  __typename: 'AbortShopifySyncResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifySync: (ShopifySync | null);
};



export type AvailableAbortShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the abort on the shopifySync model in bulk. */
export type BulkAbortShopifySyncsResult = {

  __typename: 'BulkAbortShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkAbortShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type CompleteShopifySyncResult = {

  __typename: 'CompleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  shopifySync: (ShopifySync | null);
};



export type AvailableCompleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the complete on the shopifySync model in bulk. */
export type BulkCompleteShopifySyncsResult = {

  __typename: 'BulkCompleteShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkCompleteShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type ErrorShopifySyncResult = {

  __typename: 'ErrorShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  shopifySync: (ShopifySync | null);
};



export type AvailableErrorShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the error on the shopifySync model in bulk. */
export type BulkErrorShopifySyncsResult = {

  __typename: 'BulkErrorShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkErrorShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export interface RunShopifySyncResult extends UpsertShopifySyncResult {
  __typename: 'RunShopifySyncResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifySync: (ShopifySync | null);
};



export type AvailableRunShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the run on the shopifySync model in bulk. */
export type BulkRunShopifySyncsResult = {

  __typename: 'BulkRunShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkRunShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};


/** The result of a bulk upsert operation for the shopifySync model */
export type BulkUpsertShopifySyncsResult = {

  __typename: 'BulkUpsertShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The results of each upsert action in the bulk operation */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkUpsertShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The results of each upsert action in the bulk operation */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type CreateBadgeDesignResult = {

  __typename: 'CreateBadgeDesignResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  badgeDesign: (BadgeDesign | null);
};



export type AvailableCreateBadgeDesignResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  badgeDesign?: AvailableBadgeDesignSelection;
};


/** The output when running the create on the badgeDesign model in bulk. */
export type BulkCreateBadgeDesignsResult = {

  __typename: 'BulkCreateBadgeDesignsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed badgeDesign records by each sent bulk action. Returned in the same order as the input bulk action params. */
  badgeDesigns: (BadgeDesign | null)[];
};



export type AvailableBulkCreateBadgeDesignsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed badgeDesign records by each sent bulk action. Returned in the same order as the input bulk action params. */
  badgeDesigns?: AvailableBadgeDesignSelection;
};



export type GetByShopBadgeDesignResult = {

  __typename: 'GetByShopBadgeDesignResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  badgeDesign: (BadgeDesign | null);
};



export type AvailableGetByShopBadgeDesignResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  badgeDesign?: AvailableBadgeDesignSelection;
};


/** The output when running the getByShop on the badgeDesign model in bulk. */
export type BulkGetByShopBadgeDesignsResult = {

  __typename: 'BulkGetByShopBadgeDesignsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed badgeDesign records by each sent bulk action. Returned in the same order as the input bulk action params. */
  badgeDesigns: (BadgeDesign | null)[];
};



export type AvailableBulkGetByShopBadgeDesignsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed badgeDesign records by each sent bulk action. Returned in the same order as the input bulk action params. */
  badgeDesigns?: AvailableBadgeDesignSelection;
};



export type ShopifyConnectionMutations = {

  __typename: 'ShopifyConnectionMutations';

  fetchOrInstallShop: (ShopifyConnectionFetchOrInstallShopResult | null);
};



export type AvailableShopifyConnectionMutationsSelection = {

  __typename?: boolean | null | undefined;

  fetchOrInstallShop?: AvailableShopifyConnectionFetchOrInstallShopResultSelection;
};



export type ShopifyConnectionFetchOrInstallShopResult = {

  __typename: 'ShopifyConnectionFetchOrInstallShopResult';

  isAuthenticated: Scalars['Boolean'];

  redirectToOauth: Scalars['Boolean'];

  missingScopes: Scalars['String'][];
};



export type AvailableShopifyConnectionFetchOrInstallShopResultSelection = {

  __typename?: boolean | null | undefined;

  isAuthenticated?: boolean | null | undefined;

  redirectToOauth?: boolean | null | undefined;

  missingScopes?: boolean | null | undefined;
};



export type BackgroundMutations = {

  __typename: 'BackgroundMutations';

  abortShopifySync: EnqueueBackgroundActionResult;

  bulkAbortShopifySyncs: BulkEnqueueBackgroundActionResult;

  completeShopifySync: EnqueueBackgroundActionResult;

  bulkCompleteShopifySyncs: BulkEnqueueBackgroundActionResult;

  errorShopifySync: EnqueueBackgroundActionResult;

  bulkErrorShopifySyncs: BulkEnqueueBackgroundActionResult;

  runShopifySync: EnqueueBackgroundActionResult;

  bulkRunShopifySyncs: BulkEnqueueBackgroundActionResult;

  upsertShopifySync: EnqueueBackgroundActionResult;

  bulkUpsertShopifySyncs: BulkEnqueueBackgroundActionResult;

  createBadgeDesign: EnqueueBackgroundActionResult;

  bulkCreateBadgeDesigns: BulkEnqueueBackgroundActionResult;

  getByShopBadgeDesign: EnqueueBackgroundActionResult;

  bulkGetByShopBadgeDesigns: BulkEnqueueBackgroundActionResult;
};



export type AvailableBackgroundMutationsSelection = {

  __typename?: boolean | null | undefined;

  abortShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkAbortShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  completeShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkCompleteShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  errorShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkErrorShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  runShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkRunShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  upsertShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkUpsertShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  createBadgeDesign?: AvailableEnqueueBackgroundActionResultSelection;

  bulkCreateBadgeDesigns?: AvailableBulkEnqueueBackgroundActionResultSelection;

  getByShopBadgeDesign?: AvailableEnqueueBackgroundActionResultSelection;

  bulkGetByShopBadgeDesigns?: AvailableBulkEnqueueBackgroundActionResultSelection;
};


/** The value returned from enqueuing an action to run in the background */
export type EnqueueBackgroundActionResult = {

  __typename: 'EnqueueBackgroundActionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  backgroundAction: (BackgroundActionHandle | null);
};



export type AvailableEnqueueBackgroundActionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  backgroundAction?: AvailableBackgroundActionHandleSelection;
};


/** One action enqueued for execution in the background */
export type BackgroundActionHandle = {

  __typename: 'BackgroundActionHandle';

  /** The ID of the background action */
  id: Scalars['String'];
};



export type AvailableBackgroundActionHandleSelection = {

  __typename?: boolean | null | undefined;

  /** The ID of the background action */
  id?: boolean | null | undefined;
};


/** The value returned from bulk enqueuing actions to run in the background */
export type BulkEnqueueBackgroundActionResult = {

  __typename: 'BulkEnqueueBackgroundActionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  backgroundActions: BackgroundActionHandle[];
};



export type AvailableBulkEnqueueBackgroundActionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  backgroundActions?: AvailableBackgroundActionHandleSelection;
};



export type InternalMutations = {

  __typename: 'InternalMutations';

  startTransaction: Scalars['String'];

  commitTransaction: Scalars['String'];

  rollbackTransaction: Scalars['String'];

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;

  createSession: (InternalCreateSessionResult | null);

  updateSession: (InternalUpdateSessionResult | null);

  deleteSession: (InternalDeleteSessionResult | null);

  deleteManySession: (InternalDeleteManySessionResult | null);

  bulkCreateSessions: (InternalBulkCreateSessionsResult | null);

  upsertSession: (InternalUpsertSessionResult | null);

  createShopifyGdprRequest: (InternalCreateShopifyGdprRequestResult | null);

  updateShopifyGdprRequest: (InternalUpdateShopifyGdprRequestResult | null);

  deleteShopifyGdprRequest: (InternalDeleteShopifyGdprRequestResult | null);

  deleteManyShopifyGdprRequest: (InternalDeleteManyShopifyGdprRequestResult | null);

  bulkCreateShopifyGdprRequests: (InternalBulkCreateShopifyGdprRequestsResult | null);

  upsertShopifyGdprRequest: (InternalUpsertShopifyGdprRequestResult | null);

  triggerCreateShopifyGdprRequest: (CreateShopifyGdprRequestResult | null);

  triggerUpdateShopifyGdprRequest: (UpdateShopifyGdprRequestResult | null);

  createShopifyShop: (InternalCreateShopifyShopResult | null);

  updateShopifyShop: (InternalUpdateShopifyShopResult | null);

  deleteShopifyShop: (InternalDeleteShopifyShopResult | null);

  deleteManyShopifyShop: (InternalDeleteManyShopifyShopResult | null);

  bulkCreateShopifyShops: (InternalBulkCreateShopifyShopsResult | null);

  upsertShopifyShop: (InternalUpsertShopifyShopResult | null);

  triggerUpdateShopifyShop: (UpdateShopifyShopResult | null);

  triggerInstallShopifyShop: (InstallShopifyShopResult | null);

  triggerReinstallShopifyShop: (ReinstallShopifyShopResult | null);

  triggerUninstallShopifyShop: (UninstallShopifyShopResult | null);

  createShopifySync: (InternalCreateShopifySyncResult | null);

  updateShopifySync: (InternalUpdateShopifySyncResult | null);

  deleteShopifySync: (InternalDeleteShopifySyncResult | null);

  deleteManyShopifySync: (InternalDeleteManyShopifySyncResult | null);

  bulkCreateShopifySyncs: (InternalBulkCreateShopifySyncsResult | null);

  upsertShopifySync: (InternalUpsertShopifySyncResult | null);

  triggerAbortShopifySync: (AbortShopifySyncResult | null);

  triggerCompleteShopifySync: (CompleteShopifySyncResult | null);

  triggerErrorShopifySync: (ErrorShopifySyncResult | null);

  triggerRunShopifySync: (RunShopifySyncResult | null);

  createBadgeDesign: (InternalCreateBadgeDesignResult | null);

  updateBadgeDesign: (InternalUpdateBadgeDesignResult | null);

  deleteBadgeDesign: (InternalDeleteBadgeDesignResult | null);

  deleteManyBadgeDesign: (InternalDeleteManyBadgeDesignResult | null);

  bulkCreateBadgeDesigns: (InternalBulkCreateBadgeDesignsResult | null);

  upsertBadgeDesign: (InternalUpsertBadgeDesignResult | null);

  triggerCreateBadgeDesign: (CreateBadgeDesignResult | null);

  triggerGetByShopBadgeDesign: (GetByShopBadgeDesignResult | null);

  cancelBackgroundAction: CancelBackgroundActionResult;

  bulkCancelBackgroundActions: BulkCancelBackgroundActionResult;
};



export type AvailableInternalMutationsSelection = {

  __typename?: boolean | null | undefined;

  startTransaction?: boolean | null | undefined;

  commitTransaction?: boolean | null | undefined;

  rollbackTransaction?: boolean | null | undefined;

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock?: AvailableLockOperationResultSelection;

  createSession?: AvailableInternalCreateSessionResultSelection;

  updateSession?: AvailableInternalUpdateSessionResultSelection;

  deleteSession?: AvailableInternalDeleteSessionResultSelection;

  deleteManySession?: AvailableInternalDeleteManySessionResultSelection;

  bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;

  upsertSession?: AvailableInternalUpsertSessionResultSelection;

  createShopifyGdprRequest?: AvailableInternalCreateShopifyGdprRequestResultSelection;

  updateShopifyGdprRequest?: AvailableInternalUpdateShopifyGdprRequestResultSelection;

  deleteShopifyGdprRequest?: AvailableInternalDeleteShopifyGdprRequestResultSelection;

  deleteManyShopifyGdprRequest?: AvailableInternalDeleteManyShopifyGdprRequestResultSelection;

  bulkCreateShopifyGdprRequests?: AvailableInternalBulkCreateShopifyGdprRequestsResultSelection;

  upsertShopifyGdprRequest?: AvailableInternalUpsertShopifyGdprRequestResultSelection;

  triggerCreateShopifyGdprRequest?: AvailableCreateShopifyGdprRequestResultSelection;

  triggerUpdateShopifyGdprRequest?: AvailableUpdateShopifyGdprRequestResultSelection;

  createShopifyShop?: AvailableInternalCreateShopifyShopResultSelection;

  updateShopifyShop?: AvailableInternalUpdateShopifyShopResultSelection;

  deleteShopifyShop?: AvailableInternalDeleteShopifyShopResultSelection;

  deleteManyShopifyShop?: AvailableInternalDeleteManyShopifyShopResultSelection;

  bulkCreateShopifyShops?: AvailableInternalBulkCreateShopifyShopsResultSelection;

  upsertShopifyShop?: AvailableInternalUpsertShopifyShopResultSelection;

  triggerUpdateShopifyShop?: AvailableUpdateShopifyShopResultSelection;

  triggerInstallShopifyShop?: AvailableInstallShopifyShopResultSelection;

  triggerReinstallShopifyShop?: AvailableReinstallShopifyShopResultSelection;

  triggerUninstallShopifyShop?: AvailableUninstallShopifyShopResultSelection;

  createShopifySync?: AvailableInternalCreateShopifySyncResultSelection;

  updateShopifySync?: AvailableInternalUpdateShopifySyncResultSelection;

  deleteShopifySync?: AvailableInternalDeleteShopifySyncResultSelection;

  deleteManyShopifySync?: AvailableInternalDeleteManyShopifySyncResultSelection;

  bulkCreateShopifySyncs?: AvailableInternalBulkCreateShopifySyncsResultSelection;

  upsertShopifySync?: AvailableInternalUpsertShopifySyncResultSelection;

  triggerAbortShopifySync?: AvailableAbortShopifySyncResultSelection;

  triggerCompleteShopifySync?: AvailableCompleteShopifySyncResultSelection;

  triggerErrorShopifySync?: AvailableErrorShopifySyncResultSelection;

  triggerRunShopifySync?: AvailableRunShopifySyncResultSelection;

  createBadgeDesign?: AvailableInternalCreateBadgeDesignResultSelection;

  updateBadgeDesign?: AvailableInternalUpdateBadgeDesignResultSelection;

  deleteBadgeDesign?: AvailableInternalDeleteBadgeDesignResultSelection;

  deleteManyBadgeDesign?: AvailableInternalDeleteManyBadgeDesignResultSelection;

  bulkCreateBadgeDesigns?: AvailableInternalBulkCreateBadgeDesignsResultSelection;

  upsertBadgeDesign?: AvailableInternalUpsertBadgeDesignResultSelection;

  triggerCreateBadgeDesign?: AvailableCreateBadgeDesignResultSelection;

  triggerGetByShopBadgeDesign?: AvailableGetByShopBadgeDesignResultSelection;

  cancelBackgroundAction?: AvailableCancelBackgroundActionResultSelection;

  bulkCancelBackgroundActions?: AvailableBulkCancelBackgroundActionResultSelection;
};



export type LockOperationResult = {

  __typename: 'LockOperationResult';

  /** Whether the lock operation succeeded */
  success: Scalars['Boolean'];

  /** Any errors encountered during the locking/unlocking operation */
  errors: ExecutionError[];
};



export type AvailableLockOperationResultSelection = {

  __typename?: boolean | null | undefined;

  /** Whether the lock operation succeeded */
  success?: boolean | null | undefined;

  /** Any errors encountered during the locking/unlocking operation */
  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateSessionResult = {

  __typename: 'InternalCreateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalCreateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  session?: boolean | null | undefined;
};



export type InternalUpdateSessionResult = {

  __typename: 'InternalUpdateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpdateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  session?: boolean | null | undefined;
};



export type InternalDeleteSessionResult = {

  __typename: 'InternalDeleteSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalDeleteSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  session?: boolean | null | undefined;
};



export type InternalDeleteManySessionResult = {

  __typename: 'InternalDeleteManySessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManySessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateSessionsResult = {

  __typename: 'InternalBulkCreateSessionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  sessions: (InternalSessionRecord | null)[];
};



export type AvailableInternalBulkCreateSessionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  sessions?: boolean | null | undefined;
};



export type InternalUpsertSessionResult = {

  __typename: 'InternalUpsertSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpsertSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  session?: boolean | null | undefined;
};



export type InternalCreateShopifyGdprRequestResult = {

  __typename: 'InternalCreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalUpdateShopifyGdprRequestResult = {

  __typename: 'InternalUpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteShopifyGdprRequestResult = {

  __typename: 'InternalDeleteShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalDeleteShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyGdprRequestResult = {

  __typename: 'InternalDeleteManyShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyGdprRequestsResult = {

  __typename: 'InternalBulkCreateShopifyGdprRequestsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequests: (InternalShopifyGdprRequestRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyGdprRequestsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequests?: boolean | null | undefined;
};



export type InternalUpsertShopifyGdprRequestResult = {

  __typename: 'InternalUpsertShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalUpsertShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifyGdprRequest?: boolean | null | undefined;
};



export interface CreateShopifyGdprRequestResult extends UpsertShopifyGdprRequestResult {
  __typename: 'CreateShopifyGdprRequestResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export interface UpdateShopifyGdprRequestResult extends UpsertShopifyGdprRequestResult {
  __typename: 'UpdateShopifyGdprRequestResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export type InternalCreateShopifyShopResult = {

  __typename: 'InternalCreateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalCreateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifyShop?: boolean | null | undefined;
};



export type InternalUpdateShopifyShopResult = {

  __typename: 'InternalUpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteShopifyShopResult = {

  __typename: 'InternalDeleteShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalDeleteShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyShopResult = {

  __typename: 'InternalDeleteManyShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyShopsResult = {

  __typename: 'InternalBulkCreateShopifyShopsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShops: (InternalShopifyShopRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyShopsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShops?: boolean | null | undefined;
};



export type InternalUpsertShopifyShopResult = {

  __typename: 'InternalUpsertShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalUpsertShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifyShop?: boolean | null | undefined;
};



export interface UpdateShopifyShopResult extends UpsertShopifyShopResult {
  __typename: 'UpdateShopifyShopResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyShop: (ShopifyShop | null);
};



export type AvailableUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;
};



export interface InstallShopifyShopResult extends UpsertShopifyShopResult {
  __typename: 'InstallShopifyShopResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyShop: (ShopifyShop | null);
};



export type AvailableInstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type ReinstallShopifyShopResult = {

  __typename: 'ReinstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  shopifyShop: (ShopifyShop | null);
};



export type AvailableReinstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type UninstallShopifyShopResult = {

  __typename: 'UninstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  shopifyShop: (ShopifyShop | null);
};



export type AvailableUninstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type InternalCreateShopifySyncResult = {

  __typename: 'InternalCreateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalCreateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifySync?: boolean | null | undefined;
};



export type InternalUpdateShopifySyncResult = {

  __typename: 'InternalUpdateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalUpdateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteShopifySyncResult = {

  __typename: 'InternalDeleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalDeleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySyncResult = {

  __typename: 'InternalDeleteManyShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySyncsResult = {

  __typename: 'InternalBulkCreateShopifySyncsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySyncs: (InternalShopifySyncRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySyncs?: boolean | null | undefined;
};



export type InternalUpsertShopifySyncResult = {

  __typename: 'InternalUpsertShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalUpsertShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  shopifySync?: boolean | null | undefined;
};



export type InternalCreateBadgeDesignResult = {

  __typename: 'InternalCreateBadgeDesignResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  badgeDesign: (InternalBadgeDesignRecord | null);
};



export type AvailableInternalCreateBadgeDesignResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  badgeDesign?: boolean | null | undefined;
};



export type InternalUpdateBadgeDesignResult = {

  __typename: 'InternalUpdateBadgeDesignResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  badgeDesign: (InternalBadgeDesignRecord | null);
};



export type AvailableInternalUpdateBadgeDesignResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  badgeDesign?: boolean | null | undefined;
};



export type InternalDeleteBadgeDesignResult = {

  __typename: 'InternalDeleteBadgeDesignResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  badgeDesign: (InternalBadgeDesignRecord | null);
};



export type AvailableInternalDeleteBadgeDesignResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  badgeDesign?: boolean | null | undefined;
};



export type InternalDeleteManyBadgeDesignResult = {

  __typename: 'InternalDeleteManyBadgeDesignResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyBadgeDesignResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateBadgeDesignsResult = {

  __typename: 'InternalBulkCreateBadgeDesignsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  badgeDesigns: (InternalBadgeDesignRecord | null)[];
};



export type AvailableInternalBulkCreateBadgeDesignsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  badgeDesigns?: boolean | null | undefined;
};



export type InternalUpsertBadgeDesignResult = {

  __typename: 'InternalUpsertBadgeDesignResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  /** Whether the record was created by this upsert operation */
  created: Scalars['Boolean'];

  badgeDesign: (InternalBadgeDesignRecord | null);
};



export type AvailableInternalUpsertBadgeDesignResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  /** Whether the record was created by this upsert operation */
  created?: boolean | null | undefined;

  badgeDesign?: boolean | null | undefined;
};


/** The value returned from cancelling a background action */
export type CancelBackgroundActionResult = {

  __typename: 'CancelBackgroundActionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  backgroundAction: (BackgroundActionHandle | null);
};



export type AvailableCancelBackgroundActionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  backgroundAction?: AvailableBackgroundActionHandleSelection;
};


/** The value returned from cancelling a background action */
export type BulkCancelBackgroundActionResult = {

  __typename: 'BulkCancelBackgroundActionResult';

  successCount: Scalars['Int'];

  failedCount: Scalars['Int'];
};



export type AvailableBulkCancelBackgroundActionResultSelection = {

  __typename?: boolean | null | undefined;

  successCount?: boolean | null | undefined;

  failedCount?: boolean | null | undefined;
};



export type Subscription = {

  __typename: 'Subscription';

  /** Subscribe to events about the application for the development harness */
  gadgetMetaHarnessEvents: GadgetApplicationHarnessEvent;

  backgroundAction: (BackgroundAction | null);
};



export type AvailableSubscriptionSelection = {

  __typename?: boolean | null | undefined;

  /** Subscribe to events about the application for the development harness */
  gadgetMetaHarnessEvents?: AvailableGadgetApplicationHarnessEventSelection;

  backgroundAction?: AvailableBackgroundActionSelection;
};



export type GadgetApplicationHarnessEvent = {

  __typename: 'GadgetApplicationHarnessEvent';

  id: Scalars['String'];

  event: Scalars['JSON'];
};



export type AvailableGadgetApplicationHarnessEventSelection = {

  __typename?: boolean | null | undefined;

  id?: boolean | null | undefined;

  event?: boolean | null | undefined;
};



export type BackgroundAction = {

  __typename: 'BackgroundAction';

  /** The ID of the background action */
  id: Scalars['String'];

  outcome: (BackgroundActionOutcome | null);

  result: (BackgroundActionResult | null);
};



export type AvailableBackgroundActionSelection = {

  __typename?: boolean | null | undefined;

  /** The ID of the background action */
  id?: boolean | null | undefined;

  outcome?: boolean | null | undefined;

  result?: AvailableBackgroundActionResultSelection;
};



export type ExplicitNestingRequired = never;

export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
  [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;

/**
 * Given a schema we can select values from, apply a given selection to that schema to get the output type.
 **/
export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined
  ? never
  : Schema extends (infer T)[]
  ? Select<T, Selection>[]
  : Schema extends null
  ? Select<Exclude<Schema, null>, Selection> | null
  : {
      [Key in keyof Selection & keyof Schema]: Selection[Key] extends true
        ? Schema[Key]
        : Selection[Key] extends FieldSelection
        ? Select<Schema[Key], Selection[Key]>
        : never;
    };

export type IDsList = {
  ids: string[];
}

/**
 * For finder functions which accept the `live: true` argument, this type decides if the return type will be one value or an async iterable stream of values
 * If {live: true}, returns an AsyncIterable<Result>
 * Anything else, returns a Promise<Result>
 **/
export type PromiseOrLiveIterator<Options extends { live?: boolean }, Result> = Options extends { live: true } ? AsyncIterable<Result> : Promise<Result>;

export type { ComputedViewWithoutVariables, ComputedViewWithVariables, ComputedViewFunctionWithoutVariables, ComputedViewFunctionWithVariables }
