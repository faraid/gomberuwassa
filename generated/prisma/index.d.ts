
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model NewsCategory
 * 
 */
export type NewsCategory = $Result.DefaultSelection<Prisma.$NewsCategoryPayload>
/**
 * Model NewsTag
 * 
 */
export type NewsTag = $Result.DefaultSelection<Prisma.$NewsTagPayload>
/**
 * Model ArticleTag
 * 
 */
export type ArticleTag = $Result.DefaultSelection<Prisma.$ArticleTagPayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model ProjectType
 * 
 */
export type ProjectType = $Result.DefaultSelection<Prisma.$ProjectTypePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model GalleryCategory
 * 
 */
export type GalleryCategory = $Result.DefaultSelection<Prisma.$GalleryCategoryPayload>
/**
 * Model GalleryItem
 * 
 */
export type GalleryItem = $Result.DefaultSelection<Prisma.$GalleryItemPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model ContactSubmission
 * 
 */
export type ContactSubmission = $Result.DefaultSelection<Prisma.$ContactSubmissionPayload>
/**
 * Model SiteSetting
 * 
 */
export type SiteSetting = $Result.DefaultSelection<Prisma.$SiteSettingPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Super_Admin: 'Super_Admin',
  Editor: 'Editor',
  Viewer: 'Viewer'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ArticleStatus: {
  draft: 'draft',
  review: 'review',
  scheduled: 'scheduled',
  published: 'published',
  deleted: 'deleted'
};

export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus]


export const ProjectStatus: {
  planned: 'planned',
  ongoing: 'ongoing',
  completed: 'completed'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const ProgramStatus: {
  active: 'active',
  expanding: 'expanding',
  planned: 'planned'
};

export type ProgramStatus = (typeof ProgramStatus)[keyof typeof ProgramStatus]


export const Tone: {
  blue: 'blue',
  green: 'green'
};

export type Tone = (typeof Tone)[keyof typeof Tone]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ArticleStatus = $Enums.ArticleStatus

export const ArticleStatus: typeof $Enums.ArticleStatus

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type ProgramStatus = $Enums.ProgramStatus

export const ProgramStatus: typeof $Enums.ProgramStatus

export type Tone = $Enums.Tone

export const Tone: typeof $Enums.Tone

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsCategory`: Exposes CRUD operations for the **NewsCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsCategories
    * const newsCategories = await prisma.newsCategory.findMany()
    * ```
    */
  get newsCategory(): Prisma.NewsCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsTag`: Exposes CRUD operations for the **NewsTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsTags
    * const newsTags = await prisma.newsTag.findMany()
    * ```
    */
  get newsTag(): Prisma.NewsTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleTag`: Exposes CRUD operations for the **ArticleTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleTags
    * const articleTags = await prisma.articleTag.findMany()
    * ```
    */
  get articleTag(): Prisma.ArticleTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectType`: Exposes CRUD operations for the **ProjectType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTypes
    * const projectTypes = await prisma.projectType.findMany()
    * ```
    */
  get projectType(): Prisma.ProjectTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryCategory`: Exposes CRUD operations for the **GalleryCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryCategories
    * const galleryCategories = await prisma.galleryCategory.findMany()
    * ```
    */
  get galleryCategory(): Prisma.GalleryCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryItem`: Exposes CRUD operations for the **GalleryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryItems
    * const galleryItems = await prisma.galleryItem.findMany()
    * ```
    */
  get galleryItem(): Prisma.GalleryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactSubmission`: Exposes CRUD operations for the **ContactSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactSubmissions
    * const contactSubmissions = await prisma.contactSubmission.findMany()
    * ```
    */
  get contactSubmission(): Prisma.ContactSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteSetting`: Exposes CRUD operations for the **SiteSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteSettings
    * const siteSettings = await prisma.siteSetting.findMany()
    * ```
    */
  get siteSetting(): Prisma.SiteSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    PasswordResetToken: 'PasswordResetToken',
    NewsCategory: 'NewsCategory',
    NewsTag: 'NewsTag',
    ArticleTag: 'ArticleTag',
    NewsArticle: 'NewsArticle',
    ProjectType: 'ProjectType',
    Project: 'Project',
    GalleryCategory: 'GalleryCategory',
    GalleryItem: 'GalleryItem',
    Program: 'Program',
    ContactSubmission: 'ContactSubmission',
    SiteSetting: 'SiteSetting',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "passwordResetToken" | "newsCategory" | "newsTag" | "articleTag" | "newsArticle" | "projectType" | "project" | "galleryCategory" | "galleryItem" | "program" | "contactSubmission" | "siteSetting" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      NewsCategory: {
        payload: Prisma.$NewsCategoryPayload<ExtArgs>
        fields: Prisma.NewsCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          findFirst: {
            args: Prisma.NewsCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          findMany: {
            args: Prisma.NewsCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          create: {
            args: Prisma.NewsCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          createMany: {
            args: Prisma.NewsCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          delete: {
            args: Prisma.NewsCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          update: {
            args: Prisma.NewsCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          deleteMany: {
            args: Prisma.NewsCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          upsert: {
            args: Prisma.NewsCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          aggregate: {
            args: Prisma.NewsCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsCategory>
          }
          groupBy: {
            args: Prisma.NewsCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryCountAggregateOutputType> | number
          }
        }
      }
      NewsTag: {
        payload: Prisma.$NewsTagPayload<ExtArgs>
        fields: Prisma.NewsTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          findFirst: {
            args: Prisma.NewsTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          findMany: {
            args: Prisma.NewsTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          create: {
            args: Prisma.NewsTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          createMany: {
            args: Prisma.NewsTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          delete: {
            args: Prisma.NewsTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          update: {
            args: Prisma.NewsTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          deleteMany: {
            args: Prisma.NewsTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          upsert: {
            args: Prisma.NewsTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          aggregate: {
            args: Prisma.NewsTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsTag>
          }
          groupBy: {
            args: Prisma.NewsTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsTagCountArgs<ExtArgs>
            result: $Utils.Optional<NewsTagCountAggregateOutputType> | number
          }
        }
      }
      ArticleTag: {
        payload: Prisma.$ArticleTagPayload<ExtArgs>
        fields: Prisma.ArticleTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>
          }
          findFirst: {
            args: Prisma.ArticleTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>
          }
          findMany: {
            args: Prisma.ArticleTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>[]
          }
          create: {
            args: Prisma.ArticleTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>
          }
          createMany: {
            args: Prisma.ArticleTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>[]
          }
          delete: {
            args: Prisma.ArticleTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>
          }
          update: {
            args: Prisma.ArticleTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>
          }
          deleteMany: {
            args: Prisma.ArticleTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>[]
          }
          upsert: {
            args: Prisma.ArticleTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTagPayload>
          }
          aggregate: {
            args: Prisma.ArticleTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleTag>
          }
          groupBy: {
            args: Prisma.ArticleTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleTagCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleTagCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      ProjectType: {
        payload: Prisma.$ProjectTypePayload<ExtArgs>
        fields: Prisma.ProjectTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          findFirst: {
            args: Prisma.ProjectTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          findMany: {
            args: Prisma.ProjectTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>[]
          }
          create: {
            args: Prisma.ProjectTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          createMany: {
            args: Prisma.ProjectTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>[]
          }
          delete: {
            args: Prisma.ProjectTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          update: {
            args: Prisma.ProjectTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          deleteMany: {
            args: Prisma.ProjectTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>[]
          }
          upsert: {
            args: Prisma.ProjectTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          aggregate: {
            args: Prisma.ProjectTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectType>
          }
          groupBy: {
            args: Prisma.ProjectTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTypeCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      GalleryCategory: {
        payload: Prisma.$GalleryCategoryPayload<ExtArgs>
        fields: Prisma.GalleryCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>
          }
          findFirst: {
            args: Prisma.GalleryCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>
          }
          findMany: {
            args: Prisma.GalleryCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>[]
          }
          create: {
            args: Prisma.GalleryCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>
          }
          createMany: {
            args: Prisma.GalleryCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>[]
          }
          delete: {
            args: Prisma.GalleryCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>
          }
          update: {
            args: Prisma.GalleryCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>[]
          }
          upsert: {
            args: Prisma.GalleryCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryCategoryPayload>
          }
          aggregate: {
            args: Prisma.GalleryCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryCategory>
          }
          groupBy: {
            args: Prisma.GalleryCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryCategoryCountAggregateOutputType> | number
          }
        }
      }
      GalleryItem: {
        payload: Prisma.$GalleryItemPayload<ExtArgs>
        fields: Prisma.GalleryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findFirst: {
            args: Prisma.GalleryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findMany: {
            args: Prisma.GalleryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          create: {
            args: Prisma.GalleryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          createMany: {
            args: Prisma.GalleryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          delete: {
            args: Prisma.GalleryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          update: {
            args: Prisma.GalleryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          deleteMany: {
            args: Prisma.GalleryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          upsert: {
            args: Prisma.GalleryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          aggregate: {
            args: Prisma.GalleryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryItem>
          }
          groupBy: {
            args: Prisma.GalleryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      ContactSubmission: {
        payload: Prisma.$ContactSubmissionPayload<ExtArgs>
        fields: Prisma.ContactSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContactSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContactSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContactSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContactSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContactSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          update: {
            args: Prisma.ContactSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContactSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContactSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContactSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactSubmission>
          }
          groupBy: {
            args: Prisma.ContactSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionCountAggregateOutputType> | number
          }
        }
      }
      SiteSetting: {
        payload: Prisma.$SiteSettingPayload<ExtArgs>
        fields: Prisma.SiteSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findFirst: {
            args: Prisma.SiteSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          findMany: {
            args: Prisma.SiteSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          create: {
            args: Prisma.SiteSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          createMany: {
            args: Prisma.SiteSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          delete: {
            args: Prisma.SiteSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          update: {
            args: Prisma.SiteSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          deleteMany: {
            args: Prisma.SiteSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>[]
          }
          upsert: {
            args: Prisma.SiteSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteSettingPayload>
          }
          aggregate: {
            args: Prisma.SiteSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteSetting>
          }
          groupBy: {
            args: Prisma.SiteSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SiteSettingCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    passwordResetToken?: PasswordResetTokenOmit
    newsCategory?: NewsCategoryOmit
    newsTag?: NewsTagOmit
    articleTag?: ArticleTagOmit
    newsArticle?: NewsArticleOmit
    projectType?: ProjectTypeOmit
    project?: ProjectOmit
    galleryCategory?: GalleryCategoryOmit
    galleryItem?: GalleryItemOmit
    program?: ProgramOmit
    contactSubmission?: ContactSubmissionOmit
    siteSetting?: SiteSettingOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdUsers: number
    sessions: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type NewsCategoryCountOutputType
   */

  export type NewsCategoryCountOutputType = {
    articles: number
  }

  export type NewsCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | NewsCategoryCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * NewsCategoryCountOutputType without action
   */
  export type NewsCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryCountOutputType
     */
    select?: NewsCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCategoryCountOutputType without action
   */
  export type NewsCategoryCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
  }


  /**
   * Count Type NewsTagCountOutputType
   */

  export type NewsTagCountOutputType = {
    articles: number
  }

  export type NewsTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | NewsTagCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * NewsTagCountOutputType without action
   */
  export type NewsTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagCountOutputType
     */
    select?: NewsTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsTagCountOutputType without action
   */
  export type NewsTagCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleTagWhereInput
  }


  /**
   * Count Type NewsArticleCountOutputType
   */

  export type NewsArticleCountOutputType = {
    tags: number
  }

  export type NewsArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | NewsArticleCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleCountOutputType
     */
    select?: NewsArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleTagWhereInput
  }


  /**
   * Count Type ProjectTypeCountOutputType
   */

  export type ProjectTypeCountOutputType = {
    projects: number
  }

  export type ProjectTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectTypeCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ProjectTypeCountOutputType without action
   */
  export type ProjectTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTypeCountOutputType
     */
    select?: ProjectTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectTypeCountOutputType without action
   */
  export type ProjectTypeCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type GalleryCategoryCountOutputType
   */

  export type GalleryCategoryCountOutputType = {
    items: number
  }

  export type GalleryCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | GalleryCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * GalleryCategoryCountOutputType without action
   */
  export type GalleryCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategoryCountOutputType
     */
    select?: GalleryCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GalleryCategoryCountOutputType without action
   */
  export type GalleryCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    failedAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    failedAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    active: boolean | null
    failedAttempts: number | null
    lockedAt: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    active: boolean | null
    failedAttempts: number | null
    lockedAt: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    passwordHash: number
    role: number
    active: number
    failedAttempts: number
    lockedAt: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    failedAttempts?: true
  }

  export type UserSumAggregateInputType = {
    failedAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    active?: true
    failedAttempts?: true
    lockedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    active?: true
    failedAttempts?: true
    lockedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    active?: true
    failedAttempts?: true
    lockedAt?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active: boolean
    failedAttempts: number
    lockedAt: Date | null
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    active?: boolean
    failedAttempts?: boolean
    lockedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    active?: boolean
    failedAttempts?: boolean
    lockedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    active?: boolean
    failedAttempts?: boolean
    lockedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    active?: boolean
    failedAttempts?: boolean
    lockedAt?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "passwordHash" | "role" | "active" | "failedAttempts" | "lockedAt" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      createdUsers: Prisma.$UserPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      passwordHash: string
      role: $Enums.Role
      active: boolean
      failedAttempts: number
      lockedAt: Date | null
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends User$createdByArgs<ExtArgs> = {}>(args?: Subset<T, User$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly failedAttempts: FieldRef<"User", 'Int'>
    readonly lockedAt: FieldRef<"User", 'DateTime'>
    readonly createdById: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdBy
   */
  export type User$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    lastSeen: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    lastSeen: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    createdAt: number
    lastSeen: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    lastSeen?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    lastSeen?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    lastSeen?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    createdAt: Date
    lastSeen: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastSeen?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "createdAt" | "lastSeen", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
      createdAt: Date
      lastSeen: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly lastSeen: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    usedAt: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    usedAt: Date | null
    expiresAt: Date
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "usedAt" | "expiresAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      usedAt: Date | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly userId: FieldRef<"PasswordResetToken", 'String'>
    readonly tokenHash: FieldRef<"PasswordResetToken", 'String'>
    readonly usedAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
  }


  /**
   * Model NewsCategory
   */

  export type AggregateNewsCategory = {
    _count: NewsCategoryCountAggregateOutputType | null
    _min: NewsCategoryMinAggregateOutputType | null
    _max: NewsCategoryMaxAggregateOutputType | null
  }

  export type NewsCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type NewsCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type NewsCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type NewsCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type NewsCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type NewsCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type NewsCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategory to aggregate.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsCategories
    **/
    _count?: true | NewsCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsCategoryMaxAggregateInputType
  }

  export type GetNewsCategoryAggregateType<T extends NewsCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsCategory[P]>
      : GetScalarType<T[P], AggregateNewsCategory[P]>
  }




  export type NewsCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCategoryWhereInput
    orderBy?: NewsCategoryOrderByWithAggregationInput | NewsCategoryOrderByWithAggregationInput[]
    by: NewsCategoryScalarFieldEnum[] | NewsCategoryScalarFieldEnum
    having?: NewsCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCategoryCountAggregateInputType | true
    _min?: NewsCategoryMinAggregateInputType
    _max?: NewsCategoryMaxAggregateInputType
  }

  export type NewsCategoryGroupByOutputType = {
    id: string
    name: string
    _count: NewsCategoryCountAggregateOutputType | null
    _min: NewsCategoryMinAggregateOutputType | null
    _max: NewsCategoryMaxAggregateOutputType | null
  }

  type GetNewsCategoryGroupByPayload<T extends NewsCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], NewsCategoryGroupByOutputType[P]>
        }
      >
    >


  export type NewsCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articles?: boolean | NewsCategory$articlesArgs<ExtArgs>
    _count?: boolean | NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type NewsCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["newsCategory"]>
  export type NewsCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | NewsCategory$articlesArgs<ExtArgs>
    _count?: boolean | NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsCategory"
    objects: {
      articles: Prisma.$NewsArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["newsCategory"]>
    composites: {}
  }

  type NewsCategoryGetPayload<S extends boolean | null | undefined | NewsCategoryDefaultArgs> = $Result.GetResult<Prisma.$NewsCategoryPayload, S>

  type NewsCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCategoryCountAggregateInputType | true
    }

  export interface NewsCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsCategory'], meta: { name: 'NewsCategory' } }
    /**
     * Find zero or one NewsCategory that matches the filter.
     * @param {NewsCategoryFindUniqueArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsCategoryFindUniqueArgs>(args: SelectSubset<T, NewsCategoryFindUniqueArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsCategoryFindUniqueOrThrowArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindFirstArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsCategoryFindFirstArgs>(args?: SelectSubset<T, NewsCategoryFindFirstArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindFirstOrThrowArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsCategories
     * const newsCategories = await prisma.newsCategory.findMany()
     * 
     * // Get first 10 NewsCategories
     * const newsCategories = await prisma.newsCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsCategoryFindManyArgs>(args?: SelectSubset<T, NewsCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsCategory.
     * @param {NewsCategoryCreateArgs} args - Arguments to create a NewsCategory.
     * @example
     * // Create one NewsCategory
     * const NewsCategory = await prisma.newsCategory.create({
     *   data: {
     *     // ... data to create a NewsCategory
     *   }
     * })
     * 
     */
    create<T extends NewsCategoryCreateArgs>(args: SelectSubset<T, NewsCategoryCreateArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsCategories.
     * @param {NewsCategoryCreateManyArgs} args - Arguments to create many NewsCategories.
     * @example
     * // Create many NewsCategories
     * const newsCategory = await prisma.newsCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCategoryCreateManyArgs>(args?: SelectSubset<T, NewsCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsCategories and returns the data saved in the database.
     * @param {NewsCategoryCreateManyAndReturnArgs} args - Arguments to create many NewsCategories.
     * @example
     * // Create many NewsCategories
     * const newsCategory = await prisma.newsCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsCategories and only return the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsCategory.
     * @param {NewsCategoryDeleteArgs} args - Arguments to delete one NewsCategory.
     * @example
     * // Delete one NewsCategory
     * const NewsCategory = await prisma.newsCategory.delete({
     *   where: {
     *     // ... filter to delete one NewsCategory
     *   }
     * })
     * 
     */
    delete<T extends NewsCategoryDeleteArgs>(args: SelectSubset<T, NewsCategoryDeleteArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsCategory.
     * @param {NewsCategoryUpdateArgs} args - Arguments to update one NewsCategory.
     * @example
     * // Update one NewsCategory
     * const newsCategory = await prisma.newsCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsCategoryUpdateArgs>(args: SelectSubset<T, NewsCategoryUpdateArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsCategories.
     * @param {NewsCategoryDeleteManyArgs} args - Arguments to filter NewsCategories to delete.
     * @example
     * // Delete a few NewsCategories
     * const { count } = await prisma.newsCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsCategoryDeleteManyArgs>(args?: SelectSubset<T, NewsCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsCategories
     * const newsCategory = await prisma.newsCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsCategoryUpdateManyArgs>(args: SelectSubset<T, NewsCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsCategories and returns the data updated in the database.
     * @param {NewsCategoryUpdateManyAndReturnArgs} args - Arguments to update many NewsCategories.
     * @example
     * // Update many NewsCategories
     * const newsCategory = await prisma.newsCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsCategories and only return the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsCategory.
     * @param {NewsCategoryUpsertArgs} args - Arguments to update or create a NewsCategory.
     * @example
     * // Update or create a NewsCategory
     * const newsCategory = await prisma.newsCategory.upsert({
     *   create: {
     *     // ... data to create a NewsCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsCategory we want to update
     *   }
     * })
     */
    upsert<T extends NewsCategoryUpsertArgs>(args: SelectSubset<T, NewsCategoryUpsertArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryCountArgs} args - Arguments to filter NewsCategories to count.
     * @example
     * // Count the number of NewsCategories
     * const count = await prisma.newsCategory.count({
     *   where: {
     *     // ... the filter for the NewsCategories we want to count
     *   }
     * })
    **/
    count<T extends NewsCategoryCountArgs>(
      args?: Subset<T, NewsCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsCategoryAggregateArgs>(args: Subset<T, NewsCategoryAggregateArgs>): Prisma.PrismaPromise<GetNewsCategoryAggregateType<T>>

    /**
     * Group by NewsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsCategoryGroupByArgs['orderBy'] }
        : { orderBy?: NewsCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsCategory model
   */
  readonly fields: NewsCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends NewsCategory$articlesArgs<ExtArgs> = {}>(args?: Subset<T, NewsCategory$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsCategory model
   */
  interface NewsCategoryFieldRefs {
    readonly id: FieldRef<"NewsCategory", 'String'>
    readonly name: FieldRef<"NewsCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsCategory findUnique
   */
  export type NewsCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory findUniqueOrThrow
   */
  export type NewsCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory findFirst
   */
  export type NewsCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory findFirstOrThrow
   */
  export type NewsCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory findMany
   */
  export type NewsCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategories to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory create
   */
  export type NewsCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsCategory.
     */
    data: XOR<NewsCategoryCreateInput, NewsCategoryUncheckedCreateInput>
  }

  /**
   * NewsCategory createMany
   */
  export type NewsCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsCategories.
     */
    data: NewsCategoryCreateManyInput | NewsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategory createManyAndReturn
   */
  export type NewsCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many NewsCategories.
     */
    data: NewsCategoryCreateManyInput | NewsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategory update
   */
  export type NewsCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsCategory.
     */
    data: XOR<NewsCategoryUpdateInput, NewsCategoryUncheckedUpdateInput>
    /**
     * Choose, which NewsCategory to update.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory updateMany
   */
  export type NewsCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsCategories.
     */
    data: XOR<NewsCategoryUpdateManyMutationInput, NewsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewsCategories to update
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to update.
     */
    limit?: number
  }

  /**
   * NewsCategory updateManyAndReturn
   */
  export type NewsCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * The data used to update NewsCategories.
     */
    data: XOR<NewsCategoryUpdateManyMutationInput, NewsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewsCategories to update
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to update.
     */
    limit?: number
  }

  /**
   * NewsCategory upsert
   */
  export type NewsCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsCategory to update in case it exists.
     */
    where: NewsCategoryWhereUniqueInput
    /**
     * In case the NewsCategory found by the `where` argument doesn't exist, create a new NewsCategory with this data.
     */
    create: XOR<NewsCategoryCreateInput, NewsCategoryUncheckedCreateInput>
    /**
     * In case the NewsCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsCategoryUpdateInput, NewsCategoryUncheckedUpdateInput>
  }

  /**
   * NewsCategory delete
   */
  export type NewsCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter which NewsCategory to delete.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory deleteMany
   */
  export type NewsCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategories to delete
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to delete.
     */
    limit?: number
  }

  /**
   * NewsCategory.articles
   */
  export type NewsCategory$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    cursor?: NewsArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsCategory without action
   */
  export type NewsCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
  }


  /**
   * Model NewsTag
   */

  export type AggregateNewsTag = {
    _count: NewsTagCountAggregateOutputType | null
    _min: NewsTagMinAggregateOutputType | null
    _max: NewsTagMaxAggregateOutputType | null
  }

  export type NewsTagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type NewsTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type NewsTagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type NewsTagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type NewsTagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type NewsTagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type NewsTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTag to aggregate.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsTags
    **/
    _count?: true | NewsTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsTagMaxAggregateInputType
  }

  export type GetNewsTagAggregateType<T extends NewsTagAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsTag[P]>
      : GetScalarType<T[P], AggregateNewsTag[P]>
  }




  export type NewsTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagWhereInput
    orderBy?: NewsTagOrderByWithAggregationInput | NewsTagOrderByWithAggregationInput[]
    by: NewsTagScalarFieldEnum[] | NewsTagScalarFieldEnum
    having?: NewsTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsTagCountAggregateInputType | true
    _min?: NewsTagMinAggregateInputType
    _max?: NewsTagMaxAggregateInputType
  }

  export type NewsTagGroupByOutputType = {
    id: string
    name: string
    _count: NewsTagCountAggregateOutputType | null
    _min: NewsTagMinAggregateOutputType | null
    _max: NewsTagMaxAggregateOutputType | null
  }

  type GetNewsTagGroupByPayload<T extends NewsTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsTagGroupByOutputType[P]>
            : GetScalarType<T[P], NewsTagGroupByOutputType[P]>
        }
      >
    >


  export type NewsTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    articles?: boolean | NewsTag$articlesArgs<ExtArgs>
    _count?: boolean | NewsTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type NewsTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["newsTag"]>
  export type NewsTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | NewsTag$articlesArgs<ExtArgs>
    _count?: boolean | NewsTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsTag"
    objects: {
      articles: Prisma.$ArticleTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["newsTag"]>
    composites: {}
  }

  type NewsTagGetPayload<S extends boolean | null | undefined | NewsTagDefaultArgs> = $Result.GetResult<Prisma.$NewsTagPayload, S>

  type NewsTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsTagCountAggregateInputType | true
    }

  export interface NewsTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsTag'], meta: { name: 'NewsTag' } }
    /**
     * Find zero or one NewsTag that matches the filter.
     * @param {NewsTagFindUniqueArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsTagFindUniqueArgs>(args: SelectSubset<T, NewsTagFindUniqueArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsTagFindUniqueOrThrowArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsTagFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindFirstArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsTagFindFirstArgs>(args?: SelectSubset<T, NewsTagFindFirstArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindFirstOrThrowArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsTagFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsTags
     * const newsTags = await prisma.newsTag.findMany()
     * 
     * // Get first 10 NewsTags
     * const newsTags = await prisma.newsTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsTagWithIdOnly = await prisma.newsTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsTagFindManyArgs>(args?: SelectSubset<T, NewsTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsTag.
     * @param {NewsTagCreateArgs} args - Arguments to create a NewsTag.
     * @example
     * // Create one NewsTag
     * const NewsTag = await prisma.newsTag.create({
     *   data: {
     *     // ... data to create a NewsTag
     *   }
     * })
     * 
     */
    create<T extends NewsTagCreateArgs>(args: SelectSubset<T, NewsTagCreateArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsTags.
     * @param {NewsTagCreateManyArgs} args - Arguments to create many NewsTags.
     * @example
     * // Create many NewsTags
     * const newsTag = await prisma.newsTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsTagCreateManyArgs>(args?: SelectSubset<T, NewsTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsTags and returns the data saved in the database.
     * @param {NewsTagCreateManyAndReturnArgs} args - Arguments to create many NewsTags.
     * @example
     * // Create many NewsTags
     * const newsTag = await prisma.newsTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsTags and only return the `id`
     * const newsTagWithIdOnly = await prisma.newsTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsTagCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsTag.
     * @param {NewsTagDeleteArgs} args - Arguments to delete one NewsTag.
     * @example
     * // Delete one NewsTag
     * const NewsTag = await prisma.newsTag.delete({
     *   where: {
     *     // ... filter to delete one NewsTag
     *   }
     * })
     * 
     */
    delete<T extends NewsTagDeleteArgs>(args: SelectSubset<T, NewsTagDeleteArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsTag.
     * @param {NewsTagUpdateArgs} args - Arguments to update one NewsTag.
     * @example
     * // Update one NewsTag
     * const newsTag = await prisma.newsTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsTagUpdateArgs>(args: SelectSubset<T, NewsTagUpdateArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsTags.
     * @param {NewsTagDeleteManyArgs} args - Arguments to filter NewsTags to delete.
     * @example
     * // Delete a few NewsTags
     * const { count } = await prisma.newsTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsTagDeleteManyArgs>(args?: SelectSubset<T, NewsTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsTags
     * const newsTag = await prisma.newsTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsTagUpdateManyArgs>(args: SelectSubset<T, NewsTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTags and returns the data updated in the database.
     * @param {NewsTagUpdateManyAndReturnArgs} args - Arguments to update many NewsTags.
     * @example
     * // Update many NewsTags
     * const newsTag = await prisma.newsTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsTags and only return the `id`
     * const newsTagWithIdOnly = await prisma.newsTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsTagUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsTag.
     * @param {NewsTagUpsertArgs} args - Arguments to update or create a NewsTag.
     * @example
     * // Update or create a NewsTag
     * const newsTag = await prisma.newsTag.upsert({
     *   create: {
     *     // ... data to create a NewsTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsTag we want to update
     *   }
     * })
     */
    upsert<T extends NewsTagUpsertArgs>(args: SelectSubset<T, NewsTagUpsertArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagCountArgs} args - Arguments to filter NewsTags to count.
     * @example
     * // Count the number of NewsTags
     * const count = await prisma.newsTag.count({
     *   where: {
     *     // ... the filter for the NewsTags we want to count
     *   }
     * })
    **/
    count<T extends NewsTagCountArgs>(
      args?: Subset<T, NewsTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsTagAggregateArgs>(args: Subset<T, NewsTagAggregateArgs>): Prisma.PrismaPromise<GetNewsTagAggregateType<T>>

    /**
     * Group by NewsTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsTagGroupByArgs['orderBy'] }
        : { orderBy?: NewsTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsTag model
   */
  readonly fields: NewsTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends NewsTag$articlesArgs<ExtArgs> = {}>(args?: Subset<T, NewsTag$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsTag model
   */
  interface NewsTagFieldRefs {
    readonly id: FieldRef<"NewsTag", 'String'>
    readonly name: FieldRef<"NewsTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsTag findUnique
   */
  export type NewsTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag findUniqueOrThrow
   */
  export type NewsTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag findFirst
   */
  export type NewsTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag findFirstOrThrow
   */
  export type NewsTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag findMany
   */
  export type NewsTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTags to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag create
   */
  export type NewsTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsTag.
     */
    data: XOR<NewsTagCreateInput, NewsTagUncheckedCreateInput>
  }

  /**
   * NewsTag createMany
   */
  export type NewsTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsTags.
     */
    data: NewsTagCreateManyInput | NewsTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTag createManyAndReturn
   */
  export type NewsTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * The data used to create many NewsTags.
     */
    data: NewsTagCreateManyInput | NewsTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTag update
   */
  export type NewsTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsTag.
     */
    data: XOR<NewsTagUpdateInput, NewsTagUncheckedUpdateInput>
    /**
     * Choose, which NewsTag to update.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag updateMany
   */
  export type NewsTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsTags.
     */
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyInput>
    /**
     * Filter which NewsTags to update
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to update.
     */
    limit?: number
  }

  /**
   * NewsTag updateManyAndReturn
   */
  export type NewsTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * The data used to update NewsTags.
     */
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyInput>
    /**
     * Filter which NewsTags to update
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to update.
     */
    limit?: number
  }

  /**
   * NewsTag upsert
   */
  export type NewsTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsTag to update in case it exists.
     */
    where: NewsTagWhereUniqueInput
    /**
     * In case the NewsTag found by the `where` argument doesn't exist, create a new NewsTag with this data.
     */
    create: XOR<NewsTagCreateInput, NewsTagUncheckedCreateInput>
    /**
     * In case the NewsTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsTagUpdateInput, NewsTagUncheckedUpdateInput>
  }

  /**
   * NewsTag delete
   */
  export type NewsTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter which NewsTag to delete.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag deleteMany
   */
  export type NewsTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTags to delete
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to delete.
     */
    limit?: number
  }

  /**
   * NewsTag.articles
   */
  export type NewsTag$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    where?: ArticleTagWhereInput
    orderBy?: ArticleTagOrderByWithRelationInput | ArticleTagOrderByWithRelationInput[]
    cursor?: ArticleTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleTagScalarFieldEnum | ArticleTagScalarFieldEnum[]
  }

  /**
   * NewsTag without action
   */
  export type NewsTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
  }


  /**
   * Model ArticleTag
   */

  export type AggregateArticleTag = {
    _count: ArticleTagCountAggregateOutputType | null
    _min: ArticleTagMinAggregateOutputType | null
    _max: ArticleTagMaxAggregateOutputType | null
  }

  export type ArticleTagMinAggregateOutputType = {
    articleId: string | null
    tagId: string | null
  }

  export type ArticleTagMaxAggregateOutputType = {
    articleId: string | null
    tagId: string | null
  }

  export type ArticleTagCountAggregateOutputType = {
    articleId: number
    tagId: number
    _all: number
  }


  export type ArticleTagMinAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type ArticleTagMaxAggregateInputType = {
    articleId?: true
    tagId?: true
  }

  export type ArticleTagCountAggregateInputType = {
    articleId?: true
    tagId?: true
    _all?: true
  }

  export type ArticleTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleTag to aggregate.
     */
    where?: ArticleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleTags to fetch.
     */
    orderBy?: ArticleTagOrderByWithRelationInput | ArticleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleTags
    **/
    _count?: true | ArticleTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleTagMaxAggregateInputType
  }

  export type GetArticleTagAggregateType<T extends ArticleTagAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleTag[P]>
      : GetScalarType<T[P], AggregateArticleTag[P]>
  }




  export type ArticleTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleTagWhereInput
    orderBy?: ArticleTagOrderByWithAggregationInput | ArticleTagOrderByWithAggregationInput[]
    by: ArticleTagScalarFieldEnum[] | ArticleTagScalarFieldEnum
    having?: ArticleTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleTagCountAggregateInputType | true
    _min?: ArticleTagMinAggregateInputType
    _max?: ArticleTagMaxAggregateInputType
  }

  export type ArticleTagGroupByOutputType = {
    articleId: string
    tagId: string
    _count: ArticleTagCountAggregateOutputType | null
    _min: ArticleTagMinAggregateOutputType | null
    _max: ArticleTagMaxAggregateOutputType | null
  }

  type GetArticleTagGroupByPayload<T extends ArticleTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleTagGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleTagGroupByOutputType[P]>
        }
      >
    >


  export type ArticleTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    tagId?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleTag"]>

  export type ArticleTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    tagId?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleTag"]>

  export type ArticleTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    tagId?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleTag"]>

  export type ArticleTagSelectScalar = {
    articleId?: boolean
    tagId?: boolean
  }

  export type ArticleTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "tagId", ExtArgs["result"]["articleTag"]>
  export type ArticleTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }
  export type ArticleTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }
  export type ArticleTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tag?: boolean | NewsTagDefaultArgs<ExtArgs>
  }

  export type $ArticleTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleTag"
    objects: {
      article: Prisma.$NewsArticlePayload<ExtArgs>
      tag: Prisma.$NewsTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: string
      tagId: string
    }, ExtArgs["result"]["articleTag"]>
    composites: {}
  }

  type ArticleTagGetPayload<S extends boolean | null | undefined | ArticleTagDefaultArgs> = $Result.GetResult<Prisma.$ArticleTagPayload, S>

  type ArticleTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleTagCountAggregateInputType | true
    }

  export interface ArticleTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleTag'], meta: { name: 'ArticleTag' } }
    /**
     * Find zero or one ArticleTag that matches the filter.
     * @param {ArticleTagFindUniqueArgs} args - Arguments to find a ArticleTag
     * @example
     * // Get one ArticleTag
     * const articleTag = await prisma.articleTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleTagFindUniqueArgs>(args: SelectSubset<T, ArticleTagFindUniqueArgs<ExtArgs>>): Prisma__ArticleTagClient<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleTagFindUniqueOrThrowArgs} args - Arguments to find a ArticleTag
     * @example
     * // Get one ArticleTag
     * const articleTag = await prisma.articleTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleTagClient<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTagFindFirstArgs} args - Arguments to find a ArticleTag
     * @example
     * // Get one ArticleTag
     * const articleTag = await prisma.articleTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleTagFindFirstArgs>(args?: SelectSubset<T, ArticleTagFindFirstArgs<ExtArgs>>): Prisma__ArticleTagClient<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTagFindFirstOrThrowArgs} args - Arguments to find a ArticleTag
     * @example
     * // Get one ArticleTag
     * const articleTag = await prisma.articleTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleTagClient<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleTags
     * const articleTags = await prisma.articleTag.findMany()
     * 
     * // Get first 10 ArticleTags
     * const articleTags = await prisma.articleTag.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const articleTagWithArticleIdOnly = await prisma.articleTag.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends ArticleTagFindManyArgs>(args?: SelectSubset<T, ArticleTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleTag.
     * @param {ArticleTagCreateArgs} args - Arguments to create a ArticleTag.
     * @example
     * // Create one ArticleTag
     * const ArticleTag = await prisma.articleTag.create({
     *   data: {
     *     // ... data to create a ArticleTag
     *   }
     * })
     * 
     */
    create<T extends ArticleTagCreateArgs>(args: SelectSubset<T, ArticleTagCreateArgs<ExtArgs>>): Prisma__ArticleTagClient<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleTags.
     * @param {ArticleTagCreateManyArgs} args - Arguments to create many ArticleTags.
     * @example
     * // Create many ArticleTags
     * const articleTag = await prisma.articleTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleTagCreateManyArgs>(args?: SelectSubset<T, ArticleTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleTags and returns the data saved in the database.
     * @param {ArticleTagCreateManyAndReturnArgs} args - Arguments to create many ArticleTags.
     * @example
     * // Create many ArticleTags
     * const articleTag = await prisma.articleTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleTags and only return the `articleId`
     * const articleTagWithArticleIdOnly = await prisma.articleTag.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleTag.
     * @param {ArticleTagDeleteArgs} args - Arguments to delete one ArticleTag.
     * @example
     * // Delete one ArticleTag
     * const ArticleTag = await prisma.articleTag.delete({
     *   where: {
     *     // ... filter to delete one ArticleTag
     *   }
     * })
     * 
     */
    delete<T extends ArticleTagDeleteArgs>(args: SelectSubset<T, ArticleTagDeleteArgs<ExtArgs>>): Prisma__ArticleTagClient<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleTag.
     * @param {ArticleTagUpdateArgs} args - Arguments to update one ArticleTag.
     * @example
     * // Update one ArticleTag
     * const articleTag = await prisma.articleTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleTagUpdateArgs>(args: SelectSubset<T, ArticleTagUpdateArgs<ExtArgs>>): Prisma__ArticleTagClient<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleTags.
     * @param {ArticleTagDeleteManyArgs} args - Arguments to filter ArticleTags to delete.
     * @example
     * // Delete a few ArticleTags
     * const { count } = await prisma.articleTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleTagDeleteManyArgs>(args?: SelectSubset<T, ArticleTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleTags
     * const articleTag = await prisma.articleTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleTagUpdateManyArgs>(args: SelectSubset<T, ArticleTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleTags and returns the data updated in the database.
     * @param {ArticleTagUpdateManyAndReturnArgs} args - Arguments to update many ArticleTags.
     * @example
     * // Update many ArticleTags
     * const articleTag = await prisma.articleTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleTags and only return the `articleId`
     * const articleTagWithArticleIdOnly = await prisma.articleTag.updateManyAndReturn({
     *   select: { articleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleTag.
     * @param {ArticleTagUpsertArgs} args - Arguments to update or create a ArticleTag.
     * @example
     * // Update or create a ArticleTag
     * const articleTag = await prisma.articleTag.upsert({
     *   create: {
     *     // ... data to create a ArticleTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleTag we want to update
     *   }
     * })
     */
    upsert<T extends ArticleTagUpsertArgs>(args: SelectSubset<T, ArticleTagUpsertArgs<ExtArgs>>): Prisma__ArticleTagClient<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTagCountArgs} args - Arguments to filter ArticleTags to count.
     * @example
     * // Count the number of ArticleTags
     * const count = await prisma.articleTag.count({
     *   where: {
     *     // ... the filter for the ArticleTags we want to count
     *   }
     * })
    **/
    count<T extends ArticleTagCountArgs>(
      args?: Subset<T, ArticleTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleTagAggregateArgs>(args: Subset<T, ArticleTagAggregateArgs>): Prisma.PrismaPromise<GetArticleTagAggregateType<T>>

    /**
     * Group by ArticleTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleTagGroupByArgs['orderBy'] }
        : { orderBy?: ArticleTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleTag model
   */
  readonly fields: ArticleTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends NewsArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticleDefaultArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends NewsTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsTagDefaultArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleTag model
   */
  interface ArticleTagFieldRefs {
    readonly articleId: FieldRef<"ArticleTag", 'String'>
    readonly tagId: FieldRef<"ArticleTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArticleTag findUnique
   */
  export type ArticleTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTag to fetch.
     */
    where: ArticleTagWhereUniqueInput
  }

  /**
   * ArticleTag findUniqueOrThrow
   */
  export type ArticleTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTag to fetch.
     */
    where: ArticleTagWhereUniqueInput
  }

  /**
   * ArticleTag findFirst
   */
  export type ArticleTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTag to fetch.
     */
    where?: ArticleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleTags to fetch.
     */
    orderBy?: ArticleTagOrderByWithRelationInput | ArticleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleTags.
     */
    cursor?: ArticleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleTags.
     */
    distinct?: ArticleTagScalarFieldEnum | ArticleTagScalarFieldEnum[]
  }

  /**
   * ArticleTag findFirstOrThrow
   */
  export type ArticleTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTag to fetch.
     */
    where?: ArticleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleTags to fetch.
     */
    orderBy?: ArticleTagOrderByWithRelationInput | ArticleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleTags.
     */
    cursor?: ArticleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleTags.
     */
    distinct?: ArticleTagScalarFieldEnum | ArticleTagScalarFieldEnum[]
  }

  /**
   * ArticleTag findMany
   */
  export type ArticleTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTags to fetch.
     */
    where?: ArticleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleTags to fetch.
     */
    orderBy?: ArticleTagOrderByWithRelationInput | ArticleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleTags.
     */
    cursor?: ArticleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleTags.
     */
    skip?: number
    distinct?: ArticleTagScalarFieldEnum | ArticleTagScalarFieldEnum[]
  }

  /**
   * ArticleTag create
   */
  export type ArticleTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleTag.
     */
    data: XOR<ArticleTagCreateInput, ArticleTagUncheckedCreateInput>
  }

  /**
   * ArticleTag createMany
   */
  export type ArticleTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleTags.
     */
    data: ArticleTagCreateManyInput | ArticleTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleTag createManyAndReturn
   */
  export type ArticleTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleTags.
     */
    data: ArticleTagCreateManyInput | ArticleTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleTag update
   */
  export type ArticleTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleTag.
     */
    data: XOR<ArticleTagUpdateInput, ArticleTagUncheckedUpdateInput>
    /**
     * Choose, which ArticleTag to update.
     */
    where: ArticleTagWhereUniqueInput
  }

  /**
   * ArticleTag updateMany
   */
  export type ArticleTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleTags.
     */
    data: XOR<ArticleTagUpdateManyMutationInput, ArticleTagUncheckedUpdateManyInput>
    /**
     * Filter which ArticleTags to update
     */
    where?: ArticleTagWhereInput
    /**
     * Limit how many ArticleTags to update.
     */
    limit?: number
  }

  /**
   * ArticleTag updateManyAndReturn
   */
  export type ArticleTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * The data used to update ArticleTags.
     */
    data: XOR<ArticleTagUpdateManyMutationInput, ArticleTagUncheckedUpdateManyInput>
    /**
     * Filter which ArticleTags to update
     */
    where?: ArticleTagWhereInput
    /**
     * Limit how many ArticleTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleTag upsert
   */
  export type ArticleTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleTag to update in case it exists.
     */
    where: ArticleTagWhereUniqueInput
    /**
     * In case the ArticleTag found by the `where` argument doesn't exist, create a new ArticleTag with this data.
     */
    create: XOR<ArticleTagCreateInput, ArticleTagUncheckedCreateInput>
    /**
     * In case the ArticleTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleTagUpdateInput, ArticleTagUncheckedUpdateInput>
  }

  /**
   * ArticleTag delete
   */
  export type ArticleTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    /**
     * Filter which ArticleTag to delete.
     */
    where: ArticleTagWhereUniqueInput
  }

  /**
   * ArticleTag deleteMany
   */
  export type ArticleTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleTags to delete
     */
    where?: ArticleTagWhereInput
    /**
     * Limit how many ArticleTags to delete.
     */
    limit?: number
  }

  /**
   * ArticleTag without action
   */
  export type ArticleTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    categoryId: string | null
    excerpt: string | null
    body: string | null
    featuredImageUrl: string | null
    thumbnailUrl: string | null
    status: $Enums.ArticleStatus | null
    featured: boolean | null
    scheduledAt: Date | null
    publishedAt: Date | null
    createdById: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    categoryId: string | null
    excerpt: string | null
    body: string | null
    featuredImageUrl: string | null
    thumbnailUrl: string | null
    status: $Enums.ArticleStatus | null
    featured: boolean | null
    scheduledAt: Date | null
    publishedAt: Date | null
    createdById: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    categoryId: number
    excerpt: number
    body: number
    featuredImageUrl: number
    thumbnailUrl: number
    status: number
    featured: number
    scheduledAt: number
    publishedAt: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type NewsArticleMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    categoryId?: true
    excerpt?: true
    body?: true
    featuredImageUrl?: true
    thumbnailUrl?: true
    status?: true
    featured?: true
    scheduledAt?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    categoryId?: true
    excerpt?: true
    body?: true
    featuredImageUrl?: true
    thumbnailUrl?: true
    status?: true
    featured?: true
    scheduledAt?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    categoryId?: true
    excerpt?: true
    body?: true
    featuredImageUrl?: true
    thumbnailUrl?: true
    status?: true
    featured?: true
    scheduledAt?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: string
    slug: string
    title: string
    categoryId: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status: $Enums.ArticleStatus
    featured: boolean
    scheduledAt: Date | null
    publishedAt: Date | null
    createdById: string
    updatedById: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: NewsArticleCountAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    categoryId?: boolean
    excerpt?: boolean
    body?: boolean
    featuredImageUrl?: boolean
    thumbnailUrl?: boolean
    status?: boolean
    featured?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    tags?: boolean | NewsArticle$tagsArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    categoryId?: boolean
    excerpt?: boolean
    body?: boolean
    featuredImageUrl?: boolean
    thumbnailUrl?: boolean
    status?: boolean
    featured?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    categoryId?: boolean
    excerpt?: boolean
    body?: boolean
    featuredImageUrl?: boolean
    thumbnailUrl?: boolean
    status?: boolean
    featured?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    categoryId?: boolean
    excerpt?: boolean
    body?: boolean
    featuredImageUrl?: boolean
    thumbnailUrl?: boolean
    status?: boolean
    featured?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "categoryId" | "excerpt" | "body" | "featuredImageUrl" | "thumbnailUrl" | "status" | "featured" | "scheduledAt" | "publishedAt" | "createdById" | "updatedById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["newsArticle"]>
  export type NewsArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    tags?: boolean | NewsArticle$tagsArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
  }

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {
      category: Prisma.$NewsCategoryPayload<ExtArgs>
      tags: Prisma.$ArticleTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      categoryId: string
      excerpt: string
      body: string
      featuredImageUrl: string
      thumbnailUrl: string
      status: $Enums.ArticleStatus
      featured: boolean
      scheduledAt: Date | null
      publishedAt: Date | null
      createdById: string
      updatedById: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends NewsCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsCategoryDefaultArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends NewsArticle$tagsArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticle$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsArticle model
   */
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'String'>
    readonly slug: FieldRef<"NewsArticle", 'String'>
    readonly title: FieldRef<"NewsArticle", 'String'>
    readonly categoryId: FieldRef<"NewsArticle", 'String'>
    readonly excerpt: FieldRef<"NewsArticle", 'String'>
    readonly body: FieldRef<"NewsArticle", 'String'>
    readonly featuredImageUrl: FieldRef<"NewsArticle", 'String'>
    readonly thumbnailUrl: FieldRef<"NewsArticle", 'String'>
    readonly status: FieldRef<"NewsArticle", 'ArticleStatus'>
    readonly featured: FieldRef<"NewsArticle", 'Boolean'>
    readonly scheduledAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly publishedAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly createdById: FieldRef<"NewsArticle", 'String'>
    readonly updatedById: FieldRef<"NewsArticle", 'String'>
    readonly createdAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly deletedAt: FieldRef<"NewsArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle.tags
   */
  export type NewsArticle$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTag
     */
    select?: ArticleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTag
     */
    omit?: ArticleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTagInclude<ExtArgs> | null
    where?: ArticleTagWhereInput
    orderBy?: ArticleTagOrderByWithRelationInput | ArticleTagOrderByWithRelationInput[]
    cursor?: ArticleTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleTagScalarFieldEnum | ArticleTagScalarFieldEnum[]
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
  }


  /**
   * Model ProjectType
   */

  export type AggregateProjectType = {
    _count: ProjectTypeCountAggregateOutputType | null
    _min: ProjectTypeMinAggregateOutputType | null
    _max: ProjectTypeMaxAggregateOutputType | null
  }

  export type ProjectTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProjectTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProjectTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProjectTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProjectTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProjectTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProjectTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectType to aggregate.
     */
    where?: ProjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTypes to fetch.
     */
    orderBy?: ProjectTypeOrderByWithRelationInput | ProjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTypes
    **/
    _count?: true | ProjectTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTypeMaxAggregateInputType
  }

  export type GetProjectTypeAggregateType<T extends ProjectTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectType[P]>
      : GetScalarType<T[P], AggregateProjectType[P]>
  }




  export type ProjectTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTypeWhereInput
    orderBy?: ProjectTypeOrderByWithAggregationInput | ProjectTypeOrderByWithAggregationInput[]
    by: ProjectTypeScalarFieldEnum[] | ProjectTypeScalarFieldEnum
    having?: ProjectTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTypeCountAggregateInputType | true
    _min?: ProjectTypeMinAggregateInputType
    _max?: ProjectTypeMaxAggregateInputType
  }

  export type ProjectTypeGroupByOutputType = {
    id: string
    name: string
    _count: ProjectTypeCountAggregateOutputType | null
    _min: ProjectTypeMinAggregateOutputType | null
    _max: ProjectTypeMaxAggregateOutputType | null
  }

  type GetProjectTypeGroupByPayload<T extends ProjectTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projects?: boolean | ProjectType$projectsArgs<ExtArgs>
    _count?: boolean | ProjectTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectType"]>

  export type ProjectTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["projectType"]>

  export type ProjectTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["projectType"]>

  export type ProjectTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProjectTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["projectType"]>
  export type ProjectTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectType$projectsArgs<ExtArgs>
    _count?: boolean | ProjectTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectType"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["projectType"]>
    composites: {}
  }

  type ProjectTypeGetPayload<S extends boolean | null | undefined | ProjectTypeDefaultArgs> = $Result.GetResult<Prisma.$ProjectTypePayload, S>

  type ProjectTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTypeCountAggregateInputType | true
    }

  export interface ProjectTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectType'], meta: { name: 'ProjectType' } }
    /**
     * Find zero or one ProjectType that matches the filter.
     * @param {ProjectTypeFindUniqueArgs} args - Arguments to find a ProjectType
     * @example
     * // Get one ProjectType
     * const projectType = await prisma.projectType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTypeFindUniqueArgs>(args: SelectSubset<T, ProjectTypeFindUniqueArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTypeFindUniqueOrThrowArgs} args - Arguments to find a ProjectType
     * @example
     * // Get one ProjectType
     * const projectType = await prisma.projectType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeFindFirstArgs} args - Arguments to find a ProjectType
     * @example
     * // Get one ProjectType
     * const projectType = await prisma.projectType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTypeFindFirstArgs>(args?: SelectSubset<T, ProjectTypeFindFirstArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeFindFirstOrThrowArgs} args - Arguments to find a ProjectType
     * @example
     * // Get one ProjectType
     * const projectType = await prisma.projectType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTypes
     * const projectTypes = await prisma.projectType.findMany()
     * 
     * // Get first 10 ProjectTypes
     * const projectTypes = await prisma.projectType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTypeWithIdOnly = await prisma.projectType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTypeFindManyArgs>(args?: SelectSubset<T, ProjectTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectType.
     * @param {ProjectTypeCreateArgs} args - Arguments to create a ProjectType.
     * @example
     * // Create one ProjectType
     * const ProjectType = await prisma.projectType.create({
     *   data: {
     *     // ... data to create a ProjectType
     *   }
     * })
     * 
     */
    create<T extends ProjectTypeCreateArgs>(args: SelectSubset<T, ProjectTypeCreateArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTypes.
     * @param {ProjectTypeCreateManyArgs} args - Arguments to create many ProjectTypes.
     * @example
     * // Create many ProjectTypes
     * const projectType = await prisma.projectType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTypeCreateManyArgs>(args?: SelectSubset<T, ProjectTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTypes and returns the data saved in the database.
     * @param {ProjectTypeCreateManyAndReturnArgs} args - Arguments to create many ProjectTypes.
     * @example
     * // Create many ProjectTypes
     * const projectType = await prisma.projectType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTypes and only return the `id`
     * const projectTypeWithIdOnly = await prisma.projectType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectType.
     * @param {ProjectTypeDeleteArgs} args - Arguments to delete one ProjectType.
     * @example
     * // Delete one ProjectType
     * const ProjectType = await prisma.projectType.delete({
     *   where: {
     *     // ... filter to delete one ProjectType
     *   }
     * })
     * 
     */
    delete<T extends ProjectTypeDeleteArgs>(args: SelectSubset<T, ProjectTypeDeleteArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectType.
     * @param {ProjectTypeUpdateArgs} args - Arguments to update one ProjectType.
     * @example
     * // Update one ProjectType
     * const projectType = await prisma.projectType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTypeUpdateArgs>(args: SelectSubset<T, ProjectTypeUpdateArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTypes.
     * @param {ProjectTypeDeleteManyArgs} args - Arguments to filter ProjectTypes to delete.
     * @example
     * // Delete a few ProjectTypes
     * const { count } = await prisma.projectType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTypeDeleteManyArgs>(args?: SelectSubset<T, ProjectTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTypes
     * const projectType = await prisma.projectType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTypeUpdateManyArgs>(args: SelectSubset<T, ProjectTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTypes and returns the data updated in the database.
     * @param {ProjectTypeUpdateManyAndReturnArgs} args - Arguments to update many ProjectTypes.
     * @example
     * // Update many ProjectTypes
     * const projectType = await prisma.projectType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTypes and only return the `id`
     * const projectTypeWithIdOnly = await prisma.projectType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectType.
     * @param {ProjectTypeUpsertArgs} args - Arguments to update or create a ProjectType.
     * @example
     * // Update or create a ProjectType
     * const projectType = await prisma.projectType.upsert({
     *   create: {
     *     // ... data to create a ProjectType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectType we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTypeUpsertArgs>(args: SelectSubset<T, ProjectTypeUpsertArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeCountArgs} args - Arguments to filter ProjectTypes to count.
     * @example
     * // Count the number of ProjectTypes
     * const count = await prisma.projectType.count({
     *   where: {
     *     // ... the filter for the ProjectTypes we want to count
     *   }
     * })
    **/
    count<T extends ProjectTypeCountArgs>(
      args?: Subset<T, ProjectTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTypeAggregateArgs>(args: Subset<T, ProjectTypeAggregateArgs>): Prisma.PrismaPromise<GetProjectTypeAggregateType<T>>

    /**
     * Group by ProjectType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectType model
   */
  readonly fields: ProjectTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends ProjectType$projectsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectType$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectType model
   */
  interface ProjectTypeFieldRefs {
    readonly id: FieldRef<"ProjectType", 'String'>
    readonly name: FieldRef<"ProjectType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectType findUnique
   */
  export type ProjectTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectType to fetch.
     */
    where: ProjectTypeWhereUniqueInput
  }

  /**
   * ProjectType findUniqueOrThrow
   */
  export type ProjectTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectType to fetch.
     */
    where: ProjectTypeWhereUniqueInput
  }

  /**
   * ProjectType findFirst
   */
  export type ProjectTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectType to fetch.
     */
    where?: ProjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTypes to fetch.
     */
    orderBy?: ProjectTypeOrderByWithRelationInput | ProjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTypes.
     */
    cursor?: ProjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTypes.
     */
    distinct?: ProjectTypeScalarFieldEnum | ProjectTypeScalarFieldEnum[]
  }

  /**
   * ProjectType findFirstOrThrow
   */
  export type ProjectTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectType to fetch.
     */
    where?: ProjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTypes to fetch.
     */
    orderBy?: ProjectTypeOrderByWithRelationInput | ProjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTypes.
     */
    cursor?: ProjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTypes.
     */
    distinct?: ProjectTypeScalarFieldEnum | ProjectTypeScalarFieldEnum[]
  }

  /**
   * ProjectType findMany
   */
  export type ProjectTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTypes to fetch.
     */
    where?: ProjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTypes to fetch.
     */
    orderBy?: ProjectTypeOrderByWithRelationInput | ProjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTypes.
     */
    cursor?: ProjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTypes.
     */
    skip?: number
    distinct?: ProjectTypeScalarFieldEnum | ProjectTypeScalarFieldEnum[]
  }

  /**
   * ProjectType create
   */
  export type ProjectTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectType.
     */
    data: XOR<ProjectTypeCreateInput, ProjectTypeUncheckedCreateInput>
  }

  /**
   * ProjectType createMany
   */
  export type ProjectTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTypes.
     */
    data: ProjectTypeCreateManyInput | ProjectTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectType createManyAndReturn
   */
  export type ProjectTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTypes.
     */
    data: ProjectTypeCreateManyInput | ProjectTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectType update
   */
  export type ProjectTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectType.
     */
    data: XOR<ProjectTypeUpdateInput, ProjectTypeUncheckedUpdateInput>
    /**
     * Choose, which ProjectType to update.
     */
    where: ProjectTypeWhereUniqueInput
  }

  /**
   * ProjectType updateMany
   */
  export type ProjectTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTypes.
     */
    data: XOR<ProjectTypeUpdateManyMutationInput, ProjectTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTypes to update
     */
    where?: ProjectTypeWhereInput
    /**
     * Limit how many ProjectTypes to update.
     */
    limit?: number
  }

  /**
   * ProjectType updateManyAndReturn
   */
  export type ProjectTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTypes.
     */
    data: XOR<ProjectTypeUpdateManyMutationInput, ProjectTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTypes to update
     */
    where?: ProjectTypeWhereInput
    /**
     * Limit how many ProjectTypes to update.
     */
    limit?: number
  }

  /**
   * ProjectType upsert
   */
  export type ProjectTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectType to update in case it exists.
     */
    where: ProjectTypeWhereUniqueInput
    /**
     * In case the ProjectType found by the `where` argument doesn't exist, create a new ProjectType with this data.
     */
    create: XOR<ProjectTypeCreateInput, ProjectTypeUncheckedCreateInput>
    /**
     * In case the ProjectType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTypeUpdateInput, ProjectTypeUncheckedUpdateInput>
  }

  /**
   * ProjectType delete
   */
  export type ProjectTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter which ProjectType to delete.
     */
    where: ProjectTypeWhereUniqueInput
  }

  /**
   * ProjectType deleteMany
   */
  export type ProjectTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTypes to delete
     */
    where?: ProjectTypeWhereInput
    /**
     * Limit how many ProjectTypes to delete.
     */
    limit?: number
  }

  /**
   * ProjectType.projects
   */
  export type ProjectType$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * ProjectType without action
   */
  export type ProjectTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    year: number | null
    progress: number | null
    beneficiaries: number | null
  }

  export type ProjectSumAggregateOutputType = {
    year: number | null
    progress: number | null
    beneficiaries: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    lga: string | null
    community: string | null
    typeId: string | null
    status: $Enums.ProjectStatus | null
    year: number | null
    progress: number | null
    beneficiaries: number | null
    description: string | null
    featuredImageUrl: string | null
    thumbnailUrl: string | null
    featured: boolean | null
    completionDate: Date | null
    createdById: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    lga: string | null
    community: string | null
    typeId: string | null
    status: $Enums.ProjectStatus | null
    year: number | null
    progress: number | null
    beneficiaries: number | null
    description: string | null
    featuredImageUrl: string | null
    thumbnailUrl: string | null
    featured: boolean | null
    completionDate: Date | null
    createdById: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    lga: number
    community: number
    typeId: number
    status: number
    year: number
    progress: number
    beneficiaries: number
    description: number
    featuredImageUrl: number
    thumbnailUrl: number
    featured: number
    completionDate: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    year?: true
    progress?: true
    beneficiaries?: true
  }

  export type ProjectSumAggregateInputType = {
    year?: true
    progress?: true
    beneficiaries?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    lga?: true
    community?: true
    typeId?: true
    status?: true
    year?: true
    progress?: true
    beneficiaries?: true
    description?: true
    featuredImageUrl?: true
    thumbnailUrl?: true
    featured?: true
    completionDate?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    lga?: true
    community?: true
    typeId?: true
    status?: true
    year?: true
    progress?: true
    beneficiaries?: true
    description?: true
    featuredImageUrl?: true
    thumbnailUrl?: true
    featured?: true
    completionDate?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    lga?: true
    community?: true
    typeId?: true
    status?: true
    year?: true
    progress?: true
    beneficiaries?: true
    description?: true
    featuredImageUrl?: true
    thumbnailUrl?: true
    featured?: true
    completionDate?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    lga: string
    community: string
    typeId: string
    status: $Enums.ProjectStatus
    year: number
    progress: number
    beneficiaries: number
    description: string
    featuredImageUrl: string
    thumbnailUrl: string
    featured: boolean
    completionDate: Date | null
    createdById: string
    updatedById: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    lga?: boolean
    community?: boolean
    typeId?: boolean
    status?: boolean
    year?: boolean
    progress?: boolean
    beneficiaries?: boolean
    description?: boolean
    featuredImageUrl?: boolean
    thumbnailUrl?: boolean
    featured?: boolean
    completionDate?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    projectType?: boolean | ProjectTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    lga?: boolean
    community?: boolean
    typeId?: boolean
    status?: boolean
    year?: boolean
    progress?: boolean
    beneficiaries?: boolean
    description?: boolean
    featuredImageUrl?: boolean
    thumbnailUrl?: boolean
    featured?: boolean
    completionDate?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    projectType?: boolean | ProjectTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    lga?: boolean
    community?: boolean
    typeId?: boolean
    status?: boolean
    year?: boolean
    progress?: boolean
    beneficiaries?: boolean
    description?: boolean
    featuredImageUrl?: boolean
    thumbnailUrl?: boolean
    featured?: boolean
    completionDate?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    projectType?: boolean | ProjectTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    lga?: boolean
    community?: boolean
    typeId?: boolean
    status?: boolean
    year?: boolean
    progress?: boolean
    beneficiaries?: boolean
    description?: boolean
    featuredImageUrl?: boolean
    thumbnailUrl?: boolean
    featured?: boolean
    completionDate?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "lga" | "community" | "typeId" | "status" | "year" | "progress" | "beneficiaries" | "description" | "featuredImageUrl" | "thumbnailUrl" | "featured" | "completionDate" | "createdById" | "updatedById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectType?: boolean | ProjectTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectType?: boolean | ProjectTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectType?: boolean | ProjectTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      projectType: Prisma.$ProjectTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      lga: string
      community: string
      typeId: string
      status: $Enums.ProjectStatus
      year: number
      progress: number
      beneficiaries: number
      description: string
      featuredImageUrl: string
      thumbnailUrl: string
      featured: boolean
      completionDate: Date | null
      createdById: string
      updatedById: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectType<T extends ProjectTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectTypeDefaultArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly lga: FieldRef<"Project", 'String'>
    readonly community: FieldRef<"Project", 'String'>
    readonly typeId: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly year: FieldRef<"Project", 'Int'>
    readonly progress: FieldRef<"Project", 'Int'>
    readonly beneficiaries: FieldRef<"Project", 'Int'>
    readonly description: FieldRef<"Project", 'String'>
    readonly featuredImageUrl: FieldRef<"Project", 'String'>
    readonly thumbnailUrl: FieldRef<"Project", 'String'>
    readonly featured: FieldRef<"Project", 'Boolean'>
    readonly completionDate: FieldRef<"Project", 'DateTime'>
    readonly createdById: FieldRef<"Project", 'String'>
    readonly updatedById: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly deletedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model GalleryCategory
   */

  export type AggregateGalleryCategory = {
    _count: GalleryCategoryCountAggregateOutputType | null
    _min: GalleryCategoryMinAggregateOutputType | null
    _max: GalleryCategoryMaxAggregateOutputType | null
  }

  export type GalleryCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GalleryCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GalleryCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GalleryCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GalleryCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GalleryCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GalleryCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryCategory to aggregate.
     */
    where?: GalleryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryCategories to fetch.
     */
    orderBy?: GalleryCategoryOrderByWithRelationInput | GalleryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryCategories
    **/
    _count?: true | GalleryCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryCategoryMaxAggregateInputType
  }

  export type GetGalleryCategoryAggregateType<T extends GalleryCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryCategory[P]>
      : GetScalarType<T[P], AggregateGalleryCategory[P]>
  }




  export type GalleryCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryCategoryWhereInput
    orderBy?: GalleryCategoryOrderByWithAggregationInput | GalleryCategoryOrderByWithAggregationInput[]
    by: GalleryCategoryScalarFieldEnum[] | GalleryCategoryScalarFieldEnum
    having?: GalleryCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCategoryCountAggregateInputType | true
    _min?: GalleryCategoryMinAggregateInputType
    _max?: GalleryCategoryMaxAggregateInputType
  }

  export type GalleryCategoryGroupByOutputType = {
    id: string
    name: string
    _count: GalleryCategoryCountAggregateOutputType | null
    _min: GalleryCategoryMinAggregateOutputType | null
    _max: GalleryCategoryMaxAggregateOutputType | null
  }

  type GetGalleryCategoryGroupByPayload<T extends GalleryCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryCategoryGroupByOutputType[P]>
        }
      >
    >


  export type GalleryCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    items?: boolean | GalleryCategory$itemsArgs<ExtArgs>
    _count?: boolean | GalleryCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryCategory"]>

  export type GalleryCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["galleryCategory"]>

  export type GalleryCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["galleryCategory"]>

  export type GalleryCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GalleryCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["galleryCategory"]>
  export type GalleryCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | GalleryCategory$itemsArgs<ExtArgs>
    _count?: boolean | GalleryCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GalleryCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GalleryCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GalleryCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryCategory"
    objects: {
      items: Prisma.$GalleryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["galleryCategory"]>
    composites: {}
  }

  type GalleryCategoryGetPayload<S extends boolean | null | undefined | GalleryCategoryDefaultArgs> = $Result.GetResult<Prisma.$GalleryCategoryPayload, S>

  type GalleryCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryCategoryCountAggregateInputType | true
    }

  export interface GalleryCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryCategory'], meta: { name: 'GalleryCategory' } }
    /**
     * Find zero or one GalleryCategory that matches the filter.
     * @param {GalleryCategoryFindUniqueArgs} args - Arguments to find a GalleryCategory
     * @example
     * // Get one GalleryCategory
     * const galleryCategory = await prisma.galleryCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryCategoryFindUniqueArgs>(args: SelectSubset<T, GalleryCategoryFindUniqueArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryCategoryFindUniqueOrThrowArgs} args - Arguments to find a GalleryCategory
     * @example
     * // Get one GalleryCategory
     * const galleryCategory = await prisma.galleryCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCategoryFindFirstArgs} args - Arguments to find a GalleryCategory
     * @example
     * // Get one GalleryCategory
     * const galleryCategory = await prisma.galleryCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryCategoryFindFirstArgs>(args?: SelectSubset<T, GalleryCategoryFindFirstArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCategoryFindFirstOrThrowArgs} args - Arguments to find a GalleryCategory
     * @example
     * // Get one GalleryCategory
     * const galleryCategory = await prisma.galleryCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryCategories
     * const galleryCategories = await prisma.galleryCategory.findMany()
     * 
     * // Get first 10 GalleryCategories
     * const galleryCategories = await prisma.galleryCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryCategoryWithIdOnly = await prisma.galleryCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryCategoryFindManyArgs>(args?: SelectSubset<T, GalleryCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryCategory.
     * @param {GalleryCategoryCreateArgs} args - Arguments to create a GalleryCategory.
     * @example
     * // Create one GalleryCategory
     * const GalleryCategory = await prisma.galleryCategory.create({
     *   data: {
     *     // ... data to create a GalleryCategory
     *   }
     * })
     * 
     */
    create<T extends GalleryCategoryCreateArgs>(args: SelectSubset<T, GalleryCategoryCreateArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryCategories.
     * @param {GalleryCategoryCreateManyArgs} args - Arguments to create many GalleryCategories.
     * @example
     * // Create many GalleryCategories
     * const galleryCategory = await prisma.galleryCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryCategoryCreateManyArgs>(args?: SelectSubset<T, GalleryCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryCategories and returns the data saved in the database.
     * @param {GalleryCategoryCreateManyAndReturnArgs} args - Arguments to create many GalleryCategories.
     * @example
     * // Create many GalleryCategories
     * const galleryCategory = await prisma.galleryCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryCategories and only return the `id`
     * const galleryCategoryWithIdOnly = await prisma.galleryCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryCategory.
     * @param {GalleryCategoryDeleteArgs} args - Arguments to delete one GalleryCategory.
     * @example
     * // Delete one GalleryCategory
     * const GalleryCategory = await prisma.galleryCategory.delete({
     *   where: {
     *     // ... filter to delete one GalleryCategory
     *   }
     * })
     * 
     */
    delete<T extends GalleryCategoryDeleteArgs>(args: SelectSubset<T, GalleryCategoryDeleteArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryCategory.
     * @param {GalleryCategoryUpdateArgs} args - Arguments to update one GalleryCategory.
     * @example
     * // Update one GalleryCategory
     * const galleryCategory = await prisma.galleryCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryCategoryUpdateArgs>(args: SelectSubset<T, GalleryCategoryUpdateArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryCategories.
     * @param {GalleryCategoryDeleteManyArgs} args - Arguments to filter GalleryCategories to delete.
     * @example
     * // Delete a few GalleryCategories
     * const { count } = await prisma.galleryCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryCategoryDeleteManyArgs>(args?: SelectSubset<T, GalleryCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryCategories
     * const galleryCategory = await prisma.galleryCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryCategoryUpdateManyArgs>(args: SelectSubset<T, GalleryCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryCategories and returns the data updated in the database.
     * @param {GalleryCategoryUpdateManyAndReturnArgs} args - Arguments to update many GalleryCategories.
     * @example
     * // Update many GalleryCategories
     * const galleryCategory = await prisma.galleryCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryCategories and only return the `id`
     * const galleryCategoryWithIdOnly = await prisma.galleryCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryCategory.
     * @param {GalleryCategoryUpsertArgs} args - Arguments to update or create a GalleryCategory.
     * @example
     * // Update or create a GalleryCategory
     * const galleryCategory = await prisma.galleryCategory.upsert({
     *   create: {
     *     // ... data to create a GalleryCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryCategory we want to update
     *   }
     * })
     */
    upsert<T extends GalleryCategoryUpsertArgs>(args: SelectSubset<T, GalleryCategoryUpsertArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCategoryCountArgs} args - Arguments to filter GalleryCategories to count.
     * @example
     * // Count the number of GalleryCategories
     * const count = await prisma.galleryCategory.count({
     *   where: {
     *     // ... the filter for the GalleryCategories we want to count
     *   }
     * })
    **/
    count<T extends GalleryCategoryCountArgs>(
      args?: Subset<T, GalleryCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryCategoryAggregateArgs>(args: Subset<T, GalleryCategoryAggregateArgs>): Prisma.PrismaPromise<GetGalleryCategoryAggregateType<T>>

    /**
     * Group by GalleryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryCategoryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryCategory model
   */
  readonly fields: GalleryCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends GalleryCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, GalleryCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryCategory model
   */
  interface GalleryCategoryFieldRefs {
    readonly id: FieldRef<"GalleryCategory", 'String'>
    readonly name: FieldRef<"GalleryCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GalleryCategory findUnique
   */
  export type GalleryCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GalleryCategory to fetch.
     */
    where: GalleryCategoryWhereUniqueInput
  }

  /**
   * GalleryCategory findUniqueOrThrow
   */
  export type GalleryCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GalleryCategory to fetch.
     */
    where: GalleryCategoryWhereUniqueInput
  }

  /**
   * GalleryCategory findFirst
   */
  export type GalleryCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GalleryCategory to fetch.
     */
    where?: GalleryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryCategories to fetch.
     */
    orderBy?: GalleryCategoryOrderByWithRelationInput | GalleryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryCategories.
     */
    cursor?: GalleryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryCategories.
     */
    distinct?: GalleryCategoryScalarFieldEnum | GalleryCategoryScalarFieldEnum[]
  }

  /**
   * GalleryCategory findFirstOrThrow
   */
  export type GalleryCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GalleryCategory to fetch.
     */
    where?: GalleryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryCategories to fetch.
     */
    orderBy?: GalleryCategoryOrderByWithRelationInput | GalleryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryCategories.
     */
    cursor?: GalleryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryCategories.
     */
    distinct?: GalleryCategoryScalarFieldEnum | GalleryCategoryScalarFieldEnum[]
  }

  /**
   * GalleryCategory findMany
   */
  export type GalleryCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which GalleryCategories to fetch.
     */
    where?: GalleryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryCategories to fetch.
     */
    orderBy?: GalleryCategoryOrderByWithRelationInput | GalleryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryCategories.
     */
    cursor?: GalleryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryCategories.
     */
    skip?: number
    distinct?: GalleryCategoryScalarFieldEnum | GalleryCategoryScalarFieldEnum[]
  }

  /**
   * GalleryCategory create
   */
  export type GalleryCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryCategory.
     */
    data: XOR<GalleryCategoryCreateInput, GalleryCategoryUncheckedCreateInput>
  }

  /**
   * GalleryCategory createMany
   */
  export type GalleryCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryCategories.
     */
    data: GalleryCategoryCreateManyInput | GalleryCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryCategory createManyAndReturn
   */
  export type GalleryCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryCategories.
     */
    data: GalleryCategoryCreateManyInput | GalleryCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryCategory update
   */
  export type GalleryCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryCategory.
     */
    data: XOR<GalleryCategoryUpdateInput, GalleryCategoryUncheckedUpdateInput>
    /**
     * Choose, which GalleryCategory to update.
     */
    where: GalleryCategoryWhereUniqueInput
  }

  /**
   * GalleryCategory updateMany
   */
  export type GalleryCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryCategories.
     */
    data: XOR<GalleryCategoryUpdateManyMutationInput, GalleryCategoryUncheckedUpdateManyInput>
    /**
     * Filter which GalleryCategories to update
     */
    where?: GalleryCategoryWhereInput
    /**
     * Limit how many GalleryCategories to update.
     */
    limit?: number
  }

  /**
   * GalleryCategory updateManyAndReturn
   */
  export type GalleryCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * The data used to update GalleryCategories.
     */
    data: XOR<GalleryCategoryUpdateManyMutationInput, GalleryCategoryUncheckedUpdateManyInput>
    /**
     * Filter which GalleryCategories to update
     */
    where?: GalleryCategoryWhereInput
    /**
     * Limit how many GalleryCategories to update.
     */
    limit?: number
  }

  /**
   * GalleryCategory upsert
   */
  export type GalleryCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryCategory to update in case it exists.
     */
    where: GalleryCategoryWhereUniqueInput
    /**
     * In case the GalleryCategory found by the `where` argument doesn't exist, create a new GalleryCategory with this data.
     */
    create: XOR<GalleryCategoryCreateInput, GalleryCategoryUncheckedCreateInput>
    /**
     * In case the GalleryCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryCategoryUpdateInput, GalleryCategoryUncheckedUpdateInput>
  }

  /**
   * GalleryCategory delete
   */
  export type GalleryCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
    /**
     * Filter which GalleryCategory to delete.
     */
    where: GalleryCategoryWhereUniqueInput
  }

  /**
   * GalleryCategory deleteMany
   */
  export type GalleryCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryCategories to delete
     */
    where?: GalleryCategoryWhereInput
    /**
     * Limit how many GalleryCategories to delete.
     */
    limit?: number
  }

  /**
   * GalleryCategory.items
   */
  export type GalleryCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    where?: GalleryItemWhereInput
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    cursor?: GalleryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryCategory without action
   */
  export type GalleryCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCategory
     */
    select?: GalleryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryCategory
     */
    omit?: GalleryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryCategoryInclude<ExtArgs> | null
  }


  /**
   * Model GalleryItem
   */

  export type AggregateGalleryItem = {
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  export type GalleryItemAvgAggregateOutputType = {
    year: number | null
    displayOrder: number | null
  }

  export type GalleryItemSumAggregateOutputType = {
    year: number | null
    displayOrder: number | null
  }

  export type GalleryItemMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    categoryId: string | null
    caption: string | null
    location: string | null
    year: number | null
    description: string | null
    imageUrl: string | null
    optimisedUrl: string | null
    thumbnailUrl: string | null
    published: boolean | null
    featured: boolean | null
    displayOrder: number | null
    createdById: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GalleryItemMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    categoryId: string | null
    caption: string | null
    location: string | null
    year: number | null
    description: string | null
    imageUrl: string | null
    optimisedUrl: string | null
    thumbnailUrl: string | null
    published: boolean | null
    featured: boolean | null
    displayOrder: number | null
    createdById: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GalleryItemCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    categoryId: number
    caption: number
    location: number
    year: number
    description: number
    imageUrl: number
    optimisedUrl: number
    thumbnailUrl: number
    published: number
    featured: number
    displayOrder: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type GalleryItemAvgAggregateInputType = {
    year?: true
    displayOrder?: true
  }

  export type GalleryItemSumAggregateInputType = {
    year?: true
    displayOrder?: true
  }

  export type GalleryItemMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    categoryId?: true
    caption?: true
    location?: true
    year?: true
    description?: true
    imageUrl?: true
    optimisedUrl?: true
    thumbnailUrl?: true
    published?: true
    featured?: true
    displayOrder?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GalleryItemMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    categoryId?: true
    caption?: true
    location?: true
    year?: true
    description?: true
    imageUrl?: true
    optimisedUrl?: true
    thumbnailUrl?: true
    published?: true
    featured?: true
    displayOrder?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GalleryItemCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    categoryId?: true
    caption?: true
    location?: true
    year?: true
    description?: true
    imageUrl?: true
    optimisedUrl?: true
    thumbnailUrl?: true
    published?: true
    featured?: true
    displayOrder?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type GalleryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItem to aggregate.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryItems
    **/
    _count?: true | GalleryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GetGalleryItemAggregateType<T extends GalleryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryItem[P]>
      : GetScalarType<T[P], AggregateGalleryItem[P]>
  }




  export type GalleryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryItemWhereInput
    orderBy?: GalleryItemOrderByWithAggregationInput | GalleryItemOrderByWithAggregationInput[]
    by: GalleryItemScalarFieldEnum[] | GalleryItemScalarFieldEnum
    having?: GalleryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryItemCountAggregateInputType | true
    _avg?: GalleryItemAvgAggregateInputType
    _sum?: GalleryItemSumAggregateInputType
    _min?: GalleryItemMinAggregateInputType
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GalleryItemGroupByOutputType = {
    id: string
    slug: string
    title: string
    categoryId: string
    caption: string
    location: string
    year: number
    description: string
    imageUrl: string
    optimisedUrl: string
    thumbnailUrl: string
    published: boolean
    featured: boolean
    displayOrder: number
    createdById: string
    updatedById: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  type GetGalleryItemGroupByPayload<T extends GalleryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
        }
      >
    >


  export type GalleryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    categoryId?: boolean
    caption?: boolean
    location?: boolean
    year?: boolean
    description?: boolean
    imageUrl?: boolean
    optimisedUrl?: boolean
    thumbnailUrl?: boolean
    published?: boolean
    featured?: boolean
    displayOrder?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | GalleryCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    categoryId?: boolean
    caption?: boolean
    location?: boolean
    year?: boolean
    description?: boolean
    imageUrl?: boolean
    optimisedUrl?: boolean
    thumbnailUrl?: boolean
    published?: boolean
    featured?: boolean
    displayOrder?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | GalleryCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    categoryId?: boolean
    caption?: boolean
    location?: boolean
    year?: boolean
    description?: boolean
    imageUrl?: boolean
    optimisedUrl?: boolean
    thumbnailUrl?: boolean
    published?: boolean
    featured?: boolean
    displayOrder?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | GalleryCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    categoryId?: boolean
    caption?: boolean
    location?: boolean
    year?: boolean
    description?: boolean
    imageUrl?: boolean
    optimisedUrl?: boolean
    thumbnailUrl?: boolean
    published?: boolean
    featured?: boolean
    displayOrder?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type GalleryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "categoryId" | "caption" | "location" | "year" | "description" | "imageUrl" | "optimisedUrl" | "thumbnailUrl" | "published" | "featured" | "displayOrder" | "createdById" | "updatedById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["galleryItem"]>
  export type GalleryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | GalleryCategoryDefaultArgs<ExtArgs>
  }
  export type GalleryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | GalleryCategoryDefaultArgs<ExtArgs>
  }
  export type GalleryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | GalleryCategoryDefaultArgs<ExtArgs>
  }

  export type $GalleryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryItem"
    objects: {
      category: Prisma.$GalleryCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      categoryId: string
      caption: string
      location: string
      year: number
      description: string
      imageUrl: string
      optimisedUrl: string
      thumbnailUrl: string
      published: boolean
      featured: boolean
      displayOrder: number
      createdById: string
      updatedById: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["galleryItem"]>
    composites: {}
  }

  type GalleryItemGetPayload<S extends boolean | null | undefined | GalleryItemDefaultArgs> = $Result.GetResult<Prisma.$GalleryItemPayload, S>

  type GalleryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryItemCountAggregateInputType | true
    }

  export interface GalleryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryItem'], meta: { name: 'GalleryItem' } }
    /**
     * Find zero or one GalleryItem that matches the filter.
     * @param {GalleryItemFindUniqueArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryItemFindUniqueArgs>(args: SelectSubset<T, GalleryItemFindUniqueArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryItemFindUniqueOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryItemFindFirstArgs>(args?: SelectSubset<T, GalleryItemFindFirstArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany()
     * 
     * // Get first 10 GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryItemFindManyArgs>(args?: SelectSubset<T, GalleryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryItem.
     * @param {GalleryItemCreateArgs} args - Arguments to create a GalleryItem.
     * @example
     * // Create one GalleryItem
     * const GalleryItem = await prisma.galleryItem.create({
     *   data: {
     *     // ... data to create a GalleryItem
     *   }
     * })
     * 
     */
    create<T extends GalleryItemCreateArgs>(args: SelectSubset<T, GalleryItemCreateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryItems.
     * @param {GalleryItemCreateManyArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryItemCreateManyArgs>(args?: SelectSubset<T, GalleryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryItems and returns the data saved in the database.
     * @param {GalleryItemCreateManyAndReturnArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryItem.
     * @param {GalleryItemDeleteArgs} args - Arguments to delete one GalleryItem.
     * @example
     * // Delete one GalleryItem
     * const GalleryItem = await prisma.galleryItem.delete({
     *   where: {
     *     // ... filter to delete one GalleryItem
     *   }
     * })
     * 
     */
    delete<T extends GalleryItemDeleteArgs>(args: SelectSubset<T, GalleryItemDeleteArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryItem.
     * @param {GalleryItemUpdateArgs} args - Arguments to update one GalleryItem.
     * @example
     * // Update one GalleryItem
     * const galleryItem = await prisma.galleryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryItemUpdateArgs>(args: SelectSubset<T, GalleryItemUpdateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryItems.
     * @param {GalleryItemDeleteManyArgs} args - Arguments to filter GalleryItems to delete.
     * @example
     * // Delete a few GalleryItems
     * const { count } = await prisma.galleryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryItemDeleteManyArgs>(args?: SelectSubset<T, GalleryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryItemUpdateManyArgs>(args: SelectSubset<T, GalleryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems and returns the data updated in the database.
     * @param {GalleryItemUpdateManyAndReturnArgs} args - Arguments to update many GalleryItems.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryItem.
     * @param {GalleryItemUpsertArgs} args - Arguments to update or create a GalleryItem.
     * @example
     * // Update or create a GalleryItem
     * const galleryItem = await prisma.galleryItem.upsert({
     *   create: {
     *     // ... data to create a GalleryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryItem we want to update
     *   }
     * })
     */
    upsert<T extends GalleryItemUpsertArgs>(args: SelectSubset<T, GalleryItemUpsertArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemCountArgs} args - Arguments to filter GalleryItems to count.
     * @example
     * // Count the number of GalleryItems
     * const count = await prisma.galleryItem.count({
     *   where: {
     *     // ... the filter for the GalleryItems we want to count
     *   }
     * })
    **/
    count<T extends GalleryItemCountArgs>(
      args?: Subset<T, GalleryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryItemAggregateArgs>(args: Subset<T, GalleryItemAggregateArgs>): Prisma.PrismaPromise<GetGalleryItemAggregateType<T>>

    /**
     * Group by GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryItemGroupByArgs['orderBy'] }
        : { orderBy?: GalleryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryItem model
   */
  readonly fields: GalleryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends GalleryCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GalleryCategoryDefaultArgs<ExtArgs>>): Prisma__GalleryCategoryClient<$Result.GetResult<Prisma.$GalleryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryItem model
   */
  interface GalleryItemFieldRefs {
    readonly id: FieldRef<"GalleryItem", 'String'>
    readonly slug: FieldRef<"GalleryItem", 'String'>
    readonly title: FieldRef<"GalleryItem", 'String'>
    readonly categoryId: FieldRef<"GalleryItem", 'String'>
    readonly caption: FieldRef<"GalleryItem", 'String'>
    readonly location: FieldRef<"GalleryItem", 'String'>
    readonly year: FieldRef<"GalleryItem", 'Int'>
    readonly description: FieldRef<"GalleryItem", 'String'>
    readonly imageUrl: FieldRef<"GalleryItem", 'String'>
    readonly optimisedUrl: FieldRef<"GalleryItem", 'String'>
    readonly thumbnailUrl: FieldRef<"GalleryItem", 'String'>
    readonly published: FieldRef<"GalleryItem", 'Boolean'>
    readonly featured: FieldRef<"GalleryItem", 'Boolean'>
    readonly displayOrder: FieldRef<"GalleryItem", 'Int'>
    readonly createdById: FieldRef<"GalleryItem", 'String'>
    readonly updatedById: FieldRef<"GalleryItem", 'String'>
    readonly createdAt: FieldRef<"GalleryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryItem", 'DateTime'>
    readonly deletedAt: FieldRef<"GalleryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryItem findUnique
   */
  export type GalleryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findUniqueOrThrow
   */
  export type GalleryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findFirst
   */
  export type GalleryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findFirstOrThrow
   */
  export type GalleryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findMany
   */
  export type GalleryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * Filter, which GalleryItems to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem create
   */
  export type GalleryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryItem.
     */
    data: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
  }

  /**
   * GalleryItem createMany
   */
  export type GalleryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryItem createManyAndReturn
   */
  export type GalleryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryItem update
   */
  export type GalleryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryItem.
     */
    data: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
    /**
     * Choose, which GalleryItem to update.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem updateMany
   */
  export type GalleryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem updateManyAndReturn
   */
  export type GalleryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryItem upsert
   */
  export type GalleryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryItem to update in case it exists.
     */
    where: GalleryItemWhereUniqueInput
    /**
     * In case the GalleryItem found by the `where` argument doesn't exist, create a new GalleryItem with this data.
     */
    create: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
    /**
     * In case the GalleryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
  }

  /**
   * GalleryItem delete
   */
  export type GalleryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
    /**
     * Filter which GalleryItem to delete.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem deleteMany
   */
  export type GalleryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItems to delete
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to delete.
     */
    limit?: number
  }

  /**
   * GalleryItem without action
   */
  export type GalleryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryItemInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type ProgramSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    category: string | null
    status: $Enums.ProgramStatus | null
    iconName: string | null
    tone: $Enums.Tone | null
    summary: string | null
    description: string | null
    beneficiaries: string | null
    coverage: string | null
    leadUnit: string | null
    featuredImageUrl: string | null
    bannerImageUrl: string | null
    displayOrder: number | null
    published: boolean | null
    featured: boolean | null
    createdById: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    category: string | null
    status: $Enums.ProgramStatus | null
    iconName: string | null
    tone: $Enums.Tone | null
    summary: string | null
    description: string | null
    beneficiaries: string | null
    coverage: string | null
    leadUnit: string | null
    featuredImageUrl: string | null
    bannerImageUrl: string | null
    displayOrder: number | null
    published: boolean | null
    featured: boolean | null
    createdById: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    category: number
    status: number
    iconName: number
    tone: number
    summary: number
    description: number
    objectives: number
    beneficiaries: number
    coverage: number
    leadUnit: number
    featuredImageUrl: number
    bannerImageUrl: number
    displayOrder: number
    published: number
    featured: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    displayOrder?: true
  }

  export type ProgramSumAggregateInputType = {
    displayOrder?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    category?: true
    status?: true
    iconName?: true
    tone?: true
    summary?: true
    description?: true
    beneficiaries?: true
    coverage?: true
    leadUnit?: true
    featuredImageUrl?: true
    bannerImageUrl?: true
    displayOrder?: true
    published?: true
    featured?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    category?: true
    status?: true
    iconName?: true
    tone?: true
    summary?: true
    description?: true
    beneficiaries?: true
    coverage?: true
    leadUnit?: true
    featuredImageUrl?: true
    bannerImageUrl?: true
    displayOrder?: true
    published?: true
    featured?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    category?: true
    status?: true
    iconName?: true
    tone?: true
    summary?: true
    description?: true
    objectives?: true
    beneficiaries?: true
    coverage?: true
    leadUnit?: true
    featuredImageUrl?: true
    bannerImageUrl?: true
    displayOrder?: true
    published?: true
    featured?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    slug: string
    title: string
    category: string
    status: $Enums.ProgramStatus
    iconName: string
    tone: $Enums.Tone
    summary: string
    description: string
    objectives: JsonValue
    beneficiaries: string
    coverage: string
    leadUnit: string
    featuredImageUrl: string | null
    bannerImageUrl: string | null
    displayOrder: number
    published: boolean
    featured: boolean
    createdById: string
    updatedById: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    category?: boolean
    status?: boolean
    iconName?: boolean
    tone?: boolean
    summary?: boolean
    description?: boolean
    objectives?: boolean
    beneficiaries?: boolean
    coverage?: boolean
    leadUnit?: boolean
    featuredImageUrl?: boolean
    bannerImageUrl?: boolean
    displayOrder?: boolean
    published?: boolean
    featured?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    category?: boolean
    status?: boolean
    iconName?: boolean
    tone?: boolean
    summary?: boolean
    description?: boolean
    objectives?: boolean
    beneficiaries?: boolean
    coverage?: boolean
    leadUnit?: boolean
    featuredImageUrl?: boolean
    bannerImageUrl?: boolean
    displayOrder?: boolean
    published?: boolean
    featured?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    category?: boolean
    status?: boolean
    iconName?: boolean
    tone?: boolean
    summary?: boolean
    description?: boolean
    objectives?: boolean
    beneficiaries?: boolean
    coverage?: boolean
    leadUnit?: boolean
    featuredImageUrl?: boolean
    bannerImageUrl?: boolean
    displayOrder?: boolean
    published?: boolean
    featured?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    category?: boolean
    status?: boolean
    iconName?: boolean
    tone?: boolean
    summary?: boolean
    description?: boolean
    objectives?: boolean
    beneficiaries?: boolean
    coverage?: boolean
    leadUnit?: boolean
    featuredImageUrl?: boolean
    bannerImageUrl?: boolean
    displayOrder?: boolean
    published?: boolean
    featured?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "category" | "status" | "iconName" | "tone" | "summary" | "description" | "objectives" | "beneficiaries" | "coverage" | "leadUnit" | "featuredImageUrl" | "bannerImageUrl" | "displayOrder" | "published" | "featured" | "createdById" | "updatedById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["program"]>

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      category: string
      status: $Enums.ProgramStatus
      iconName: string
      tone: $Enums.Tone
      summary: string
      description: string
      objectives: Prisma.JsonValue
      beneficiaries: string
      coverage: string
      leadUnit: string
      featuredImageUrl: string | null
      bannerImageUrl: string | null
      displayOrder: number
      published: boolean
      featured: boolean
      createdById: string
      updatedById: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {ProgramUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'String'>
    readonly slug: FieldRef<"Program", 'String'>
    readonly title: FieldRef<"Program", 'String'>
    readonly category: FieldRef<"Program", 'String'>
    readonly status: FieldRef<"Program", 'ProgramStatus'>
    readonly iconName: FieldRef<"Program", 'String'>
    readonly tone: FieldRef<"Program", 'Tone'>
    readonly summary: FieldRef<"Program", 'String'>
    readonly description: FieldRef<"Program", 'String'>
    readonly objectives: FieldRef<"Program", 'Json'>
    readonly beneficiaries: FieldRef<"Program", 'String'>
    readonly coverage: FieldRef<"Program", 'String'>
    readonly leadUnit: FieldRef<"Program", 'String'>
    readonly featuredImageUrl: FieldRef<"Program", 'String'>
    readonly bannerImageUrl: FieldRef<"Program", 'String'>
    readonly displayOrder: FieldRef<"Program", 'Int'>
    readonly published: FieldRef<"Program", 'Boolean'>
    readonly featured: FieldRef<"Program", 'Boolean'>
    readonly createdById: FieldRef<"Program", 'String'>
    readonly updatedById: FieldRef<"Program", 'String'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
    readonly deletedAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program updateManyAndReturn
   */
  export type ProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
  }


  /**
   * Model ContactSubmission
   */

  export type AggregateContactSubmission = {
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  export type ContactSubmissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    subject: string | null
    enquiryType: string | null
    message: string | null
    status: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ContactSubmissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    subject: string | null
    enquiryType: string | null
    message: string | null
    status: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ContactSubmissionCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    subject: number
    enquiryType: number
    message: number
    status: number
    read: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ContactSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    subject?: true
    enquiryType?: true
    message?: true
    status?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ContactSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    subject?: true
    enquiryType?: true
    message?: true
    status?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ContactSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    subject?: true
    enquiryType?: true
    message?: true
    status?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ContactSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmission to aggregate.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactSubmissions
    **/
    _count?: true | ContactSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type GetContactSubmissionAggregateType<T extends ContactSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContactSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactSubmission[P]>
      : GetScalarType<T[P], AggregateContactSubmission[P]>
  }




  export type ContactSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactSubmissionWhereInput
    orderBy?: ContactSubmissionOrderByWithAggregationInput | ContactSubmissionOrderByWithAggregationInput[]
    by: ContactSubmissionScalarFieldEnum[] | ContactSubmissionScalarFieldEnum
    having?: ContactSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactSubmissionCountAggregateInputType | true
    _min?: ContactSubmissionMinAggregateInputType
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type ContactSubmissionGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string
    subject: string
    enquiryType: string
    message: string
    status: string
    read: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  type GetContactSubmissionGroupByPayload<T extends ContactSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContactSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    subject?: boolean
    enquiryType?: boolean
    message?: boolean
    status?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    subject?: boolean
    enquiryType?: boolean
    message?: boolean
    status?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    subject?: boolean
    enquiryType?: boolean
    message?: boolean
    status?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    subject?: boolean
    enquiryType?: boolean
    message?: boolean
    status?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ContactSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "subject" | "enquiryType" | "message" | "status" | "read" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["contactSubmission"]>

  export type $ContactSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string
      subject: string
      enquiryType: string
      message: string
      status: string
      read: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["contactSubmission"]>
    composites: {}
  }

  type ContactSubmissionGetPayload<S extends boolean | null | undefined | ContactSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContactSubmissionPayload, S>

  type ContactSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactSubmissionCountAggregateInputType | true
    }

  export interface ContactSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactSubmission'], meta: { name: 'ContactSubmission' } }
    /**
     * Find zero or one ContactSubmission that matches the filter.
     * @param {ContactSubmissionFindUniqueArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactSubmissionFindUniqueArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactSubmissionFindFirstArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany()
     * 
     * // Get first 10 ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactSubmissionFindManyArgs>(args?: SelectSubset<T, ContactSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactSubmission.
     * @param {ContactSubmissionCreateArgs} args - Arguments to create a ContactSubmission.
     * @example
     * // Create one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.create({
     *   data: {
     *     // ... data to create a ContactSubmission
     *   }
     * })
     * 
     */
    create<T extends ContactSubmissionCreateArgs>(args: SelectSubset<T, ContactSubmissionCreateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactSubmissions.
     * @param {ContactSubmissionCreateManyArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactSubmissionCreateManyArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactSubmissions and returns the data saved in the database.
     * @param {ContactSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactSubmission.
     * @param {ContactSubmissionDeleteArgs} args - Arguments to delete one ContactSubmission.
     * @example
     * // Delete one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContactSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContactSubmissionDeleteArgs>(args: SelectSubset<T, ContactSubmissionDeleteArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactSubmission.
     * @param {ContactSubmissionUpdateArgs} args - Arguments to update one ContactSubmission.
     * @example
     * // Update one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactSubmissionUpdateArgs>(args: SelectSubset<T, ContactSubmissionUpdateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactSubmissions.
     * @param {ContactSubmissionDeleteManyArgs} args - Arguments to filter ContactSubmissions to delete.
     * @example
     * // Delete a few ContactSubmissions
     * const { count } = await prisma.contactSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContactSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactSubmissionUpdateManyArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions and returns the data updated in the database.
     * @param {ContactSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContactSubmissions.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactSubmission.
     * @param {ContactSubmissionUpsertArgs} args - Arguments to update or create a ContactSubmission.
     * @example
     * // Update or create a ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.upsert({
     *   create: {
     *     // ... data to create a ContactSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContactSubmissionUpsertArgs>(args: SelectSubset<T, ContactSubmissionUpsertArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionCountArgs} args - Arguments to filter ContactSubmissions to count.
     * @example
     * // Count the number of ContactSubmissions
     * const count = await prisma.contactSubmission.count({
     *   where: {
     *     // ... the filter for the ContactSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContactSubmissionCountArgs>(
      args?: Subset<T, ContactSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactSubmissionAggregateArgs>(args: Subset<T, ContactSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactSubmissionAggregateType<T>>

    /**
     * Group by ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContactSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactSubmission model
   */
  readonly fields: ContactSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactSubmission model
   */
  interface ContactSubmissionFieldRefs {
    readonly id: FieldRef<"ContactSubmission", 'String'>
    readonly name: FieldRef<"ContactSubmission", 'String'>
    readonly phone: FieldRef<"ContactSubmission", 'String'>
    readonly email: FieldRef<"ContactSubmission", 'String'>
    readonly subject: FieldRef<"ContactSubmission", 'String'>
    readonly enquiryType: FieldRef<"ContactSubmission", 'String'>
    readonly message: FieldRef<"ContactSubmission", 'String'>
    readonly status: FieldRef<"ContactSubmission", 'String'>
    readonly read: FieldRef<"ContactSubmission", 'Boolean'>
    readonly createdAt: FieldRef<"ContactSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactSubmission", 'DateTime'>
    readonly deletedAt: FieldRef<"ContactSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactSubmission findUnique
   */
  export type ContactSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findUniqueOrThrow
   */
  export type ContactSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findFirst
   */
  export type ContactSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findFirstOrThrow
   */
  export type ContactSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findMany
   */
  export type ContactSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmissions to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission create
   */
  export type ContactSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactSubmission.
     */
    data: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
  }

  /**
   * ContactSubmission createMany
   */
  export type ContactSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSubmission createManyAndReturn
   */
  export type ContactSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSubmission update
   */
  export type ContactSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactSubmission.
     */
    data: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContactSubmission to update.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission updateMany
   */
  export type ContactSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission updateManyAndReturn
   */
  export type ContactSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission upsert
   */
  export type ContactSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactSubmission to update in case it exists.
     */
    where: ContactSubmissionWhereUniqueInput
    /**
     * In case the ContactSubmission found by the `where` argument doesn't exist, create a new ContactSubmission with this data.
     */
    create: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
    /**
     * In case the ContactSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
  }

  /**
   * ContactSubmission delete
   */
  export type ContactSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter which ContactSubmission to delete.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission deleteMany
   */
  export type ContactSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmissions to delete
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContactSubmission without action
   */
  export type ContactSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model SiteSetting
   */

  export type AggregateSiteSetting = {
    _count: SiteSettingCountAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  export type SiteSettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    updatedById: string | null
    updatedAt: Date | null
  }

  export type SiteSettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    updatedById: string | null
    updatedAt: Date | null
  }

  export type SiteSettingCountAggregateOutputType = {
    key: number
    value: number
    updatedById: number
    updatedAt: number
    _all: number
  }


  export type SiteSettingMinAggregateInputType = {
    key?: true
    value?: true
    updatedById?: true
    updatedAt?: true
  }

  export type SiteSettingMaxAggregateInputType = {
    key?: true
    value?: true
    updatedById?: true
    updatedAt?: true
  }

  export type SiteSettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedById?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSetting to aggregate.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteSettings
    **/
    _count?: true | SiteSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteSettingMaxAggregateInputType
  }

  export type GetSiteSettingAggregateType<T extends SiteSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteSetting[P]>
      : GetScalarType<T[P], AggregateSiteSetting[P]>
  }




  export type SiteSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteSettingWhereInput
    orderBy?: SiteSettingOrderByWithAggregationInput | SiteSettingOrderByWithAggregationInput[]
    by: SiteSettingScalarFieldEnum[] | SiteSettingScalarFieldEnum
    having?: SiteSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteSettingCountAggregateInputType | true
    _min?: SiteSettingMinAggregateInputType
    _max?: SiteSettingMaxAggregateInputType
  }

  export type SiteSettingGroupByOutputType = {
    key: string
    value: string
    updatedById: string
    updatedAt: Date
    _count: SiteSettingCountAggregateOutputType | null
    _min: SiteSettingMinAggregateOutputType | null
    _max: SiteSettingMaxAggregateOutputType | null
  }

  type GetSiteSettingGroupByPayload<T extends SiteSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SiteSettingGroupByOutputType[P]>
        }
      >
    >


  export type SiteSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedById?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>

  export type SiteSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedById?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>

  export type SiteSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedById?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteSetting"]>

  export type SiteSettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedById?: boolean
    updatedAt?: boolean
  }

  export type SiteSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "updatedById" | "updatedAt", ExtArgs["result"]["siteSetting"]>

  export type $SiteSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      updatedById: string
      updatedAt: Date
    }, ExtArgs["result"]["siteSetting"]>
    composites: {}
  }

  type SiteSettingGetPayload<S extends boolean | null | undefined | SiteSettingDefaultArgs> = $Result.GetResult<Prisma.$SiteSettingPayload, S>

  type SiteSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteSettingCountAggregateInputType | true
    }

  export interface SiteSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteSetting'], meta: { name: 'SiteSetting' } }
    /**
     * Find zero or one SiteSetting that matches the filter.
     * @param {SiteSettingFindUniqueArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteSettingFindUniqueArgs>(args: SelectSubset<T, SiteSettingFindUniqueArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteSettingFindUniqueOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteSettingFindFirstArgs>(args?: SelectSubset<T, SiteSettingFindFirstArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindFirstOrThrowArgs} args - Arguments to find a SiteSetting
     * @example
     * // Get one SiteSetting
     * const siteSetting = await prisma.siteSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany()
     * 
     * // Get first 10 SiteSettings
     * const siteSettings = await prisma.siteSetting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const siteSettingWithKeyOnly = await prisma.siteSetting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SiteSettingFindManyArgs>(args?: SelectSubset<T, SiteSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteSetting.
     * @param {SiteSettingCreateArgs} args - Arguments to create a SiteSetting.
     * @example
     * // Create one SiteSetting
     * const SiteSetting = await prisma.siteSetting.create({
     *   data: {
     *     // ... data to create a SiteSetting
     *   }
     * })
     * 
     */
    create<T extends SiteSettingCreateArgs>(args: SelectSubset<T, SiteSettingCreateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteSettings.
     * @param {SiteSettingCreateManyArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSetting = await prisma.siteSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteSettingCreateManyArgs>(args?: SelectSubset<T, SiteSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteSettings and returns the data saved in the database.
     * @param {SiteSettingCreateManyAndReturnArgs} args - Arguments to create many SiteSettings.
     * @example
     * // Create many SiteSettings
     * const siteSetting = await prisma.siteSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteSettings and only return the `key`
     * const siteSettingWithKeyOnly = await prisma.siteSetting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteSetting.
     * @param {SiteSettingDeleteArgs} args - Arguments to delete one SiteSetting.
     * @example
     * // Delete one SiteSetting
     * const SiteSetting = await prisma.siteSetting.delete({
     *   where: {
     *     // ... filter to delete one SiteSetting
     *   }
     * })
     * 
     */
    delete<T extends SiteSettingDeleteArgs>(args: SelectSubset<T, SiteSettingDeleteArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteSetting.
     * @param {SiteSettingUpdateArgs} args - Arguments to update one SiteSetting.
     * @example
     * // Update one SiteSetting
     * const siteSetting = await prisma.siteSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteSettingUpdateArgs>(args: SelectSubset<T, SiteSettingUpdateArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteSettings.
     * @param {SiteSettingDeleteManyArgs} args - Arguments to filter SiteSettings to delete.
     * @example
     * // Delete a few SiteSettings
     * const { count } = await prisma.siteSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteSettingDeleteManyArgs>(args?: SelectSubset<T, SiteSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteSettings
     * const siteSetting = await prisma.siteSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteSettingUpdateManyArgs>(args: SelectSubset<T, SiteSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteSettings and returns the data updated in the database.
     * @param {SiteSettingUpdateManyAndReturnArgs} args - Arguments to update many SiteSettings.
     * @example
     * // Update many SiteSettings
     * const siteSetting = await prisma.siteSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteSettings and only return the `key`
     * const siteSettingWithKeyOnly = await prisma.siteSetting.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteSetting.
     * @param {SiteSettingUpsertArgs} args - Arguments to update or create a SiteSetting.
     * @example
     * // Update or create a SiteSetting
     * const siteSetting = await prisma.siteSetting.upsert({
     *   create: {
     *     // ... data to create a SiteSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteSetting we want to update
     *   }
     * })
     */
    upsert<T extends SiteSettingUpsertArgs>(args: SelectSubset<T, SiteSettingUpsertArgs<ExtArgs>>): Prisma__SiteSettingClient<$Result.GetResult<Prisma.$SiteSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingCountArgs} args - Arguments to filter SiteSettings to count.
     * @example
     * // Count the number of SiteSettings
     * const count = await prisma.siteSetting.count({
     *   where: {
     *     // ... the filter for the SiteSettings we want to count
     *   }
     * })
    **/
    count<T extends SiteSettingCountArgs>(
      args?: Subset<T, SiteSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteSettingAggregateArgs>(args: Subset<T, SiteSettingAggregateArgs>): Prisma.PrismaPromise<GetSiteSettingAggregateType<T>>

    /**
     * Group by SiteSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteSettingGroupByArgs['orderBy'] }
        : { orderBy?: SiteSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteSetting model
   */
  readonly fields: SiteSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteSetting model
   */
  interface SiteSettingFieldRefs {
    readonly key: FieldRef<"SiteSetting", 'String'>
    readonly value: FieldRef<"SiteSetting", 'String'>
    readonly updatedById: FieldRef<"SiteSetting", 'String'>
    readonly updatedAt: FieldRef<"SiteSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteSetting findUnique
   */
  export type SiteSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findUniqueOrThrow
   */
  export type SiteSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting findFirst
   */
  export type SiteSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findFirstOrThrow
   */
  export type SiteSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSetting to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteSettings.
     */
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting findMany
   */
  export type SiteSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter, which SiteSettings to fetch.
     */
    where?: SiteSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteSettings to fetch.
     */
    orderBy?: SiteSettingOrderByWithRelationInput | SiteSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteSettings.
     */
    cursor?: SiteSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteSettings.
     */
    skip?: number
    distinct?: SiteSettingScalarFieldEnum | SiteSettingScalarFieldEnum[]
  }

  /**
   * SiteSetting create
   */
  export type SiteSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteSetting.
     */
    data: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
  }

  /**
   * SiteSetting createMany
   */
  export type SiteSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingCreateManyInput | SiteSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSetting createManyAndReturn
   */
  export type SiteSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data used to create many SiteSettings.
     */
    data: SiteSettingCreateManyInput | SiteSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteSetting update
   */
  export type SiteSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteSetting.
     */
    data: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
    /**
     * Choose, which SiteSetting to update.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting updateMany
   */
  export type SiteSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingUpdateManyMutationInput, SiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSetting updateManyAndReturn
   */
  export type SiteSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The data used to update SiteSettings.
     */
    data: XOR<SiteSettingUpdateManyMutationInput, SiteSettingUncheckedUpdateManyInput>
    /**
     * Filter which SiteSettings to update
     */
    where?: SiteSettingWhereInput
    /**
     * Limit how many SiteSettings to update.
     */
    limit?: number
  }

  /**
   * SiteSetting upsert
   */
  export type SiteSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteSetting to update in case it exists.
     */
    where: SiteSettingWhereUniqueInput
    /**
     * In case the SiteSetting found by the `where` argument doesn't exist, create a new SiteSetting with this data.
     */
    create: XOR<SiteSettingCreateInput, SiteSettingUncheckedCreateInput>
    /**
     * In case the SiteSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteSettingUpdateInput, SiteSettingUncheckedUpdateInput>
  }

  /**
   * SiteSetting delete
   */
  export type SiteSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
    /**
     * Filter which SiteSetting to delete.
     */
    where: SiteSettingWhereUniqueInput
  }

  /**
   * SiteSetting deleteMany
   */
  export type SiteSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteSettings to delete
     */
    where?: SiteSettingWhereInput
    /**
     * Limit how many SiteSettings to delete.
     */
    limit?: number
  }

  /**
   * SiteSetting without action
   */
  export type SiteSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteSetting
     */
    select?: SiteSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteSetting
     */
    omit?: SiteSettingOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    contentType: string | null
    contentId: string | null
    action: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    contentType: string | null
    contentId: string | null
    action: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    contentType: number
    contentId: number
    action: number
    actorId: number
    previousState: number
    newState: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    contentType?: true
    contentId?: true
    action?: true
    actorId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    contentType?: true
    contentId?: true
    action?: true
    actorId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    contentType?: true
    contentId?: true
    action?: true
    actorId?: true
    previousState?: true
    newState?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    contentType: string
    contentId: string
    action: string
    actorId: string
    previousState: JsonValue | null
    newState: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentType?: boolean
    contentId?: boolean
    action?: boolean
    actorId?: boolean
    previousState?: boolean
    newState?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentType?: boolean
    contentId?: boolean
    action?: boolean
    actorId?: boolean
    previousState?: boolean
    newState?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentType?: boolean
    contentId?: boolean
    action?: boolean
    actorId?: boolean
    previousState?: boolean
    newState?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    contentType?: boolean
    contentId?: boolean
    action?: boolean
    actorId?: boolean
    previousState?: boolean
    newState?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentType" | "contentId" | "action" | "actorId" | "previousState" | "newState" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentType: string
      contentId: string
      action: string
      actorId: string
      previousState: Prisma.JsonValue | null
      newState: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly contentType: FieldRef<"AuditLog", 'String'>
    readonly contentId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly previousState: FieldRef<"AuditLog", 'Json'>
    readonly newState: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    active: 'active',
    failedAttempts: 'failedAttempts',
    lockedAt: 'lockedAt',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    lastSeen: 'lastSeen'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    usedAt: 'usedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const NewsCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type NewsCategoryScalarFieldEnum = (typeof NewsCategoryScalarFieldEnum)[keyof typeof NewsCategoryScalarFieldEnum]


  export const NewsTagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type NewsTagScalarFieldEnum = (typeof NewsTagScalarFieldEnum)[keyof typeof NewsTagScalarFieldEnum]


  export const ArticleTagScalarFieldEnum: {
    articleId: 'articleId',
    tagId: 'tagId'
  };

  export type ArticleTagScalarFieldEnum = (typeof ArticleTagScalarFieldEnum)[keyof typeof ArticleTagScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    categoryId: 'categoryId',
    excerpt: 'excerpt',
    body: 'body',
    featuredImageUrl: 'featuredImageUrl',
    thumbnailUrl: 'thumbnailUrl',
    status: 'status',
    featured: 'featured',
    scheduledAt: 'scheduledAt',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const ProjectTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProjectTypeScalarFieldEnum = (typeof ProjectTypeScalarFieldEnum)[keyof typeof ProjectTypeScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    lga: 'lga',
    community: 'community',
    typeId: 'typeId',
    status: 'status',
    year: 'year',
    progress: 'progress',
    beneficiaries: 'beneficiaries',
    description: 'description',
    featuredImageUrl: 'featuredImageUrl',
    thumbnailUrl: 'thumbnailUrl',
    featured: 'featured',
    completionDate: 'completionDate',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const GalleryCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GalleryCategoryScalarFieldEnum = (typeof GalleryCategoryScalarFieldEnum)[keyof typeof GalleryCategoryScalarFieldEnum]


  export const GalleryItemScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    categoryId: 'categoryId',
    caption: 'caption',
    location: 'location',
    year: 'year',
    description: 'description',
    imageUrl: 'imageUrl',
    optimisedUrl: 'optimisedUrl',
    thumbnailUrl: 'thumbnailUrl',
    published: 'published',
    featured: 'featured',
    displayOrder: 'displayOrder',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type GalleryItemScalarFieldEnum = (typeof GalleryItemScalarFieldEnum)[keyof typeof GalleryItemScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    category: 'category',
    status: 'status',
    iconName: 'iconName',
    tone: 'tone',
    summary: 'summary',
    description: 'description',
    objectives: 'objectives',
    beneficiaries: 'beneficiaries',
    coverage: 'coverage',
    leadUnit: 'leadUnit',
    featuredImageUrl: 'featuredImageUrl',
    bannerImageUrl: 'bannerImageUrl',
    displayOrder: 'displayOrder',
    published: 'published',
    featured: 'featured',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const ContactSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    subject: 'subject',
    enquiryType: 'enquiryType',
    message: 'message',
    status: 'status',
    read: 'read',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ContactSubmissionScalarFieldEnum = (typeof ContactSubmissionScalarFieldEnum)[keyof typeof ContactSubmissionScalarFieldEnum]


  export const SiteSettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedById: 'updatedById',
    updatedAt: 'updatedAt'
  };

  export type SiteSettingScalarFieldEnum = (typeof SiteSettingScalarFieldEnum)[keyof typeof SiteSettingScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    contentType: 'contentType',
    contentId: 'contentId',
    action: 'action',
    actorId: 'actorId',
    previousState: 'previousState',
    newState: 'newState',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ArticleStatus'
   */
  export type EnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus'>
    


  /**
   * Reference to a field of type 'ArticleStatus[]'
   */
  export type ListEnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'ProgramStatus'
   */
  export type EnumProgramStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramStatus'>
    


  /**
   * Reference to a field of type 'ProgramStatus[]'
   */
  export type ListEnumProgramStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramStatus[]'>
    


  /**
   * Reference to a field of type 'Tone'
   */
  export type EnumToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tone'>
    


  /**
   * Reference to a field of type 'Tone[]'
   */
  export type ListEnumToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tone[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    failedAttempts?: IntFilter<"User"> | number
    lockedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdById?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
    sessions?: SessionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    failedAttempts?: SortOrder
    lockedAt?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    createdUsers?: UserOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    failedAttempts?: IntFilter<"User"> | number
    lockedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdById?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
    sessions?: SessionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    failedAttempts?: SortOrder
    lockedAt?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    active?: BoolWithAggregatesFilter<"User"> | boolean
    failedAttempts?: IntWithAggregatesFilter<"User"> | number
    lockedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdById?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeen?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeen?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    lastSeen?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    tokenHash?: StringFilter<"PasswordResetToken"> | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    userId?: StringFilter<"PasswordResetToken"> | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }, "id" | "tokenHash">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    userId?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    tokenHash?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetToken"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type NewsCategoryWhereInput = {
    AND?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    OR?: NewsCategoryWhereInput[]
    NOT?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    id?: StringFilter<"NewsCategory"> | string
    name?: StringFilter<"NewsCategory"> | string
    articles?: NewsArticleListRelationFilter
  }

  export type NewsCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    articles?: NewsArticleOrderByRelationAggregateInput
  }

  export type NewsCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    OR?: NewsCategoryWhereInput[]
    NOT?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    articles?: NewsArticleListRelationFilter
  }, "id" | "name">

  export type NewsCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: NewsCategoryCountOrderByAggregateInput
    _max?: NewsCategoryMaxOrderByAggregateInput
    _min?: NewsCategoryMinOrderByAggregateInput
  }

  export type NewsCategoryScalarWhereWithAggregatesInput = {
    AND?: NewsCategoryScalarWhereWithAggregatesInput | NewsCategoryScalarWhereWithAggregatesInput[]
    OR?: NewsCategoryScalarWhereWithAggregatesInput[]
    NOT?: NewsCategoryScalarWhereWithAggregatesInput | NewsCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsCategory"> | string
    name?: StringWithAggregatesFilter<"NewsCategory"> | string
  }

  export type NewsTagWhereInput = {
    AND?: NewsTagWhereInput | NewsTagWhereInput[]
    OR?: NewsTagWhereInput[]
    NOT?: NewsTagWhereInput | NewsTagWhereInput[]
    id?: StringFilter<"NewsTag"> | string
    name?: StringFilter<"NewsTag"> | string
    articles?: ArticleTagListRelationFilter
  }

  export type NewsTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    articles?: ArticleTagOrderByRelationAggregateInput
  }

  export type NewsTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: NewsTagWhereInput | NewsTagWhereInput[]
    OR?: NewsTagWhereInput[]
    NOT?: NewsTagWhereInput | NewsTagWhereInput[]
    articles?: ArticleTagListRelationFilter
  }, "id" | "name">

  export type NewsTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: NewsTagCountOrderByAggregateInput
    _max?: NewsTagMaxOrderByAggregateInput
    _min?: NewsTagMinOrderByAggregateInput
  }

  export type NewsTagScalarWhereWithAggregatesInput = {
    AND?: NewsTagScalarWhereWithAggregatesInput | NewsTagScalarWhereWithAggregatesInput[]
    OR?: NewsTagScalarWhereWithAggregatesInput[]
    NOT?: NewsTagScalarWhereWithAggregatesInput | NewsTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsTag"> | string
    name?: StringWithAggregatesFilter<"NewsTag"> | string
  }

  export type ArticleTagWhereInput = {
    AND?: ArticleTagWhereInput | ArticleTagWhereInput[]
    OR?: ArticleTagWhereInput[]
    NOT?: ArticleTagWhereInput | ArticleTagWhereInput[]
    articleId?: StringFilter<"ArticleTag"> | string
    tagId?: StringFilter<"ArticleTag"> | string
    article?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
    tag?: XOR<NewsTagScalarRelationFilter, NewsTagWhereInput>
  }

  export type ArticleTagOrderByWithRelationInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    article?: NewsArticleOrderByWithRelationInput
    tag?: NewsTagOrderByWithRelationInput
  }

  export type ArticleTagWhereUniqueInput = Prisma.AtLeast<{
    articleId_tagId?: ArticleTagArticleIdTagIdCompoundUniqueInput
    AND?: ArticleTagWhereInput | ArticleTagWhereInput[]
    OR?: ArticleTagWhereInput[]
    NOT?: ArticleTagWhereInput | ArticleTagWhereInput[]
    articleId?: StringFilter<"ArticleTag"> | string
    tagId?: StringFilter<"ArticleTag"> | string
    article?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
    tag?: XOR<NewsTagScalarRelationFilter, NewsTagWhereInput>
  }, "articleId_tagId">

  export type ArticleTagOrderByWithAggregationInput = {
    articleId?: SortOrder
    tagId?: SortOrder
    _count?: ArticleTagCountOrderByAggregateInput
    _max?: ArticleTagMaxOrderByAggregateInput
    _min?: ArticleTagMinOrderByAggregateInput
  }

  export type ArticleTagScalarWhereWithAggregatesInput = {
    AND?: ArticleTagScalarWhereWithAggregatesInput | ArticleTagScalarWhereWithAggregatesInput[]
    OR?: ArticleTagScalarWhereWithAggregatesInput[]
    NOT?: ArticleTagScalarWhereWithAggregatesInput | ArticleTagScalarWhereWithAggregatesInput[]
    articleId?: StringWithAggregatesFilter<"ArticleTag"> | string
    tagId?: StringWithAggregatesFilter<"ArticleTag"> | string
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    slug?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    categoryId?: StringFilter<"NewsArticle"> | string
    excerpt?: StringFilter<"NewsArticle"> | string
    body?: StringFilter<"NewsArticle"> | string
    featuredImageUrl?: StringFilter<"NewsArticle"> | string
    thumbnailUrl?: StringFilter<"NewsArticle"> | string
    status?: EnumArticleStatusFilter<"NewsArticle"> | $Enums.ArticleStatus
    featured?: BoolFilter<"NewsArticle"> | boolean
    scheduledAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    createdById?: StringFilter<"NewsArticle"> | string
    updatedById?: StringFilter<"NewsArticle"> | string
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    deletedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    category?: XOR<NewsCategoryScalarRelationFilter, NewsCategoryWhereInput>
    tags?: ArticleTagListRelationFilter
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    category?: NewsCategoryOrderByWithRelationInput
    tags?: ArticleTagOrderByRelationAggregateInput
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    title?: StringFilter<"NewsArticle"> | string
    categoryId?: StringFilter<"NewsArticle"> | string
    excerpt?: StringFilter<"NewsArticle"> | string
    body?: StringFilter<"NewsArticle"> | string
    featuredImageUrl?: StringFilter<"NewsArticle"> | string
    thumbnailUrl?: StringFilter<"NewsArticle"> | string
    status?: EnumArticleStatusFilter<"NewsArticle"> | $Enums.ArticleStatus
    featured?: BoolFilter<"NewsArticle"> | boolean
    scheduledAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    createdById?: StringFilter<"NewsArticle"> | string
    updatedById?: StringFilter<"NewsArticle"> | string
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    deletedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    category?: XOR<NewsCategoryScalarRelationFilter, NewsCategoryWhereInput>
    tags?: ArticleTagListRelationFilter
  }, "id" | "slug">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsArticle"> | string
    slug?: StringWithAggregatesFilter<"NewsArticle"> | string
    title?: StringWithAggregatesFilter<"NewsArticle"> | string
    categoryId?: StringWithAggregatesFilter<"NewsArticle"> | string
    excerpt?: StringWithAggregatesFilter<"NewsArticle"> | string
    body?: StringWithAggregatesFilter<"NewsArticle"> | string
    featuredImageUrl?: StringWithAggregatesFilter<"NewsArticle"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"NewsArticle"> | string
    status?: EnumArticleStatusWithAggregatesFilter<"NewsArticle"> | $Enums.ArticleStatus
    featured?: BoolWithAggregatesFilter<"NewsArticle"> | boolean
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"NewsArticle"> | Date | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"NewsArticle"> | Date | string | null
    createdById?: StringWithAggregatesFilter<"NewsArticle"> | string
    updatedById?: StringWithAggregatesFilter<"NewsArticle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"NewsArticle"> | Date | string | null
  }

  export type ProjectTypeWhereInput = {
    AND?: ProjectTypeWhereInput | ProjectTypeWhereInput[]
    OR?: ProjectTypeWhereInput[]
    NOT?: ProjectTypeWhereInput | ProjectTypeWhereInput[]
    id?: StringFilter<"ProjectType"> | string
    name?: StringFilter<"ProjectType"> | string
    projects?: ProjectListRelationFilter
  }

  export type ProjectTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ProjectTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProjectTypeWhereInput | ProjectTypeWhereInput[]
    OR?: ProjectTypeWhereInput[]
    NOT?: ProjectTypeWhereInput | ProjectTypeWhereInput[]
    projects?: ProjectListRelationFilter
  }, "id" | "name">

  export type ProjectTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProjectTypeCountOrderByAggregateInput
    _max?: ProjectTypeMaxOrderByAggregateInput
    _min?: ProjectTypeMinOrderByAggregateInput
  }

  export type ProjectTypeScalarWhereWithAggregatesInput = {
    AND?: ProjectTypeScalarWhereWithAggregatesInput | ProjectTypeScalarWhereWithAggregatesInput[]
    OR?: ProjectTypeScalarWhereWithAggregatesInput[]
    NOT?: ProjectTypeScalarWhereWithAggregatesInput | ProjectTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectType"> | string
    name?: StringWithAggregatesFilter<"ProjectType"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    lga?: StringFilter<"Project"> | string
    community?: StringFilter<"Project"> | string
    typeId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    year?: IntFilter<"Project"> | number
    progress?: IntFilter<"Project"> | number
    beneficiaries?: IntFilter<"Project"> | number
    description?: StringFilter<"Project"> | string
    featuredImageUrl?: StringFilter<"Project"> | string
    thumbnailUrl?: StringFilter<"Project"> | string
    featured?: BoolFilter<"Project"> | boolean
    completionDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdById?: StringFilter<"Project"> | string
    updatedById?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    projectType?: XOR<ProjectTypeScalarRelationFilter, ProjectTypeWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    lga?: SortOrder
    community?: SortOrder
    typeId?: SortOrder
    status?: SortOrder
    year?: SortOrder
    progress?: SortOrder
    beneficiaries?: SortOrder
    description?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    featured?: SortOrder
    completionDate?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    projectType?: ProjectTypeOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    lga?: StringFilter<"Project"> | string
    community?: StringFilter<"Project"> | string
    typeId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    year?: IntFilter<"Project"> | number
    progress?: IntFilter<"Project"> | number
    beneficiaries?: IntFilter<"Project"> | number
    description?: StringFilter<"Project"> | string
    featuredImageUrl?: StringFilter<"Project"> | string
    thumbnailUrl?: StringFilter<"Project"> | string
    featured?: BoolFilter<"Project"> | boolean
    completionDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdById?: StringFilter<"Project"> | string
    updatedById?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    projectType?: XOR<ProjectTypeScalarRelationFilter, ProjectTypeWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    lga?: SortOrder
    community?: SortOrder
    typeId?: SortOrder
    status?: SortOrder
    year?: SortOrder
    progress?: SortOrder
    beneficiaries?: SortOrder
    description?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    featured?: SortOrder
    completionDate?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    lga?: StringWithAggregatesFilter<"Project"> | string
    community?: StringWithAggregatesFilter<"Project"> | string
    typeId?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    year?: IntWithAggregatesFilter<"Project"> | number
    progress?: IntWithAggregatesFilter<"Project"> | number
    beneficiaries?: IntWithAggregatesFilter<"Project"> | number
    description?: StringWithAggregatesFilter<"Project"> | string
    featuredImageUrl?: StringWithAggregatesFilter<"Project"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"Project"> | string
    featured?: BoolWithAggregatesFilter<"Project"> | boolean
    completionDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdById?: StringWithAggregatesFilter<"Project"> | string
    updatedById?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
  }

  export type GalleryCategoryWhereInput = {
    AND?: GalleryCategoryWhereInput | GalleryCategoryWhereInput[]
    OR?: GalleryCategoryWhereInput[]
    NOT?: GalleryCategoryWhereInput | GalleryCategoryWhereInput[]
    id?: StringFilter<"GalleryCategory"> | string
    name?: StringFilter<"GalleryCategory"> | string
    items?: GalleryItemListRelationFilter
  }

  export type GalleryCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    items?: GalleryItemOrderByRelationAggregateInput
  }

  export type GalleryCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GalleryCategoryWhereInput | GalleryCategoryWhereInput[]
    OR?: GalleryCategoryWhereInput[]
    NOT?: GalleryCategoryWhereInput | GalleryCategoryWhereInput[]
    items?: GalleryItemListRelationFilter
  }, "id" | "name">

  export type GalleryCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GalleryCategoryCountOrderByAggregateInput
    _max?: GalleryCategoryMaxOrderByAggregateInput
    _min?: GalleryCategoryMinOrderByAggregateInput
  }

  export type GalleryCategoryScalarWhereWithAggregatesInput = {
    AND?: GalleryCategoryScalarWhereWithAggregatesInput | GalleryCategoryScalarWhereWithAggregatesInput[]
    OR?: GalleryCategoryScalarWhereWithAggregatesInput[]
    NOT?: GalleryCategoryScalarWhereWithAggregatesInput | GalleryCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryCategory"> | string
    name?: StringWithAggregatesFilter<"GalleryCategory"> | string
  }

  export type GalleryItemWhereInput = {
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    id?: StringFilter<"GalleryItem"> | string
    slug?: StringFilter<"GalleryItem"> | string
    title?: StringFilter<"GalleryItem"> | string
    categoryId?: StringFilter<"GalleryItem"> | string
    caption?: StringFilter<"GalleryItem"> | string
    location?: StringFilter<"GalleryItem"> | string
    year?: IntFilter<"GalleryItem"> | number
    description?: StringFilter<"GalleryItem"> | string
    imageUrl?: StringFilter<"GalleryItem"> | string
    optimisedUrl?: StringFilter<"GalleryItem"> | string
    thumbnailUrl?: StringFilter<"GalleryItem"> | string
    published?: BoolFilter<"GalleryItem"> | boolean
    featured?: BoolFilter<"GalleryItem"> | boolean
    displayOrder?: IntFilter<"GalleryItem"> | number
    createdById?: StringFilter<"GalleryItem"> | string
    updatedById?: StringFilter<"GalleryItem"> | string
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GalleryItem"> | Date | string | null
    category?: XOR<GalleryCategoryScalarRelationFilter, GalleryCategoryWhereInput>
  }

  export type GalleryItemOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    year?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    optimisedUrl?: SortOrder
    thumbnailUrl?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    displayOrder?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    category?: GalleryCategoryOrderByWithRelationInput
  }

  export type GalleryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    title?: StringFilter<"GalleryItem"> | string
    categoryId?: StringFilter<"GalleryItem"> | string
    caption?: StringFilter<"GalleryItem"> | string
    location?: StringFilter<"GalleryItem"> | string
    year?: IntFilter<"GalleryItem"> | number
    description?: StringFilter<"GalleryItem"> | string
    imageUrl?: StringFilter<"GalleryItem"> | string
    optimisedUrl?: StringFilter<"GalleryItem"> | string
    thumbnailUrl?: StringFilter<"GalleryItem"> | string
    published?: BoolFilter<"GalleryItem"> | boolean
    featured?: BoolFilter<"GalleryItem"> | boolean
    displayOrder?: IntFilter<"GalleryItem"> | number
    createdById?: StringFilter<"GalleryItem"> | string
    updatedById?: StringFilter<"GalleryItem"> | string
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GalleryItem"> | Date | string | null
    category?: XOR<GalleryCategoryScalarRelationFilter, GalleryCategoryWhereInput>
  }, "id" | "slug">

  export type GalleryItemOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    year?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    optimisedUrl?: SortOrder
    thumbnailUrl?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    displayOrder?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: GalleryItemCountOrderByAggregateInput
    _avg?: GalleryItemAvgOrderByAggregateInput
    _max?: GalleryItemMaxOrderByAggregateInput
    _min?: GalleryItemMinOrderByAggregateInput
    _sum?: GalleryItemSumOrderByAggregateInput
  }

  export type GalleryItemScalarWhereWithAggregatesInput = {
    AND?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    OR?: GalleryItemScalarWhereWithAggregatesInput[]
    NOT?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryItem"> | string
    slug?: StringWithAggregatesFilter<"GalleryItem"> | string
    title?: StringWithAggregatesFilter<"GalleryItem"> | string
    categoryId?: StringWithAggregatesFilter<"GalleryItem"> | string
    caption?: StringWithAggregatesFilter<"GalleryItem"> | string
    location?: StringWithAggregatesFilter<"GalleryItem"> | string
    year?: IntWithAggregatesFilter<"GalleryItem"> | number
    description?: StringWithAggregatesFilter<"GalleryItem"> | string
    imageUrl?: StringWithAggregatesFilter<"GalleryItem"> | string
    optimisedUrl?: StringWithAggregatesFilter<"GalleryItem"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"GalleryItem"> | string
    published?: BoolWithAggregatesFilter<"GalleryItem"> | boolean
    featured?: BoolWithAggregatesFilter<"GalleryItem"> | boolean
    displayOrder?: IntWithAggregatesFilter<"GalleryItem"> | number
    createdById?: StringWithAggregatesFilter<"GalleryItem"> | string
    updatedById?: StringWithAggregatesFilter<"GalleryItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"GalleryItem"> | Date | string | null
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: StringFilter<"Program"> | string
    slug?: StringFilter<"Program"> | string
    title?: StringFilter<"Program"> | string
    category?: StringFilter<"Program"> | string
    status?: EnumProgramStatusFilter<"Program"> | $Enums.ProgramStatus
    iconName?: StringFilter<"Program"> | string
    tone?: EnumToneFilter<"Program"> | $Enums.Tone
    summary?: StringFilter<"Program"> | string
    description?: StringFilter<"Program"> | string
    objectives?: JsonFilter<"Program">
    beneficiaries?: StringFilter<"Program"> | string
    coverage?: StringFilter<"Program"> | string
    leadUnit?: StringFilter<"Program"> | string
    featuredImageUrl?: StringNullableFilter<"Program"> | string | null
    bannerImageUrl?: StringNullableFilter<"Program"> | string | null
    displayOrder?: IntFilter<"Program"> | number
    published?: BoolFilter<"Program"> | boolean
    featured?: BoolFilter<"Program"> | boolean
    createdById?: StringFilter<"Program"> | string
    updatedById?: StringFilter<"Program"> | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Program"> | Date | string | null
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    status?: SortOrder
    iconName?: SortOrder
    tone?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    objectives?: SortOrder
    beneficiaries?: SortOrder
    coverage?: SortOrder
    leadUnit?: SortOrder
    featuredImageUrl?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    title?: StringFilter<"Program"> | string
    category?: StringFilter<"Program"> | string
    status?: EnumProgramStatusFilter<"Program"> | $Enums.ProgramStatus
    iconName?: StringFilter<"Program"> | string
    tone?: EnumToneFilter<"Program"> | $Enums.Tone
    summary?: StringFilter<"Program"> | string
    description?: StringFilter<"Program"> | string
    objectives?: JsonFilter<"Program">
    beneficiaries?: StringFilter<"Program"> | string
    coverage?: StringFilter<"Program"> | string
    leadUnit?: StringFilter<"Program"> | string
    featuredImageUrl?: StringNullableFilter<"Program"> | string | null
    bannerImageUrl?: StringNullableFilter<"Program"> | string | null
    displayOrder?: IntFilter<"Program"> | number
    published?: BoolFilter<"Program"> | boolean
    featured?: BoolFilter<"Program"> | boolean
    createdById?: StringFilter<"Program"> | string
    updatedById?: StringFilter<"Program"> | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Program"> | Date | string | null
  }, "id" | "slug">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    status?: SortOrder
    iconName?: SortOrder
    tone?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    objectives?: SortOrder
    beneficiaries?: SortOrder
    coverage?: SortOrder
    leadUnit?: SortOrder
    featuredImageUrl?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Program"> | string
    slug?: StringWithAggregatesFilter<"Program"> | string
    title?: StringWithAggregatesFilter<"Program"> | string
    category?: StringWithAggregatesFilter<"Program"> | string
    status?: EnumProgramStatusWithAggregatesFilter<"Program"> | $Enums.ProgramStatus
    iconName?: StringWithAggregatesFilter<"Program"> | string
    tone?: EnumToneWithAggregatesFilter<"Program"> | $Enums.Tone
    summary?: StringWithAggregatesFilter<"Program"> | string
    description?: StringWithAggregatesFilter<"Program"> | string
    objectives?: JsonWithAggregatesFilter<"Program">
    beneficiaries?: StringWithAggregatesFilter<"Program"> | string
    coverage?: StringWithAggregatesFilter<"Program"> | string
    leadUnit?: StringWithAggregatesFilter<"Program"> | string
    featuredImageUrl?: StringNullableWithAggregatesFilter<"Program"> | string | null
    bannerImageUrl?: StringNullableWithAggregatesFilter<"Program"> | string | null
    displayOrder?: IntWithAggregatesFilter<"Program"> | number
    published?: BoolWithAggregatesFilter<"Program"> | boolean
    featured?: BoolWithAggregatesFilter<"Program"> | boolean
    createdById?: StringWithAggregatesFilter<"Program"> | string
    updatedById?: StringWithAggregatesFilter<"Program"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Program"> | Date | string | null
  }

  export type ContactSubmissionWhereInput = {
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    id?: StringFilter<"ContactSubmission"> | string
    name?: StringFilter<"ContactSubmission"> | string
    phone?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    subject?: StringFilter<"ContactSubmission"> | string
    enquiryType?: StringFilter<"ContactSubmission"> | string
    message?: StringFilter<"ContactSubmission"> | string
    status?: StringFilter<"ContactSubmission"> | string
    read?: BoolFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactSubmission"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ContactSubmission"> | Date | string | null
  }

  export type ContactSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    enquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type ContactSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    name?: StringFilter<"ContactSubmission"> | string
    phone?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    subject?: StringFilter<"ContactSubmission"> | string
    enquiryType?: StringFilter<"ContactSubmission"> | string
    message?: StringFilter<"ContactSubmission"> | string
    status?: StringFilter<"ContactSubmission"> | string
    read?: BoolFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ContactSubmission"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ContactSubmission"> | Date | string | null
  }, "id">

  export type ContactSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    enquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ContactSubmissionCountOrderByAggregateInput
    _max?: ContactSubmissionMaxOrderByAggregateInput
    _min?: ContactSubmissionMinOrderByAggregateInput
  }

  export type ContactSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContactSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactSubmission"> | string
    name?: StringWithAggregatesFilter<"ContactSubmission"> | string
    phone?: StringWithAggregatesFilter<"ContactSubmission"> | string
    email?: StringWithAggregatesFilter<"ContactSubmission"> | string
    subject?: StringWithAggregatesFilter<"ContactSubmission"> | string
    enquiryType?: StringWithAggregatesFilter<"ContactSubmission"> | string
    message?: StringWithAggregatesFilter<"ContactSubmission"> | string
    status?: StringWithAggregatesFilter<"ContactSubmission"> | string
    read?: BoolWithAggregatesFilter<"ContactSubmission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ContactSubmission"> | Date | string | null
  }

  export type SiteSettingWhereInput = {
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    key?: StringFilter<"SiteSetting"> | string
    value?: StringFilter<"SiteSetting"> | string
    updatedById?: StringFilter<"SiteSetting"> | string
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }

  export type SiteSettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SiteSettingWhereInput | SiteSettingWhereInput[]
    OR?: SiteSettingWhereInput[]
    NOT?: SiteSettingWhereInput | SiteSettingWhereInput[]
    value?: StringFilter<"SiteSetting"> | string
    updatedById?: StringFilter<"SiteSetting"> | string
    updatedAt?: DateTimeFilter<"SiteSetting"> | Date | string
  }, "key">

  export type SiteSettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteSettingCountOrderByAggregateInput
    _max?: SiteSettingMaxOrderByAggregateInput
    _min?: SiteSettingMinOrderByAggregateInput
  }

  export type SiteSettingScalarWhereWithAggregatesInput = {
    AND?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    OR?: SiteSettingScalarWhereWithAggregatesInput[]
    NOT?: SiteSettingScalarWhereWithAggregatesInput | SiteSettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"SiteSetting"> | string
    value?: StringWithAggregatesFilter<"SiteSetting"> | string
    updatedById?: StringWithAggregatesFilter<"SiteSetting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteSetting"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    contentType?: StringFilter<"AuditLog"> | string
    contentId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    previousState?: JsonNullableFilter<"AuditLog">
    newState?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    contentType?: SortOrder
    contentId?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    previousState?: SortOrderInput | SortOrder
    newState?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    contentType?: StringFilter<"AuditLog"> | string
    contentId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    previousState?: JsonNullableFilter<"AuditLog">
    newState?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    contentType?: SortOrder
    contentId?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    previousState?: SortOrderInput | SortOrder
    newState?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    contentType?: StringWithAggregatesFilter<"AuditLog"> | string
    contentId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    previousState?: JsonNullableWithAggregatesFilter<"AuditLog">
    newState?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeen?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeen?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeen?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryCreateInput = {
    id?: string
    name: string
    articles?: NewsArticleCreateNestedManyWithoutCategoryInput
  }

  export type NewsCategoryUncheckedCreateInput = {
    id?: string
    name: string
    articles?: NewsArticleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type NewsCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    articles?: NewsArticleUpdateManyWithoutCategoryNestedInput
  }

  export type NewsCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    articles?: NewsArticleUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type NewsCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type NewsCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagCreateInput = {
    id?: string
    name: string
    articles?: ArticleTagCreateNestedManyWithoutTagInput
  }

  export type NewsTagUncheckedCreateInput = {
    id?: string
    name: string
    articles?: ArticleTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type NewsTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleTagUpdateManyWithoutTagNestedInput
  }

  export type NewsTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    articles?: ArticleTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type NewsTagCreateManyInput = {
    id?: string
    name: string
  }

  export type NewsTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleTagCreateInput = {
    article: NewsArticleCreateNestedOneWithoutTagsInput
    tag: NewsTagCreateNestedOneWithoutArticlesInput
  }

  export type ArticleTagUncheckedCreateInput = {
    articleId: string
    tagId: string
  }

  export type ArticleTagUpdateInput = {
    article?: NewsArticleUpdateOneRequiredWithoutTagsNestedInput
    tag?: NewsTagUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleTagUncheckedUpdateInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleTagCreateManyInput = {
    articleId: string
    tagId: string
  }

  export type ArticleTagUpdateManyMutationInput = {

  }

  export type ArticleTagUncheckedUpdateManyInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsArticleCreateInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status?: $Enums.ArticleStatus
    featured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category: NewsCategoryCreateNestedOneWithoutArticlesInput
    tags?: ArticleTagCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    categoryId: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status?: $Enums.ArticleStatus
    featured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tags?: ArticleTagUncheckedCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NewsCategoryUpdateOneRequiredWithoutArticlesNestedInput
    tags?: ArticleTagUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ArticleTagUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleCreateManyInput = {
    id?: string
    slug: string
    title: string
    categoryId: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status?: $Enums.ArticleStatus
    featured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NewsArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectTypeCreateInput = {
    id?: string
    name: string
    projects?: ProjectCreateNestedManyWithoutProjectTypeInput
  }

  export type ProjectTypeUncheckedCreateInput = {
    id?: string
    name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutProjectTypeInput
  }

  export type ProjectTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutProjectTypeNestedInput
  }

  export type ProjectTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutProjectTypeNestedInput
  }

  export type ProjectTypeCreateManyInput = {
    id?: string
    name: string
  }

  export type ProjectTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    lga: string
    community: string
    status?: $Enums.ProjectStatus
    year: number
    progress?: number
    beneficiaries: number
    description: string
    featuredImageUrl: string
    thumbnailUrl: string
    featured?: boolean
    completionDate?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    projectType: ProjectTypeCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    lga: string
    community: string
    typeId: string
    status?: $Enums.ProjectStatus
    year: number
    progress?: number
    beneficiaries: number
    description: string
    featuredImageUrl: string
    thumbnailUrl: string
    featured?: boolean
    completionDate?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    community?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    year?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    beneficiaries?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    community?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    year?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    beneficiaries?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    lga: string
    community: string
    typeId: string
    status?: $Enums.ProjectStatus
    year: number
    progress?: number
    beneficiaries: number
    description: string
    featuredImageUrl: string
    thumbnailUrl: string
    featured?: boolean
    completionDate?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    community?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    year?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    beneficiaries?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    community?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    year?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    beneficiaries?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GalleryCategoryCreateInput = {
    id?: string
    name: string
    items?: GalleryItemCreateNestedManyWithoutCategoryInput
  }

  export type GalleryCategoryUncheckedCreateInput = {
    id?: string
    name: string
    items?: GalleryItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type GalleryCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: GalleryItemUpdateManyWithoutCategoryNestedInput
  }

  export type GalleryCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: GalleryItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type GalleryCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type GalleryCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryItemCreateInput = {
    id?: string
    slug?: string
    title: string
    caption?: string
    location?: string
    year?: number
    description?: string
    imageUrl?: string
    optimisedUrl?: string
    thumbnailUrl?: string
    published?: boolean
    featured?: boolean
    displayOrder?: number
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category: GalleryCategoryCreateNestedOneWithoutItemsInput
  }

  export type GalleryItemUncheckedCreateInput = {
    id?: string
    slug?: string
    title: string
    categoryId: string
    caption?: string
    location?: string
    year?: number
    description?: string
    imageUrl?: string
    optimisedUrl?: string
    thumbnailUrl?: string
    published?: boolean
    featured?: boolean
    displayOrder?: number
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GalleryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    optimisedUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: GalleryCategoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type GalleryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    optimisedUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GalleryItemCreateManyInput = {
    id?: string
    slug?: string
    title: string
    categoryId: string
    caption?: string
    location?: string
    year?: number
    description?: string
    imageUrl?: string
    optimisedUrl?: string
    thumbnailUrl?: string
    published?: boolean
    featured?: boolean
    displayOrder?: number
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GalleryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    optimisedUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GalleryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    optimisedUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgramCreateInput = {
    id?: string
    slug: string
    title: string
    category: string
    status?: $Enums.ProgramStatus
    iconName: string
    tone?: $Enums.Tone
    summary: string
    description?: string
    objectives: JsonNullValueInput | InputJsonValue
    beneficiaries: string
    coverage: string
    leadUnit: string
    featuredImageUrl?: string | null
    bannerImageUrl?: string | null
    displayOrder?: number
    published?: boolean
    featured?: boolean
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProgramUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    category: string
    status?: $Enums.ProgramStatus
    iconName: string
    tone?: $Enums.Tone
    summary: string
    description?: string
    objectives: JsonNullValueInput | InputJsonValue
    beneficiaries: string
    coverage: string
    leadUnit: string
    featuredImageUrl?: string | null
    bannerImageUrl?: string | null
    displayOrder?: number
    published?: boolean
    featured?: boolean
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    iconName?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    objectives?: JsonNullValueInput | InputJsonValue
    beneficiaries?: StringFieldUpdateOperationsInput | string
    coverage?: StringFieldUpdateOperationsInput | string
    leadUnit?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    iconName?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    objectives?: JsonNullValueInput | InputJsonValue
    beneficiaries?: StringFieldUpdateOperationsInput | string
    coverage?: StringFieldUpdateOperationsInput | string
    leadUnit?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgramCreateManyInput = {
    id?: string
    slug: string
    title: string
    category: string
    status?: $Enums.ProgramStatus
    iconName: string
    tone?: $Enums.Tone
    summary: string
    description?: string
    objectives: JsonNullValueInput | InputJsonValue
    beneficiaries: string
    coverage: string
    leadUnit: string
    featuredImageUrl?: string | null
    bannerImageUrl?: string | null
    displayOrder?: number
    published?: boolean
    featured?: boolean
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    iconName?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    objectives?: JsonNullValueInput | InputJsonValue
    beneficiaries?: StringFieldUpdateOperationsInput | string
    coverage?: StringFieldUpdateOperationsInput | string
    leadUnit?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    iconName?: StringFieldUpdateOperationsInput | string
    tone?: EnumToneFieldUpdateOperationsInput | $Enums.Tone
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    objectives?: JsonNullValueInput | InputJsonValue
    beneficiaries?: StringFieldUpdateOperationsInput | string
    coverage?: StringFieldUpdateOperationsInput | string
    leadUnit?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactSubmissionCreateInput = {
    id?: string
    name: string
    phone?: string
    email: string
    subject: string
    enquiryType?: string
    message: string
    status?: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ContactSubmissionUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string
    email: string
    subject: string
    enquiryType?: string
    message: string
    status?: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ContactSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    enquiryType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    enquiryType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactSubmissionCreateManyInput = {
    id?: string
    name: string
    phone?: string
    email: string
    subject: string
    enquiryType?: string
    message: string
    status?: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ContactSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    enquiryType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    enquiryType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteSettingCreateInput = {
    key: string
    value: string
    updatedById: string
    updatedAt?: Date | string
  }

  export type SiteSettingUncheckedCreateInput = {
    key: string
    value: string
    updatedById: string
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingCreateManyInput = {
    key: string
    value: string
    updatedById: string
    updatedAt?: Date | string
  }

  export type SiteSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteSettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    contentType: string
    contentId: string
    action: string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    contentType: string
    contentId: string
    action: string
    actorId: string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    contentType: string
    contentId: string
    action: string
    actorId: string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    failedAttempts?: SortOrder
    lockedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    failedAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    failedAttempts?: SortOrder
    lockedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    failedAttempts?: SortOrder
    lockedAt?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    failedAttempts?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsArticleListRelationFilter = {
    every?: NewsArticleWhereInput
    some?: NewsArticleWhereInput
    none?: NewsArticleWhereInput
  }

  export type NewsArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type NewsCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type NewsCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ArticleTagListRelationFilter = {
    every?: ArticleTagWhereInput
    some?: ArticleTagWhereInput
    none?: ArticleTagWhereInput
  }

  export type ArticleTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type NewsTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type NewsTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type NewsArticleScalarRelationFilter = {
    is?: NewsArticleWhereInput
    isNot?: NewsArticleWhereInput
  }

  export type NewsTagScalarRelationFilter = {
    is?: NewsTagWhereInput
    isNot?: NewsTagWhereInput
  }

  export type ArticleTagArticleIdTagIdCompoundUniqueInput = {
    articleId: string
    tagId: string
  }

  export type ArticleTagCountOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type ArticleTagMaxOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type ArticleTagMinOrderByAggregateInput = {
    articleId?: SortOrder
    tagId?: SortOrder
  }

  export type EnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type NewsCategoryScalarRelationFilter = {
    is?: NewsCategoryWhereInput
    isNot?: NewsCategoryWhereInput
  }

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProjectTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProjectTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type ProjectTypeScalarRelationFilter = {
    is?: ProjectTypeWhereInput
    isNot?: ProjectTypeWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lga?: SortOrder
    community?: SortOrder
    typeId?: SortOrder
    status?: SortOrder
    year?: SortOrder
    progress?: SortOrder
    beneficiaries?: SortOrder
    description?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    featured?: SortOrder
    completionDate?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    year?: SortOrder
    progress?: SortOrder
    beneficiaries?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lga?: SortOrder
    community?: SortOrder
    typeId?: SortOrder
    status?: SortOrder
    year?: SortOrder
    progress?: SortOrder
    beneficiaries?: SortOrder
    description?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    featured?: SortOrder
    completionDate?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    lga?: SortOrder
    community?: SortOrder
    typeId?: SortOrder
    status?: SortOrder
    year?: SortOrder
    progress?: SortOrder
    beneficiaries?: SortOrder
    description?: SortOrder
    featuredImageUrl?: SortOrder
    thumbnailUrl?: SortOrder
    featured?: SortOrder
    completionDate?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    year?: SortOrder
    progress?: SortOrder
    beneficiaries?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type GalleryItemListRelationFilter = {
    every?: GalleryItemWhereInput
    some?: GalleryItemWhereInput
    none?: GalleryItemWhereInput
  }

  export type GalleryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalleryCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GalleryCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GalleryCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GalleryCategoryScalarRelationFilter = {
    is?: GalleryCategoryWhereInput
    isNot?: GalleryCategoryWhereInput
  }

  export type GalleryItemCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    year?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    optimisedUrl?: SortOrder
    thumbnailUrl?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    displayOrder?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GalleryItemAvgOrderByAggregateInput = {
    year?: SortOrder
    displayOrder?: SortOrder
  }

  export type GalleryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    year?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    optimisedUrl?: SortOrder
    thumbnailUrl?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    displayOrder?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GalleryItemMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    caption?: SortOrder
    location?: SortOrder
    year?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    optimisedUrl?: SortOrder
    thumbnailUrl?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    displayOrder?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GalleryItemSumOrderByAggregateInput = {
    year?: SortOrder
    displayOrder?: SortOrder
  }

  export type EnumProgramStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStatus | EnumProgramStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStatus[] | ListEnumProgramStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgramStatus[] | ListEnumProgramStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramStatusFilter<$PrismaModel> | $Enums.ProgramStatus
  }

  export type EnumToneFilter<$PrismaModel = never> = {
    equals?: $Enums.Tone | EnumToneFieldRefInput<$PrismaModel>
    in?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    not?: NestedEnumToneFilter<$PrismaModel> | $Enums.Tone
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    status?: SortOrder
    iconName?: SortOrder
    tone?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    objectives?: SortOrder
    beneficiaries?: SortOrder
    coverage?: SortOrder
    leadUnit?: SortOrder
    featuredImageUrl?: SortOrder
    bannerImageUrl?: SortOrder
    displayOrder?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    status?: SortOrder
    iconName?: SortOrder
    tone?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    beneficiaries?: SortOrder
    coverage?: SortOrder
    leadUnit?: SortOrder
    featuredImageUrl?: SortOrder
    bannerImageUrl?: SortOrder
    displayOrder?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    category?: SortOrder
    status?: SortOrder
    iconName?: SortOrder
    tone?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    beneficiaries?: SortOrder
    coverage?: SortOrder
    leadUnit?: SortOrder
    featuredImageUrl?: SortOrder
    bannerImageUrl?: SortOrder
    displayOrder?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type EnumProgramStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStatus | EnumProgramStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStatus[] | ListEnumProgramStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgramStatus[] | ListEnumProgramStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgramStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramStatusFilter<$PrismaModel>
    _max?: NestedEnumProgramStatusFilter<$PrismaModel>
  }

  export type EnumToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tone | EnumToneFieldRefInput<$PrismaModel>
    in?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    not?: NestedEnumToneWithAggregatesFilter<$PrismaModel> | $Enums.Tone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumToneFilter<$PrismaModel>
    _max?: NestedEnumToneFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ContactSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    enquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ContactSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    enquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ContactSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    enquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SiteSettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    contentType?: SortOrder
    contentId?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    previousState?: SortOrder
    newState?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    contentType?: SortOrder
    contentId?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    contentType?: SortOrder
    contentId?: SortOrder
    action?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NewsArticleCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput> | NewsArticleCreateWithoutCategoryInput[] | NewsArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCategoryInput | NewsArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsArticleCreateManyCategoryInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type NewsArticleUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput> | NewsArticleCreateWithoutCategoryInput[] | NewsArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCategoryInput | NewsArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsArticleCreateManyCategoryInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type NewsArticleUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput> | NewsArticleCreateWithoutCategoryInput[] | NewsArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCategoryInput | NewsArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutCategoryInput | NewsArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsArticleCreateManyCategoryInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutCategoryInput | NewsArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutCategoryInput | NewsArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type NewsArticleUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput> | NewsArticleCreateWithoutCategoryInput[] | NewsArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCategoryInput | NewsArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutCategoryInput | NewsArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsArticleCreateManyCategoryInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutCategoryInput | NewsArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutCategoryInput | NewsArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type ArticleTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ArticleTagCreateWithoutTagInput, ArticleTagUncheckedCreateWithoutTagInput> | ArticleTagCreateWithoutTagInput[] | ArticleTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ArticleTagCreateOrConnectWithoutTagInput | ArticleTagCreateOrConnectWithoutTagInput[]
    createMany?: ArticleTagCreateManyTagInputEnvelope
    connect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
  }

  export type ArticleTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ArticleTagCreateWithoutTagInput, ArticleTagUncheckedCreateWithoutTagInput> | ArticleTagCreateWithoutTagInput[] | ArticleTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ArticleTagCreateOrConnectWithoutTagInput | ArticleTagCreateOrConnectWithoutTagInput[]
    createMany?: ArticleTagCreateManyTagInputEnvelope
    connect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
  }

  export type ArticleTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ArticleTagCreateWithoutTagInput, ArticleTagUncheckedCreateWithoutTagInput> | ArticleTagCreateWithoutTagInput[] | ArticleTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ArticleTagCreateOrConnectWithoutTagInput | ArticleTagCreateOrConnectWithoutTagInput[]
    upsert?: ArticleTagUpsertWithWhereUniqueWithoutTagInput | ArticleTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ArticleTagCreateManyTagInputEnvelope
    set?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    disconnect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    delete?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    connect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    update?: ArticleTagUpdateWithWhereUniqueWithoutTagInput | ArticleTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ArticleTagUpdateManyWithWhereWithoutTagInput | ArticleTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ArticleTagScalarWhereInput | ArticleTagScalarWhereInput[]
  }

  export type ArticleTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ArticleTagCreateWithoutTagInput, ArticleTagUncheckedCreateWithoutTagInput> | ArticleTagCreateWithoutTagInput[] | ArticleTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ArticleTagCreateOrConnectWithoutTagInput | ArticleTagCreateOrConnectWithoutTagInput[]
    upsert?: ArticleTagUpsertWithWhereUniqueWithoutTagInput | ArticleTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ArticleTagCreateManyTagInputEnvelope
    set?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    disconnect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    delete?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    connect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    update?: ArticleTagUpdateWithWhereUniqueWithoutTagInput | ArticleTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ArticleTagUpdateManyWithWhereWithoutTagInput | ArticleTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ArticleTagScalarWhereInput | ArticleTagScalarWhereInput[]
  }

  export type NewsArticleCreateNestedOneWithoutTagsInput = {
    create?: XOR<NewsArticleCreateWithoutTagsInput, NewsArticleUncheckedCreateWithoutTagsInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutTagsInput
    connect?: NewsArticleWhereUniqueInput
  }

  export type NewsTagCreateNestedOneWithoutArticlesInput = {
    create?: XOR<NewsTagCreateWithoutArticlesInput, NewsTagUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: NewsTagCreateOrConnectWithoutArticlesInput
    connect?: NewsTagWhereUniqueInput
  }

  export type NewsArticleUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<NewsArticleCreateWithoutTagsInput, NewsArticleUncheckedCreateWithoutTagsInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutTagsInput
    upsert?: NewsArticleUpsertWithoutTagsInput
    connect?: NewsArticleWhereUniqueInput
    update?: XOR<XOR<NewsArticleUpdateToOneWithWhereWithoutTagsInput, NewsArticleUpdateWithoutTagsInput>, NewsArticleUncheckedUpdateWithoutTagsInput>
  }

  export type NewsTagUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<NewsTagCreateWithoutArticlesInput, NewsTagUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: NewsTagCreateOrConnectWithoutArticlesInput
    upsert?: NewsTagUpsertWithoutArticlesInput
    connect?: NewsTagWhereUniqueInput
    update?: XOR<XOR<NewsTagUpdateToOneWithWhereWithoutArticlesInput, NewsTagUpdateWithoutArticlesInput>, NewsTagUncheckedUpdateWithoutArticlesInput>
  }

  export type NewsCategoryCreateNestedOneWithoutArticlesInput = {
    create?: XOR<NewsCategoryCreateWithoutArticlesInput, NewsCategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: NewsCategoryCreateOrConnectWithoutArticlesInput
    connect?: NewsCategoryWhereUniqueInput
  }

  export type ArticleTagCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleTagCreateWithoutArticleInput, ArticleTagUncheckedCreateWithoutArticleInput> | ArticleTagCreateWithoutArticleInput[] | ArticleTagUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleTagCreateOrConnectWithoutArticleInput | ArticleTagCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleTagCreateManyArticleInputEnvelope
    connect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
  }

  export type ArticleTagUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleTagCreateWithoutArticleInput, ArticleTagUncheckedCreateWithoutArticleInput> | ArticleTagCreateWithoutArticleInput[] | ArticleTagUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleTagCreateOrConnectWithoutArticleInput | ArticleTagCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleTagCreateManyArticleInputEnvelope
    connect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
  }

  export type EnumArticleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ArticleStatus
  }

  export type NewsCategoryUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<NewsCategoryCreateWithoutArticlesInput, NewsCategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: NewsCategoryCreateOrConnectWithoutArticlesInput
    upsert?: NewsCategoryUpsertWithoutArticlesInput
    connect?: NewsCategoryWhereUniqueInput
    update?: XOR<XOR<NewsCategoryUpdateToOneWithWhereWithoutArticlesInput, NewsCategoryUpdateWithoutArticlesInput>, NewsCategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticleTagUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleTagCreateWithoutArticleInput, ArticleTagUncheckedCreateWithoutArticleInput> | ArticleTagCreateWithoutArticleInput[] | ArticleTagUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleTagCreateOrConnectWithoutArticleInput | ArticleTagCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleTagUpsertWithWhereUniqueWithoutArticleInput | ArticleTagUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleTagCreateManyArticleInputEnvelope
    set?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    disconnect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    delete?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    connect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    update?: ArticleTagUpdateWithWhereUniqueWithoutArticleInput | ArticleTagUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleTagUpdateManyWithWhereWithoutArticleInput | ArticleTagUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleTagScalarWhereInput | ArticleTagScalarWhereInput[]
  }

  export type ArticleTagUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleTagCreateWithoutArticleInput, ArticleTagUncheckedCreateWithoutArticleInput> | ArticleTagCreateWithoutArticleInput[] | ArticleTagUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleTagCreateOrConnectWithoutArticleInput | ArticleTagCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleTagUpsertWithWhereUniqueWithoutArticleInput | ArticleTagUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleTagCreateManyArticleInputEnvelope
    set?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    disconnect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    delete?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    connect?: ArticleTagWhereUniqueInput | ArticleTagWhereUniqueInput[]
    update?: ArticleTagUpdateWithWhereUniqueWithoutArticleInput | ArticleTagUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleTagUpdateManyWithWhereWithoutArticleInput | ArticleTagUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleTagScalarWhereInput | ArticleTagScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutProjectTypeInput = {
    create?: XOR<ProjectCreateWithoutProjectTypeInput, ProjectUncheckedCreateWithoutProjectTypeInput> | ProjectCreateWithoutProjectTypeInput[] | ProjectUncheckedCreateWithoutProjectTypeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectTypeInput | ProjectCreateOrConnectWithoutProjectTypeInput[]
    createMany?: ProjectCreateManyProjectTypeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutProjectTypeInput = {
    create?: XOR<ProjectCreateWithoutProjectTypeInput, ProjectUncheckedCreateWithoutProjectTypeInput> | ProjectCreateWithoutProjectTypeInput[] | ProjectUncheckedCreateWithoutProjectTypeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectTypeInput | ProjectCreateOrConnectWithoutProjectTypeInput[]
    createMany?: ProjectCreateManyProjectTypeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutProjectTypeNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectTypeInput, ProjectUncheckedCreateWithoutProjectTypeInput> | ProjectCreateWithoutProjectTypeInput[] | ProjectUncheckedCreateWithoutProjectTypeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectTypeInput | ProjectCreateOrConnectWithoutProjectTypeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectTypeInput | ProjectUpsertWithWhereUniqueWithoutProjectTypeInput[]
    createMany?: ProjectCreateManyProjectTypeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectTypeInput | ProjectUpdateWithWhereUniqueWithoutProjectTypeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectTypeInput | ProjectUpdateManyWithWhereWithoutProjectTypeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutProjectTypeNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectTypeInput, ProjectUncheckedCreateWithoutProjectTypeInput> | ProjectCreateWithoutProjectTypeInput[] | ProjectUncheckedCreateWithoutProjectTypeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectTypeInput | ProjectCreateOrConnectWithoutProjectTypeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectTypeInput | ProjectUpsertWithWhereUniqueWithoutProjectTypeInput[]
    createMany?: ProjectCreateManyProjectTypeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectTypeInput | ProjectUpdateWithWhereUniqueWithoutProjectTypeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectTypeInput | ProjectUpdateManyWithWhereWithoutProjectTypeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectTypeCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ProjectTypeCreateWithoutProjectsInput, ProjectTypeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectTypeCreateOrConnectWithoutProjectsInput
    connect?: ProjectTypeWhereUniqueInput
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type ProjectTypeUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ProjectTypeCreateWithoutProjectsInput, ProjectTypeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectTypeCreateOrConnectWithoutProjectsInput
    upsert?: ProjectTypeUpsertWithoutProjectsInput
    connect?: ProjectTypeWhereUniqueInput
    update?: XOR<XOR<ProjectTypeUpdateToOneWithWhereWithoutProjectsInput, ProjectTypeUpdateWithoutProjectsInput>, ProjectTypeUncheckedUpdateWithoutProjectsInput>
  }

  export type GalleryItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GalleryItemCreateWithoutCategoryInput, GalleryItemUncheckedCreateWithoutCategoryInput> | GalleryItemCreateWithoutCategoryInput[] | GalleryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GalleryItemCreateOrConnectWithoutCategoryInput | GalleryItemCreateOrConnectWithoutCategoryInput[]
    createMany?: GalleryItemCreateManyCategoryInputEnvelope
    connect?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
  }

  export type GalleryItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GalleryItemCreateWithoutCategoryInput, GalleryItemUncheckedCreateWithoutCategoryInput> | GalleryItemCreateWithoutCategoryInput[] | GalleryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GalleryItemCreateOrConnectWithoutCategoryInput | GalleryItemCreateOrConnectWithoutCategoryInput[]
    createMany?: GalleryItemCreateManyCategoryInputEnvelope
    connect?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
  }

  export type GalleryItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GalleryItemCreateWithoutCategoryInput, GalleryItemUncheckedCreateWithoutCategoryInput> | GalleryItemCreateWithoutCategoryInput[] | GalleryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GalleryItemCreateOrConnectWithoutCategoryInput | GalleryItemCreateOrConnectWithoutCategoryInput[]
    upsert?: GalleryItemUpsertWithWhereUniqueWithoutCategoryInput | GalleryItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GalleryItemCreateManyCategoryInputEnvelope
    set?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
    disconnect?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
    delete?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
    connect?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
    update?: GalleryItemUpdateWithWhereUniqueWithoutCategoryInput | GalleryItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GalleryItemUpdateManyWithWhereWithoutCategoryInput | GalleryItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GalleryItemScalarWhereInput | GalleryItemScalarWhereInput[]
  }

  export type GalleryItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GalleryItemCreateWithoutCategoryInput, GalleryItemUncheckedCreateWithoutCategoryInput> | GalleryItemCreateWithoutCategoryInput[] | GalleryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GalleryItemCreateOrConnectWithoutCategoryInput | GalleryItemCreateOrConnectWithoutCategoryInput[]
    upsert?: GalleryItemUpsertWithWhereUniqueWithoutCategoryInput | GalleryItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GalleryItemCreateManyCategoryInputEnvelope
    set?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
    disconnect?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
    delete?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
    connect?: GalleryItemWhereUniqueInput | GalleryItemWhereUniqueInput[]
    update?: GalleryItemUpdateWithWhereUniqueWithoutCategoryInput | GalleryItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GalleryItemUpdateManyWithWhereWithoutCategoryInput | GalleryItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GalleryItemScalarWhereInput | GalleryItemScalarWhereInput[]
  }

  export type GalleryCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<GalleryCategoryCreateWithoutItemsInput, GalleryCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: GalleryCategoryCreateOrConnectWithoutItemsInput
    connect?: GalleryCategoryWhereUniqueInput
  }

  export type GalleryCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<GalleryCategoryCreateWithoutItemsInput, GalleryCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: GalleryCategoryCreateOrConnectWithoutItemsInput
    upsert?: GalleryCategoryUpsertWithoutItemsInput
    connect?: GalleryCategoryWhereUniqueInput
    update?: XOR<XOR<GalleryCategoryUpdateToOneWithWhereWithoutItemsInput, GalleryCategoryUpdateWithoutItemsInput>, GalleryCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type EnumProgramStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgramStatus
  }

  export type EnumToneFieldUpdateOperationsInput = {
    set?: $Enums.Tone
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumProgramStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStatus | EnumProgramStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStatus[] | ListEnumProgramStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgramStatus[] | ListEnumProgramStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramStatusFilter<$PrismaModel> | $Enums.ProgramStatus
  }

  export type NestedEnumToneFilter<$PrismaModel = never> = {
    equals?: $Enums.Tone | EnumToneFieldRefInput<$PrismaModel>
    in?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    not?: NestedEnumToneFilter<$PrismaModel> | $Enums.Tone
  }

  export type NestedEnumProgramStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStatus | EnumProgramStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStatus[] | ListEnumProgramStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgramStatus[] | ListEnumProgramStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgramStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgramStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramStatusFilter<$PrismaModel>
    _max?: NestedEnumProgramStatusFilter<$PrismaModel>
  }

  export type NestedEnumToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tone | EnumToneFieldRefInput<$PrismaModel>
    in?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tone[] | ListEnumToneFieldRefInput<$PrismaModel>
    not?: NestedEnumToneWithAggregatesFilter<$PrismaModel> | $Enums.Tone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumToneFilter<$PrismaModel>
    _max?: NestedEnumToneFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutCreatedUsersInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutCreatedByInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutCreatedByInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserCreateManyCreatedByInputEnvelope = {
    data: UserCreateManyCreatedByInput | UserCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeen?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeen?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    contentType: string
    contentId: string
    action: string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    contentType: string
    contentId: string
    action: string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    failedAttempts?: IntFilter<"User"> | number
    lockedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdById?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastSeen?: DateTimeFilter<"Session"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    contentType?: StringFilter<"AuditLog"> | string
    contentId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    previousState?: JsonNullableFilter<"AuditLog">
    newState?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type NewsArticleCreateWithoutCategoryInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status?: $Enums.ArticleStatus
    featured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tags?: ArticleTagCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleUncheckedCreateWithoutCategoryInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status?: $Enums.ArticleStatus
    featured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tags?: ArticleTagUncheckedCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleCreateOrConnectWithoutCategoryInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput>
  }

  export type NewsArticleCreateManyCategoryInputEnvelope = {
    data: NewsArticleCreateManyCategoryInput | NewsArticleCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NewsArticleWhereUniqueInput
    update: XOR<NewsArticleUpdateWithoutCategoryInput, NewsArticleUncheckedUpdateWithoutCategoryInput>
    create: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput>
  }

  export type NewsArticleUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NewsArticleWhereUniqueInput
    data: XOR<NewsArticleUpdateWithoutCategoryInput, NewsArticleUncheckedUpdateWithoutCategoryInput>
  }

  export type NewsArticleUpdateManyWithWhereWithoutCategoryInput = {
    where: NewsArticleScalarWhereInput
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyWithoutCategoryInput>
  }

  export type NewsArticleScalarWhereInput = {
    AND?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    OR?: NewsArticleScalarWhereInput[]
    NOT?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    slug?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    categoryId?: StringFilter<"NewsArticle"> | string
    excerpt?: StringFilter<"NewsArticle"> | string
    body?: StringFilter<"NewsArticle"> | string
    featuredImageUrl?: StringFilter<"NewsArticle"> | string
    thumbnailUrl?: StringFilter<"NewsArticle"> | string
    status?: EnumArticleStatusFilter<"NewsArticle"> | $Enums.ArticleStatus
    featured?: BoolFilter<"NewsArticle"> | boolean
    scheduledAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    createdById?: StringFilter<"NewsArticle"> | string
    updatedById?: StringFilter<"NewsArticle"> | string
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    deletedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
  }

  export type ArticleTagCreateWithoutTagInput = {
    article: NewsArticleCreateNestedOneWithoutTagsInput
  }

  export type ArticleTagUncheckedCreateWithoutTagInput = {
    articleId: string
  }

  export type ArticleTagCreateOrConnectWithoutTagInput = {
    where: ArticleTagWhereUniqueInput
    create: XOR<ArticleTagCreateWithoutTagInput, ArticleTagUncheckedCreateWithoutTagInput>
  }

  export type ArticleTagCreateManyTagInputEnvelope = {
    data: ArticleTagCreateManyTagInput | ArticleTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ArticleTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ArticleTagWhereUniqueInput
    update: XOR<ArticleTagUpdateWithoutTagInput, ArticleTagUncheckedUpdateWithoutTagInput>
    create: XOR<ArticleTagCreateWithoutTagInput, ArticleTagUncheckedCreateWithoutTagInput>
  }

  export type ArticleTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ArticleTagWhereUniqueInput
    data: XOR<ArticleTagUpdateWithoutTagInput, ArticleTagUncheckedUpdateWithoutTagInput>
  }

  export type ArticleTagUpdateManyWithWhereWithoutTagInput = {
    where: ArticleTagScalarWhereInput
    data: XOR<ArticleTagUpdateManyMutationInput, ArticleTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ArticleTagScalarWhereInput = {
    AND?: ArticleTagScalarWhereInput | ArticleTagScalarWhereInput[]
    OR?: ArticleTagScalarWhereInput[]
    NOT?: ArticleTagScalarWhereInput | ArticleTagScalarWhereInput[]
    articleId?: StringFilter<"ArticleTag"> | string
    tagId?: StringFilter<"ArticleTag"> | string
  }

  export type NewsArticleCreateWithoutTagsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status?: $Enums.ArticleStatus
    featured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category: NewsCategoryCreateNestedOneWithoutArticlesInput
  }

  export type NewsArticleUncheckedCreateWithoutTagsInput = {
    id?: string
    slug: string
    title: string
    categoryId: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status?: $Enums.ArticleStatus
    featured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NewsArticleCreateOrConnectWithoutTagsInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutTagsInput, NewsArticleUncheckedCreateWithoutTagsInput>
  }

  export type NewsTagCreateWithoutArticlesInput = {
    id?: string
    name: string
  }

  export type NewsTagUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
  }

  export type NewsTagCreateOrConnectWithoutArticlesInput = {
    where: NewsTagWhereUniqueInput
    create: XOR<NewsTagCreateWithoutArticlesInput, NewsTagUncheckedCreateWithoutArticlesInput>
  }

  export type NewsArticleUpsertWithoutTagsInput = {
    update: XOR<NewsArticleUpdateWithoutTagsInput, NewsArticleUncheckedUpdateWithoutTagsInput>
    create: XOR<NewsArticleCreateWithoutTagsInput, NewsArticleUncheckedCreateWithoutTagsInput>
    where?: NewsArticleWhereInput
  }

  export type NewsArticleUpdateToOneWithWhereWithoutTagsInput = {
    where?: NewsArticleWhereInput
    data: XOR<NewsArticleUpdateWithoutTagsInput, NewsArticleUncheckedUpdateWithoutTagsInput>
  }

  export type NewsArticleUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NewsCategoryUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsTagUpsertWithoutArticlesInput = {
    update: XOR<NewsTagUpdateWithoutArticlesInput, NewsTagUncheckedUpdateWithoutArticlesInput>
    create: XOR<NewsTagCreateWithoutArticlesInput, NewsTagUncheckedCreateWithoutArticlesInput>
    where?: NewsTagWhereInput
  }

  export type NewsTagUpdateToOneWithWhereWithoutArticlesInput = {
    where?: NewsTagWhereInput
    data: XOR<NewsTagUpdateWithoutArticlesInput, NewsTagUncheckedUpdateWithoutArticlesInput>
  }

  export type NewsTagUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NewsTagUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCategoryCreateWithoutArticlesInput = {
    id?: string
    name: string
  }

  export type NewsCategoryUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
  }

  export type NewsCategoryCreateOrConnectWithoutArticlesInput = {
    where: NewsCategoryWhereUniqueInput
    create: XOR<NewsCategoryCreateWithoutArticlesInput, NewsCategoryUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleTagCreateWithoutArticleInput = {
    tag: NewsTagCreateNestedOneWithoutArticlesInput
  }

  export type ArticleTagUncheckedCreateWithoutArticleInput = {
    tagId: string
  }

  export type ArticleTagCreateOrConnectWithoutArticleInput = {
    where: ArticleTagWhereUniqueInput
    create: XOR<ArticleTagCreateWithoutArticleInput, ArticleTagUncheckedCreateWithoutArticleInput>
  }

  export type ArticleTagCreateManyArticleInputEnvelope = {
    data: ArticleTagCreateManyArticleInput | ArticleTagCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type NewsCategoryUpsertWithoutArticlesInput = {
    update: XOR<NewsCategoryUpdateWithoutArticlesInput, NewsCategoryUncheckedUpdateWithoutArticlesInput>
    create: XOR<NewsCategoryCreateWithoutArticlesInput, NewsCategoryUncheckedCreateWithoutArticlesInput>
    where?: NewsCategoryWhereInput
  }

  export type NewsCategoryUpdateToOneWithWhereWithoutArticlesInput = {
    where?: NewsCategoryWhereInput
    data: XOR<NewsCategoryUpdateWithoutArticlesInput, NewsCategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type NewsCategoryUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCategoryUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleTagUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleTagWhereUniqueInput
    update: XOR<ArticleTagUpdateWithoutArticleInput, ArticleTagUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleTagCreateWithoutArticleInput, ArticleTagUncheckedCreateWithoutArticleInput>
  }

  export type ArticleTagUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleTagWhereUniqueInput
    data: XOR<ArticleTagUpdateWithoutArticleInput, ArticleTagUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleTagUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleTagScalarWhereInput
    data: XOR<ArticleTagUpdateManyMutationInput, ArticleTagUncheckedUpdateManyWithoutArticleInput>
  }

  export type ProjectCreateWithoutProjectTypeInput = {
    id?: string
    title: string
    lga: string
    community: string
    status?: $Enums.ProjectStatus
    year: number
    progress?: number
    beneficiaries: number
    description: string
    featuredImageUrl: string
    thumbnailUrl: string
    featured?: boolean
    completionDate?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProjectUncheckedCreateWithoutProjectTypeInput = {
    id?: string
    title: string
    lga: string
    community: string
    status?: $Enums.ProjectStatus
    year: number
    progress?: number
    beneficiaries: number
    description: string
    featuredImageUrl: string
    thumbnailUrl: string
    featured?: boolean
    completionDate?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProjectCreateOrConnectWithoutProjectTypeInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectTypeInput, ProjectUncheckedCreateWithoutProjectTypeInput>
  }

  export type ProjectCreateManyProjectTypeInputEnvelope = {
    data: ProjectCreateManyProjectTypeInput | ProjectCreateManyProjectTypeInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutProjectTypeInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutProjectTypeInput, ProjectUncheckedUpdateWithoutProjectTypeInput>
    create: XOR<ProjectCreateWithoutProjectTypeInput, ProjectUncheckedCreateWithoutProjectTypeInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutProjectTypeInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutProjectTypeInput, ProjectUncheckedUpdateWithoutProjectTypeInput>
  }

  export type ProjectUpdateManyWithWhereWithoutProjectTypeInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectTypeInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    lga?: StringFilter<"Project"> | string
    community?: StringFilter<"Project"> | string
    typeId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    year?: IntFilter<"Project"> | number
    progress?: IntFilter<"Project"> | number
    beneficiaries?: IntFilter<"Project"> | number
    description?: StringFilter<"Project"> | string
    featuredImageUrl?: StringFilter<"Project"> | string
    thumbnailUrl?: StringFilter<"Project"> | string
    featured?: BoolFilter<"Project"> | boolean
    completionDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdById?: StringFilter<"Project"> | string
    updatedById?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
  }

  export type ProjectTypeCreateWithoutProjectsInput = {
    id?: string
    name: string
  }

  export type ProjectTypeUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
  }

  export type ProjectTypeCreateOrConnectWithoutProjectsInput = {
    where: ProjectTypeWhereUniqueInput
    create: XOR<ProjectTypeCreateWithoutProjectsInput, ProjectTypeUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectTypeUpsertWithoutProjectsInput = {
    update: XOR<ProjectTypeUpdateWithoutProjectsInput, ProjectTypeUncheckedUpdateWithoutProjectsInput>
    create: XOR<ProjectTypeCreateWithoutProjectsInput, ProjectTypeUncheckedCreateWithoutProjectsInput>
    where?: ProjectTypeWhereInput
  }

  export type ProjectTypeUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ProjectTypeWhereInput
    data: XOR<ProjectTypeUpdateWithoutProjectsInput, ProjectTypeUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectTypeUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTypeUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryItemCreateWithoutCategoryInput = {
    id?: string
    slug?: string
    title: string
    caption?: string
    location?: string
    year?: number
    description?: string
    imageUrl?: string
    optimisedUrl?: string
    thumbnailUrl?: string
    published?: boolean
    featured?: boolean
    displayOrder?: number
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GalleryItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    slug?: string
    title: string
    caption?: string
    location?: string
    year?: number
    description?: string
    imageUrl?: string
    optimisedUrl?: string
    thumbnailUrl?: string
    published?: boolean
    featured?: boolean
    displayOrder?: number
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GalleryItemCreateOrConnectWithoutCategoryInput = {
    where: GalleryItemWhereUniqueInput
    create: XOR<GalleryItemCreateWithoutCategoryInput, GalleryItemUncheckedCreateWithoutCategoryInput>
  }

  export type GalleryItemCreateManyCategoryInputEnvelope = {
    data: GalleryItemCreateManyCategoryInput | GalleryItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type GalleryItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: GalleryItemWhereUniqueInput
    update: XOR<GalleryItemUpdateWithoutCategoryInput, GalleryItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<GalleryItemCreateWithoutCategoryInput, GalleryItemUncheckedCreateWithoutCategoryInput>
  }

  export type GalleryItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: GalleryItemWhereUniqueInput
    data: XOR<GalleryItemUpdateWithoutCategoryInput, GalleryItemUncheckedUpdateWithoutCategoryInput>
  }

  export type GalleryItemUpdateManyWithWhereWithoutCategoryInput = {
    where: GalleryItemScalarWhereInput
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type GalleryItemScalarWhereInput = {
    AND?: GalleryItemScalarWhereInput | GalleryItemScalarWhereInput[]
    OR?: GalleryItemScalarWhereInput[]
    NOT?: GalleryItemScalarWhereInput | GalleryItemScalarWhereInput[]
    id?: StringFilter<"GalleryItem"> | string
    slug?: StringFilter<"GalleryItem"> | string
    title?: StringFilter<"GalleryItem"> | string
    categoryId?: StringFilter<"GalleryItem"> | string
    caption?: StringFilter<"GalleryItem"> | string
    location?: StringFilter<"GalleryItem"> | string
    year?: IntFilter<"GalleryItem"> | number
    description?: StringFilter<"GalleryItem"> | string
    imageUrl?: StringFilter<"GalleryItem"> | string
    optimisedUrl?: StringFilter<"GalleryItem"> | string
    thumbnailUrl?: StringFilter<"GalleryItem"> | string
    published?: BoolFilter<"GalleryItem"> | boolean
    featured?: BoolFilter<"GalleryItem"> | boolean
    displayOrder?: IntFilter<"GalleryItem"> | number
    createdById?: StringFilter<"GalleryItem"> | string
    updatedById?: StringFilter<"GalleryItem"> | string
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"GalleryItem"> | Date | string | null
  }

  export type GalleryCategoryCreateWithoutItemsInput = {
    id?: string
    name: string
  }

  export type GalleryCategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
  }

  export type GalleryCategoryCreateOrConnectWithoutItemsInput = {
    where: GalleryCategoryWhereUniqueInput
    create: XOR<GalleryCategoryCreateWithoutItemsInput, GalleryCategoryUncheckedCreateWithoutItemsInput>
  }

  export type GalleryCategoryUpsertWithoutItemsInput = {
    update: XOR<GalleryCategoryUpdateWithoutItemsInput, GalleryCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<GalleryCategoryCreateWithoutItemsInput, GalleryCategoryUncheckedCreateWithoutItemsInput>
    where?: GalleryCategoryWhereInput
  }

  export type GalleryCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: GalleryCategoryWhereInput
    data: XOR<GalleryCategoryUpdateWithoutItemsInput, GalleryCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type GalleryCategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GalleryCategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyCreatedByInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active?: boolean
    failedAttempts?: number
    lockedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastSeen?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    contentType: string
    contentId: string
    action: string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    failedAttempts?: IntFieldUpdateOperationsInput | number
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    previousState?: NullableJsonNullValueInput | InputJsonValue
    newState?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleCreateManyCategoryInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    featuredImageUrl: string
    thumbnailUrl: string
    status?: $Enums.ArticleStatus
    featured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NewsArticleUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ArticleTagUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ArticleTagUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleTagCreateManyTagInput = {
    articleId: string
  }

  export type ArticleTagUpdateWithoutTagInput = {
    article?: NewsArticleUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ArticleTagUncheckedUpdateWithoutTagInput = {
    articleId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleTagUncheckedUpdateManyWithoutTagInput = {
    articleId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleTagCreateManyArticleInput = {
    tagId: string
  }

  export type ArticleTagUpdateWithoutArticleInput = {
    tag?: NewsTagUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleTagUncheckedUpdateWithoutArticleInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleTagUncheckedUpdateManyWithoutArticleInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyProjectTypeInput = {
    id?: string
    title: string
    lga: string
    community: string
    status?: $Enums.ProjectStatus
    year: number
    progress?: number
    beneficiaries: number
    description: string
    featuredImageUrl: string
    thumbnailUrl: string
    featured?: boolean
    completionDate?: Date | string | null
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProjectUpdateWithoutProjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    community?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    year?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    beneficiaries?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateWithoutProjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    community?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    year?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    beneficiaries?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyWithoutProjectTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    community?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    year?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    beneficiaries?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    featuredImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    completionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GalleryItemCreateManyCategoryInput = {
    id?: string
    slug?: string
    title: string
    caption?: string
    location?: string
    year?: number
    description?: string
    imageUrl?: string
    optimisedUrl?: string
    thumbnailUrl?: string
    published?: boolean
    featured?: boolean
    displayOrder?: number
    createdById: string
    updatedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GalleryItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    optimisedUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GalleryItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    optimisedUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GalleryItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    optimisedUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    updatedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}