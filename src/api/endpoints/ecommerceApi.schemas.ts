/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Ecommerce API
 * API for e commerce App
 * OpenAPI spec version: 0.0.1
 */
export type UsersControllerListUsersParams = { filter?: UserFilter1 };

export type UsersControllerUpdateAllParams = { where?: { [key: string]: any } };

export type UsersControllerFindByIdParams = { filter?: UserFilter };

export type UsersControllerCountUsersParams = { where?: { [key: string]: any } };

export type ShoppingCartControllerFindParams = { filter?: ShoppingCartFilter1 };

export type ShoppingCartControllerUpdateAllParams = { where?: { [key: string]: any } };

export type ShoppingCartControllerFindByIdParams = { filter?: ShoppingCartFilter };

export type ShoppingCartControllerCountParams = { where?: { [key: string]: any } };

export type ProductsControllerFindParams = { filter?: ProductsFilter1 };

export type ProductsControllerUpdateAllParams = { where?: { [key: string]: any } };

export type ProductsControllerFindByIdParams = { filter?: ProductsFilter };

export type ProductsControllerCountParams = { where?: { [key: string]: any } };

export type PaymentsControllerFindParams = { filter?: PaymentFilter1 };

export type PaymentsControllerUpdateAllParams = { where?: { [key: string]: any } };

export type PaymentsControllerFindByIdParams = { filter?: PaymentFilter };

export type PaymentsControllerCountParams = { where?: { [key: string]: any } };

export type InventoryControllerFindParams = { filter?: InventoryFilter1 };

export type InventoryControllerUpdateAllParams = { where?: { [key: string]: any } };

export type InventoryControllerFindByIdParams = { filter?: InventoryFilter };

export type InventoryControllerCountParams = { where?: { [key: string]: any } };

export type CategoriesControllerFindParams = { filter?: CategoryFilter1 };

export type CategoriesControllerUpdateAllParams = { where?: { [key: string]: any } };

export type CategoriesControllerFindByIdParams = { filter?: CategoryFilter };

export type CategoriesControllerCountParams = { where?: { [key: string]: any } };

export type AuthenticationControllerLoginBody = {
  email?: string;
  password?: string;
};

export type UserFilter1FieldsOneOf = {
  _id?: boolean;
  email?: boolean;
  password?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  createdOn?: boolean;
  lastLoginDate?: boolean;
  [key: string]: any;
 };

export type UserFilter1Fields = UserFilter1FieldsOneOf | string[];

export type UserFilter1Where = { [key: string]: any };

export type UserFilter1Order = string | string[];

export interface UserFilter1 {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: UserFilter1Order;
  where?: UserFilter1Where;
  fields?: UserFilter1Fields;
}

export type UserFilterFieldsOneOf = {
  _id?: boolean;
  email?: boolean;
  password?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  createdOn?: boolean;
  lastLoginDate?: boolean;
  [key: string]: any;
 };

export type UserFilterFields = UserFilterFieldsOneOf | string[];

export type UserFilterOrder = string | string[];

export interface UserFilter {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: UserFilterOrder;
  fields?: UserFilterFields;
}

export type ShoppingCartFilter1FieldsOneOfTwoItem = typeof ShoppingCartFilter1FieldsOneOfTwoItem[keyof typeof ShoppingCartFilter1FieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ShoppingCartFilter1FieldsOneOfTwoItem = {
  _id: '_id',
  active: 'active',
  expireOn: 'expireOn',
} as const;

export type ShoppingCartFilter1FieldsOneOf = {
  _id?: boolean;
  active?: boolean;
  expireOn?: boolean;
};

export type ShoppingCartFilter1Fields = ShoppingCartFilter1FieldsOneOf | ShoppingCartFilter1FieldsOneOfTwoItem[];

export type ShoppingCartFilter1Where = { [key: string]: any };

export type ShoppingCartFilter1Order = string | string[];

export interface ShoppingCartFilter1 {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: ShoppingCartFilter1Order;
  where?: ShoppingCartFilter1Where;
  fields?: ShoppingCartFilter1Fields;
}

export type ShoppingCartFilterFieldsOneOfTwoItem = typeof ShoppingCartFilterFieldsOneOfTwoItem[keyof typeof ShoppingCartFilterFieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ShoppingCartFilterFieldsOneOfTwoItem = {
  _id: '_id',
  active: 'active',
  expireOn: 'expireOn',
} as const;

export type ShoppingCartFilterFieldsOneOf = {
  _id?: boolean;
  active?: boolean;
  expireOn?: boolean;
};

export type ShoppingCartFilterFields = ShoppingCartFilterFieldsOneOf | ShoppingCartFilterFieldsOneOfTwoItem[];

export type ShoppingCartFilterOrder = string | string[];

export interface ShoppingCartFilter {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: ShoppingCartFilterOrder;
  fields?: ShoppingCartFilterFields;
}

export type ProductsFilter1FieldsOneOfTwoItem = typeof ProductsFilter1FieldsOneOfTwoItem[keyof typeof ProductsFilter1FieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProductsFilter1FieldsOneOfTwoItem = {
  _id: '_id',
  name: 'name',
  description: 'description',
  price: 'price',
  amountAvailableInStock: 'amountAvailableInStock',
  discountId: 'discountId',
  categoryId: 'categoryId',
  createdOn: 'createdOn',
  updatedOn: 'updatedOn',
} as const;

export type ProductsFilter1FieldsOneOf = {
  _id?: boolean;
  name?: boolean;
  description?: boolean;
  price?: boolean;
  amountAvailableInStock?: boolean;
  discountId?: boolean;
  categoryId?: boolean;
  createdOn?: boolean;
  updatedOn?: boolean;
};

export type ProductsFilter1Fields = ProductsFilter1FieldsOneOf | ProductsFilter1FieldsOneOfTwoItem[];

export type ProductsFilter1Where = { [key: string]: any };

export type ProductsFilter1Order = string | string[];

export interface ProductsFilter1 {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: ProductsFilter1Order;
  where?: ProductsFilter1Where;
  fields?: ProductsFilter1Fields;
}

export type ProductsFilterFieldsOneOfTwoItem = typeof ProductsFilterFieldsOneOfTwoItem[keyof typeof ProductsFilterFieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ProductsFilterFieldsOneOfTwoItem = {
  _id: '_id',
  name: 'name',
  description: 'description',
  price: 'price',
  amountAvailableInStock: 'amountAvailableInStock',
  discountId: 'discountId',
  categoryId: 'categoryId',
  createdOn: 'createdOn',
  updatedOn: 'updatedOn',
} as const;

export type ProductsFilterFieldsOneOf = {
  _id?: boolean;
  name?: boolean;
  description?: boolean;
  price?: boolean;
  amountAvailableInStock?: boolean;
  discountId?: boolean;
  categoryId?: boolean;
  createdOn?: boolean;
  updatedOn?: boolean;
};

export type ProductsFilterFields = ProductsFilterFieldsOneOf | ProductsFilterFieldsOneOfTwoItem[];

export type ProductsFilterOrder = string | string[];

export interface ProductsFilter {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: ProductsFilterOrder;
  fields?: ProductsFilterFields;
}

export type PingResponseHeaders = {
  'Content-Type'?: string;
  [key: string]: any;
 };

export interface PingResponse {
  greeting?: string;
  date?: string;
  url?: string;
  headers?: PingResponseHeaders;
}

export type PaymentFilter1FieldsOneOfTwoItem = typeof PaymentFilter1FieldsOneOfTwoItem[keyof typeof PaymentFilter1FieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentFilter1FieldsOneOfTwoItem = {
  _id: '_id',
  amount: 'amount',
  state: 'state',
  timeStamp: 'timeStamp',
} as const;

export type PaymentFilter1FieldsOneOf = {
  _id?: boolean;
  amount?: boolean;
  state?: boolean;
  timeStamp?: boolean;
};

export type PaymentFilter1Fields = PaymentFilter1FieldsOneOf | PaymentFilter1FieldsOneOfTwoItem[];

export type PaymentFilter1Where = { [key: string]: any };

export type PaymentFilter1Order = string | string[];

export interface PaymentFilter1 {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: PaymentFilter1Order;
  where?: PaymentFilter1Where;
  fields?: PaymentFilter1Fields;
}

export type PaymentFilterFieldsOneOfTwoItem = typeof PaymentFilterFieldsOneOfTwoItem[keyof typeof PaymentFilterFieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentFilterFieldsOneOfTwoItem = {
  _id: '_id',
  amount: 'amount',
  state: 'state',
  timeStamp: 'timeStamp',
} as const;

export type PaymentFilterFieldsOneOf = {
  _id?: boolean;
  amount?: boolean;
  state?: boolean;
  timeStamp?: boolean;
};

export type PaymentFilterFields = PaymentFilterFieldsOneOf | PaymentFilterFieldsOneOfTwoItem[];

export type PaymentFilterOrder = string | string[];

export interface PaymentFilter {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: PaymentFilterOrder;
  fields?: PaymentFilterFields;
}

export type InventoryFilter1FieldsOneOfTwoItem = typeof InventoryFilter1FieldsOneOfTwoItem[keyof typeof InventoryFilter1FieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const InventoryFilter1FieldsOneOfTwoItem = {
  _id: '_id',
  productId: 'productId',
} as const;

export type InventoryFilter1FieldsOneOf = {
  _id?: boolean;
  productId?: boolean;
};

export type InventoryFilter1Fields = InventoryFilter1FieldsOneOf | InventoryFilter1FieldsOneOfTwoItem[];

export type InventoryFilter1Where = { [key: string]: any };

export type InventoryFilter1Order = string | string[];

export interface InventoryFilter1 {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: InventoryFilter1Order;
  where?: InventoryFilter1Where;
  fields?: InventoryFilter1Fields;
}

export type InventoryFilterFieldsOneOfTwoItem = typeof InventoryFilterFieldsOneOfTwoItem[keyof typeof InventoryFilterFieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const InventoryFilterFieldsOneOfTwoItem = {
  _id: '_id',
  productId: 'productId',
} as const;

export type InventoryFilterFieldsOneOf = {
  _id?: boolean;
  productId?: boolean;
};

export type InventoryFilterFields = InventoryFilterFieldsOneOf | InventoryFilterFieldsOneOfTwoItem[];

export type InventoryFilterOrder = string | string[];

export interface InventoryFilter {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: InventoryFilterOrder;
  fields?: InventoryFilterFields;
}

export type CategoryFilter1FieldsOneOfTwoItem = typeof CategoryFilter1FieldsOneOfTwoItem[keyof typeof CategoryFilter1FieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CategoryFilter1FieldsOneOfTwoItem = {
  _id: '_id',
  name: 'name',
  createdOn: 'createdOn',
  updatedOn: 'updatedOn',
} as const;

export type CategoryFilter1FieldsOneOf = {
  _id?: boolean;
  name?: boolean;
  createdOn?: boolean;
  updatedOn?: boolean;
};

export type CategoryFilter1Fields = CategoryFilter1FieldsOneOf | CategoryFilter1FieldsOneOfTwoItem[];

export type CategoryFilter1Where = { [key: string]: any };

export type CategoryFilter1Order = string | string[];

export interface CategoryFilter1 {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: CategoryFilter1Order;
  where?: CategoryFilter1Where;
  fields?: CategoryFilter1Fields;
}

export type CategoryFilterFieldsOneOfTwoItem = typeof CategoryFilterFieldsOneOfTwoItem[keyof typeof CategoryFilterFieldsOneOfTwoItem];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CategoryFilterFieldsOneOfTwoItem = {
  _id: '_id',
  name: 'name',
  createdOn: 'createdOn',
  updatedOn: 'updatedOn',
} as const;

export type CategoryFilterFieldsOneOf = {
  _id?: boolean;
  name?: boolean;
  createdOn?: boolean;
  updatedOn?: boolean;
};

export type CategoryFilterFields = CategoryFilterFieldsOneOf | CategoryFilterFieldsOneOfTwoItem[];

export type CategoryFilterOrder = string | string[];

export interface CategoryFilter {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: CategoryFilterOrder;
  fields?: CategoryFilterFields;
}

export interface LoopbackCount {
  count?: number;
}

export type LoginFailureError = {
  statusCode?: number;
  name?: string;
  message?: string;
};

export interface LoginFailure {
  error?: LoginFailureError;
}

export interface LoginSuccess {
  token?: string;
}

/**
 * (tsType: Partial<User>, schemaOptions: { partial: true })
 */
export interface UserPartial {
  _id?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  createdOn?: string;
  lastLoginDate?: string;
  [key: string]: any;
 }

/**
 * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
 */
export interface UserWithRelations {
  _id?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  createdOn?: string;
  lastLoginDate?: string;
  [key: string]: any;
 }

/**
 * (tsType: Omit<User, '_id' | 'createdOn' | 'lastLoginDate'>, schemaOptions: { title: 'NewUser', exclude: [ '_id', 'createdOn', 'lastLoginDate' ] })
 */
export interface NewUser {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  [key: string]: any;
 }

export interface User {
  _id?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  createdOn?: string;
  lastLoginDate?: string;
  [key: string]: any;
 }

/**
 * (tsType: Partial<ShoppingCart>, schemaOptions: { partial: true })
 */
export interface ShoppingCartPartial {
  _id?: string;
  active?: boolean;
  expireOn?: string;
}

/**
 * (tsType: ShoppingCartWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ShoppingCartWithRelations {
  _id?: string;
  active: boolean;
  expireOn: string;
}

/**
 * (tsType: Omit<ShoppingCart, '_id'>, schemaOptions: { title: 'NewShoppingCart', exclude: [ '_id' ] })
 */
export interface NewShoppingCart {
  active: boolean;
  expireOn: string;
}

export interface ShoppingCart {
  _id?: string;
  active: boolean;
  expireOn: string;
}

/**
 * (tsType: Partial<Products>, schemaOptions: { partial: true })
 */
export interface ProductsPartial {
  _id?: string;
  name?: string;
  description?: string;
  price?: number;
  amountAvailableInStock?: number;
  discountId?: string;
  categoryId?: string;
  createdOn?: string;
  updatedOn?: string;
}

/**
 * (tsType: ProductsWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductsWithRelations {
  _id?: string;
  name: string;
  description: string;
  price: number;
  amountAvailableInStock: number;
  discountId?: string;
  categoryId: string;
  createdOn?: string;
  updatedOn?: string;
}

/**
 * (tsType: Omit<Products, '_id'>, schemaOptions: { title: 'NewProducts', exclude: [ '_id' ] })
 */
export interface NewProducts {
  name: string;
  description: string;
  price: number;
  amountAvailableInStock: number;
  discountId?: string;
  categoryId: string;
  createdOn?: string;
  updatedOn?: string;
}

export interface Products {
  _id?: string;
  name: string;
  description: string;
  price: number;
  amountAvailableInStock: number;
  discountId?: string;
  categoryId: string;
  createdOn?: string;
  updatedOn?: string;
}

/**
 * (tsType: Partial<Payment>, schemaOptions: { partial: true })
 */
export interface PaymentPartial {
  _id?: string;
  amount?: number;
  state?: string;
  timeStamp?: string;
}

/**
 * (tsType: PaymentWithRelations, schemaOptions: { includeRelations: true })
 */
export interface PaymentWithRelations {
  _id?: string;
  amount: number;
  state: string;
  timeStamp?: string;
}

/**
 * (tsType: Omit<Payment, '_id'>, schemaOptions: { title: 'NewPayment', exclude: [ '_id' ] })
 */
export interface NewPayment {
  amount: number;
  state: string;
  timeStamp?: string;
}

export interface Payment {
  _id?: string;
  amount: number;
  state: string;
  timeStamp?: string;
}

/**
 * (tsType: Partial<Inventory>, schemaOptions: { partial: true })
 */
export interface InventoryPartial {
  _id?: string;
  productId?: string;
}

/**
 * (tsType: InventoryWithRelations, schemaOptions: { includeRelations: true })
 */
export interface InventoryWithRelations {
  _id?: string;
  productId: string;
}

/**
 * (tsType: Omit<Inventory, '_id'>, schemaOptions: { title: 'NewInventory', exclude: [ '_id' ] })
 */
export interface NewInventory {
  productId: string;
}

export interface Inventory {
  _id?: string;
  productId: string;
}

/**
 * (tsType: Partial<Category>, schemaOptions: { partial: true })
 */
export interface CategoryPartial {
  _id?: string;
  name?: string;
  createdOn?: string;
  updatedOn?: string;
}

/**
 * (tsType: CategoryWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CategoryWithRelations {
  _id?: string;
  name: string;
  createdOn?: string;
  updatedOn?: string;
}

/**
 * (tsType: Omit<Category, '_id'>, schemaOptions: { title: 'NewCategory', exclude: [ '_id' ] })
 */
export interface NewCategory {
  name: string;
  createdOn?: string;
  updatedOn?: string;
}

export interface Category {
  _id?: string;
  name: string;
  createdOn?: string;
  updatedOn?: string;
}

