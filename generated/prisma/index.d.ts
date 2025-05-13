
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
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Profissional
 * 
 */
export type Profissional = $Result.DefaultSelection<Prisma.$ProfissionalPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Clinica
 * 
 */
export type Clinica = $Result.DefaultSelection<Prisma.$ClinicaPayload>
/**
 * Model DiaSemana
 * 
 */
export type DiaSemana = $Result.DefaultSelection<Prisma.$DiaSemanaPayload>
/**
 * Model Disponibilidade
 * 
 */
export type Disponibilidade = $Result.DefaultSelection<Prisma.$DisponibilidadePayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>
/**
 * Model EnderecoUsuario
 * 
 */
export type EnderecoUsuario = $Result.DefaultSelection<Prisma.$EnderecoUsuarioPayload>
/**
 * Model EnderecoClinica
 * 
 */
export type EnderecoClinica = $Result.DefaultSelection<Prisma.$EnderecoClinicaPayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>
/**
 * Model HistoricoMedico
 * 
 */
export type HistoricoMedico = $Result.DefaultSelection<Prisma.$HistoricoMedicoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoRegistro: {
  CRM: 'CRM',
  CRN: 'CRN',
  CREFITO: 'CREFITO',
  CRP: 'CRP'
};

export type TipoRegistro = (typeof TipoRegistro)[keyof typeof TipoRegistro]

}

export type TipoRegistro = $Enums.TipoRegistro

export const TipoRegistro: typeof $Enums.TipoRegistro

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.paciente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.paciente.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional`: Exposes CRUD operations for the **Profissional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionals
    * const profissionals = await prisma.profissional.findMany()
    * ```
    */
  get profissional(): Prisma.ProfissionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinica`: Exposes CRUD operations for the **Clinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinicas
    * const clinicas = await prisma.clinica.findMany()
    * ```
    */
  get clinica(): Prisma.ClinicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diaSemana`: Exposes CRUD operations for the **DiaSemana** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiaSemanas
    * const diaSemanas = await prisma.diaSemana.findMany()
    * ```
    */
  get diaSemana(): Prisma.DiaSemanaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibilidade`: Exposes CRUD operations for the **Disponibilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilidades
    * const disponibilidades = await prisma.disponibilidade.findMany()
    * ```
    */
  get disponibilidade(): Prisma.DisponibilidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enderecoUsuario`: Exposes CRUD operations for the **EnderecoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnderecoUsuarios
    * const enderecoUsuarios = await prisma.enderecoUsuario.findMany()
    * ```
    */
  get enderecoUsuario(): Prisma.EnderecoUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enderecoClinica`: Exposes CRUD operations for the **EnderecoClinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnderecoClinicas
    * const enderecoClinicas = await prisma.enderecoClinica.findMany()
    * ```
    */
  get enderecoClinica(): Prisma.EnderecoClinicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoMedico`: Exposes CRUD operations for the **HistoricoMedico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoMedicos
    * const historicoMedicos = await prisma.historicoMedico.findMany()
    * ```
    */
  get historicoMedico(): Prisma.HistoricoMedicoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Paciente: 'Paciente',
    Profissional: 'Profissional',
    Usuario: 'Usuario',
    Clinica: 'Clinica',
    DiaSemana: 'DiaSemana',
    Disponibilidade: 'Disponibilidade',
    Endereco: 'Endereco',
    EnderecoUsuario: 'EnderecoUsuario',
    EnderecoClinica: 'EnderecoClinica',
    Consulta: 'Consulta',
    HistoricoMedico: 'HistoricoMedico'
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
      modelProps: "paciente" | "profissional" | "usuario" | "clinica" | "diaSemana" | "disponibilidade" | "endereco" | "enderecoUsuario" | "enderecoClinica" | "consulta" | "historicoMedico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Profissional: {
        payload: Prisma.$ProfissionalPayload<ExtArgs>
        fields: Prisma.ProfissionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfissionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfissionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findFirst: {
            args: Prisma.ProfissionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfissionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findMany: {
            args: Prisma.ProfissionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          create: {
            args: Prisma.ProfissionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          createMany: {
            args: Prisma.ProfissionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfissionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          delete: {
            args: Prisma.ProfissionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          update: {
            args: Prisma.ProfissionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfissionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfissionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfissionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfissionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          aggregate: {
            args: Prisma.ProfissionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional>
          }
          groupBy: {
            args: Prisma.ProfissionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfissionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Clinica: {
        payload: Prisma.$ClinicaPayload<ExtArgs>
        fields: Prisma.ClinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          findFirst: {
            args: Prisma.ClinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          findMany: {
            args: Prisma.ClinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>[]
          }
          create: {
            args: Prisma.ClinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          createMany: {
            args: Prisma.ClinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>[]
          }
          delete: {
            args: Prisma.ClinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          update: {
            args: Prisma.ClinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          deleteMany: {
            args: Prisma.ClinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>[]
          }
          upsert: {
            args: Prisma.ClinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          aggregate: {
            args: Prisma.ClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinica>
          }
          groupBy: {
            args: Prisma.ClinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicaCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicaCountAggregateOutputType> | number
          }
        }
      }
      DiaSemana: {
        payload: Prisma.$DiaSemanaPayload<ExtArgs>
        fields: Prisma.DiaSemanaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiaSemanaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiaSemanaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          findFirst: {
            args: Prisma.DiaSemanaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiaSemanaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          findMany: {
            args: Prisma.DiaSemanaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          create: {
            args: Prisma.DiaSemanaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          createMany: {
            args: Prisma.DiaSemanaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiaSemanaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          delete: {
            args: Prisma.DiaSemanaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          update: {
            args: Prisma.DiaSemanaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          deleteMany: {
            args: Prisma.DiaSemanaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiaSemanaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiaSemanaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>[]
          }
          upsert: {
            args: Prisma.DiaSemanaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaSemanaPayload>
          }
          aggregate: {
            args: Prisma.DiaSemanaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiaSemana>
          }
          groupBy: {
            args: Prisma.DiaSemanaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiaSemanaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiaSemanaCountArgs<ExtArgs>
            result: $Utils.Optional<DiaSemanaCountAggregateOutputType> | number
          }
        }
      }
      Disponibilidade: {
        payload: Prisma.$DisponibilidadePayload<ExtArgs>
        fields: Prisma.DisponibilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          findFirst: {
            args: Prisma.DisponibilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          findMany: {
            args: Prisma.DisponibilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          create: {
            args: Prisma.DisponibilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          createMany: {
            args: Prisma.DisponibilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisponibilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          delete: {
            args: Prisma.DisponibilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          update: {
            args: Prisma.DisponibilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          deleteMany: {
            args: Prisma.DisponibilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          upsert: {
            args: Prisma.DisponibilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          aggregate: {
            args: Prisma.DisponibilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibilidade>
          }
          groupBy: {
            args: Prisma.DisponibilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadeCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnderecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnderecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      EnderecoUsuario: {
        payload: Prisma.$EnderecoUsuarioPayload<ExtArgs>
        fields: Prisma.EnderecoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.EnderecoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>
          }
          findMany: {
            args: Prisma.EnderecoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>[]
          }
          create: {
            args: Prisma.EnderecoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>
          }
          createMany: {
            args: Prisma.EnderecoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnderecoUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>[]
          }
          delete: {
            args: Prisma.EnderecoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>
          }
          update: {
            args: Prisma.EnderecoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnderecoUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.EnderecoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.EnderecoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnderecoUsuario>
          }
          groupBy: {
            args: Prisma.EnderecoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoUsuarioCountAggregateOutputType> | number
          }
        }
      }
      EnderecoClinica: {
        payload: Prisma.$EnderecoClinicaPayload<ExtArgs>
        fields: Prisma.EnderecoClinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoClinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoClinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>
          }
          findFirst: {
            args: Prisma.EnderecoClinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoClinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>
          }
          findMany: {
            args: Prisma.EnderecoClinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>[]
          }
          create: {
            args: Prisma.EnderecoClinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>
          }
          createMany: {
            args: Prisma.EnderecoClinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnderecoClinicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>[]
          }
          delete: {
            args: Prisma.EnderecoClinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>
          }
          update: {
            args: Prisma.EnderecoClinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoClinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoClinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnderecoClinicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>[]
          }
          upsert: {
            args: Prisma.EnderecoClinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoClinicaPayload>
          }
          aggregate: {
            args: Prisma.EnderecoClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnderecoClinica>
          }
          groupBy: {
            args: Prisma.EnderecoClinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoClinicaCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoClinicaCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          createMany: {
            args: Prisma.ConsultaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
          }
        }
      }
      HistoricoMedico: {
        payload: Prisma.$HistoricoMedicoPayload<ExtArgs>
        fields: Prisma.HistoricoMedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoMedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoMedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoMedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoMedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>
          }
          findMany: {
            args: Prisma.HistoricoMedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>[]
          }
          create: {
            args: Prisma.HistoricoMedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>
          }
          createMany: {
            args: Prisma.HistoricoMedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoMedicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>[]
          }
          delete: {
            args: Prisma.HistoricoMedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>
          }
          update: {
            args: Prisma.HistoricoMedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoMedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoMedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoMedicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoMedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoMedicoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoMedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoMedico>
          }
          groupBy: {
            args: Prisma.HistoricoMedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoMedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoMedicoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoMedicoCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    paciente?: PacienteOmit
    profissional?: ProfissionalOmit
    usuario?: UsuarioOmit
    clinica?: ClinicaOmit
    diaSemana?: DiaSemanaOmit
    disponibilidade?: DisponibilidadeOmit
    endereco?: EnderecoOmit
    enderecoUsuario?: EnderecoUsuarioOmit
    enderecoClinica?: EnderecoClinicaOmit
    consulta?: ConsultaOmit
    historicoMedico?: HistoricoMedicoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    usuarios: number
    agendamentos: number
    HistoricoMedico: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PacienteCountOutputTypeCountUsuariosArgs
    agendamentos?: boolean | PacienteCountOutputTypeCountAgendamentosArgs
    HistoricoMedico?: boolean | PacienteCountOutputTypeCountHistoricoMedicoArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountHistoricoMedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoMedicoWhereInput
  }


  /**
   * Count Type ProfissionalCountOutputType
   */

  export type ProfissionalCountOutputType = {
    usuarios: number
    agendamentos: number
    HistoricoMedico: number
  }

  export type ProfissionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ProfissionalCountOutputTypeCountUsuariosArgs
    agendamentos?: boolean | ProfissionalCountOutputTypeCountAgendamentosArgs
    HistoricoMedico?: boolean | ProfissionalCountOutputTypeCountHistoricoMedicoArgs
  }

  // Custom InputTypes
  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalCountOutputType
     */
    select?: ProfissionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountHistoricoMedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoMedicoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    enderecos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | UsuarioCountOutputTypeCountEnderecosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoUsuarioWhereInput
  }


  /**
   * Count Type ClinicaCountOutputType
   */

  export type ClinicaCountOutputType = {
    enderecos: number
  }

  export type ClinicaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | ClinicaCountOutputTypeCountEnderecosArgs
  }

  // Custom InputTypes
  /**
   * ClinicaCountOutputType without action
   */
  export type ClinicaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicaCountOutputType
     */
    select?: ClinicaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicaCountOutputType without action
   */
  export type ClinicaCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoClinicaWhereInput
  }


  /**
   * Count Type DiaSemanaCountOutputType
   */

  export type DiaSemanaCountOutputType = {
    Disponibilidade: number
  }

  export type DiaSemanaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | DiaSemanaCountOutputTypeCountDisponibilidadeArgs
  }

  // Custom InputTypes
  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemanaCountOutputType
     */
    select?: DiaSemanaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiaSemanaCountOutputType without action
   */
  export type DiaSemanaCountOutputTypeCountDisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
  }


  /**
   * Count Type EnderecoCountOutputType
   */

  export type EnderecoCountOutputType = {
    usuarios: number
    clinicas: number
  }

  export type EnderecoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | EnderecoCountOutputTypeCountUsuariosArgs
    clinicas?: boolean | EnderecoCountOutputTypeCountClinicasArgs
  }

  // Custom InputTypes
  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoCountOutputType
     */
    select?: EnderecoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoUsuarioWhereInput
  }

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeCountClinicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoClinicaWhereInput
  }


  /**
   * Count Type ConsultaCountOutputType
   */

  export type ConsultaCountOutputType = {
    HistoricoMedico: number
  }

  export type ConsultaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HistoricoMedico?: boolean | ConsultaCountOutputTypeCountHistoricoMedicoArgs
  }

  // Custom InputTypes
  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultaCountOutputType
     */
    select?: ConsultaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeCountHistoricoMedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoMedicoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    peso: number | null
    altura: number | null
  }

  export type PacienteSumAggregateOutputType = {
    peso: number | null
    altura: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: string | null
    dataNascimento: Date | null
    peso: number | null
    altura: number | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: string | null
    dataNascimento: Date | null
    peso: number | null
    altura: number | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    dataNascimento: number
    peso: number
    altura: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    peso?: true
    altura?: true
  }

  export type PacienteSumAggregateInputType = {
    peso?: true
    altura?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    dataNascimento?: true
    peso?: true
    altura?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    dataNascimento?: true
    peso?: true
    altura?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    dataNascimento?: true
    peso?: true
    altura?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: string
    dataNascimento: Date
    peso: number
    altura: number
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataNascimento?: boolean
    peso?: boolean
    altura?: boolean
    usuarios?: boolean | Paciente$usuariosArgs<ExtArgs>
    agendamentos?: boolean | Paciente$agendamentosArgs<ExtArgs>
    HistoricoMedico?: boolean | Paciente$HistoricoMedicoArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataNascimento?: boolean
    peso?: boolean
    altura?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataNascimento?: boolean
    peso?: boolean
    altura?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    dataNascimento?: boolean
    peso?: boolean
    altura?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataNascimento" | "peso" | "altura", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Paciente$usuariosArgs<ExtArgs>
    agendamentos?: boolean | Paciente$agendamentosArgs<ExtArgs>
    HistoricoMedico?: boolean | Paciente$HistoricoMedicoArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      agendamentos: Prisma.$ConsultaPayload<ExtArgs>[]
      HistoricoMedico: Prisma.$HistoricoMedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataNascimento: Date
      peso: number
      altura: number
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Paciente$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Paciente$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HistoricoMedico<T extends Paciente$HistoricoMedicoArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$HistoricoMedicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'String'>
    readonly dataNascimento: FieldRef<"Paciente", 'DateTime'>
    readonly peso: FieldRef<"Paciente", 'Float'>
    readonly altura: FieldRef<"Paciente", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.usuarios
   */
  export type Paciente$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Paciente.agendamentos
   */
  export type Paciente$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Paciente.HistoricoMedico
   */
  export type Paciente$HistoricoMedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    where?: HistoricoMedicoWhereInput
    orderBy?: HistoricoMedicoOrderByWithRelationInput | HistoricoMedicoOrderByWithRelationInput[]
    cursor?: HistoricoMedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoMedicoScalarFieldEnum | HistoricoMedicoScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Profissional
   */

  export type AggregateProfissional = {
    _count: ProfissionalCountAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  export type ProfissionalMinAggregateOutputType = {
    id: string | null
    tipoRegistro: $Enums.TipoRegistro | null
    numeroRegistro: string | null
    uf: string | null
    descricao: string | null
    instituicaoFormadora: string | null
    tipoProfissional: string | null
    especialidade: string | null
  }

  export type ProfissionalMaxAggregateOutputType = {
    id: string | null
    tipoRegistro: $Enums.TipoRegistro | null
    numeroRegistro: string | null
    uf: string | null
    descricao: string | null
    instituicaoFormadora: string | null
    tipoProfissional: string | null
    especialidade: string | null
  }

  export type ProfissionalCountAggregateOutputType = {
    id: number
    tipoRegistro: number
    numeroRegistro: number
    uf: number
    descricao: number
    instituicaoFormadora: number
    tipoProfissional: number
    especialidade: number
    _all: number
  }


  export type ProfissionalMinAggregateInputType = {
    id?: true
    tipoRegistro?: true
    numeroRegistro?: true
    uf?: true
    descricao?: true
    instituicaoFormadora?: true
    tipoProfissional?: true
    especialidade?: true
  }

  export type ProfissionalMaxAggregateInputType = {
    id?: true
    tipoRegistro?: true
    numeroRegistro?: true
    uf?: true
    descricao?: true
    instituicaoFormadora?: true
    tipoProfissional?: true
    especialidade?: true
  }

  export type ProfissionalCountAggregateInputType = {
    id?: true
    tipoRegistro?: true
    numeroRegistro?: true
    uf?: true
    descricao?: true
    instituicaoFormadora?: true
    tipoProfissional?: true
    especialidade?: true
    _all?: true
  }

  export type ProfissionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissional to aggregate.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profissionals
    **/
    _count?: true | ProfissionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionalMaxAggregateInputType
  }

  export type GetProfissionalAggregateType<T extends ProfissionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional[P]>
      : GetScalarType<T[P], AggregateProfissional[P]>
  }




  export type ProfissionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionalWhereInput
    orderBy?: ProfissionalOrderByWithAggregationInput | ProfissionalOrderByWithAggregationInput[]
    by: ProfissionalScalarFieldEnum[] | ProfissionalScalarFieldEnum
    having?: ProfissionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionalCountAggregateInputType | true
    _min?: ProfissionalMinAggregateInputType
    _max?: ProfissionalMaxAggregateInputType
  }

  export type ProfissionalGroupByOutputType = {
    id: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    _count: ProfissionalCountAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  type GetProfissionalGroupByPayload<T extends ProfissionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfissionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoRegistro?: boolean
    numeroRegistro?: boolean
    uf?: boolean
    descricao?: boolean
    instituicaoFormadora?: boolean
    tipoProfissional?: boolean
    especialidade?: boolean
    usuarios?: boolean | Profissional$usuariosArgs<ExtArgs>
    agendamentos?: boolean | Profissional$agendamentosArgs<ExtArgs>
    HistoricoMedico?: boolean | Profissional$HistoricoMedicoArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoRegistro?: boolean
    numeroRegistro?: boolean
    uf?: boolean
    descricao?: boolean
    instituicaoFormadora?: boolean
    tipoProfissional?: boolean
    especialidade?: boolean
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoRegistro?: boolean
    numeroRegistro?: boolean
    uf?: boolean
    descricao?: boolean
    instituicaoFormadora?: boolean
    tipoProfissional?: boolean
    especialidade?: boolean
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectScalar = {
    id?: boolean
    tipoRegistro?: boolean
    numeroRegistro?: boolean
    uf?: boolean
    descricao?: boolean
    instituicaoFormadora?: boolean
    tipoProfissional?: boolean
    especialidade?: boolean
  }

  export type ProfissionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoRegistro" | "numeroRegistro" | "uf" | "descricao" | "instituicaoFormadora" | "tipoProfissional" | "especialidade", ExtArgs["result"]["profissional"]>
  export type ProfissionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Profissional$usuariosArgs<ExtArgs>
    agendamentos?: boolean | Profissional$agendamentosArgs<ExtArgs>
    HistoricoMedico?: boolean | Profissional$HistoricoMedicoArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfissionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfissionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfissionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profissional"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      agendamentos: Prisma.$ConsultaPayload<ExtArgs>[]
      HistoricoMedico: Prisma.$HistoricoMedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipoRegistro: $Enums.TipoRegistro
      numeroRegistro: string
      uf: string
      descricao: string
      instituicaoFormadora: string
      tipoProfissional: string
      especialidade: string
    }, ExtArgs["result"]["profissional"]>
    composites: {}
  }

  type ProfissionalGetPayload<S extends boolean | null | undefined | ProfissionalDefaultArgs> = $Result.GetResult<Prisma.$ProfissionalPayload, S>

  type ProfissionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfissionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionalCountAggregateInputType | true
    }

  export interface ProfissionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profissional'], meta: { name: 'Profissional' } }
    /**
     * Find zero or one Profissional that matches the filter.
     * @param {ProfissionalFindUniqueArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfissionalFindUniqueArgs>(args: SelectSubset<T, ProfissionalFindUniqueArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfissionalFindUniqueOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfissionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfissionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfissionalFindFirstArgs>(args?: SelectSubset<T, ProfissionalFindFirstArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfissionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfissionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionals
     * const profissionals = await prisma.profissional.findMany()
     * 
     * // Get first 10 Profissionals
     * const profissionals = await prisma.profissional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profissionalWithIdOnly = await prisma.profissional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfissionalFindManyArgs>(args?: SelectSubset<T, ProfissionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional.
     * @param {ProfissionalCreateArgs} args - Arguments to create a Profissional.
     * @example
     * // Create one Profissional
     * const Profissional = await prisma.profissional.create({
     *   data: {
     *     // ... data to create a Profissional
     *   }
     * })
     * 
     */
    create<T extends ProfissionalCreateArgs>(args: SelectSubset<T, ProfissionalCreateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionals.
     * @param {ProfissionalCreateManyArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfissionalCreateManyArgs>(args?: SelectSubset<T, ProfissionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profissionals and returns the data saved in the database.
     * @param {ProfissionalCreateManyAndReturnArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profissionals and only return the `id`
     * const profissionalWithIdOnly = await prisma.profissional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfissionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfissionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profissional.
     * @param {ProfissionalDeleteArgs} args - Arguments to delete one Profissional.
     * @example
     * // Delete one Profissional
     * const Profissional = await prisma.profissional.delete({
     *   where: {
     *     // ... filter to delete one Profissional
     *   }
     * })
     * 
     */
    delete<T extends ProfissionalDeleteArgs>(args: SelectSubset<T, ProfissionalDeleteArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional.
     * @param {ProfissionalUpdateArgs} args - Arguments to update one Profissional.
     * @example
     * // Update one Profissional
     * const profissional = await prisma.profissional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfissionalUpdateArgs>(args: SelectSubset<T, ProfissionalUpdateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionals.
     * @param {ProfissionalDeleteManyArgs} args - Arguments to filter Profissionals to delete.
     * @example
     * // Delete a few Profissionals
     * const { count } = await prisma.profissional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfissionalDeleteManyArgs>(args?: SelectSubset<T, ProfissionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfissionalUpdateManyArgs>(args: SelectSubset<T, ProfissionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals and returns the data updated in the database.
     * @param {ProfissionalUpdateManyAndReturnArgs} args - Arguments to update many Profissionals.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profissionals and only return the `id`
     * const profissionalWithIdOnly = await prisma.profissional.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfissionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfissionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profissional.
     * @param {ProfissionalUpsertArgs} args - Arguments to update or create a Profissional.
     * @example
     * // Update or create a Profissional
     * const profissional = await prisma.profissional.upsert({
     *   create: {
     *     // ... data to create a Profissional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional we want to update
     *   }
     * })
     */
    upsert<T extends ProfissionalUpsertArgs>(args: SelectSubset<T, ProfissionalUpsertArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalCountArgs} args - Arguments to filter Profissionals to count.
     * @example
     * // Count the number of Profissionals
     * const count = await prisma.profissional.count({
     *   where: {
     *     // ... the filter for the Profissionals we want to count
     *   }
     * })
    **/
    count<T extends ProfissionalCountArgs>(
      args?: Subset<T, ProfissionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfissionalAggregateArgs>(args: Subset<T, ProfissionalAggregateArgs>): Prisma.PrismaPromise<GetProfissionalAggregateType<T>>

    /**
     * Group by Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalGroupByArgs} args - Group by arguments.
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
      T extends ProfissionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfissionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfissionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfissionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profissional model
   */
  readonly fields: ProfissionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profissional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfissionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Profissional$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Profissional$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HistoricoMedico<T extends Profissional$HistoricoMedicoArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$HistoricoMedicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profissional model
   */
  interface ProfissionalFieldRefs {
    readonly id: FieldRef<"Profissional", 'String'>
    readonly tipoRegistro: FieldRef<"Profissional", 'TipoRegistro'>
    readonly numeroRegistro: FieldRef<"Profissional", 'String'>
    readonly uf: FieldRef<"Profissional", 'String'>
    readonly descricao: FieldRef<"Profissional", 'String'>
    readonly instituicaoFormadora: FieldRef<"Profissional", 'String'>
    readonly tipoProfissional: FieldRef<"Profissional", 'String'>
    readonly especialidade: FieldRef<"Profissional", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profissional findUnique
   */
  export type ProfissionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findUniqueOrThrow
   */
  export type ProfissionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findFirst
   */
  export type ProfissionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findFirstOrThrow
   */
  export type ProfissionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findMany
   */
  export type ProfissionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissionals to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional create
   */
  export type ProfissionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Profissional.
     */
    data: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
  }

  /**
   * Profissional createMany
   */
  export type ProfissionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profissional createManyAndReturn
   */
  export type ProfissionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profissional update
   */
  export type ProfissionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Profissional.
     */
    data: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
    /**
     * Choose, which Profissional to update.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional updateMany
   */
  export type ProfissionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
  }

  /**
   * Profissional updateManyAndReturn
   */
  export type ProfissionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
  }

  /**
   * Profissional upsert
   */
  export type ProfissionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Profissional to update in case it exists.
     */
    where: ProfissionalWhereUniqueInput
    /**
     * In case the Profissional found by the `where` argument doesn't exist, create a new Profissional with this data.
     */
    create: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
    /**
     * In case the Profissional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
  }

  /**
   * Profissional delete
   */
  export type ProfissionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter which Profissional to delete.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional deleteMany
   */
  export type ProfissionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissionals to delete
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to delete.
     */
    limit?: number
  }

  /**
   * Profissional.usuarios
   */
  export type Profissional$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Profissional.agendamentos
   */
  export type Profissional$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Profissional.HistoricoMedico
   */
  export type Profissional$HistoricoMedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    where?: HistoricoMedicoWhereInput
    orderBy?: HistoricoMedicoOrderByWithRelationInput | HistoricoMedicoOrderByWithRelationInput[]
    cursor?: HistoricoMedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoMedicoScalarFieldEnum | HistoricoMedicoScalarFieldEnum[]
  }

  /**
   * Profissional without action
   */
  export type ProfissionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    avatar: string | null
    genero: string | null
    profissionalId: string | null
    pacienteId: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    avatar: string | null
    genero: string | null
    profissionalId: string | null
    pacienteId: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    telefone: number
    avatar: number
    genero: number
    profissionalId: number
    pacienteId: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    avatar?: true
    genero?: true
    profissionalId?: true
    pacienteId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    avatar?: true
    genero?: true
    profissionalId?: true
    pacienteId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    avatar?: true
    genero?: true
    profissionalId?: true
    pacienteId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar: string | null
    genero: string
    profissionalId: string | null
    pacienteId: string | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    avatar?: boolean
    genero?: boolean
    profissionalId?: boolean
    pacienteId?: boolean
    profissional?: boolean | Usuario$profissionalArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
    enderecos?: boolean | Usuario$enderecosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    avatar?: boolean
    genero?: boolean
    profissionalId?: boolean
    pacienteId?: boolean
    profissional?: boolean | Usuario$profissionalArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    avatar?: boolean
    genero?: boolean
    profissionalId?: boolean
    pacienteId?: boolean
    profissional?: boolean | Usuario$profissionalArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    avatar?: boolean
    genero?: boolean
    profissionalId?: boolean
    pacienteId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "telefone" | "avatar" | "genero" | "profissionalId" | "pacienteId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | Usuario$profissionalArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
    enderecos?: boolean | Usuario$enderecosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | Usuario$profissionalArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | Usuario$profissionalArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      profissional: Prisma.$ProfissionalPayload<ExtArgs> | null
      paciente: Prisma.$PacientePayload<ExtArgs> | null
      enderecos: Prisma.$EnderecoUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      telefone: string
      avatar: string | null
      genero: string
      profissionalId: string | null
      pacienteId: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional<T extends Usuario$profissionalArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$profissionalArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paciente<T extends Usuario$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enderecos<T extends Usuario$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly avatar: FieldRef<"Usuario", 'String'>
    readonly genero: FieldRef<"Usuario", 'String'>
    readonly profissionalId: FieldRef<"Usuario", 'String'>
    readonly pacienteId: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.profissional
   */
  export type Usuario$profissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    where?: ProfissionalWhereInput
  }

  /**
   * Usuario.paciente
   */
  export type Usuario$pacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }

  /**
   * Usuario.enderecos
   */
  export type Usuario$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    where?: EnderecoUsuarioWhereInput
    orderBy?: EnderecoUsuarioOrderByWithRelationInput | EnderecoUsuarioOrderByWithRelationInput[]
    cursor?: EnderecoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoUsuarioScalarFieldEnum | EnderecoUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Clinica
   */

  export type AggregateClinica = {
    _count: ClinicaCountAggregateOutputType | null
    _min: ClinicaMinAggregateOutputType | null
    _max: ClinicaMaxAggregateOutputType | null
  }

  export type ClinicaMinAggregateOutputType = {
    id: string | null
    nomeFantasia: string | null
    razaoSocial: string | null
    cnpj: string | null
    inscricaoEstadual: string | null
    telefone: string | null
    tipoAtendimento: string | null
  }

  export type ClinicaMaxAggregateOutputType = {
    id: string | null
    nomeFantasia: string | null
    razaoSocial: string | null
    cnpj: string | null
    inscricaoEstadual: string | null
    telefone: string | null
    tipoAtendimento: string | null
  }

  export type ClinicaCountAggregateOutputType = {
    id: number
    nomeFantasia: number
    razaoSocial: number
    cnpj: number
    inscricaoEstadual: number
    telefone: number
    tipoAtendimento: number
    _all: number
  }


  export type ClinicaMinAggregateInputType = {
    id?: true
    nomeFantasia?: true
    razaoSocial?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefone?: true
    tipoAtendimento?: true
  }

  export type ClinicaMaxAggregateInputType = {
    id?: true
    nomeFantasia?: true
    razaoSocial?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefone?: true
    tipoAtendimento?: true
  }

  export type ClinicaCountAggregateInputType = {
    id?: true
    nomeFantasia?: true
    razaoSocial?: true
    cnpj?: true
    inscricaoEstadual?: true
    telefone?: true
    tipoAtendimento?: true
    _all?: true
  }

  export type ClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinica to aggregate.
     */
    where?: ClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinicas to fetch.
     */
    orderBy?: ClinicaOrderByWithRelationInput | ClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinicas
    **/
    _count?: true | ClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicaMaxAggregateInputType
  }

  export type GetClinicaAggregateType<T extends ClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinica[P]>
      : GetScalarType<T[P], AggregateClinica[P]>
  }




  export type ClinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicaWhereInput
    orderBy?: ClinicaOrderByWithAggregationInput | ClinicaOrderByWithAggregationInput[]
    by: ClinicaScalarFieldEnum[] | ClinicaScalarFieldEnum
    having?: ClinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicaCountAggregateInputType | true
    _min?: ClinicaMinAggregateInputType
    _max?: ClinicaMaxAggregateInputType
  }

  export type ClinicaGroupByOutputType = {
    id: string
    nomeFantasia: string
    razaoSocial: string
    cnpj: string
    inscricaoEstadual: string
    telefone: string
    tipoAtendimento: string
    _count: ClinicaCountAggregateOutputType | null
    _min: ClinicaMinAggregateOutputType | null
    _max: ClinicaMaxAggregateOutputType | null
  }

  type GetClinicaGroupByPayload<T extends ClinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicaGroupByOutputType[P]>
        }
      >
    >


  export type ClinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeFantasia?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefone?: boolean
    tipoAtendimento?: boolean
    enderecos?: boolean | Clinica$enderecosArgs<ExtArgs>
    _count?: boolean | ClinicaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinica"]>

  export type ClinicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeFantasia?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefone?: boolean
    tipoAtendimento?: boolean
  }, ExtArgs["result"]["clinica"]>

  export type ClinicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeFantasia?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefone?: boolean
    tipoAtendimento?: boolean
  }, ExtArgs["result"]["clinica"]>

  export type ClinicaSelectScalar = {
    id?: boolean
    nomeFantasia?: boolean
    razaoSocial?: boolean
    cnpj?: boolean
    inscricaoEstadual?: boolean
    telefone?: boolean
    tipoAtendimento?: boolean
  }

  export type ClinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeFantasia" | "razaoSocial" | "cnpj" | "inscricaoEstadual" | "telefone" | "tipoAtendimento", ExtArgs["result"]["clinica"]>
  export type ClinicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | Clinica$enderecosArgs<ExtArgs>
    _count?: boolean | ClinicaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClinicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClinicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clinica"
    objects: {
      enderecos: Prisma.$EnderecoClinicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeFantasia: string
      razaoSocial: string
      cnpj: string
      inscricaoEstadual: string
      telefone: string
      tipoAtendimento: string
    }, ExtArgs["result"]["clinica"]>
    composites: {}
  }

  type ClinicaGetPayload<S extends boolean | null | undefined | ClinicaDefaultArgs> = $Result.GetResult<Prisma.$ClinicaPayload, S>

  type ClinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicaCountAggregateInputType | true
    }

  export interface ClinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clinica'], meta: { name: 'Clinica' } }
    /**
     * Find zero or one Clinica that matches the filter.
     * @param {ClinicaFindUniqueArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicaFindUniqueArgs>(args: SelectSubset<T, ClinicaFindUniqueArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clinica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicaFindUniqueOrThrowArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaFindFirstArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicaFindFirstArgs>(args?: SelectSubset<T, ClinicaFindFirstArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaFindFirstOrThrowArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinicas
     * const clinicas = await prisma.clinica.findMany()
     * 
     * // Get first 10 Clinicas
     * const clinicas = await prisma.clinica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicaWithIdOnly = await prisma.clinica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicaFindManyArgs>(args?: SelectSubset<T, ClinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clinica.
     * @param {ClinicaCreateArgs} args - Arguments to create a Clinica.
     * @example
     * // Create one Clinica
     * const Clinica = await prisma.clinica.create({
     *   data: {
     *     // ... data to create a Clinica
     *   }
     * })
     * 
     */
    create<T extends ClinicaCreateArgs>(args: SelectSubset<T, ClinicaCreateArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clinicas.
     * @param {ClinicaCreateManyArgs} args - Arguments to create many Clinicas.
     * @example
     * // Create many Clinicas
     * const clinica = await prisma.clinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicaCreateManyArgs>(args?: SelectSubset<T, ClinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinicas and returns the data saved in the database.
     * @param {ClinicaCreateManyAndReturnArgs} args - Arguments to create many Clinicas.
     * @example
     * // Create many Clinicas
     * const clinica = await prisma.clinica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinicas and only return the `id`
     * const clinicaWithIdOnly = await prisma.clinica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicaCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clinica.
     * @param {ClinicaDeleteArgs} args - Arguments to delete one Clinica.
     * @example
     * // Delete one Clinica
     * const Clinica = await prisma.clinica.delete({
     *   where: {
     *     // ... filter to delete one Clinica
     *   }
     * })
     * 
     */
    delete<T extends ClinicaDeleteArgs>(args: SelectSubset<T, ClinicaDeleteArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clinica.
     * @param {ClinicaUpdateArgs} args - Arguments to update one Clinica.
     * @example
     * // Update one Clinica
     * const clinica = await prisma.clinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicaUpdateArgs>(args: SelectSubset<T, ClinicaUpdateArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clinicas.
     * @param {ClinicaDeleteManyArgs} args - Arguments to filter Clinicas to delete.
     * @example
     * // Delete a few Clinicas
     * const { count } = await prisma.clinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicaDeleteManyArgs>(args?: SelectSubset<T, ClinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinicas
     * const clinica = await prisma.clinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicaUpdateManyArgs>(args: SelectSubset<T, ClinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinicas and returns the data updated in the database.
     * @param {ClinicaUpdateManyAndReturnArgs} args - Arguments to update many Clinicas.
     * @example
     * // Update many Clinicas
     * const clinica = await prisma.clinica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clinicas and only return the `id`
     * const clinicaWithIdOnly = await prisma.clinica.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClinicaUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clinica.
     * @param {ClinicaUpsertArgs} args - Arguments to update or create a Clinica.
     * @example
     * // Update or create a Clinica
     * const clinica = await prisma.clinica.upsert({
     *   create: {
     *     // ... data to create a Clinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinica we want to update
     *   }
     * })
     */
    upsert<T extends ClinicaUpsertArgs>(args: SelectSubset<T, ClinicaUpsertArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaCountArgs} args - Arguments to filter Clinicas to count.
     * @example
     * // Count the number of Clinicas
     * const count = await prisma.clinica.count({
     *   where: {
     *     // ... the filter for the Clinicas we want to count
     *   }
     * })
    **/
    count<T extends ClinicaCountArgs>(
      args?: Subset<T, ClinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicaAggregateArgs>(args: Subset<T, ClinicaAggregateArgs>): Prisma.PrismaPromise<GetClinicaAggregateType<T>>

    /**
     * Group by Clinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaGroupByArgs} args - Group by arguments.
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
      T extends ClinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicaGroupByArgs['orderBy'] }
        : { orderBy?: ClinicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clinica model
   */
  readonly fields: ClinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enderecos<T extends Clinica$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, Clinica$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Clinica model
   */
  interface ClinicaFieldRefs {
    readonly id: FieldRef<"Clinica", 'String'>
    readonly nomeFantasia: FieldRef<"Clinica", 'String'>
    readonly razaoSocial: FieldRef<"Clinica", 'String'>
    readonly cnpj: FieldRef<"Clinica", 'String'>
    readonly inscricaoEstadual: FieldRef<"Clinica", 'String'>
    readonly telefone: FieldRef<"Clinica", 'String'>
    readonly tipoAtendimento: FieldRef<"Clinica", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clinica findUnique
   */
  export type ClinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinica to fetch.
     */
    where: ClinicaWhereUniqueInput
  }

  /**
   * Clinica findUniqueOrThrow
   */
  export type ClinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinica to fetch.
     */
    where: ClinicaWhereUniqueInput
  }

  /**
   * Clinica findFirst
   */
  export type ClinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinica to fetch.
     */
    where?: ClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinicas to fetch.
     */
    orderBy?: ClinicaOrderByWithRelationInput | ClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinicas.
     */
    cursor?: ClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinicas.
     */
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * Clinica findFirstOrThrow
   */
  export type ClinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinica to fetch.
     */
    where?: ClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinicas to fetch.
     */
    orderBy?: ClinicaOrderByWithRelationInput | ClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinicas.
     */
    cursor?: ClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinicas.
     */
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * Clinica findMany
   */
  export type ClinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinicas to fetch.
     */
    where?: ClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinicas to fetch.
     */
    orderBy?: ClinicaOrderByWithRelationInput | ClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinicas.
     */
    cursor?: ClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinicas.
     */
    skip?: number
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * Clinica create
   */
  export type ClinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * The data needed to create a Clinica.
     */
    data: XOR<ClinicaCreateInput, ClinicaUncheckedCreateInput>
  }

  /**
   * Clinica createMany
   */
  export type ClinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clinicas.
     */
    data: ClinicaCreateManyInput | ClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinica createManyAndReturn
   */
  export type ClinicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * The data used to create many Clinicas.
     */
    data: ClinicaCreateManyInput | ClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinica update
   */
  export type ClinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * The data needed to update a Clinica.
     */
    data: XOR<ClinicaUpdateInput, ClinicaUncheckedUpdateInput>
    /**
     * Choose, which Clinica to update.
     */
    where: ClinicaWhereUniqueInput
  }

  /**
   * Clinica updateMany
   */
  export type ClinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clinicas.
     */
    data: XOR<ClinicaUpdateManyMutationInput, ClinicaUncheckedUpdateManyInput>
    /**
     * Filter which Clinicas to update
     */
    where?: ClinicaWhereInput
    /**
     * Limit how many Clinicas to update.
     */
    limit?: number
  }

  /**
   * Clinica updateManyAndReturn
   */
  export type ClinicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * The data used to update Clinicas.
     */
    data: XOR<ClinicaUpdateManyMutationInput, ClinicaUncheckedUpdateManyInput>
    /**
     * Filter which Clinicas to update
     */
    where?: ClinicaWhereInput
    /**
     * Limit how many Clinicas to update.
     */
    limit?: number
  }

  /**
   * Clinica upsert
   */
  export type ClinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * The filter to search for the Clinica to update in case it exists.
     */
    where: ClinicaWhereUniqueInput
    /**
     * In case the Clinica found by the `where` argument doesn't exist, create a new Clinica with this data.
     */
    create: XOR<ClinicaCreateInput, ClinicaUncheckedCreateInput>
    /**
     * In case the Clinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicaUpdateInput, ClinicaUncheckedUpdateInput>
  }

  /**
   * Clinica delete
   */
  export type ClinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter which Clinica to delete.
     */
    where: ClinicaWhereUniqueInput
  }

  /**
   * Clinica deleteMany
   */
  export type ClinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinicas to delete
     */
    where?: ClinicaWhereInput
    /**
     * Limit how many Clinicas to delete.
     */
    limit?: number
  }

  /**
   * Clinica.enderecos
   */
  export type Clinica$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    where?: EnderecoClinicaWhereInput
    orderBy?: EnderecoClinicaOrderByWithRelationInput | EnderecoClinicaOrderByWithRelationInput[]
    cursor?: EnderecoClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoClinicaScalarFieldEnum | EnderecoClinicaScalarFieldEnum[]
  }

  /**
   * Clinica without action
   */
  export type ClinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinica
     */
    omit?: ClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
  }


  /**
   * Model DiaSemana
   */

  export type AggregateDiaSemana = {
    _count: DiaSemanaCountAggregateOutputType | null
    _min: DiaSemanaMinAggregateOutputType | null
    _max: DiaSemanaMaxAggregateOutputType | null
  }

  export type DiaSemanaMinAggregateOutputType = {
    id: string | null
    dia: string | null
  }

  export type DiaSemanaMaxAggregateOutputType = {
    id: string | null
    dia: string | null
  }

  export type DiaSemanaCountAggregateOutputType = {
    id: number
    dia: number
    _all: number
  }


  export type DiaSemanaMinAggregateInputType = {
    id?: true
    dia?: true
  }

  export type DiaSemanaMaxAggregateInputType = {
    id?: true
    dia?: true
  }

  export type DiaSemanaCountAggregateInputType = {
    id?: true
    dia?: true
    _all?: true
  }

  export type DiaSemanaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaSemana to aggregate.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiaSemanas
    **/
    _count?: true | DiaSemanaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiaSemanaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiaSemanaMaxAggregateInputType
  }

  export type GetDiaSemanaAggregateType<T extends DiaSemanaAggregateArgs> = {
        [P in keyof T & keyof AggregateDiaSemana]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiaSemana[P]>
      : GetScalarType<T[P], AggregateDiaSemana[P]>
  }




  export type DiaSemanaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaSemanaWhereInput
    orderBy?: DiaSemanaOrderByWithAggregationInput | DiaSemanaOrderByWithAggregationInput[]
    by: DiaSemanaScalarFieldEnum[] | DiaSemanaScalarFieldEnum
    having?: DiaSemanaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiaSemanaCountAggregateInputType | true
    _min?: DiaSemanaMinAggregateInputType
    _max?: DiaSemanaMaxAggregateInputType
  }

  export type DiaSemanaGroupByOutputType = {
    id: string
    dia: string
    _count: DiaSemanaCountAggregateOutputType | null
    _min: DiaSemanaMinAggregateOutputType | null
    _max: DiaSemanaMaxAggregateOutputType | null
  }

  type GetDiaSemanaGroupByPayload<T extends DiaSemanaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiaSemanaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiaSemanaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiaSemanaGroupByOutputType[P]>
            : GetScalarType<T[P], DiaSemanaGroupByOutputType[P]>
        }
      >
    >


  export type DiaSemanaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dia?: boolean
    Disponibilidade?: boolean | DiaSemana$DisponibilidadeArgs<ExtArgs>
    _count?: boolean | DiaSemanaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dia?: boolean
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dia?: boolean
  }, ExtArgs["result"]["diaSemana"]>

  export type DiaSemanaSelectScalar = {
    id?: boolean
    dia?: boolean
  }

  export type DiaSemanaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dia", ExtArgs["result"]["diaSemana"]>
  export type DiaSemanaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | DiaSemana$DisponibilidadeArgs<ExtArgs>
    _count?: boolean | DiaSemanaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiaSemanaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiaSemanaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiaSemanaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiaSemana"
    objects: {
      Disponibilidade: Prisma.$DisponibilidadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dia: string
    }, ExtArgs["result"]["diaSemana"]>
    composites: {}
  }

  type DiaSemanaGetPayload<S extends boolean | null | undefined | DiaSemanaDefaultArgs> = $Result.GetResult<Prisma.$DiaSemanaPayload, S>

  type DiaSemanaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiaSemanaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiaSemanaCountAggregateInputType | true
    }

  export interface DiaSemanaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiaSemana'], meta: { name: 'DiaSemana' } }
    /**
     * Find zero or one DiaSemana that matches the filter.
     * @param {DiaSemanaFindUniqueArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiaSemanaFindUniqueArgs>(args: SelectSubset<T, DiaSemanaFindUniqueArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiaSemana that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiaSemanaFindUniqueOrThrowArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiaSemanaFindUniqueOrThrowArgs>(args: SelectSubset<T, DiaSemanaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaSemana that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindFirstArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiaSemanaFindFirstArgs>(args?: SelectSubset<T, DiaSemanaFindFirstArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiaSemana that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindFirstOrThrowArgs} args - Arguments to find a DiaSemana
     * @example
     * // Get one DiaSemana
     * const diaSemana = await prisma.diaSemana.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiaSemanaFindFirstOrThrowArgs>(args?: SelectSubset<T, DiaSemanaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiaSemanas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiaSemanas
     * const diaSemanas = await prisma.diaSemana.findMany()
     * 
     * // Get first 10 DiaSemanas
     * const diaSemanas = await prisma.diaSemana.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diaSemanaWithIdOnly = await prisma.diaSemana.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiaSemanaFindManyArgs>(args?: SelectSubset<T, DiaSemanaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiaSemana.
     * @param {DiaSemanaCreateArgs} args - Arguments to create a DiaSemana.
     * @example
     * // Create one DiaSemana
     * const DiaSemana = await prisma.diaSemana.create({
     *   data: {
     *     // ... data to create a DiaSemana
     *   }
     * })
     * 
     */
    create<T extends DiaSemanaCreateArgs>(args: SelectSubset<T, DiaSemanaCreateArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiaSemanas.
     * @param {DiaSemanaCreateManyArgs} args - Arguments to create many DiaSemanas.
     * @example
     * // Create many DiaSemanas
     * const diaSemana = await prisma.diaSemana.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiaSemanaCreateManyArgs>(args?: SelectSubset<T, DiaSemanaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiaSemanas and returns the data saved in the database.
     * @param {DiaSemanaCreateManyAndReturnArgs} args - Arguments to create many DiaSemanas.
     * @example
     * // Create many DiaSemanas
     * const diaSemana = await prisma.diaSemana.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiaSemanas and only return the `id`
     * const diaSemanaWithIdOnly = await prisma.diaSemana.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiaSemanaCreateManyAndReturnArgs>(args?: SelectSubset<T, DiaSemanaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiaSemana.
     * @param {DiaSemanaDeleteArgs} args - Arguments to delete one DiaSemana.
     * @example
     * // Delete one DiaSemana
     * const DiaSemana = await prisma.diaSemana.delete({
     *   where: {
     *     // ... filter to delete one DiaSemana
     *   }
     * })
     * 
     */
    delete<T extends DiaSemanaDeleteArgs>(args: SelectSubset<T, DiaSemanaDeleteArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiaSemana.
     * @param {DiaSemanaUpdateArgs} args - Arguments to update one DiaSemana.
     * @example
     * // Update one DiaSemana
     * const diaSemana = await prisma.diaSemana.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiaSemanaUpdateArgs>(args: SelectSubset<T, DiaSemanaUpdateArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiaSemanas.
     * @param {DiaSemanaDeleteManyArgs} args - Arguments to filter DiaSemanas to delete.
     * @example
     * // Delete a few DiaSemanas
     * const { count } = await prisma.diaSemana.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiaSemanaDeleteManyArgs>(args?: SelectSubset<T, DiaSemanaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaSemanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiaSemanas
     * const diaSemana = await prisma.diaSemana.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiaSemanaUpdateManyArgs>(args: SelectSubset<T, DiaSemanaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiaSemanas and returns the data updated in the database.
     * @param {DiaSemanaUpdateManyAndReturnArgs} args - Arguments to update many DiaSemanas.
     * @example
     * // Update many DiaSemanas
     * const diaSemana = await prisma.diaSemana.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiaSemanas and only return the `id`
     * const diaSemanaWithIdOnly = await prisma.diaSemana.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiaSemanaUpdateManyAndReturnArgs>(args: SelectSubset<T, DiaSemanaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiaSemana.
     * @param {DiaSemanaUpsertArgs} args - Arguments to update or create a DiaSemana.
     * @example
     * // Update or create a DiaSemana
     * const diaSemana = await prisma.diaSemana.upsert({
     *   create: {
     *     // ... data to create a DiaSemana
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiaSemana we want to update
     *   }
     * })
     */
    upsert<T extends DiaSemanaUpsertArgs>(args: SelectSubset<T, DiaSemanaUpsertArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiaSemanas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaCountArgs} args - Arguments to filter DiaSemanas to count.
     * @example
     * // Count the number of DiaSemanas
     * const count = await prisma.diaSemana.count({
     *   where: {
     *     // ... the filter for the DiaSemanas we want to count
     *   }
     * })
    **/
    count<T extends DiaSemanaCountArgs>(
      args?: Subset<T, DiaSemanaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiaSemanaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiaSemana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiaSemanaAggregateArgs>(args: Subset<T, DiaSemanaAggregateArgs>): Prisma.PrismaPromise<GetDiaSemanaAggregateType<T>>

    /**
     * Group by DiaSemana.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaSemanaGroupByArgs} args - Group by arguments.
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
      T extends DiaSemanaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiaSemanaGroupByArgs['orderBy'] }
        : { orderBy?: DiaSemanaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiaSemanaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiaSemanaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiaSemana model
   */
  readonly fields: DiaSemanaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiaSemana.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiaSemanaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Disponibilidade<T extends DiaSemana$DisponibilidadeArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemana$DisponibilidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiaSemana model
   */
  interface DiaSemanaFieldRefs {
    readonly id: FieldRef<"DiaSemana", 'String'>
    readonly dia: FieldRef<"DiaSemana", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiaSemana findUnique
   */
  export type DiaSemanaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana findUniqueOrThrow
   */
  export type DiaSemanaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana findFirst
   */
  export type DiaSemanaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana findFirstOrThrow
   */
  export type DiaSemanaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemana to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiaSemanas.
     */
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana findMany
   */
  export type DiaSemanaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter, which DiaSemanas to fetch.
     */
    where?: DiaSemanaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiaSemanas to fetch.
     */
    orderBy?: DiaSemanaOrderByWithRelationInput | DiaSemanaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiaSemanas.
     */
    cursor?: DiaSemanaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiaSemanas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiaSemanas.
     */
    skip?: number
    distinct?: DiaSemanaScalarFieldEnum | DiaSemanaScalarFieldEnum[]
  }

  /**
   * DiaSemana create
   */
  export type DiaSemanaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The data needed to create a DiaSemana.
     */
    data: XOR<DiaSemanaCreateInput, DiaSemanaUncheckedCreateInput>
  }

  /**
   * DiaSemana createMany
   */
  export type DiaSemanaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiaSemanas.
     */
    data: DiaSemanaCreateManyInput | DiaSemanaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaSemana createManyAndReturn
   */
  export type DiaSemanaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * The data used to create many DiaSemanas.
     */
    data: DiaSemanaCreateManyInput | DiaSemanaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiaSemana update
   */
  export type DiaSemanaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The data needed to update a DiaSemana.
     */
    data: XOR<DiaSemanaUpdateInput, DiaSemanaUncheckedUpdateInput>
    /**
     * Choose, which DiaSemana to update.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana updateMany
   */
  export type DiaSemanaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiaSemanas.
     */
    data: XOR<DiaSemanaUpdateManyMutationInput, DiaSemanaUncheckedUpdateManyInput>
    /**
     * Filter which DiaSemanas to update
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to update.
     */
    limit?: number
  }

  /**
   * DiaSemana updateManyAndReturn
   */
  export type DiaSemanaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * The data used to update DiaSemanas.
     */
    data: XOR<DiaSemanaUpdateManyMutationInput, DiaSemanaUncheckedUpdateManyInput>
    /**
     * Filter which DiaSemanas to update
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to update.
     */
    limit?: number
  }

  /**
   * DiaSemana upsert
   */
  export type DiaSemanaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * The filter to search for the DiaSemana to update in case it exists.
     */
    where: DiaSemanaWhereUniqueInput
    /**
     * In case the DiaSemana found by the `where` argument doesn't exist, create a new DiaSemana with this data.
     */
    create: XOR<DiaSemanaCreateInput, DiaSemanaUncheckedCreateInput>
    /**
     * In case the DiaSemana was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiaSemanaUpdateInput, DiaSemanaUncheckedUpdateInput>
  }

  /**
   * DiaSemana delete
   */
  export type DiaSemanaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
    /**
     * Filter which DiaSemana to delete.
     */
    where: DiaSemanaWhereUniqueInput
  }

  /**
   * DiaSemana deleteMany
   */
  export type DiaSemanaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiaSemanas to delete
     */
    where?: DiaSemanaWhereInput
    /**
     * Limit how many DiaSemanas to delete.
     */
    limit?: number
  }

  /**
   * DiaSemana.Disponibilidade
   */
  export type DiaSemana$DisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    cursor?: DisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * DiaSemana without action
   */
  export type DiaSemanaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaSemana
     */
    select?: DiaSemanaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiaSemana
     */
    omit?: DiaSemanaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaSemanaInclude<ExtArgs> | null
  }


  /**
   * Model Disponibilidade
   */

  export type AggregateDisponibilidade = {
    _count: DisponibilidadeCountAggregateOutputType | null
    _min: DisponibilidadeMinAggregateOutputType | null
    _max: DisponibilidadeMaxAggregateOutputType | null
  }

  export type DisponibilidadeMinAggregateOutputType = {
    id: string | null
    diaSemanaId: string | null
    horaInicio: Date | null
    horaFim: Date | null
  }

  export type DisponibilidadeMaxAggregateOutputType = {
    id: string | null
    diaSemanaId: string | null
    horaInicio: Date | null
    horaFim: Date | null
  }

  export type DisponibilidadeCountAggregateOutputType = {
    id: number
    diaSemanaId: number
    horaInicio: number
    horaFim: number
    _all: number
  }


  export type DisponibilidadeMinAggregateInputType = {
    id?: true
    diaSemanaId?: true
    horaInicio?: true
    horaFim?: true
  }

  export type DisponibilidadeMaxAggregateInputType = {
    id?: true
    diaSemanaId?: true
    horaInicio?: true
    horaFim?: true
  }

  export type DisponibilidadeCountAggregateInputType = {
    id?: true
    diaSemanaId?: true
    horaInicio?: true
    horaFim?: true
    _all?: true
  }

  export type DisponibilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidade to aggregate.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilidades
    **/
    _count?: true | DisponibilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibilidadeMaxAggregateInputType
  }

  export type GetDisponibilidadeAggregateType<T extends DisponibilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibilidade[P]>
      : GetScalarType<T[P], AggregateDisponibilidade[P]>
  }




  export type DisponibilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithAggregationInput | DisponibilidadeOrderByWithAggregationInput[]
    by: DisponibilidadeScalarFieldEnum[] | DisponibilidadeScalarFieldEnum
    having?: DisponibilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibilidadeCountAggregateInputType | true
    _min?: DisponibilidadeMinAggregateInputType
    _max?: DisponibilidadeMaxAggregateInputType
  }

  export type DisponibilidadeGroupByOutputType = {
    id: string
    diaSemanaId: string
    horaInicio: Date
    horaFim: Date
    _count: DisponibilidadeCountAggregateOutputType | null
    _min: DisponibilidadeMinAggregateOutputType | null
    _max: DisponibilidadeMaxAggregateOutputType | null
  }

  type GetDisponibilidadeGroupByPayload<T extends DisponibilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>
        }
      >
    >


  export type DisponibilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemanaId?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    diaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemanaId?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    diaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemanaId?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    diaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectScalar = {
    id?: boolean
    diaSemanaId?: boolean
    horaInicio?: boolean
    horaFim?: boolean
  }

  export type DisponibilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diaSemanaId" | "horaInicio" | "horaFim", ExtArgs["result"]["disponibilidade"]>
  export type DisponibilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
  }
  export type DisponibilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
  }
  export type DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diaSemana?: boolean | DiaSemanaDefaultArgs<ExtArgs>
  }

  export type $DisponibilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibilidade"
    objects: {
      diaSemana: Prisma.$DiaSemanaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      diaSemanaId: string
      horaInicio: Date
      horaFim: Date
    }, ExtArgs["result"]["disponibilidade"]>
    composites: {}
  }

  type DisponibilidadeGetPayload<S extends boolean | null | undefined | DisponibilidadeDefaultArgs> = $Result.GetResult<Prisma.$DisponibilidadePayload, S>

  type DisponibilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibilidadeCountAggregateInputType | true
    }

  export interface DisponibilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibilidade'], meta: { name: 'Disponibilidade' } }
    /**
     * Find zero or one Disponibilidade that matches the filter.
     * @param {DisponibilidadeFindUniqueArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibilidadeFindUniqueArgs>(args: SelectSubset<T, DisponibilidadeFindUniqueArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibilidadeFindUniqueOrThrowArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindFirstArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibilidadeFindFirstArgs>(args?: SelectSubset<T, DisponibilidadeFindFirstArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindFirstOrThrowArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilidades
     * const disponibilidades = await prisma.disponibilidade.findMany()
     * 
     * // Get first 10 Disponibilidades
     * const disponibilidades = await prisma.disponibilidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disponibilidadeWithIdOnly = await prisma.disponibilidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisponibilidadeFindManyArgs>(args?: SelectSubset<T, DisponibilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibilidade.
     * @param {DisponibilidadeCreateArgs} args - Arguments to create a Disponibilidade.
     * @example
     * // Create one Disponibilidade
     * const Disponibilidade = await prisma.disponibilidade.create({
     *   data: {
     *     // ... data to create a Disponibilidade
     *   }
     * })
     * 
     */
    create<T extends DisponibilidadeCreateArgs>(args: SelectSubset<T, DisponibilidadeCreateArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilidades.
     * @param {DisponibilidadeCreateManyArgs} args - Arguments to create many Disponibilidades.
     * @example
     * // Create many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibilidadeCreateManyArgs>(args?: SelectSubset<T, DisponibilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disponibilidades and returns the data saved in the database.
     * @param {DisponibilidadeCreateManyAndReturnArgs} args - Arguments to create many Disponibilidades.
     * @example
     * // Create many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disponibilidades and only return the `id`
     * const disponibilidadeWithIdOnly = await prisma.disponibilidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisponibilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, DisponibilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disponibilidade.
     * @param {DisponibilidadeDeleteArgs} args - Arguments to delete one Disponibilidade.
     * @example
     * // Delete one Disponibilidade
     * const Disponibilidade = await prisma.disponibilidade.delete({
     *   where: {
     *     // ... filter to delete one Disponibilidade
     *   }
     * })
     * 
     */
    delete<T extends DisponibilidadeDeleteArgs>(args: SelectSubset<T, DisponibilidadeDeleteArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibilidade.
     * @param {DisponibilidadeUpdateArgs} args - Arguments to update one Disponibilidade.
     * @example
     * // Update one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibilidadeUpdateArgs>(args: SelectSubset<T, DisponibilidadeUpdateArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilidades.
     * @param {DisponibilidadeDeleteManyArgs} args - Arguments to filter Disponibilidades to delete.
     * @example
     * // Delete a few Disponibilidades
     * const { count } = await prisma.disponibilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibilidadeDeleteManyArgs>(args?: SelectSubset<T, DisponibilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibilidadeUpdateManyArgs>(args: SelectSubset<T, DisponibilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidades and returns the data updated in the database.
     * @param {DisponibilidadeUpdateManyAndReturnArgs} args - Arguments to update many Disponibilidades.
     * @example
     * // Update many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disponibilidades and only return the `id`
     * const disponibilidadeWithIdOnly = await prisma.disponibilidade.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisponibilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disponibilidade.
     * @param {DisponibilidadeUpsertArgs} args - Arguments to update or create a Disponibilidade.
     * @example
     * // Update or create a Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.upsert({
     *   create: {
     *     // ... data to create a Disponibilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibilidade we want to update
     *   }
     * })
     */
    upsert<T extends DisponibilidadeUpsertArgs>(args: SelectSubset<T, DisponibilidadeUpsertArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeCountArgs} args - Arguments to filter Disponibilidades to count.
     * @example
     * // Count the number of Disponibilidades
     * const count = await prisma.disponibilidade.count({
     *   where: {
     *     // ... the filter for the Disponibilidades we want to count
     *   }
     * })
    **/
    count<T extends DisponibilidadeCountArgs>(
      args?: Subset<T, DisponibilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisponibilidadeAggregateArgs>(args: Subset<T, DisponibilidadeAggregateArgs>): Prisma.PrismaPromise<GetDisponibilidadeAggregateType<T>>

    /**
     * Group by Disponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeGroupByArgs} args - Group by arguments.
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
      T extends DisponibilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibilidadeGroupByArgs['orderBy'] }
        : { orderBy?: DisponibilidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisponibilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibilidade model
   */
  readonly fields: DisponibilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diaSemana<T extends DiaSemanaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaSemanaDefaultArgs<ExtArgs>>): Prisma__DiaSemanaClient<$Result.GetResult<Prisma.$DiaSemanaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Disponibilidade model
   */
  interface DisponibilidadeFieldRefs {
    readonly id: FieldRef<"Disponibilidade", 'String'>
    readonly diaSemanaId: FieldRef<"Disponibilidade", 'String'>
    readonly horaInicio: FieldRef<"Disponibilidade", 'DateTime'>
    readonly horaFim: FieldRef<"Disponibilidade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Disponibilidade findUnique
   */
  export type DisponibilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade findUniqueOrThrow
   */
  export type DisponibilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade findFirst
   */
  export type DisponibilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidades.
     */
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade findFirstOrThrow
   */
  export type DisponibilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidades.
     */
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade findMany
   */
  export type DisponibilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidades to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade create
   */
  export type DisponibilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Disponibilidade.
     */
    data: XOR<DisponibilidadeCreateInput, DisponibilidadeUncheckedCreateInput>
  }

  /**
   * Disponibilidade createMany
   */
  export type DisponibilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilidades.
     */
    data: DisponibilidadeCreateManyInput | DisponibilidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibilidade createManyAndReturn
   */
  export type DisponibilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Disponibilidades.
     */
    data: DisponibilidadeCreateManyInput | DisponibilidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibilidade update
   */
  export type DisponibilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Disponibilidade.
     */
    data: XOR<DisponibilidadeUpdateInput, DisponibilidadeUncheckedUpdateInput>
    /**
     * Choose, which Disponibilidade to update.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade updateMany
   */
  export type DisponibilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilidades.
     */
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidades to update
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to update.
     */
    limit?: number
  }

  /**
   * Disponibilidade updateManyAndReturn
   */
  export type DisponibilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to update Disponibilidades.
     */
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidades to update
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibilidade upsert
   */
  export type DisponibilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Disponibilidade to update in case it exists.
     */
    where: DisponibilidadeWhereUniqueInput
    /**
     * In case the Disponibilidade found by the `where` argument doesn't exist, create a new Disponibilidade with this data.
     */
    create: XOR<DisponibilidadeCreateInput, DisponibilidadeUncheckedCreateInput>
    /**
     * In case the Disponibilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibilidadeUpdateInput, DisponibilidadeUncheckedUpdateInput>
  }

  /**
   * Disponibilidade delete
   */
  export type DisponibilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter which Disponibilidade to delete.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade deleteMany
   */
  export type DisponibilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidades to delete
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to delete.
     */
    limit?: number
  }

  /**
   * Disponibilidade without action
   */
  export type DisponibilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: string | null
    rua: string | null
    bairro: string | null
    cep: string | null
    complemento: string | null
    estado: string | null
    cidade: string | null
    numero: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: string | null
    rua: string | null
    bairro: string | null
    cep: string | null
    complemento: string | null
    estado: string | null
    cidade: string | null
    numero: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    rua: number
    bairro: number
    cep: number
    complemento: number
    estado: number
    cidade: number
    numero: number
    _all: number
  }


  export type EnderecoMinAggregateInputType = {
    id?: true
    rua?: true
    bairro?: true
    cep?: true
    complemento?: true
    estado?: true
    cidade?: true
    numero?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    rua?: true
    bairro?: true
    cep?: true
    complemento?: true
    estado?: true
    cidade?: true
    numero?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    rua?: true
    bairro?: true
    cep?: true
    complemento?: true
    estado?: true
    cidade?: true
    numero?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: string
    rua: string
    bairro: string
    cep: string
    complemento: string
    estado: string
    cidade: string
    numero: string
    _count: EnderecoCountAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    bairro?: boolean
    cep?: boolean
    complemento?: boolean
    estado?: boolean
    cidade?: boolean
    numero?: boolean
    usuarios?: boolean | Endereco$usuariosArgs<ExtArgs>
    clinicas?: boolean | Endereco$clinicasArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    bairro?: boolean
    cep?: boolean
    complemento?: boolean
    estado?: boolean
    cidade?: boolean
    numero?: boolean
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rua?: boolean
    bairro?: boolean
    cep?: boolean
    complemento?: boolean
    estado?: boolean
    cidade?: boolean
    numero?: boolean
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectScalar = {
    id?: boolean
    rua?: boolean
    bairro?: boolean
    cep?: boolean
    complemento?: boolean
    estado?: boolean
    cidade?: boolean
    numero?: boolean
  }

  export type EnderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rua" | "bairro" | "cep" | "complemento" | "estado" | "cidade" | "numero", ExtArgs["result"]["endereco"]>
  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Endereco$usuariosArgs<ExtArgs>
    clinicas?: boolean | Endereco$clinicasArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnderecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EnderecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      usuarios: Prisma.$EnderecoUsuarioPayload<ExtArgs>[]
      clinicas: Prisma.$EnderecoClinicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rua: string
      bairro: string
      cep: string
      complemento: string
      estado: string
      cidade: string
      numero: string
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecos and returns the data saved in the database.
     * @param {EnderecoCreateManyAndReturnArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnderecoCreateManyAndReturnArgs>(args?: SelectSubset<T, EnderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos and returns the data updated in the database.
     * @param {EnderecoUpdateManyAndReturnArgs} args - Arguments to update many Enderecos.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnderecoUpdateManyAndReturnArgs>(args: SelectSubset<T, EnderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
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
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Endereco$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clinicas<T extends Endereco$clinicasArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$clinicasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Endereco model
   */
  interface EnderecoFieldRefs {
    readonly id: FieldRef<"Endereco", 'String'>
    readonly rua: FieldRef<"Endereco", 'String'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly cep: FieldRef<"Endereco", 'String'>
    readonly complemento: FieldRef<"Endereco", 'String'>
    readonly estado: FieldRef<"Endereco", 'String'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly numero: FieldRef<"Endereco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco createManyAndReturn
   */
  export type EnderecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco updateManyAndReturn
   */
  export type EnderecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to delete.
     */
    limit?: number
  }

  /**
   * Endereco.usuarios
   */
  export type Endereco$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    where?: EnderecoUsuarioWhereInput
    orderBy?: EnderecoUsuarioOrderByWithRelationInput | EnderecoUsuarioOrderByWithRelationInput[]
    cursor?: EnderecoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoUsuarioScalarFieldEnum | EnderecoUsuarioScalarFieldEnum[]
  }

  /**
   * Endereco.clinicas
   */
  export type Endereco$clinicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    where?: EnderecoClinicaWhereInput
    orderBy?: EnderecoClinicaOrderByWithRelationInput | EnderecoClinicaOrderByWithRelationInput[]
    cursor?: EnderecoClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoClinicaScalarFieldEnum | EnderecoClinicaScalarFieldEnum[]
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
  }


  /**
   * Model EnderecoUsuario
   */

  export type AggregateEnderecoUsuario = {
    _count: EnderecoUsuarioCountAggregateOutputType | null
    _min: EnderecoUsuarioMinAggregateOutputType | null
    _max: EnderecoUsuarioMaxAggregateOutputType | null
  }

  export type EnderecoUsuarioMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    enderecoId: string | null
  }

  export type EnderecoUsuarioMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    enderecoId: string | null
  }

  export type EnderecoUsuarioCountAggregateOutputType = {
    id: number
    usuarioId: number
    enderecoId: number
    _all: number
  }


  export type EnderecoUsuarioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    enderecoId?: true
  }

  export type EnderecoUsuarioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    enderecoId?: true
  }

  export type EnderecoUsuarioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    enderecoId?: true
    _all?: true
  }

  export type EnderecoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnderecoUsuario to aggregate.
     */
    where?: EnderecoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoUsuarios to fetch.
     */
    orderBy?: EnderecoUsuarioOrderByWithRelationInput | EnderecoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnderecoUsuarios
    **/
    _count?: true | EnderecoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoUsuarioMaxAggregateInputType
  }

  export type GetEnderecoUsuarioAggregateType<T extends EnderecoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateEnderecoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnderecoUsuario[P]>
      : GetScalarType<T[P], AggregateEnderecoUsuario[P]>
  }




  export type EnderecoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoUsuarioWhereInput
    orderBy?: EnderecoUsuarioOrderByWithAggregationInput | EnderecoUsuarioOrderByWithAggregationInput[]
    by: EnderecoUsuarioScalarFieldEnum[] | EnderecoUsuarioScalarFieldEnum
    having?: EnderecoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoUsuarioCountAggregateInputType | true
    _min?: EnderecoUsuarioMinAggregateInputType
    _max?: EnderecoUsuarioMaxAggregateInputType
  }

  export type EnderecoUsuarioGroupByOutputType = {
    id: string
    usuarioId: string
    enderecoId: string
    _count: EnderecoUsuarioCountAggregateOutputType | null
    _min: EnderecoUsuarioMinAggregateOutputType | null
    _max: EnderecoUsuarioMaxAggregateOutputType | null
  }

  type GetEnderecoUsuarioGroupByPayload<T extends EnderecoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enderecoUsuario"]>

  export type EnderecoUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enderecoUsuario"]>

  export type EnderecoUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enderecoUsuario"]>

  export type EnderecoUsuarioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
  }

  export type EnderecoUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "enderecoId", ExtArgs["result"]["enderecoUsuario"]>
  export type EnderecoUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }
  export type EnderecoUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }
  export type EnderecoUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }

  export type $EnderecoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnderecoUsuario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      endereco: Prisma.$EnderecoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      enderecoId: string
    }, ExtArgs["result"]["enderecoUsuario"]>
    composites: {}
  }

  type EnderecoUsuarioGetPayload<S extends boolean | null | undefined | EnderecoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$EnderecoUsuarioPayload, S>

  type EnderecoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoUsuarioCountAggregateInputType | true
    }

  export interface EnderecoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnderecoUsuario'], meta: { name: 'EnderecoUsuario' } }
    /**
     * Find zero or one EnderecoUsuario that matches the filter.
     * @param {EnderecoUsuarioFindUniqueArgs} args - Arguments to find a EnderecoUsuario
     * @example
     * // Get one EnderecoUsuario
     * const enderecoUsuario = await prisma.enderecoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoUsuarioFindUniqueArgs>(args: SelectSubset<T, EnderecoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__EnderecoUsuarioClient<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnderecoUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a EnderecoUsuario
     * @example
     * // Get one EnderecoUsuario
     * const enderecoUsuario = await prisma.enderecoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoUsuarioClient<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnderecoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUsuarioFindFirstArgs} args - Arguments to find a EnderecoUsuario
     * @example
     * // Get one EnderecoUsuario
     * const enderecoUsuario = await prisma.enderecoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoUsuarioFindFirstArgs>(args?: SelectSubset<T, EnderecoUsuarioFindFirstArgs<ExtArgs>>): Prisma__EnderecoUsuarioClient<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnderecoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUsuarioFindFirstOrThrowArgs} args - Arguments to find a EnderecoUsuario
     * @example
     * // Get one EnderecoUsuario
     * const enderecoUsuario = await prisma.enderecoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoUsuarioClient<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnderecoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnderecoUsuarios
     * const enderecoUsuarios = await prisma.enderecoUsuario.findMany()
     * 
     * // Get first 10 EnderecoUsuarios
     * const enderecoUsuarios = await prisma.enderecoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoUsuarioWithIdOnly = await prisma.enderecoUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoUsuarioFindManyArgs>(args?: SelectSubset<T, EnderecoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnderecoUsuario.
     * @param {EnderecoUsuarioCreateArgs} args - Arguments to create a EnderecoUsuario.
     * @example
     * // Create one EnderecoUsuario
     * const EnderecoUsuario = await prisma.enderecoUsuario.create({
     *   data: {
     *     // ... data to create a EnderecoUsuario
     *   }
     * })
     * 
     */
    create<T extends EnderecoUsuarioCreateArgs>(args: SelectSubset<T, EnderecoUsuarioCreateArgs<ExtArgs>>): Prisma__EnderecoUsuarioClient<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnderecoUsuarios.
     * @param {EnderecoUsuarioCreateManyArgs} args - Arguments to create many EnderecoUsuarios.
     * @example
     * // Create many EnderecoUsuarios
     * const enderecoUsuario = await prisma.enderecoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoUsuarioCreateManyArgs>(args?: SelectSubset<T, EnderecoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnderecoUsuarios and returns the data saved in the database.
     * @param {EnderecoUsuarioCreateManyAndReturnArgs} args - Arguments to create many EnderecoUsuarios.
     * @example
     * // Create many EnderecoUsuarios
     * const enderecoUsuario = await prisma.enderecoUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnderecoUsuarios and only return the `id`
     * const enderecoUsuarioWithIdOnly = await prisma.enderecoUsuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnderecoUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, EnderecoUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnderecoUsuario.
     * @param {EnderecoUsuarioDeleteArgs} args - Arguments to delete one EnderecoUsuario.
     * @example
     * // Delete one EnderecoUsuario
     * const EnderecoUsuario = await prisma.enderecoUsuario.delete({
     *   where: {
     *     // ... filter to delete one EnderecoUsuario
     *   }
     * })
     * 
     */
    delete<T extends EnderecoUsuarioDeleteArgs>(args: SelectSubset<T, EnderecoUsuarioDeleteArgs<ExtArgs>>): Prisma__EnderecoUsuarioClient<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnderecoUsuario.
     * @param {EnderecoUsuarioUpdateArgs} args - Arguments to update one EnderecoUsuario.
     * @example
     * // Update one EnderecoUsuario
     * const enderecoUsuario = await prisma.enderecoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUsuarioUpdateArgs>(args: SelectSubset<T, EnderecoUsuarioUpdateArgs<ExtArgs>>): Prisma__EnderecoUsuarioClient<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnderecoUsuarios.
     * @param {EnderecoUsuarioDeleteManyArgs} args - Arguments to filter EnderecoUsuarios to delete.
     * @example
     * // Delete a few EnderecoUsuarios
     * const { count } = await prisma.enderecoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoUsuarioDeleteManyArgs>(args?: SelectSubset<T, EnderecoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnderecoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnderecoUsuarios
     * const enderecoUsuario = await prisma.enderecoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUsuarioUpdateManyArgs>(args: SelectSubset<T, EnderecoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnderecoUsuarios and returns the data updated in the database.
     * @param {EnderecoUsuarioUpdateManyAndReturnArgs} args - Arguments to update many EnderecoUsuarios.
     * @example
     * // Update many EnderecoUsuarios
     * const enderecoUsuario = await prisma.enderecoUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnderecoUsuarios and only return the `id`
     * const enderecoUsuarioWithIdOnly = await prisma.enderecoUsuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnderecoUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, EnderecoUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnderecoUsuario.
     * @param {EnderecoUsuarioUpsertArgs} args - Arguments to update or create a EnderecoUsuario.
     * @example
     * // Update or create a EnderecoUsuario
     * const enderecoUsuario = await prisma.enderecoUsuario.upsert({
     *   create: {
     *     // ... data to create a EnderecoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnderecoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUsuarioUpsertArgs>(args: SelectSubset<T, EnderecoUsuarioUpsertArgs<ExtArgs>>): Prisma__EnderecoUsuarioClient<$Result.GetResult<Prisma.$EnderecoUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnderecoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUsuarioCountArgs} args - Arguments to filter EnderecoUsuarios to count.
     * @example
     * // Count the number of EnderecoUsuarios
     * const count = await prisma.enderecoUsuario.count({
     *   where: {
     *     // ... the filter for the EnderecoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends EnderecoUsuarioCountArgs>(
      args?: Subset<T, EnderecoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnderecoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoUsuarioAggregateArgs>(args: Subset<T, EnderecoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetEnderecoUsuarioAggregateType<T>>

    /**
     * Group by EnderecoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUsuarioGroupByArgs} args - Group by arguments.
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
      T extends EnderecoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnderecoUsuario model
   */
  readonly fields: EnderecoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnderecoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endereco<T extends EnderecoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnderecoDefaultArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnderecoUsuario model
   */
  interface EnderecoUsuarioFieldRefs {
    readonly id: FieldRef<"EnderecoUsuario", 'String'>
    readonly usuarioId: FieldRef<"EnderecoUsuario", 'String'>
    readonly enderecoId: FieldRef<"EnderecoUsuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EnderecoUsuario findUnique
   */
  export type EnderecoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoUsuario to fetch.
     */
    where: EnderecoUsuarioWhereUniqueInput
  }

  /**
   * EnderecoUsuario findUniqueOrThrow
   */
  export type EnderecoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoUsuario to fetch.
     */
    where: EnderecoUsuarioWhereUniqueInput
  }

  /**
   * EnderecoUsuario findFirst
   */
  export type EnderecoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoUsuario to fetch.
     */
    where?: EnderecoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoUsuarios to fetch.
     */
    orderBy?: EnderecoUsuarioOrderByWithRelationInput | EnderecoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnderecoUsuarios.
     */
    cursor?: EnderecoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnderecoUsuarios.
     */
    distinct?: EnderecoUsuarioScalarFieldEnum | EnderecoUsuarioScalarFieldEnum[]
  }

  /**
   * EnderecoUsuario findFirstOrThrow
   */
  export type EnderecoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoUsuario to fetch.
     */
    where?: EnderecoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoUsuarios to fetch.
     */
    orderBy?: EnderecoUsuarioOrderByWithRelationInput | EnderecoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnderecoUsuarios.
     */
    cursor?: EnderecoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnderecoUsuarios.
     */
    distinct?: EnderecoUsuarioScalarFieldEnum | EnderecoUsuarioScalarFieldEnum[]
  }

  /**
   * EnderecoUsuario findMany
   */
  export type EnderecoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoUsuarios to fetch.
     */
    where?: EnderecoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoUsuarios to fetch.
     */
    orderBy?: EnderecoUsuarioOrderByWithRelationInput | EnderecoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnderecoUsuarios.
     */
    cursor?: EnderecoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoUsuarios.
     */
    skip?: number
    distinct?: EnderecoUsuarioScalarFieldEnum | EnderecoUsuarioScalarFieldEnum[]
  }

  /**
   * EnderecoUsuario create
   */
  export type EnderecoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a EnderecoUsuario.
     */
    data: XOR<EnderecoUsuarioCreateInput, EnderecoUsuarioUncheckedCreateInput>
  }

  /**
   * EnderecoUsuario createMany
   */
  export type EnderecoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnderecoUsuarios.
     */
    data: EnderecoUsuarioCreateManyInput | EnderecoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnderecoUsuario createManyAndReturn
   */
  export type EnderecoUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many EnderecoUsuarios.
     */
    data: EnderecoUsuarioCreateManyInput | EnderecoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnderecoUsuario update
   */
  export type EnderecoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a EnderecoUsuario.
     */
    data: XOR<EnderecoUsuarioUpdateInput, EnderecoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which EnderecoUsuario to update.
     */
    where: EnderecoUsuarioWhereUniqueInput
  }

  /**
   * EnderecoUsuario updateMany
   */
  export type EnderecoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnderecoUsuarios.
     */
    data: XOR<EnderecoUsuarioUpdateManyMutationInput, EnderecoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which EnderecoUsuarios to update
     */
    where?: EnderecoUsuarioWhereInput
    /**
     * Limit how many EnderecoUsuarios to update.
     */
    limit?: number
  }

  /**
   * EnderecoUsuario updateManyAndReturn
   */
  export type EnderecoUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update EnderecoUsuarios.
     */
    data: XOR<EnderecoUsuarioUpdateManyMutationInput, EnderecoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which EnderecoUsuarios to update
     */
    where?: EnderecoUsuarioWhereInput
    /**
     * Limit how many EnderecoUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnderecoUsuario upsert
   */
  export type EnderecoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the EnderecoUsuario to update in case it exists.
     */
    where: EnderecoUsuarioWhereUniqueInput
    /**
     * In case the EnderecoUsuario found by the `where` argument doesn't exist, create a new EnderecoUsuario with this data.
     */
    create: XOR<EnderecoUsuarioCreateInput, EnderecoUsuarioUncheckedCreateInput>
    /**
     * In case the EnderecoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUsuarioUpdateInput, EnderecoUsuarioUncheckedUpdateInput>
  }

  /**
   * EnderecoUsuario delete
   */
  export type EnderecoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
    /**
     * Filter which EnderecoUsuario to delete.
     */
    where: EnderecoUsuarioWhereUniqueInput
  }

  /**
   * EnderecoUsuario deleteMany
   */
  export type EnderecoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnderecoUsuarios to delete
     */
    where?: EnderecoUsuarioWhereInput
    /**
     * Limit how many EnderecoUsuarios to delete.
     */
    limit?: number
  }

  /**
   * EnderecoUsuario without action
   */
  export type EnderecoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoUsuario
     */
    select?: EnderecoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoUsuario
     */
    omit?: EnderecoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model EnderecoClinica
   */

  export type AggregateEnderecoClinica = {
    _count: EnderecoClinicaCountAggregateOutputType | null
    _min: EnderecoClinicaMinAggregateOutputType | null
    _max: EnderecoClinicaMaxAggregateOutputType | null
  }

  export type EnderecoClinicaMinAggregateOutputType = {
    id: string | null
    clinicaId: string | null
    enderecoId: string | null
  }

  export type EnderecoClinicaMaxAggregateOutputType = {
    id: string | null
    clinicaId: string | null
    enderecoId: string | null
  }

  export type EnderecoClinicaCountAggregateOutputType = {
    id: number
    clinicaId: number
    enderecoId: number
    _all: number
  }


  export type EnderecoClinicaMinAggregateInputType = {
    id?: true
    clinicaId?: true
    enderecoId?: true
  }

  export type EnderecoClinicaMaxAggregateInputType = {
    id?: true
    clinicaId?: true
    enderecoId?: true
  }

  export type EnderecoClinicaCountAggregateInputType = {
    id?: true
    clinicaId?: true
    enderecoId?: true
    _all?: true
  }

  export type EnderecoClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnderecoClinica to aggregate.
     */
    where?: EnderecoClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoClinicas to fetch.
     */
    orderBy?: EnderecoClinicaOrderByWithRelationInput | EnderecoClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnderecoClinicas
    **/
    _count?: true | EnderecoClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoClinicaMaxAggregateInputType
  }

  export type GetEnderecoClinicaAggregateType<T extends EnderecoClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateEnderecoClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnderecoClinica[P]>
      : GetScalarType<T[P], AggregateEnderecoClinica[P]>
  }




  export type EnderecoClinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoClinicaWhereInput
    orderBy?: EnderecoClinicaOrderByWithAggregationInput | EnderecoClinicaOrderByWithAggregationInput[]
    by: EnderecoClinicaScalarFieldEnum[] | EnderecoClinicaScalarFieldEnum
    having?: EnderecoClinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoClinicaCountAggregateInputType | true
    _min?: EnderecoClinicaMinAggregateInputType
    _max?: EnderecoClinicaMaxAggregateInputType
  }

  export type EnderecoClinicaGroupByOutputType = {
    id: string
    clinicaId: string
    enderecoId: string
    _count: EnderecoClinicaCountAggregateOutputType | null
    _min: EnderecoClinicaMinAggregateOutputType | null
    _max: EnderecoClinicaMaxAggregateOutputType | null
  }

  type GetEnderecoClinicaGroupByPayload<T extends EnderecoClinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoClinicaGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoClinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicaId?: boolean
    enderecoId?: boolean
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enderecoClinica"]>

  export type EnderecoClinicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicaId?: boolean
    enderecoId?: boolean
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enderecoClinica"]>

  export type EnderecoClinicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicaId?: boolean
    enderecoId?: boolean
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enderecoClinica"]>

  export type EnderecoClinicaSelectScalar = {
    id?: boolean
    clinicaId?: boolean
    enderecoId?: boolean
  }

  export type EnderecoClinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicaId" | "enderecoId", ExtArgs["result"]["enderecoClinica"]>
  export type EnderecoClinicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }
  export type EnderecoClinicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }
  export type EnderecoClinicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
  }

  export type $EnderecoClinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnderecoClinica"
    objects: {
      clinica: Prisma.$ClinicaPayload<ExtArgs>
      endereco: Prisma.$EnderecoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicaId: string
      enderecoId: string
    }, ExtArgs["result"]["enderecoClinica"]>
    composites: {}
  }

  type EnderecoClinicaGetPayload<S extends boolean | null | undefined | EnderecoClinicaDefaultArgs> = $Result.GetResult<Prisma.$EnderecoClinicaPayload, S>

  type EnderecoClinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoClinicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoClinicaCountAggregateInputType | true
    }

  export interface EnderecoClinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnderecoClinica'], meta: { name: 'EnderecoClinica' } }
    /**
     * Find zero or one EnderecoClinica that matches the filter.
     * @param {EnderecoClinicaFindUniqueArgs} args - Arguments to find a EnderecoClinica
     * @example
     * // Get one EnderecoClinica
     * const enderecoClinica = await prisma.enderecoClinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoClinicaFindUniqueArgs>(args: SelectSubset<T, EnderecoClinicaFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClinicaClient<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnderecoClinica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoClinicaFindUniqueOrThrowArgs} args - Arguments to find a EnderecoClinica
     * @example
     * // Get one EnderecoClinica
     * const enderecoClinica = await prisma.enderecoClinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoClinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoClinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClinicaClient<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnderecoClinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoClinicaFindFirstArgs} args - Arguments to find a EnderecoClinica
     * @example
     * // Get one EnderecoClinica
     * const enderecoClinica = await prisma.enderecoClinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoClinicaFindFirstArgs>(args?: SelectSubset<T, EnderecoClinicaFindFirstArgs<ExtArgs>>): Prisma__EnderecoClinicaClient<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnderecoClinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoClinicaFindFirstOrThrowArgs} args - Arguments to find a EnderecoClinica
     * @example
     * // Get one EnderecoClinica
     * const enderecoClinica = await prisma.enderecoClinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoClinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoClinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClinicaClient<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnderecoClinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoClinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnderecoClinicas
     * const enderecoClinicas = await prisma.enderecoClinica.findMany()
     * 
     * // Get first 10 EnderecoClinicas
     * const enderecoClinicas = await prisma.enderecoClinica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoClinicaWithIdOnly = await prisma.enderecoClinica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoClinicaFindManyArgs>(args?: SelectSubset<T, EnderecoClinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnderecoClinica.
     * @param {EnderecoClinicaCreateArgs} args - Arguments to create a EnderecoClinica.
     * @example
     * // Create one EnderecoClinica
     * const EnderecoClinica = await prisma.enderecoClinica.create({
     *   data: {
     *     // ... data to create a EnderecoClinica
     *   }
     * })
     * 
     */
    create<T extends EnderecoClinicaCreateArgs>(args: SelectSubset<T, EnderecoClinicaCreateArgs<ExtArgs>>): Prisma__EnderecoClinicaClient<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnderecoClinicas.
     * @param {EnderecoClinicaCreateManyArgs} args - Arguments to create many EnderecoClinicas.
     * @example
     * // Create many EnderecoClinicas
     * const enderecoClinica = await prisma.enderecoClinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoClinicaCreateManyArgs>(args?: SelectSubset<T, EnderecoClinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnderecoClinicas and returns the data saved in the database.
     * @param {EnderecoClinicaCreateManyAndReturnArgs} args - Arguments to create many EnderecoClinicas.
     * @example
     * // Create many EnderecoClinicas
     * const enderecoClinica = await prisma.enderecoClinica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnderecoClinicas and only return the `id`
     * const enderecoClinicaWithIdOnly = await prisma.enderecoClinica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnderecoClinicaCreateManyAndReturnArgs>(args?: SelectSubset<T, EnderecoClinicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnderecoClinica.
     * @param {EnderecoClinicaDeleteArgs} args - Arguments to delete one EnderecoClinica.
     * @example
     * // Delete one EnderecoClinica
     * const EnderecoClinica = await prisma.enderecoClinica.delete({
     *   where: {
     *     // ... filter to delete one EnderecoClinica
     *   }
     * })
     * 
     */
    delete<T extends EnderecoClinicaDeleteArgs>(args: SelectSubset<T, EnderecoClinicaDeleteArgs<ExtArgs>>): Prisma__EnderecoClinicaClient<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnderecoClinica.
     * @param {EnderecoClinicaUpdateArgs} args - Arguments to update one EnderecoClinica.
     * @example
     * // Update one EnderecoClinica
     * const enderecoClinica = await prisma.enderecoClinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoClinicaUpdateArgs>(args: SelectSubset<T, EnderecoClinicaUpdateArgs<ExtArgs>>): Prisma__EnderecoClinicaClient<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnderecoClinicas.
     * @param {EnderecoClinicaDeleteManyArgs} args - Arguments to filter EnderecoClinicas to delete.
     * @example
     * // Delete a few EnderecoClinicas
     * const { count } = await prisma.enderecoClinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoClinicaDeleteManyArgs>(args?: SelectSubset<T, EnderecoClinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnderecoClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoClinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnderecoClinicas
     * const enderecoClinica = await prisma.enderecoClinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoClinicaUpdateManyArgs>(args: SelectSubset<T, EnderecoClinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnderecoClinicas and returns the data updated in the database.
     * @param {EnderecoClinicaUpdateManyAndReturnArgs} args - Arguments to update many EnderecoClinicas.
     * @example
     * // Update many EnderecoClinicas
     * const enderecoClinica = await prisma.enderecoClinica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnderecoClinicas and only return the `id`
     * const enderecoClinicaWithIdOnly = await prisma.enderecoClinica.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnderecoClinicaUpdateManyAndReturnArgs>(args: SelectSubset<T, EnderecoClinicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnderecoClinica.
     * @param {EnderecoClinicaUpsertArgs} args - Arguments to update or create a EnderecoClinica.
     * @example
     * // Update or create a EnderecoClinica
     * const enderecoClinica = await prisma.enderecoClinica.upsert({
     *   create: {
     *     // ... data to create a EnderecoClinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnderecoClinica we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoClinicaUpsertArgs>(args: SelectSubset<T, EnderecoClinicaUpsertArgs<ExtArgs>>): Prisma__EnderecoClinicaClient<$Result.GetResult<Prisma.$EnderecoClinicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnderecoClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoClinicaCountArgs} args - Arguments to filter EnderecoClinicas to count.
     * @example
     * // Count the number of EnderecoClinicas
     * const count = await prisma.enderecoClinica.count({
     *   where: {
     *     // ... the filter for the EnderecoClinicas we want to count
     *   }
     * })
    **/
    count<T extends EnderecoClinicaCountArgs>(
      args?: Subset<T, EnderecoClinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnderecoClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoClinicaAggregateArgs>(args: Subset<T, EnderecoClinicaAggregateArgs>): Prisma.PrismaPromise<GetEnderecoClinicaAggregateType<T>>

    /**
     * Group by EnderecoClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoClinicaGroupByArgs} args - Group by arguments.
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
      T extends EnderecoClinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoClinicaGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoClinicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoClinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnderecoClinica model
   */
  readonly fields: EnderecoClinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnderecoClinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinica<T extends ClinicaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicaDefaultArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endereco<T extends EnderecoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnderecoDefaultArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnderecoClinica model
   */
  interface EnderecoClinicaFieldRefs {
    readonly id: FieldRef<"EnderecoClinica", 'String'>
    readonly clinicaId: FieldRef<"EnderecoClinica", 'String'>
    readonly enderecoId: FieldRef<"EnderecoClinica", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EnderecoClinica findUnique
   */
  export type EnderecoClinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoClinica to fetch.
     */
    where: EnderecoClinicaWhereUniqueInput
  }

  /**
   * EnderecoClinica findUniqueOrThrow
   */
  export type EnderecoClinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoClinica to fetch.
     */
    where: EnderecoClinicaWhereUniqueInput
  }

  /**
   * EnderecoClinica findFirst
   */
  export type EnderecoClinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoClinica to fetch.
     */
    where?: EnderecoClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoClinicas to fetch.
     */
    orderBy?: EnderecoClinicaOrderByWithRelationInput | EnderecoClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnderecoClinicas.
     */
    cursor?: EnderecoClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnderecoClinicas.
     */
    distinct?: EnderecoClinicaScalarFieldEnum | EnderecoClinicaScalarFieldEnum[]
  }

  /**
   * EnderecoClinica findFirstOrThrow
   */
  export type EnderecoClinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoClinica to fetch.
     */
    where?: EnderecoClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoClinicas to fetch.
     */
    orderBy?: EnderecoClinicaOrderByWithRelationInput | EnderecoClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnderecoClinicas.
     */
    cursor?: EnderecoClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnderecoClinicas.
     */
    distinct?: EnderecoClinicaScalarFieldEnum | EnderecoClinicaScalarFieldEnum[]
  }

  /**
   * EnderecoClinica findMany
   */
  export type EnderecoClinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * Filter, which EnderecoClinicas to fetch.
     */
    where?: EnderecoClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnderecoClinicas to fetch.
     */
    orderBy?: EnderecoClinicaOrderByWithRelationInput | EnderecoClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnderecoClinicas.
     */
    cursor?: EnderecoClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnderecoClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnderecoClinicas.
     */
    skip?: number
    distinct?: EnderecoClinicaScalarFieldEnum | EnderecoClinicaScalarFieldEnum[]
  }

  /**
   * EnderecoClinica create
   */
  export type EnderecoClinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * The data needed to create a EnderecoClinica.
     */
    data: XOR<EnderecoClinicaCreateInput, EnderecoClinicaUncheckedCreateInput>
  }

  /**
   * EnderecoClinica createMany
   */
  export type EnderecoClinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnderecoClinicas.
     */
    data: EnderecoClinicaCreateManyInput | EnderecoClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnderecoClinica createManyAndReturn
   */
  export type EnderecoClinicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * The data used to create many EnderecoClinicas.
     */
    data: EnderecoClinicaCreateManyInput | EnderecoClinicaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnderecoClinica update
   */
  export type EnderecoClinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * The data needed to update a EnderecoClinica.
     */
    data: XOR<EnderecoClinicaUpdateInput, EnderecoClinicaUncheckedUpdateInput>
    /**
     * Choose, which EnderecoClinica to update.
     */
    where: EnderecoClinicaWhereUniqueInput
  }

  /**
   * EnderecoClinica updateMany
   */
  export type EnderecoClinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnderecoClinicas.
     */
    data: XOR<EnderecoClinicaUpdateManyMutationInput, EnderecoClinicaUncheckedUpdateManyInput>
    /**
     * Filter which EnderecoClinicas to update
     */
    where?: EnderecoClinicaWhereInput
    /**
     * Limit how many EnderecoClinicas to update.
     */
    limit?: number
  }

  /**
   * EnderecoClinica updateManyAndReturn
   */
  export type EnderecoClinicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * The data used to update EnderecoClinicas.
     */
    data: XOR<EnderecoClinicaUpdateManyMutationInput, EnderecoClinicaUncheckedUpdateManyInput>
    /**
     * Filter which EnderecoClinicas to update
     */
    where?: EnderecoClinicaWhereInput
    /**
     * Limit how many EnderecoClinicas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnderecoClinica upsert
   */
  export type EnderecoClinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * The filter to search for the EnderecoClinica to update in case it exists.
     */
    where: EnderecoClinicaWhereUniqueInput
    /**
     * In case the EnderecoClinica found by the `where` argument doesn't exist, create a new EnderecoClinica with this data.
     */
    create: XOR<EnderecoClinicaCreateInput, EnderecoClinicaUncheckedCreateInput>
    /**
     * In case the EnderecoClinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoClinicaUpdateInput, EnderecoClinicaUncheckedUpdateInput>
  }

  /**
   * EnderecoClinica delete
   */
  export type EnderecoClinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
    /**
     * Filter which EnderecoClinica to delete.
     */
    where: EnderecoClinicaWhereUniqueInput
  }

  /**
   * EnderecoClinica deleteMany
   */
  export type EnderecoClinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnderecoClinicas to delete
     */
    where?: EnderecoClinicaWhereInput
    /**
     * Limit how many EnderecoClinicas to delete.
     */
    limit?: number
  }

  /**
   * EnderecoClinica without action
   */
  export type EnderecoClinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoClinica
     */
    select?: EnderecoClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnderecoClinica
     */
    omit?: EnderecoClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoClinicaInclude<ExtArgs> | null
  }


  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    valor: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    valor: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: string | null
    data: Date | null
    horaInicio: Date | null
    horaFim: Date | null
    turno: string | null
    tipoConsulta: string | null
    observacao: string | null
    motivo: string | null
    avaliacao: string | null
    valor: number | null
    status: string | null
    pacienteId: string | null
    profissionalId: string | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    horaInicio: Date | null
    horaFim: Date | null
    turno: string | null
    tipoConsulta: string | null
    observacao: string | null
    motivo: string | null
    avaliacao: string | null
    valor: number | null
    status: string | null
    pacienteId: string | null
    profissionalId: string | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    data: number
    horaInicio: number
    horaFim: number
    turno: number
    tipoConsulta: number
    observacao: number
    motivo: number
    avaliacao: number
    valor: number
    status: number
    pacienteId: number
    profissionalId: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    valor?: true
  }

  export type ConsultaSumAggregateInputType = {
    valor?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    data?: true
    horaInicio?: true
    horaFim?: true
    turno?: true
    tipoConsulta?: true
    observacao?: true
    motivo?: true
    avaliacao?: true
    valor?: true
    status?: true
    pacienteId?: true
    profissionalId?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    data?: true
    horaInicio?: true
    horaFim?: true
    turno?: true
    tipoConsulta?: true
    observacao?: true
    motivo?: true
    avaliacao?: true
    valor?: true
    status?: true
    pacienteId?: true
    profissionalId?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    data?: true
    horaInicio?: true
    horaFim?: true
    turno?: true
    tipoConsulta?: true
    observacao?: true
    motivo?: true
    avaliacao?: true
    valor?: true
    status?: true
    pacienteId?: true
    profissionalId?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: string
    data: Date
    horaInicio: Date
    horaFim: Date
    turno: string
    tipoConsulta: string
    observacao: string | null
    motivo: string
    avaliacao: string | null
    valor: number | null
    status: string
    pacienteId: string
    profissionalId: string
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    turno?: boolean
    tipoConsulta?: boolean
    observacao?: boolean
    motivo?: boolean
    avaliacao?: boolean
    valor?: boolean
    status?: boolean
    pacienteId?: boolean
    profissionalId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    HistoricoMedico?: boolean | Consulta$HistoricoMedicoArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    turno?: boolean
    tipoConsulta?: boolean
    observacao?: boolean
    motivo?: boolean
    avaliacao?: boolean
    valor?: boolean
    status?: boolean
    pacienteId?: boolean
    profissionalId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    turno?: boolean
    tipoConsulta?: boolean
    observacao?: boolean
    motivo?: boolean
    avaliacao?: boolean
    valor?: boolean
    status?: boolean
    pacienteId?: boolean
    profissionalId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectScalar = {
    id?: boolean
    data?: boolean
    horaInicio?: boolean
    horaFim?: boolean
    turno?: boolean
    tipoConsulta?: boolean
    observacao?: boolean
    motivo?: boolean
    avaliacao?: boolean
    valor?: boolean
    status?: boolean
    pacienteId?: boolean
    profissionalId?: boolean
  }

  export type ConsultaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "horaInicio" | "horaFim" | "turno" | "tipoConsulta" | "observacao" | "motivo" | "avaliacao" | "valor" | "status" | "pacienteId" | "profissionalId", ExtArgs["result"]["consulta"]>
  export type ConsultaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    HistoricoMedico?: boolean | Consulta$HistoricoMedicoArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }

  export type $ConsultaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      profissional: Prisma.$ProfissionalPayload<ExtArgs>
      HistoricoMedico: Prisma.$HistoricoMedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      horaInicio: Date
      horaFim: Date
      turno: string
      tipoConsulta: string
      observacao: string | null
      motivo: string
      avaliacao: string | null
      valor: number | null
      status: string
      pacienteId: string
      profissionalId: string
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }

  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultaFindUniqueArgs>(args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultaFindFirstArgs>(args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultaFindManyArgs>(args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
     */
    create<T extends ConsultaCreateArgs>(args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {ConsultaCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultaCreateManyArgs>(args?: SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultas and returns the data saved in the database.
     * @param {ConsultaCreateManyAndReturnArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
     */
    delete<T extends ConsultaDeleteArgs>(args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultaUpdateArgs>(args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultaUpdateManyArgs>(args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas and returns the data updated in the database.
     * @param {ConsultaUpdateManyAndReturnArgs} args - Arguments to update many Consultas.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsultaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
     */
    upsert<T extends ConsultaUpsertArgs>(args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
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
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissional<T extends ProfissionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalDefaultArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    HistoricoMedico<T extends Consulta$HistoricoMedicoArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$HistoricoMedicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Consulta model
   */
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'String'>
    readonly data: FieldRef<"Consulta", 'DateTime'>
    readonly horaInicio: FieldRef<"Consulta", 'DateTime'>
    readonly horaFim: FieldRef<"Consulta", 'DateTime'>
    readonly turno: FieldRef<"Consulta", 'String'>
    readonly tipoConsulta: FieldRef<"Consulta", 'String'>
    readonly observacao: FieldRef<"Consulta", 'String'>
    readonly motivo: FieldRef<"Consulta", 'String'>
    readonly avaliacao: FieldRef<"Consulta", 'String'>
    readonly valor: FieldRef<"Consulta", 'Float'>
    readonly status: FieldRef<"Consulta", 'String'>
    readonly pacienteId: FieldRef<"Consulta", 'String'>
    readonly profissionalId: FieldRef<"Consulta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }

  /**
   * Consulta createMany
   */
  export type ConsultaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consulta createManyAndReturn
   */
  export type ConsultaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consulta updateManyAndReturn
   */
  export type ConsultaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }

  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number
  }

  /**
   * Consulta.HistoricoMedico
   */
  export type Consulta$HistoricoMedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    where?: HistoricoMedicoWhereInput
    orderBy?: HistoricoMedicoOrderByWithRelationInput | HistoricoMedicoOrderByWithRelationInput[]
    cursor?: HistoricoMedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoMedicoScalarFieldEnum | HistoricoMedicoScalarFieldEnum[]
  }

  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoMedico
   */

  export type AggregateHistoricoMedico = {
    _count: HistoricoMedicoCountAggregateOutputType | null
    _min: HistoricoMedicoMinAggregateOutputType | null
    _max: HistoricoMedicoMaxAggregateOutputType | null
  }

  export type HistoricoMedicoMinAggregateOutputType = {
    id: string | null
    data: Date | null
    tipoRegistro: string | null
    diagnostico: string | null
    sintomas: string | null
    tratamentoPrescrito: string | null
    medicamentos: string | null
    resultadosExames: string | null
    observacoes: string | null
    alergias: string | null
    antecedentesFamiliares: string | null
    status: string | null
    pacienteId: string | null
    profissionalId: string | null
    consultaId: string | null
  }

  export type HistoricoMedicoMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    tipoRegistro: string | null
    diagnostico: string | null
    sintomas: string | null
    tratamentoPrescrito: string | null
    medicamentos: string | null
    resultadosExames: string | null
    observacoes: string | null
    alergias: string | null
    antecedentesFamiliares: string | null
    status: string | null
    pacienteId: string | null
    profissionalId: string | null
    consultaId: string | null
  }

  export type HistoricoMedicoCountAggregateOutputType = {
    id: number
    data: number
    tipoRegistro: number
    diagnostico: number
    sintomas: number
    tratamentoPrescrito: number
    medicamentos: number
    resultadosExames: number
    observacoes: number
    alergias: number
    antecedentesFamiliares: number
    status: number
    pacienteId: number
    profissionalId: number
    consultaId: number
    _all: number
  }


  export type HistoricoMedicoMinAggregateInputType = {
    id?: true
    data?: true
    tipoRegistro?: true
    diagnostico?: true
    sintomas?: true
    tratamentoPrescrito?: true
    medicamentos?: true
    resultadosExames?: true
    observacoes?: true
    alergias?: true
    antecedentesFamiliares?: true
    status?: true
    pacienteId?: true
    profissionalId?: true
    consultaId?: true
  }

  export type HistoricoMedicoMaxAggregateInputType = {
    id?: true
    data?: true
    tipoRegistro?: true
    diagnostico?: true
    sintomas?: true
    tratamentoPrescrito?: true
    medicamentos?: true
    resultadosExames?: true
    observacoes?: true
    alergias?: true
    antecedentesFamiliares?: true
    status?: true
    pacienteId?: true
    profissionalId?: true
    consultaId?: true
  }

  export type HistoricoMedicoCountAggregateInputType = {
    id?: true
    data?: true
    tipoRegistro?: true
    diagnostico?: true
    sintomas?: true
    tratamentoPrescrito?: true
    medicamentos?: true
    resultadosExames?: true
    observacoes?: true
    alergias?: true
    antecedentesFamiliares?: true
    status?: true
    pacienteId?: true
    profissionalId?: true
    consultaId?: true
    _all?: true
  }

  export type HistoricoMedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoMedico to aggregate.
     */
    where?: HistoricoMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoMedicos to fetch.
     */
    orderBy?: HistoricoMedicoOrderByWithRelationInput | HistoricoMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoMedicos
    **/
    _count?: true | HistoricoMedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoMedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoMedicoMaxAggregateInputType
  }

  export type GetHistoricoMedicoAggregateType<T extends HistoricoMedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoMedico[P]>
      : GetScalarType<T[P], AggregateHistoricoMedico[P]>
  }




  export type HistoricoMedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoMedicoWhereInput
    orderBy?: HistoricoMedicoOrderByWithAggregationInput | HistoricoMedicoOrderByWithAggregationInput[]
    by: HistoricoMedicoScalarFieldEnum[] | HistoricoMedicoScalarFieldEnum
    having?: HistoricoMedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoMedicoCountAggregateInputType | true
    _min?: HistoricoMedicoMinAggregateInputType
    _max?: HistoricoMedicoMaxAggregateInputType
  }

  export type HistoricoMedicoGroupByOutputType = {
    id: string
    data: Date
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    pacienteId: string
    profissionalId: string
    consultaId: string
    _count: HistoricoMedicoCountAggregateOutputType | null
    _min: HistoricoMedicoMinAggregateOutputType | null
    _max: HistoricoMedicoMaxAggregateOutputType | null
  }

  type GetHistoricoMedicoGroupByPayload<T extends HistoricoMedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoMedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoMedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoMedicoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoMedicoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoMedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    tipoRegistro?: boolean
    diagnostico?: boolean
    sintomas?: boolean
    tratamentoPrescrito?: boolean
    medicamentos?: boolean
    resultadosExames?: boolean
    observacoes?: boolean
    alergias?: boolean
    antecedentesFamiliares?: boolean
    status?: boolean
    pacienteId?: boolean
    profissionalId?: boolean
    consultaId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoMedico"]>

  export type HistoricoMedicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    tipoRegistro?: boolean
    diagnostico?: boolean
    sintomas?: boolean
    tratamentoPrescrito?: boolean
    medicamentos?: boolean
    resultadosExames?: boolean
    observacoes?: boolean
    alergias?: boolean
    antecedentesFamiliares?: boolean
    status?: boolean
    pacienteId?: boolean
    profissionalId?: boolean
    consultaId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoMedico"]>

  export type HistoricoMedicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    tipoRegistro?: boolean
    diagnostico?: boolean
    sintomas?: boolean
    tratamentoPrescrito?: boolean
    medicamentos?: boolean
    resultadosExames?: boolean
    observacoes?: boolean
    alergias?: boolean
    antecedentesFamiliares?: boolean
    status?: boolean
    pacienteId?: boolean
    profissionalId?: boolean
    consultaId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoMedico"]>

  export type HistoricoMedicoSelectScalar = {
    id?: boolean
    data?: boolean
    tipoRegistro?: boolean
    diagnostico?: boolean
    sintomas?: boolean
    tratamentoPrescrito?: boolean
    medicamentos?: boolean
    resultadosExames?: boolean
    observacoes?: boolean
    alergias?: boolean
    antecedentesFamiliares?: boolean
    status?: boolean
    pacienteId?: boolean
    profissionalId?: boolean
    consultaId?: boolean
  }

  export type HistoricoMedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "tipoRegistro" | "diagnostico" | "sintomas" | "tratamentoPrescrito" | "medicamentos" | "resultadosExames" | "observacoes" | "alergias" | "antecedentesFamiliares" | "status" | "pacienteId" | "profissionalId" | "consultaId", ExtArgs["result"]["historicoMedico"]>
  export type HistoricoMedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }
  export type HistoricoMedicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }
  export type HistoricoMedicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }

  export type $HistoricoMedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoMedico"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      profissional: Prisma.$ProfissionalPayload<ExtArgs>
      consulta: Prisma.$ConsultaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      tipoRegistro: string
      diagnostico: string
      sintomas: string
      tratamentoPrescrito: string
      medicamentos: string
      resultadosExames: string
      observacoes: string
      alergias: string
      antecedentesFamiliares: string
      status: string
      pacienteId: string
      profissionalId: string
      consultaId: string
    }, ExtArgs["result"]["historicoMedico"]>
    composites: {}
  }

  type HistoricoMedicoGetPayload<S extends boolean | null | undefined | HistoricoMedicoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoMedicoPayload, S>

  type HistoricoMedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoMedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoMedicoCountAggregateInputType | true
    }

  export interface HistoricoMedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoMedico'], meta: { name: 'HistoricoMedico' } }
    /**
     * Find zero or one HistoricoMedico that matches the filter.
     * @param {HistoricoMedicoFindUniqueArgs} args - Arguments to find a HistoricoMedico
     * @example
     * // Get one HistoricoMedico
     * const historicoMedico = await prisma.historicoMedico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoMedicoFindUniqueArgs>(args: SelectSubset<T, HistoricoMedicoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoMedicoClient<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricoMedico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoMedicoFindUniqueOrThrowArgs} args - Arguments to find a HistoricoMedico
     * @example
     * // Get one HistoricoMedico
     * const historicoMedico = await prisma.historicoMedico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoMedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoMedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoMedicoClient<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoMedico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoMedicoFindFirstArgs} args - Arguments to find a HistoricoMedico
     * @example
     * // Get one HistoricoMedico
     * const historicoMedico = await prisma.historicoMedico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoMedicoFindFirstArgs>(args?: SelectSubset<T, HistoricoMedicoFindFirstArgs<ExtArgs>>): Prisma__HistoricoMedicoClient<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoMedico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoMedicoFindFirstOrThrowArgs} args - Arguments to find a HistoricoMedico
     * @example
     * // Get one HistoricoMedico
     * const historicoMedico = await prisma.historicoMedico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoMedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoMedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoMedicoClient<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricoMedicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoMedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoMedicos
     * const historicoMedicos = await prisma.historicoMedico.findMany()
     * 
     * // Get first 10 HistoricoMedicos
     * const historicoMedicos = await prisma.historicoMedico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoMedicoWithIdOnly = await prisma.historicoMedico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoMedicoFindManyArgs>(args?: SelectSubset<T, HistoricoMedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricoMedico.
     * @param {HistoricoMedicoCreateArgs} args - Arguments to create a HistoricoMedico.
     * @example
     * // Create one HistoricoMedico
     * const HistoricoMedico = await prisma.historicoMedico.create({
     *   data: {
     *     // ... data to create a HistoricoMedico
     *   }
     * })
     * 
     */
    create<T extends HistoricoMedicoCreateArgs>(args: SelectSubset<T, HistoricoMedicoCreateArgs<ExtArgs>>): Prisma__HistoricoMedicoClient<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricoMedicos.
     * @param {HistoricoMedicoCreateManyArgs} args - Arguments to create many HistoricoMedicos.
     * @example
     * // Create many HistoricoMedicos
     * const historicoMedico = await prisma.historicoMedico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoMedicoCreateManyArgs>(args?: SelectSubset<T, HistoricoMedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricoMedicos and returns the data saved in the database.
     * @param {HistoricoMedicoCreateManyAndReturnArgs} args - Arguments to create many HistoricoMedicos.
     * @example
     * // Create many HistoricoMedicos
     * const historicoMedico = await prisma.historicoMedico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricoMedicos and only return the `id`
     * const historicoMedicoWithIdOnly = await prisma.historicoMedico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoMedicoCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoMedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricoMedico.
     * @param {HistoricoMedicoDeleteArgs} args - Arguments to delete one HistoricoMedico.
     * @example
     * // Delete one HistoricoMedico
     * const HistoricoMedico = await prisma.historicoMedico.delete({
     *   where: {
     *     // ... filter to delete one HistoricoMedico
     *   }
     * })
     * 
     */
    delete<T extends HistoricoMedicoDeleteArgs>(args: SelectSubset<T, HistoricoMedicoDeleteArgs<ExtArgs>>): Prisma__HistoricoMedicoClient<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricoMedico.
     * @param {HistoricoMedicoUpdateArgs} args - Arguments to update one HistoricoMedico.
     * @example
     * // Update one HistoricoMedico
     * const historicoMedico = await prisma.historicoMedico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoMedicoUpdateArgs>(args: SelectSubset<T, HistoricoMedicoUpdateArgs<ExtArgs>>): Prisma__HistoricoMedicoClient<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricoMedicos.
     * @param {HistoricoMedicoDeleteManyArgs} args - Arguments to filter HistoricoMedicos to delete.
     * @example
     * // Delete a few HistoricoMedicos
     * const { count } = await prisma.historicoMedico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoMedicoDeleteManyArgs>(args?: SelectSubset<T, HistoricoMedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoMedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoMedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoMedicos
     * const historicoMedico = await prisma.historicoMedico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoMedicoUpdateManyArgs>(args: SelectSubset<T, HistoricoMedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoMedicos and returns the data updated in the database.
     * @param {HistoricoMedicoUpdateManyAndReturnArgs} args - Arguments to update many HistoricoMedicos.
     * @example
     * // Update many HistoricoMedicos
     * const historicoMedico = await prisma.historicoMedico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricoMedicos and only return the `id`
     * const historicoMedicoWithIdOnly = await prisma.historicoMedico.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoricoMedicoUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoMedicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricoMedico.
     * @param {HistoricoMedicoUpsertArgs} args - Arguments to update or create a HistoricoMedico.
     * @example
     * // Update or create a HistoricoMedico
     * const historicoMedico = await prisma.historicoMedico.upsert({
     *   create: {
     *     // ... data to create a HistoricoMedico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoMedico we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoMedicoUpsertArgs>(args: SelectSubset<T, HistoricoMedicoUpsertArgs<ExtArgs>>): Prisma__HistoricoMedicoClient<$Result.GetResult<Prisma.$HistoricoMedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricoMedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoMedicoCountArgs} args - Arguments to filter HistoricoMedicos to count.
     * @example
     * // Count the number of HistoricoMedicos
     * const count = await prisma.historicoMedico.count({
     *   where: {
     *     // ... the filter for the HistoricoMedicos we want to count
     *   }
     * })
    **/
    count<T extends HistoricoMedicoCountArgs>(
      args?: Subset<T, HistoricoMedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoMedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoMedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoMedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoMedicoAggregateArgs>(args: Subset<T, HistoricoMedicoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoMedicoAggregateType<T>>

    /**
     * Group by HistoricoMedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoMedicoGroupByArgs} args - Group by arguments.
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
      T extends HistoricoMedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoMedicoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoMedicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoMedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoMedico model
   */
  readonly fields: HistoricoMedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoMedico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoMedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissional<T extends ProfissionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalDefaultArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consulta<T extends ConsultaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultaDefaultArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoricoMedico model
   */
  interface HistoricoMedicoFieldRefs {
    readonly id: FieldRef<"HistoricoMedico", 'String'>
    readonly data: FieldRef<"HistoricoMedico", 'DateTime'>
    readonly tipoRegistro: FieldRef<"HistoricoMedico", 'String'>
    readonly diagnostico: FieldRef<"HistoricoMedico", 'String'>
    readonly sintomas: FieldRef<"HistoricoMedico", 'String'>
    readonly tratamentoPrescrito: FieldRef<"HistoricoMedico", 'String'>
    readonly medicamentos: FieldRef<"HistoricoMedico", 'String'>
    readonly resultadosExames: FieldRef<"HistoricoMedico", 'String'>
    readonly observacoes: FieldRef<"HistoricoMedico", 'String'>
    readonly alergias: FieldRef<"HistoricoMedico", 'String'>
    readonly antecedentesFamiliares: FieldRef<"HistoricoMedico", 'String'>
    readonly status: FieldRef<"HistoricoMedico", 'String'>
    readonly pacienteId: FieldRef<"HistoricoMedico", 'String'>
    readonly profissionalId: FieldRef<"HistoricoMedico", 'String'>
    readonly consultaId: FieldRef<"HistoricoMedico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoMedico findUnique
   */
  export type HistoricoMedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoMedico to fetch.
     */
    where: HistoricoMedicoWhereUniqueInput
  }

  /**
   * HistoricoMedico findUniqueOrThrow
   */
  export type HistoricoMedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoMedico to fetch.
     */
    where: HistoricoMedicoWhereUniqueInput
  }

  /**
   * HistoricoMedico findFirst
   */
  export type HistoricoMedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoMedico to fetch.
     */
    where?: HistoricoMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoMedicos to fetch.
     */
    orderBy?: HistoricoMedicoOrderByWithRelationInput | HistoricoMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoMedicos.
     */
    cursor?: HistoricoMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoMedicos.
     */
    distinct?: HistoricoMedicoScalarFieldEnum | HistoricoMedicoScalarFieldEnum[]
  }

  /**
   * HistoricoMedico findFirstOrThrow
   */
  export type HistoricoMedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoMedico to fetch.
     */
    where?: HistoricoMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoMedicos to fetch.
     */
    orderBy?: HistoricoMedicoOrderByWithRelationInput | HistoricoMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoMedicos.
     */
    cursor?: HistoricoMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoMedicos.
     */
    distinct?: HistoricoMedicoScalarFieldEnum | HistoricoMedicoScalarFieldEnum[]
  }

  /**
   * HistoricoMedico findMany
   */
  export type HistoricoMedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoMedicos to fetch.
     */
    where?: HistoricoMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoMedicos to fetch.
     */
    orderBy?: HistoricoMedicoOrderByWithRelationInput | HistoricoMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoMedicos.
     */
    cursor?: HistoricoMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoMedicos.
     */
    skip?: number
    distinct?: HistoricoMedicoScalarFieldEnum | HistoricoMedicoScalarFieldEnum[]
  }

  /**
   * HistoricoMedico create
   */
  export type HistoricoMedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoMedico.
     */
    data: XOR<HistoricoMedicoCreateInput, HistoricoMedicoUncheckedCreateInput>
  }

  /**
   * HistoricoMedico createMany
   */
  export type HistoricoMedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoMedicos.
     */
    data: HistoricoMedicoCreateManyInput | HistoricoMedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricoMedico createManyAndReturn
   */
  export type HistoricoMedicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricoMedicos.
     */
    data: HistoricoMedicoCreateManyInput | HistoricoMedicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoMedico update
   */
  export type HistoricoMedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoMedico.
     */
    data: XOR<HistoricoMedicoUpdateInput, HistoricoMedicoUncheckedUpdateInput>
    /**
     * Choose, which HistoricoMedico to update.
     */
    where: HistoricoMedicoWhereUniqueInput
  }

  /**
   * HistoricoMedico updateMany
   */
  export type HistoricoMedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoMedicos.
     */
    data: XOR<HistoricoMedicoUpdateManyMutationInput, HistoricoMedicoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoMedicos to update
     */
    where?: HistoricoMedicoWhereInput
    /**
     * Limit how many HistoricoMedicos to update.
     */
    limit?: number
  }

  /**
   * HistoricoMedico updateManyAndReturn
   */
  export type HistoricoMedicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * The data used to update HistoricoMedicos.
     */
    data: XOR<HistoricoMedicoUpdateManyMutationInput, HistoricoMedicoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoMedicos to update
     */
    where?: HistoricoMedicoWhereInput
    /**
     * Limit how many HistoricoMedicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoMedico upsert
   */
  export type HistoricoMedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoMedico to update in case it exists.
     */
    where: HistoricoMedicoWhereUniqueInput
    /**
     * In case the HistoricoMedico found by the `where` argument doesn't exist, create a new HistoricoMedico with this data.
     */
    create: XOR<HistoricoMedicoCreateInput, HistoricoMedicoUncheckedCreateInput>
    /**
     * In case the HistoricoMedico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoMedicoUpdateInput, HistoricoMedicoUncheckedUpdateInput>
  }

  /**
   * HistoricoMedico delete
   */
  export type HistoricoMedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
    /**
     * Filter which HistoricoMedico to delete.
     */
    where: HistoricoMedicoWhereUniqueInput
  }

  /**
   * HistoricoMedico deleteMany
   */
  export type HistoricoMedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoMedicos to delete
     */
    where?: HistoricoMedicoWhereInput
    /**
     * Limit how many HistoricoMedicos to delete.
     */
    limit?: number
  }

  /**
   * HistoricoMedico without action
   */
  export type HistoricoMedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoMedico
     */
    select?: HistoricoMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoMedico
     */
    omit?: HistoricoMedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoMedicoInclude<ExtArgs> | null
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


  export const PacienteScalarFieldEnum: {
    id: 'id',
    dataNascimento: 'dataNascimento',
    peso: 'peso',
    altura: 'altura'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const ProfissionalScalarFieldEnum: {
    id: 'id',
    tipoRegistro: 'tipoRegistro',
    numeroRegistro: 'numeroRegistro',
    uf: 'uf',
    descricao: 'descricao',
    instituicaoFormadora: 'instituicaoFormadora',
    tipoProfissional: 'tipoProfissional',
    especialidade: 'especialidade'
  };

  export type ProfissionalScalarFieldEnum = (typeof ProfissionalScalarFieldEnum)[keyof typeof ProfissionalScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    telefone: 'telefone',
    avatar: 'avatar',
    genero: 'genero',
    profissionalId: 'profissionalId',
    pacienteId: 'pacienteId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ClinicaScalarFieldEnum: {
    id: 'id',
    nomeFantasia: 'nomeFantasia',
    razaoSocial: 'razaoSocial',
    cnpj: 'cnpj',
    inscricaoEstadual: 'inscricaoEstadual',
    telefone: 'telefone',
    tipoAtendimento: 'tipoAtendimento'
  };

  export type ClinicaScalarFieldEnum = (typeof ClinicaScalarFieldEnum)[keyof typeof ClinicaScalarFieldEnum]


  export const DiaSemanaScalarFieldEnum: {
    id: 'id',
    dia: 'dia'
  };

  export type DiaSemanaScalarFieldEnum = (typeof DiaSemanaScalarFieldEnum)[keyof typeof DiaSemanaScalarFieldEnum]


  export const DisponibilidadeScalarFieldEnum: {
    id: 'id',
    diaSemanaId: 'diaSemanaId',
    horaInicio: 'horaInicio',
    horaFim: 'horaFim'
  };

  export type DisponibilidadeScalarFieldEnum = (typeof DisponibilidadeScalarFieldEnum)[keyof typeof DisponibilidadeScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    rua: 'rua',
    bairro: 'bairro',
    cep: 'cep',
    complemento: 'complemento',
    estado: 'estado',
    cidade: 'cidade',
    numero: 'numero'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const EnderecoUsuarioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    enderecoId: 'enderecoId'
  };

  export type EnderecoUsuarioScalarFieldEnum = (typeof EnderecoUsuarioScalarFieldEnum)[keyof typeof EnderecoUsuarioScalarFieldEnum]


  export const EnderecoClinicaScalarFieldEnum: {
    id: 'id',
    clinicaId: 'clinicaId',
    enderecoId: 'enderecoId'
  };

  export type EnderecoClinicaScalarFieldEnum = (typeof EnderecoClinicaScalarFieldEnum)[keyof typeof EnderecoClinicaScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    data: 'data',
    horaInicio: 'horaInicio',
    horaFim: 'horaFim',
    turno: 'turno',
    tipoConsulta: 'tipoConsulta',
    observacao: 'observacao',
    motivo: 'motivo',
    avaliacao: 'avaliacao',
    valor: 'valor',
    status: 'status',
    pacienteId: 'pacienteId',
    profissionalId: 'profissionalId'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


  export const HistoricoMedicoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    tipoRegistro: 'tipoRegistro',
    diagnostico: 'diagnostico',
    sintomas: 'sintomas',
    tratamentoPrescrito: 'tratamentoPrescrito',
    medicamentos: 'medicamentos',
    resultadosExames: 'resultadosExames',
    observacoes: 'observacoes',
    alergias: 'alergias',
    antecedentesFamiliares: 'antecedentesFamiliares',
    status: 'status',
    pacienteId: 'pacienteId',
    profissionalId: 'profissionalId',
    consultaId: 'consultaId'
  };

  export type HistoricoMedicoScalarFieldEnum = (typeof HistoricoMedicoScalarFieldEnum)[keyof typeof HistoricoMedicoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoRegistro'
   */
  export type EnumTipoRegistroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoRegistro'>
    


  /**
   * Reference to a field of type 'TipoRegistro[]'
   */
  export type ListEnumTipoRegistroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoRegistro[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: UuidFilter<"Paciente"> | string
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    peso?: FloatFilter<"Paciente"> | number
    altura?: FloatFilter<"Paciente"> | number
    usuarios?: UsuarioListRelationFilter
    agendamentos?: ConsultaListRelationFilter
    HistoricoMedico?: HistoricoMedicoListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    agendamentos?: ConsultaOrderByRelationAggregateInput
    HistoricoMedico?: HistoricoMedicoOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    peso?: FloatFilter<"Paciente"> | number
    altura?: FloatFilter<"Paciente"> | number
    usuarios?: UsuarioListRelationFilter
    agendamentos?: ConsultaListRelationFilter
    HistoricoMedico?: HistoricoMedicoListRelationFilter
  }, "id">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Paciente"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    peso?: FloatWithAggregatesFilter<"Paciente"> | number
    altura?: FloatWithAggregatesFilter<"Paciente"> | number
  }

  export type ProfissionalWhereInput = {
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    id?: UuidFilter<"Profissional"> | string
    tipoRegistro?: EnumTipoRegistroFilter<"Profissional"> | $Enums.TipoRegistro
    numeroRegistro?: StringFilter<"Profissional"> | string
    uf?: StringFilter<"Profissional"> | string
    descricao?: StringFilter<"Profissional"> | string
    instituicaoFormadora?: StringFilter<"Profissional"> | string
    tipoProfissional?: StringFilter<"Profissional"> | string
    especialidade?: StringFilter<"Profissional"> | string
    usuarios?: UsuarioListRelationFilter
    agendamentos?: ConsultaListRelationFilter
    HistoricoMedico?: HistoricoMedicoListRelationFilter
  }

  export type ProfissionalOrderByWithRelationInput = {
    id?: SortOrder
    tipoRegistro?: SortOrder
    numeroRegistro?: SortOrder
    uf?: SortOrder
    descricao?: SortOrder
    instituicaoFormadora?: SortOrder
    tipoProfissional?: SortOrder
    especialidade?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    agendamentos?: ConsultaOrderByRelationAggregateInput
    HistoricoMedico?: HistoricoMedicoOrderByRelationAggregateInput
  }

  export type ProfissionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    tipoRegistro?: EnumTipoRegistroFilter<"Profissional"> | $Enums.TipoRegistro
    numeroRegistro?: StringFilter<"Profissional"> | string
    uf?: StringFilter<"Profissional"> | string
    descricao?: StringFilter<"Profissional"> | string
    instituicaoFormadora?: StringFilter<"Profissional"> | string
    tipoProfissional?: StringFilter<"Profissional"> | string
    especialidade?: StringFilter<"Profissional"> | string
    usuarios?: UsuarioListRelationFilter
    agendamentos?: ConsultaListRelationFilter
    HistoricoMedico?: HistoricoMedicoListRelationFilter
  }, "id">

  export type ProfissionalOrderByWithAggregationInput = {
    id?: SortOrder
    tipoRegistro?: SortOrder
    numeroRegistro?: SortOrder
    uf?: SortOrder
    descricao?: SortOrder
    instituicaoFormadora?: SortOrder
    tipoProfissional?: SortOrder
    especialidade?: SortOrder
    _count?: ProfissionalCountOrderByAggregateInput
    _max?: ProfissionalMaxOrderByAggregateInput
    _min?: ProfissionalMinOrderByAggregateInput
  }

  export type ProfissionalScalarWhereWithAggregatesInput = {
    AND?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    OR?: ProfissionalScalarWhereWithAggregatesInput[]
    NOT?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profissional"> | string
    tipoRegistro?: EnumTipoRegistroWithAggregatesFilter<"Profissional"> | $Enums.TipoRegistro
    numeroRegistro?: StringWithAggregatesFilter<"Profissional"> | string
    uf?: StringWithAggregatesFilter<"Profissional"> | string
    descricao?: StringWithAggregatesFilter<"Profissional"> | string
    instituicaoFormadora?: StringWithAggregatesFilter<"Profissional"> | string
    tipoProfissional?: StringWithAggregatesFilter<"Profissional"> | string
    especialidade?: StringWithAggregatesFilter<"Profissional"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: UuidFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    avatar?: StringNullableFilter<"Usuario"> | string | null
    genero?: StringFilter<"Usuario"> | string
    profissionalId?: UuidNullableFilter<"Usuario"> | string | null
    pacienteId?: UuidNullableFilter<"Usuario"> | string | null
    profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
    paciente?: XOR<PacienteNullableScalarRelationFilter, PacienteWhereInput> | null
    enderecos?: EnderecoUsuarioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    avatar?: SortOrderInput | SortOrder
    genero?: SortOrder
    profissionalId?: SortOrderInput | SortOrder
    pacienteId?: SortOrderInput | SortOrder
    profissional?: ProfissionalOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
    enderecos?: EnderecoUsuarioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    avatar?: StringNullableFilter<"Usuario"> | string | null
    genero?: StringFilter<"Usuario"> | string
    profissionalId?: UuidNullableFilter<"Usuario"> | string | null
    pacienteId?: UuidNullableFilter<"Usuario"> | string | null
    profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
    paciente?: XOR<PacienteNullableScalarRelationFilter, PacienteWhereInput> | null
    enderecos?: EnderecoUsuarioListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    avatar?: SortOrderInput | SortOrder
    genero?: SortOrder
    profissionalId?: SortOrderInput | SortOrder
    pacienteId?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringWithAggregatesFilter<"Usuario"> | string
    avatar?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    genero?: StringWithAggregatesFilter<"Usuario"> | string
    profissionalId?: UuidNullableWithAggregatesFilter<"Usuario"> | string | null
    pacienteId?: UuidNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type ClinicaWhereInput = {
    AND?: ClinicaWhereInput | ClinicaWhereInput[]
    OR?: ClinicaWhereInput[]
    NOT?: ClinicaWhereInput | ClinicaWhereInput[]
    id?: UuidFilter<"Clinica"> | string
    nomeFantasia?: StringFilter<"Clinica"> | string
    razaoSocial?: StringFilter<"Clinica"> | string
    cnpj?: StringFilter<"Clinica"> | string
    inscricaoEstadual?: StringFilter<"Clinica"> | string
    telefone?: StringFilter<"Clinica"> | string
    tipoAtendimento?: StringFilter<"Clinica"> | string
    enderecos?: EnderecoClinicaListRelationFilter
  }

  export type ClinicaOrderByWithRelationInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefone?: SortOrder
    tipoAtendimento?: SortOrder
    enderecos?: EnderecoClinicaOrderByRelationAggregateInput
  }

  export type ClinicaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClinicaWhereInput | ClinicaWhereInput[]
    OR?: ClinicaWhereInput[]
    NOT?: ClinicaWhereInput | ClinicaWhereInput[]
    nomeFantasia?: StringFilter<"Clinica"> | string
    razaoSocial?: StringFilter<"Clinica"> | string
    cnpj?: StringFilter<"Clinica"> | string
    inscricaoEstadual?: StringFilter<"Clinica"> | string
    telefone?: StringFilter<"Clinica"> | string
    tipoAtendimento?: StringFilter<"Clinica"> | string
    enderecos?: EnderecoClinicaListRelationFilter
  }, "id">

  export type ClinicaOrderByWithAggregationInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefone?: SortOrder
    tipoAtendimento?: SortOrder
    _count?: ClinicaCountOrderByAggregateInput
    _max?: ClinicaMaxOrderByAggregateInput
    _min?: ClinicaMinOrderByAggregateInput
  }

  export type ClinicaScalarWhereWithAggregatesInput = {
    AND?: ClinicaScalarWhereWithAggregatesInput | ClinicaScalarWhereWithAggregatesInput[]
    OR?: ClinicaScalarWhereWithAggregatesInput[]
    NOT?: ClinicaScalarWhereWithAggregatesInput | ClinicaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Clinica"> | string
    nomeFantasia?: StringWithAggregatesFilter<"Clinica"> | string
    razaoSocial?: StringWithAggregatesFilter<"Clinica"> | string
    cnpj?: StringWithAggregatesFilter<"Clinica"> | string
    inscricaoEstadual?: StringWithAggregatesFilter<"Clinica"> | string
    telefone?: StringWithAggregatesFilter<"Clinica"> | string
    tipoAtendimento?: StringWithAggregatesFilter<"Clinica"> | string
  }

  export type DiaSemanaWhereInput = {
    AND?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    OR?: DiaSemanaWhereInput[]
    NOT?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    id?: UuidFilter<"DiaSemana"> | string
    dia?: StringFilter<"DiaSemana"> | string
    Disponibilidade?: DisponibilidadeListRelationFilter
  }

  export type DiaSemanaOrderByWithRelationInput = {
    id?: SortOrder
    dia?: SortOrder
    Disponibilidade?: DisponibilidadeOrderByRelationAggregateInput
  }

  export type DiaSemanaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    OR?: DiaSemanaWhereInput[]
    NOT?: DiaSemanaWhereInput | DiaSemanaWhereInput[]
    dia?: StringFilter<"DiaSemana"> | string
    Disponibilidade?: DisponibilidadeListRelationFilter
  }, "id">

  export type DiaSemanaOrderByWithAggregationInput = {
    id?: SortOrder
    dia?: SortOrder
    _count?: DiaSemanaCountOrderByAggregateInput
    _max?: DiaSemanaMaxOrderByAggregateInput
    _min?: DiaSemanaMinOrderByAggregateInput
  }

  export type DiaSemanaScalarWhereWithAggregatesInput = {
    AND?: DiaSemanaScalarWhereWithAggregatesInput | DiaSemanaScalarWhereWithAggregatesInput[]
    OR?: DiaSemanaScalarWhereWithAggregatesInput[]
    NOT?: DiaSemanaScalarWhereWithAggregatesInput | DiaSemanaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DiaSemana"> | string
    dia?: StringWithAggregatesFilter<"DiaSemana"> | string
  }

  export type DisponibilidadeWhereInput = {
    AND?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    OR?: DisponibilidadeWhereInput[]
    NOT?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    id?: UuidFilter<"Disponibilidade"> | string
    diaSemanaId?: UuidFilter<"Disponibilidade"> | string
    horaInicio?: DateTimeFilter<"Disponibilidade"> | Date | string
    horaFim?: DateTimeFilter<"Disponibilidade"> | Date | string
    diaSemana?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
  }

  export type DisponibilidadeOrderByWithRelationInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    diaSemana?: DiaSemanaOrderByWithRelationInput
  }

  export type DisponibilidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    OR?: DisponibilidadeWhereInput[]
    NOT?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    diaSemanaId?: UuidFilter<"Disponibilidade"> | string
    horaInicio?: DateTimeFilter<"Disponibilidade"> | Date | string
    horaFim?: DateTimeFilter<"Disponibilidade"> | Date | string
    diaSemana?: XOR<DiaSemanaScalarRelationFilter, DiaSemanaWhereInput>
  }, "id">

  export type DisponibilidadeOrderByWithAggregationInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    _count?: DisponibilidadeCountOrderByAggregateInput
    _max?: DisponibilidadeMaxOrderByAggregateInput
    _min?: DisponibilidadeMinOrderByAggregateInput
  }

  export type DisponibilidadeScalarWhereWithAggregatesInput = {
    AND?: DisponibilidadeScalarWhereWithAggregatesInput | DisponibilidadeScalarWhereWithAggregatesInput[]
    OR?: DisponibilidadeScalarWhereWithAggregatesInput[]
    NOT?: DisponibilidadeScalarWhereWithAggregatesInput | DisponibilidadeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Disponibilidade"> | string
    diaSemanaId?: UuidWithAggregatesFilter<"Disponibilidade"> | string
    horaInicio?: DateTimeWithAggregatesFilter<"Disponibilidade"> | Date | string
    horaFim?: DateTimeWithAggregatesFilter<"Disponibilidade"> | Date | string
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    id?: UuidFilter<"Endereco"> | string
    rua?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
    complemento?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    usuarios?: EnderecoUsuarioListRelationFilter
    clinicas?: EnderecoClinicaListRelationFilter
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    rua?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    complemento?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    numero?: SortOrder
    usuarios?: EnderecoUsuarioOrderByRelationAggregateInput
    clinicas?: EnderecoClinicaOrderByRelationAggregateInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    rua?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    cep?: StringFilter<"Endereco"> | string
    complemento?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    usuarios?: EnderecoUsuarioListRelationFilter
    clinicas?: EnderecoClinicaListRelationFilter
  }, "id">

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    rua?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    complemento?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    numero?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Endereco"> | string
    rua?: StringWithAggregatesFilter<"Endereco"> | string
    bairro?: StringWithAggregatesFilter<"Endereco"> | string
    cep?: StringWithAggregatesFilter<"Endereco"> | string
    complemento?: StringWithAggregatesFilter<"Endereco"> | string
    estado?: StringWithAggregatesFilter<"Endereco"> | string
    cidade?: StringWithAggregatesFilter<"Endereco"> | string
    numero?: StringWithAggregatesFilter<"Endereco"> | string
  }

  export type EnderecoUsuarioWhereInput = {
    AND?: EnderecoUsuarioWhereInput | EnderecoUsuarioWhereInput[]
    OR?: EnderecoUsuarioWhereInput[]
    NOT?: EnderecoUsuarioWhereInput | EnderecoUsuarioWhereInput[]
    id?: UuidFilter<"EnderecoUsuario"> | string
    usuarioId?: UuidFilter<"EnderecoUsuario"> | string
    enderecoId?: UuidFilter<"EnderecoUsuario"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    endereco?: XOR<EnderecoScalarRelationFilter, EnderecoWhereInput>
  }

  export type EnderecoUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    endereco?: EnderecoOrderByWithRelationInput
  }

  export type EnderecoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnderecoUsuarioWhereInput | EnderecoUsuarioWhereInput[]
    OR?: EnderecoUsuarioWhereInput[]
    NOT?: EnderecoUsuarioWhereInput | EnderecoUsuarioWhereInput[]
    usuarioId?: UuidFilter<"EnderecoUsuario"> | string
    enderecoId?: UuidFilter<"EnderecoUsuario"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    endereco?: XOR<EnderecoScalarRelationFilter, EnderecoWhereInput>
  }, "id">

  export type EnderecoUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
    _count?: EnderecoUsuarioCountOrderByAggregateInput
    _max?: EnderecoUsuarioMaxOrderByAggregateInput
    _min?: EnderecoUsuarioMinOrderByAggregateInput
  }

  export type EnderecoUsuarioScalarWhereWithAggregatesInput = {
    AND?: EnderecoUsuarioScalarWhereWithAggregatesInput | EnderecoUsuarioScalarWhereWithAggregatesInput[]
    OR?: EnderecoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: EnderecoUsuarioScalarWhereWithAggregatesInput | EnderecoUsuarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EnderecoUsuario"> | string
    usuarioId?: UuidWithAggregatesFilter<"EnderecoUsuario"> | string
    enderecoId?: UuidWithAggregatesFilter<"EnderecoUsuario"> | string
  }

  export type EnderecoClinicaWhereInput = {
    AND?: EnderecoClinicaWhereInput | EnderecoClinicaWhereInput[]
    OR?: EnderecoClinicaWhereInput[]
    NOT?: EnderecoClinicaWhereInput | EnderecoClinicaWhereInput[]
    id?: UuidFilter<"EnderecoClinica"> | string
    clinicaId?: UuidFilter<"EnderecoClinica"> | string
    enderecoId?: UuidFilter<"EnderecoClinica"> | string
    clinica?: XOR<ClinicaScalarRelationFilter, ClinicaWhereInput>
    endereco?: XOR<EnderecoScalarRelationFilter, EnderecoWhereInput>
  }

  export type EnderecoClinicaOrderByWithRelationInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    enderecoId?: SortOrder
    clinica?: ClinicaOrderByWithRelationInput
    endereco?: EnderecoOrderByWithRelationInput
  }

  export type EnderecoClinicaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnderecoClinicaWhereInput | EnderecoClinicaWhereInput[]
    OR?: EnderecoClinicaWhereInput[]
    NOT?: EnderecoClinicaWhereInput | EnderecoClinicaWhereInput[]
    clinicaId?: UuidFilter<"EnderecoClinica"> | string
    enderecoId?: UuidFilter<"EnderecoClinica"> | string
    clinica?: XOR<ClinicaScalarRelationFilter, ClinicaWhereInput>
    endereco?: XOR<EnderecoScalarRelationFilter, EnderecoWhereInput>
  }, "id">

  export type EnderecoClinicaOrderByWithAggregationInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    enderecoId?: SortOrder
    _count?: EnderecoClinicaCountOrderByAggregateInput
    _max?: EnderecoClinicaMaxOrderByAggregateInput
    _min?: EnderecoClinicaMinOrderByAggregateInput
  }

  export type EnderecoClinicaScalarWhereWithAggregatesInput = {
    AND?: EnderecoClinicaScalarWhereWithAggregatesInput | EnderecoClinicaScalarWhereWithAggregatesInput[]
    OR?: EnderecoClinicaScalarWhereWithAggregatesInput[]
    NOT?: EnderecoClinicaScalarWhereWithAggregatesInput | EnderecoClinicaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EnderecoClinica"> | string
    clinicaId?: UuidWithAggregatesFilter<"EnderecoClinica"> | string
    enderecoId?: UuidWithAggregatesFilter<"EnderecoClinica"> | string
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: UuidFilter<"Consulta"> | string
    data?: DateTimeFilter<"Consulta"> | Date | string
    horaInicio?: DateTimeFilter<"Consulta"> | Date | string
    horaFim?: DateTimeFilter<"Consulta"> | Date | string
    turno?: StringFilter<"Consulta"> | string
    tipoConsulta?: StringFilter<"Consulta"> | string
    observacao?: StringNullableFilter<"Consulta"> | string | null
    motivo?: StringFilter<"Consulta"> | string
    avaliacao?: StringNullableFilter<"Consulta"> | string | null
    valor?: FloatNullableFilter<"Consulta"> | number | null
    status?: StringFilter<"Consulta"> | string
    pacienteId?: UuidFilter<"Consulta"> | string
    profissionalId?: UuidFilter<"Consulta"> | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    HistoricoMedico?: HistoricoMedicoListRelationFilter
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    turno?: SortOrder
    tipoConsulta?: SortOrder
    observacao?: SortOrderInput | SortOrder
    motivo?: SortOrder
    avaliacao?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    profissional?: ProfissionalOrderByWithRelationInput
    HistoricoMedico?: HistoricoMedicoOrderByRelationAggregateInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    data?: DateTimeFilter<"Consulta"> | Date | string
    horaInicio?: DateTimeFilter<"Consulta"> | Date | string
    horaFim?: DateTimeFilter<"Consulta"> | Date | string
    turno?: StringFilter<"Consulta"> | string
    tipoConsulta?: StringFilter<"Consulta"> | string
    observacao?: StringNullableFilter<"Consulta"> | string | null
    motivo?: StringFilter<"Consulta"> | string
    avaliacao?: StringNullableFilter<"Consulta"> | string | null
    valor?: FloatNullableFilter<"Consulta"> | number | null
    status?: StringFilter<"Consulta"> | string
    pacienteId?: UuidFilter<"Consulta"> | string
    profissionalId?: UuidFilter<"Consulta"> | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    HistoricoMedico?: HistoricoMedicoListRelationFilter
  }, "id">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    turno?: SortOrder
    tipoConsulta?: SortOrder
    observacao?: SortOrderInput | SortOrder
    motivo?: SortOrder
    avaliacao?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Consulta"> | string
    data?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    horaInicio?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    horaFim?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    turno?: StringWithAggregatesFilter<"Consulta"> | string
    tipoConsulta?: StringWithAggregatesFilter<"Consulta"> | string
    observacao?: StringNullableWithAggregatesFilter<"Consulta"> | string | null
    motivo?: StringWithAggregatesFilter<"Consulta"> | string
    avaliacao?: StringNullableWithAggregatesFilter<"Consulta"> | string | null
    valor?: FloatNullableWithAggregatesFilter<"Consulta"> | number | null
    status?: StringWithAggregatesFilter<"Consulta"> | string
    pacienteId?: UuidWithAggregatesFilter<"Consulta"> | string
    profissionalId?: UuidWithAggregatesFilter<"Consulta"> | string
  }

  export type HistoricoMedicoWhereInput = {
    AND?: HistoricoMedicoWhereInput | HistoricoMedicoWhereInput[]
    OR?: HistoricoMedicoWhereInput[]
    NOT?: HistoricoMedicoWhereInput | HistoricoMedicoWhereInput[]
    id?: UuidFilter<"HistoricoMedico"> | string
    data?: DateTimeFilter<"HistoricoMedico"> | Date | string
    tipoRegistro?: StringFilter<"HistoricoMedico"> | string
    diagnostico?: StringFilter<"HistoricoMedico"> | string
    sintomas?: StringFilter<"HistoricoMedico"> | string
    tratamentoPrescrito?: StringFilter<"HistoricoMedico"> | string
    medicamentos?: StringFilter<"HistoricoMedico"> | string
    resultadosExames?: StringFilter<"HistoricoMedico"> | string
    observacoes?: StringFilter<"HistoricoMedico"> | string
    alergias?: StringFilter<"HistoricoMedico"> | string
    antecedentesFamiliares?: StringFilter<"HistoricoMedico"> | string
    status?: StringFilter<"HistoricoMedico"> | string
    pacienteId?: UuidFilter<"HistoricoMedico"> | string
    profissionalId?: UuidFilter<"HistoricoMedico"> | string
    consultaId?: UuidFilter<"HistoricoMedico"> | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
  }

  export type HistoricoMedicoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    tipoRegistro?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrder
    tratamentoPrescrito?: SortOrder
    medicamentos?: SortOrder
    resultadosExames?: SortOrder
    observacoes?: SortOrder
    alergias?: SortOrder
    antecedentesFamiliares?: SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
    consultaId?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    profissional?: ProfissionalOrderByWithRelationInput
    consulta?: ConsultaOrderByWithRelationInput
  }

  export type HistoricoMedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricoMedicoWhereInput | HistoricoMedicoWhereInput[]
    OR?: HistoricoMedicoWhereInput[]
    NOT?: HistoricoMedicoWhereInput | HistoricoMedicoWhereInput[]
    data?: DateTimeFilter<"HistoricoMedico"> | Date | string
    tipoRegistro?: StringFilter<"HistoricoMedico"> | string
    diagnostico?: StringFilter<"HistoricoMedico"> | string
    sintomas?: StringFilter<"HistoricoMedico"> | string
    tratamentoPrescrito?: StringFilter<"HistoricoMedico"> | string
    medicamentos?: StringFilter<"HistoricoMedico"> | string
    resultadosExames?: StringFilter<"HistoricoMedico"> | string
    observacoes?: StringFilter<"HistoricoMedico"> | string
    alergias?: StringFilter<"HistoricoMedico"> | string
    antecedentesFamiliares?: StringFilter<"HistoricoMedico"> | string
    status?: StringFilter<"HistoricoMedico"> | string
    pacienteId?: UuidFilter<"HistoricoMedico"> | string
    profissionalId?: UuidFilter<"HistoricoMedico"> | string
    consultaId?: UuidFilter<"HistoricoMedico"> | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
  }, "id">

  export type HistoricoMedicoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    tipoRegistro?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrder
    tratamentoPrescrito?: SortOrder
    medicamentos?: SortOrder
    resultadosExames?: SortOrder
    observacoes?: SortOrder
    alergias?: SortOrder
    antecedentesFamiliares?: SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
    consultaId?: SortOrder
    _count?: HistoricoMedicoCountOrderByAggregateInput
    _max?: HistoricoMedicoMaxOrderByAggregateInput
    _min?: HistoricoMedicoMinOrderByAggregateInput
  }

  export type HistoricoMedicoScalarWhereWithAggregatesInput = {
    AND?: HistoricoMedicoScalarWhereWithAggregatesInput | HistoricoMedicoScalarWhereWithAggregatesInput[]
    OR?: HistoricoMedicoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoMedicoScalarWhereWithAggregatesInput | HistoricoMedicoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HistoricoMedico"> | string
    data?: DateTimeWithAggregatesFilter<"HistoricoMedico"> | Date | string
    tipoRegistro?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    diagnostico?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    sintomas?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    tratamentoPrescrito?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    medicamentos?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    resultadosExames?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    observacoes?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    alergias?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    antecedentesFamiliares?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    status?: StringWithAggregatesFilter<"HistoricoMedico"> | string
    pacienteId?: UuidWithAggregatesFilter<"HistoricoMedico"> | string
    profissionalId?: UuidWithAggregatesFilter<"HistoricoMedico"> | string
    consultaId?: UuidWithAggregatesFilter<"HistoricoMedico"> | string
  }

  export type PacienteCreateInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
    usuarios?: UsuarioCreateNestedManyWithoutPacienteInput
    agendamentos?: ConsultaCreateNestedManyWithoutPacienteInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPacienteInput
    agendamentos?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    usuarios?: UsuarioUpdateManyWithoutPacienteNestedInput
    agendamentos?: ConsultaUpdateManyWithoutPacienteNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    usuarios?: UsuarioUncheckedUpdateManyWithoutPacienteNestedInput
    agendamentos?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
  }

  export type PacienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
  }

  export type ProfissionalCreateInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    usuarios?: UsuarioCreateNestedManyWithoutProfissionalInput
    agendamentos?: ConsultaCreateNestedManyWithoutProfissionalInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutProfissionalInput
    agendamentos?: ConsultaUncheckedCreateNestedManyWithoutProfissionalInput
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutProfissionalNestedInput
    agendamentos?: ConsultaUpdateManyWithoutProfissionalNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutProfissionalNestedInput
    agendamentos?: ConsultaUncheckedUpdateManyWithoutProfissionalNestedInput
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalCreateManyInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
  }

  export type ProfissionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type ProfissionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    profissional?: ProfissionalCreateNestedOneWithoutUsuariosInput
    paciente?: PacienteCreateNestedOneWithoutUsuariosInput
    enderecos?: EnderecoUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    profissionalId?: string | null
    pacienteId?: string | null
    enderecos?: EnderecoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalUpdateOneWithoutUsuariosNestedInput
    paciente?: PacienteUpdateOneWithoutUsuariosNestedInput
    enderecos?: EnderecoUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    pacienteId?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    profissionalId?: string | null
    pacienteId?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    pacienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicaCreateInput = {
    id?: string
    nomeFantasia: string
    razaoSocial: string
    cnpj: string
    inscricaoEstadual: string
    telefone: string
    tipoAtendimento: string
    enderecos?: EnderecoClinicaCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaUncheckedCreateInput = {
    id?: string
    nomeFantasia: string
    razaoSocial: string
    cnpj: string
    inscricaoEstadual: string
    telefone: string
    tipoAtendimento: string
    enderecos?: EnderecoClinicaUncheckedCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    enderecos?: EnderecoClinicaUpdateManyWithoutClinicaNestedInput
  }

  export type ClinicaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
    enderecos?: EnderecoClinicaUncheckedUpdateManyWithoutClinicaNestedInput
  }

  export type ClinicaCreateManyInput = {
    id?: string
    nomeFantasia: string
    razaoSocial: string
    cnpj: string
    inscricaoEstadual: string
    telefone: string
    tipoAtendimento: string
  }

  export type ClinicaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
  }

  export type ClinicaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
  }

  export type DiaSemanaCreateInput = {
    id?: string
    dia: string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaUncheckedCreateInput = {
    id?: string
    dia: string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutDiaSemanaInput
  }

  export type DiaSemanaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DiaSemanaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaNestedInput
  }

  export type DiaSemanaCreateManyInput = {
    id?: string
    dia: string
  }

  export type DiaSemanaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
  }

  export type DiaSemanaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateInput = {
    id?: string
    horaInicio: Date | string
    horaFim: Date | string
    diaSemana: DiaSemanaCreateNestedOneWithoutDisponibilidadeInput
  }

  export type DisponibilidadeUncheckedCreateInput = {
    id?: string
    diaSemanaId: string
    horaInicio: Date | string
    horaFim: Date | string
  }

  export type DisponibilidadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    diaSemana?: DiaSemanaUpdateOneRequiredWithoutDisponibilidadeNestedInput
  }

  export type DisponibilidadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemanaId?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilidadeCreateManyInput = {
    id?: string
    diaSemanaId: string
    horaInicio: Date | string
    horaFim: Date | string
  }

  export type DisponibilidadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilidadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemanaId?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoCreateInput = {
    id?: string
    rua: string
    bairro: string
    cep: string
    complemento: string
    estado: string
    cidade: string
    numero: string
    usuarios?: EnderecoUsuarioCreateNestedManyWithoutEnderecoInput
    clinicas?: EnderecoClinicaCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: string
    rua: string
    bairro: string
    cep: string
    complemento: string
    estado: string
    cidade: string
    numero: string
    usuarios?: EnderecoUsuarioUncheckedCreateNestedManyWithoutEnderecoInput
    clinicas?: EnderecoClinicaUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    usuarios?: EnderecoUsuarioUpdateManyWithoutEnderecoNestedInput
    clinicas?: EnderecoClinicaUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    usuarios?: EnderecoUsuarioUncheckedUpdateManyWithoutEnderecoNestedInput
    clinicas?: EnderecoClinicaUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoCreateManyInput = {
    id?: string
    rua: string
    bairro: string
    cep: string
    complemento: string
    estado: string
    cidade: string
    numero: string
  }

  export type EnderecoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUsuarioCreateInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutEnderecosInput
    endereco: EnderecoCreateNestedOneWithoutUsuariosInput
  }

  export type EnderecoUsuarioUncheckedCreateInput = {
    id?: string
    usuarioId: string
    enderecoId: string
  }

  export type EnderecoUsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutEnderecosNestedInput
    endereco?: EnderecoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type EnderecoUsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    enderecoId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUsuarioCreateManyInput = {
    id?: string
    usuarioId: string
    enderecoId: string
  }

  export type EnderecoUsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    enderecoId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoClinicaCreateInput = {
    id?: string
    clinica: ClinicaCreateNestedOneWithoutEnderecosInput
    endereco: EnderecoCreateNestedOneWithoutClinicasInput
  }

  export type EnderecoClinicaUncheckedCreateInput = {
    id?: string
    clinicaId: string
    enderecoId: string
  }

  export type EnderecoClinicaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinica?: ClinicaUpdateOneRequiredWithoutEnderecosNestedInput
    endereco?: EnderecoUpdateOneRequiredWithoutClinicasNestedInput
  }

  export type EnderecoClinicaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    enderecoId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoClinicaCreateManyInput = {
    id?: string
    clinicaId: string
    enderecoId: string
  }

  export type EnderecoClinicaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoClinicaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    enderecoId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultaCreateInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    paciente: PacienteCreateNestedOneWithoutAgendamentosInput
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    pacienteId: string
    profissionalId: string
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutAgendamentosNestedInput
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaCreateManyInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    pacienteId: string
    profissionalId: string
  }

  export type ConsultaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoCreateInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    paciente: PacienteCreateNestedOneWithoutHistoricoMedicoInput
    profissional: ProfissionalCreateNestedOneWithoutHistoricoMedicoInput
    consulta: ConsultaCreateNestedOneWithoutHistoricoMedicoInput
  }

  export type HistoricoMedicoUncheckedCreateInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    pacienteId: string
    profissionalId: string
    consultaId: string
  }

  export type HistoricoMedicoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutHistoricoMedicoNestedInput
    profissional?: ProfissionalUpdateOneRequiredWithoutHistoricoMedicoNestedInput
    consulta?: ConsultaUpdateOneRequiredWithoutHistoricoMedicoNestedInput
  }

  export type HistoricoMedicoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    consultaId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoCreateManyInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    pacienteId: string
    profissionalId: string
    consultaId: string
  }

  export type HistoricoMedicoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    consultaId?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type ConsultaListRelationFilter = {
    every?: ConsultaWhereInput
    some?: ConsultaWhereInput
    none?: ConsultaWhereInput
  }

  export type HistoricoMedicoListRelationFilter = {
    every?: HistoricoMedicoWhereInput
    some?: HistoricoMedicoWhereInput
    none?: HistoricoMedicoWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoMedicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    peso?: SortOrder
    altura?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    peso?: SortOrder
    altura?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTipoRegistroFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRegistro | EnumTipoRegistroFieldRefInput<$PrismaModel>
    in?: $Enums.TipoRegistro[] | ListEnumTipoRegistroFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoRegistro[] | ListEnumTipoRegistroFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoRegistroFilter<$PrismaModel> | $Enums.TipoRegistro
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

  export type ProfissionalCountOrderByAggregateInput = {
    id?: SortOrder
    tipoRegistro?: SortOrder
    numeroRegistro?: SortOrder
    uf?: SortOrder
    descricao?: SortOrder
    instituicaoFormadora?: SortOrder
    tipoProfissional?: SortOrder
    especialidade?: SortOrder
  }

  export type ProfissionalMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoRegistro?: SortOrder
    numeroRegistro?: SortOrder
    uf?: SortOrder
    descricao?: SortOrder
    instituicaoFormadora?: SortOrder
    tipoProfissional?: SortOrder
    especialidade?: SortOrder
  }

  export type ProfissionalMinOrderByAggregateInput = {
    id?: SortOrder
    tipoRegistro?: SortOrder
    numeroRegistro?: SortOrder
    uf?: SortOrder
    descricao?: SortOrder
    instituicaoFormadora?: SortOrder
    tipoProfissional?: SortOrder
    especialidade?: SortOrder
  }

  export type EnumTipoRegistroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRegistro | EnumTipoRegistroFieldRefInput<$PrismaModel>
    in?: $Enums.TipoRegistro[] | ListEnumTipoRegistroFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoRegistro[] | ListEnumTipoRegistroFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoRegistroWithAggregatesFilter<$PrismaModel> | $Enums.TipoRegistro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoRegistroFilter<$PrismaModel>
    _max?: NestedEnumTipoRegistroFilter<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type ProfissionalNullableScalarRelationFilter = {
    is?: ProfissionalWhereInput | null
    isNot?: ProfissionalWhereInput | null
  }

  export type PacienteNullableScalarRelationFilter = {
    is?: PacienteWhereInput | null
    isNot?: PacienteWhereInput | null
  }

  export type EnderecoUsuarioListRelationFilter = {
    every?: EnderecoUsuarioWhereInput
    some?: EnderecoUsuarioWhereInput
    none?: EnderecoUsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnderecoUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    avatar?: SortOrder
    genero?: SortOrder
    profissionalId?: SortOrder
    pacienteId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    avatar?: SortOrder
    genero?: SortOrder
    profissionalId?: SortOrder
    pacienteId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    avatar?: SortOrder
    genero?: SortOrder
    profissionalId?: SortOrder
    pacienteId?: SortOrder
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnderecoClinicaListRelationFilter = {
    every?: EnderecoClinicaWhereInput
    some?: EnderecoClinicaWhereInput
    none?: EnderecoClinicaWhereInput
  }

  export type EnderecoClinicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClinicaCountOrderByAggregateInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefone?: SortOrder
    tipoAtendimento?: SortOrder
  }

  export type ClinicaMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefone?: SortOrder
    tipoAtendimento?: SortOrder
  }

  export type ClinicaMinOrderByAggregateInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    razaoSocial?: SortOrder
    cnpj?: SortOrder
    inscricaoEstadual?: SortOrder
    telefone?: SortOrder
    tipoAtendimento?: SortOrder
  }

  export type DisponibilidadeListRelationFilter = {
    every?: DisponibilidadeWhereInput
    some?: DisponibilidadeWhereInput
    none?: DisponibilidadeWhereInput
  }

  export type DisponibilidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiaSemanaCountOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
  }

  export type DiaSemanaMaxOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
  }

  export type DiaSemanaMinOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
  }

  export type DiaSemanaScalarRelationFilter = {
    is?: DiaSemanaWhereInput
    isNot?: DiaSemanaWhereInput
  }

  export type DisponibilidadeCountOrderByAggregateInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
  }

  export type DisponibilidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
  }

  export type DisponibilidadeMinOrderByAggregateInput = {
    id?: SortOrder
    diaSemanaId?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    complemento?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    numero?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    complemento?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    numero?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    rua?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    complemento?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    numero?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EnderecoScalarRelationFilter = {
    is?: EnderecoWhereInput
    isNot?: EnderecoWhereInput
  }

  export type EnderecoUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
  }

  export type EnderecoUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
  }

  export type EnderecoUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
  }

  export type ClinicaScalarRelationFilter = {
    is?: ClinicaWhereInput
    isNot?: ClinicaWhereInput
  }

  export type EnderecoClinicaCountOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    enderecoId?: SortOrder
  }

  export type EnderecoClinicaMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    enderecoId?: SortOrder
  }

  export type EnderecoClinicaMinOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    enderecoId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type ProfissionalScalarRelationFilter = {
    is?: ProfissionalWhereInput
    isNot?: ProfissionalWhereInput
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    turno?: SortOrder
    tipoConsulta?: SortOrder
    observacao?: SortOrder
    motivo?: SortOrder
    avaliacao?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    turno?: SortOrder
    tipoConsulta?: SortOrder
    observacao?: SortOrder
    motivo?: SortOrder
    avaliacao?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    horaInicio?: SortOrder
    horaFim?: SortOrder
    turno?: SortOrder
    tipoConsulta?: SortOrder
    observacao?: SortOrder
    motivo?: SortOrder
    avaliacao?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ConsultaScalarRelationFilter = {
    is?: ConsultaWhereInput
    isNot?: ConsultaWhereInput
  }

  export type HistoricoMedicoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipoRegistro?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrder
    tratamentoPrescrito?: SortOrder
    medicamentos?: SortOrder
    resultadosExames?: SortOrder
    observacoes?: SortOrder
    alergias?: SortOrder
    antecedentesFamiliares?: SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
    consultaId?: SortOrder
  }

  export type HistoricoMedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipoRegistro?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrder
    tratamentoPrescrito?: SortOrder
    medicamentos?: SortOrder
    resultadosExames?: SortOrder
    observacoes?: SortOrder
    alergias?: SortOrder
    antecedentesFamiliares?: SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
    consultaId?: SortOrder
  }

  export type HistoricoMedicoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipoRegistro?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrder
    tratamentoPrescrito?: SortOrder
    medicamentos?: SortOrder
    resultadosExames?: SortOrder
    observacoes?: SortOrder
    alergias?: SortOrder
    antecedentesFamiliares?: SortOrder
    status?: SortOrder
    pacienteId?: SortOrder
    profissionalId?: SortOrder
    consultaId?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutPacienteInput = {
    create?: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput> | UsuarioCreateWithoutPacienteInput[] | UsuarioUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacienteInput | UsuarioCreateOrConnectWithoutPacienteInput[]
    createMany?: UsuarioCreateManyPacienteInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ConsultaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type HistoricoMedicoCreateNestedManyWithoutPacienteInput = {
    create?: XOR<HistoricoMedicoCreateWithoutPacienteInput, HistoricoMedicoUncheckedCreateWithoutPacienteInput> | HistoricoMedicoCreateWithoutPacienteInput[] | HistoricoMedicoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutPacienteInput | HistoricoMedicoCreateOrConnectWithoutPacienteInput[]
    createMany?: HistoricoMedicoCreateManyPacienteInputEnvelope
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput> | UsuarioCreateWithoutPacienteInput[] | UsuarioUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacienteInput | UsuarioCreateOrConnectWithoutPacienteInput[]
    createMany?: UsuarioCreateManyPacienteInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type HistoricoMedicoUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<HistoricoMedicoCreateWithoutPacienteInput, HistoricoMedicoUncheckedCreateWithoutPacienteInput> | HistoricoMedicoCreateWithoutPacienteInput[] | HistoricoMedicoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutPacienteInput | HistoricoMedicoCreateOrConnectWithoutPacienteInput[]
    createMany?: HistoricoMedicoCreateManyPacienteInputEnvelope
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput> | UsuarioCreateWithoutPacienteInput[] | UsuarioUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacienteInput | UsuarioCreateOrConnectWithoutPacienteInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPacienteInput | UsuarioUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: UsuarioCreateManyPacienteInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPacienteInput | UsuarioUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPacienteInput | UsuarioUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ConsultaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type HistoricoMedicoUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<HistoricoMedicoCreateWithoutPacienteInput, HistoricoMedicoUncheckedCreateWithoutPacienteInput> | HistoricoMedicoCreateWithoutPacienteInput[] | HistoricoMedicoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutPacienteInput | HistoricoMedicoCreateOrConnectWithoutPacienteInput[]
    upsert?: HistoricoMedicoUpsertWithWhereUniqueWithoutPacienteInput | HistoricoMedicoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: HistoricoMedicoCreateManyPacienteInputEnvelope
    set?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    disconnect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    delete?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    update?: HistoricoMedicoUpdateWithWhereUniqueWithoutPacienteInput | HistoricoMedicoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: HistoricoMedicoUpdateManyWithWhereWithoutPacienteInput | HistoricoMedicoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: HistoricoMedicoScalarWhereInput | HistoricoMedicoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput> | UsuarioCreateWithoutPacienteInput[] | UsuarioUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacienteInput | UsuarioCreateOrConnectWithoutPacienteInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPacienteInput | UsuarioUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: UsuarioCreateManyPacienteInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPacienteInput | UsuarioUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPacienteInput | UsuarioUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type HistoricoMedicoUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<HistoricoMedicoCreateWithoutPacienteInput, HistoricoMedicoUncheckedCreateWithoutPacienteInput> | HistoricoMedicoCreateWithoutPacienteInput[] | HistoricoMedicoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutPacienteInput | HistoricoMedicoCreateOrConnectWithoutPacienteInput[]
    upsert?: HistoricoMedicoUpsertWithWhereUniqueWithoutPacienteInput | HistoricoMedicoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: HistoricoMedicoCreateManyPacienteInputEnvelope
    set?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    disconnect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    delete?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    update?: HistoricoMedicoUpdateWithWhereUniqueWithoutPacienteInput | HistoricoMedicoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: HistoricoMedicoUpdateManyWithWhereWithoutPacienteInput | HistoricoMedicoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: HistoricoMedicoScalarWhereInput | HistoricoMedicoScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput> | UsuarioCreateWithoutProfissionalInput[] | UsuarioUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfissionalInput | UsuarioCreateOrConnectWithoutProfissionalInput[]
    createMany?: UsuarioCreateManyProfissionalInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ConsultaCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<ConsultaCreateWithoutProfissionalInput, ConsultaUncheckedCreateWithoutProfissionalInput> | ConsultaCreateWithoutProfissionalInput[] | ConsultaUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutProfissionalInput | ConsultaCreateOrConnectWithoutProfissionalInput[]
    createMany?: ConsultaCreateManyProfissionalInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type HistoricoMedicoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<HistoricoMedicoCreateWithoutProfissionalInput, HistoricoMedicoUncheckedCreateWithoutProfissionalInput> | HistoricoMedicoCreateWithoutProfissionalInput[] | HistoricoMedicoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutProfissionalInput | HistoricoMedicoCreateOrConnectWithoutProfissionalInput[]
    createMany?: HistoricoMedicoCreateManyProfissionalInputEnvelope
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput> | UsuarioCreateWithoutProfissionalInput[] | UsuarioUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfissionalInput | UsuarioCreateOrConnectWithoutProfissionalInput[]
    createMany?: UsuarioCreateManyProfissionalInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<ConsultaCreateWithoutProfissionalInput, ConsultaUncheckedCreateWithoutProfissionalInput> | ConsultaCreateWithoutProfissionalInput[] | ConsultaUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutProfissionalInput | ConsultaCreateOrConnectWithoutProfissionalInput[]
    createMany?: ConsultaCreateManyProfissionalInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type HistoricoMedicoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<HistoricoMedicoCreateWithoutProfissionalInput, HistoricoMedicoUncheckedCreateWithoutProfissionalInput> | HistoricoMedicoCreateWithoutProfissionalInput[] | HistoricoMedicoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutProfissionalInput | HistoricoMedicoCreateOrConnectWithoutProfissionalInput[]
    createMany?: HistoricoMedicoCreateManyProfissionalInputEnvelope
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
  }

  export type EnumTipoRegistroFieldUpdateOperationsInput = {
    set?: $Enums.TipoRegistro
  }

  export type UsuarioUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput> | UsuarioCreateWithoutProfissionalInput[] | UsuarioUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfissionalInput | UsuarioCreateOrConnectWithoutProfissionalInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutProfissionalInput | UsuarioUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: UsuarioCreateManyProfissionalInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutProfissionalInput | UsuarioUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutProfissionalInput | UsuarioUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ConsultaUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<ConsultaCreateWithoutProfissionalInput, ConsultaUncheckedCreateWithoutProfissionalInput> | ConsultaCreateWithoutProfissionalInput[] | ConsultaUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutProfissionalInput | ConsultaCreateOrConnectWithoutProfissionalInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutProfissionalInput | ConsultaUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: ConsultaCreateManyProfissionalInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutProfissionalInput | ConsultaUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutProfissionalInput | ConsultaUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type HistoricoMedicoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<HistoricoMedicoCreateWithoutProfissionalInput, HistoricoMedicoUncheckedCreateWithoutProfissionalInput> | HistoricoMedicoCreateWithoutProfissionalInput[] | HistoricoMedicoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutProfissionalInput | HistoricoMedicoCreateOrConnectWithoutProfissionalInput[]
    upsert?: HistoricoMedicoUpsertWithWhereUniqueWithoutProfissionalInput | HistoricoMedicoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: HistoricoMedicoCreateManyProfissionalInputEnvelope
    set?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    disconnect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    delete?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    update?: HistoricoMedicoUpdateWithWhereUniqueWithoutProfissionalInput | HistoricoMedicoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: HistoricoMedicoUpdateManyWithWhereWithoutProfissionalInput | HistoricoMedicoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: HistoricoMedicoScalarWhereInput | HistoricoMedicoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput> | UsuarioCreateWithoutProfissionalInput[] | UsuarioUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfissionalInput | UsuarioCreateOrConnectWithoutProfissionalInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutProfissionalInput | UsuarioUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: UsuarioCreateManyProfissionalInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutProfissionalInput | UsuarioUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutProfissionalInput | UsuarioUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<ConsultaCreateWithoutProfissionalInput, ConsultaUncheckedCreateWithoutProfissionalInput> | ConsultaCreateWithoutProfissionalInput[] | ConsultaUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutProfissionalInput | ConsultaCreateOrConnectWithoutProfissionalInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutProfissionalInput | ConsultaUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: ConsultaCreateManyProfissionalInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutProfissionalInput | ConsultaUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutProfissionalInput | ConsultaUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type HistoricoMedicoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<HistoricoMedicoCreateWithoutProfissionalInput, HistoricoMedicoUncheckedCreateWithoutProfissionalInput> | HistoricoMedicoCreateWithoutProfissionalInput[] | HistoricoMedicoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutProfissionalInput | HistoricoMedicoCreateOrConnectWithoutProfissionalInput[]
    upsert?: HistoricoMedicoUpsertWithWhereUniqueWithoutProfissionalInput | HistoricoMedicoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: HistoricoMedicoCreateManyProfissionalInputEnvelope
    set?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    disconnect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    delete?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    update?: HistoricoMedicoUpdateWithWhereUniqueWithoutProfissionalInput | HistoricoMedicoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: HistoricoMedicoUpdateManyWithWhereWithoutProfissionalInput | HistoricoMedicoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: HistoricoMedicoScalarWhereInput | HistoricoMedicoScalarWhereInput[]
  }

  export type ProfissionalCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<ProfissionalCreateWithoutUsuariosInput, ProfissionalUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutUsuariosInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<PacienteCreateWithoutUsuariosInput, PacienteUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuariosInput
    connect?: PacienteWhereUniqueInput
  }

  export type EnderecoUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EnderecoUsuarioCreateWithoutUsuarioInput, EnderecoUsuarioUncheckedCreateWithoutUsuarioInput> | EnderecoUsuarioCreateWithoutUsuarioInput[] | EnderecoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoUsuarioCreateOrConnectWithoutUsuarioInput | EnderecoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: EnderecoUsuarioCreateManyUsuarioInputEnvelope
    connect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
  }

  export type EnderecoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EnderecoUsuarioCreateWithoutUsuarioInput, EnderecoUsuarioUncheckedCreateWithoutUsuarioInput> | EnderecoUsuarioCreateWithoutUsuarioInput[] | EnderecoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoUsuarioCreateOrConnectWithoutUsuarioInput | EnderecoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: EnderecoUsuarioCreateManyUsuarioInputEnvelope
    connect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProfissionalUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<ProfissionalCreateWithoutUsuariosInput, ProfissionalUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutUsuariosInput
    upsert?: ProfissionalUpsertWithoutUsuariosInput
    disconnect?: ProfissionalWhereInput | boolean
    delete?: ProfissionalWhereInput | boolean
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutUsuariosInput, ProfissionalUpdateWithoutUsuariosInput>, ProfissionalUncheckedUpdateWithoutUsuariosInput>
  }

  export type PacienteUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<PacienteCreateWithoutUsuariosInput, PacienteUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuariosInput
    upsert?: PacienteUpsertWithoutUsuariosInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUsuariosInput, PacienteUpdateWithoutUsuariosInput>, PacienteUncheckedUpdateWithoutUsuariosInput>
  }

  export type EnderecoUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EnderecoUsuarioCreateWithoutUsuarioInput, EnderecoUsuarioUncheckedCreateWithoutUsuarioInput> | EnderecoUsuarioCreateWithoutUsuarioInput[] | EnderecoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoUsuarioCreateOrConnectWithoutUsuarioInput | EnderecoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: EnderecoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | EnderecoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EnderecoUsuarioCreateManyUsuarioInputEnvelope
    set?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    disconnect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    delete?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    connect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    update?: EnderecoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | EnderecoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EnderecoUsuarioUpdateManyWithWhereWithoutUsuarioInput | EnderecoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EnderecoUsuarioScalarWhereInput | EnderecoUsuarioScalarWhereInput[]
  }

  export type EnderecoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EnderecoUsuarioCreateWithoutUsuarioInput, EnderecoUsuarioUncheckedCreateWithoutUsuarioInput> | EnderecoUsuarioCreateWithoutUsuarioInput[] | EnderecoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EnderecoUsuarioCreateOrConnectWithoutUsuarioInput | EnderecoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: EnderecoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | EnderecoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EnderecoUsuarioCreateManyUsuarioInputEnvelope
    set?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    disconnect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    delete?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    connect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    update?: EnderecoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | EnderecoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EnderecoUsuarioUpdateManyWithWhereWithoutUsuarioInput | EnderecoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EnderecoUsuarioScalarWhereInput | EnderecoUsuarioScalarWhereInput[]
  }

  export type EnderecoClinicaCreateNestedManyWithoutClinicaInput = {
    create?: XOR<EnderecoClinicaCreateWithoutClinicaInput, EnderecoClinicaUncheckedCreateWithoutClinicaInput> | EnderecoClinicaCreateWithoutClinicaInput[] | EnderecoClinicaUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: EnderecoClinicaCreateOrConnectWithoutClinicaInput | EnderecoClinicaCreateOrConnectWithoutClinicaInput[]
    createMany?: EnderecoClinicaCreateManyClinicaInputEnvelope
    connect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
  }

  export type EnderecoClinicaUncheckedCreateNestedManyWithoutClinicaInput = {
    create?: XOR<EnderecoClinicaCreateWithoutClinicaInput, EnderecoClinicaUncheckedCreateWithoutClinicaInput> | EnderecoClinicaCreateWithoutClinicaInput[] | EnderecoClinicaUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: EnderecoClinicaCreateOrConnectWithoutClinicaInput | EnderecoClinicaCreateOrConnectWithoutClinicaInput[]
    createMany?: EnderecoClinicaCreateManyClinicaInputEnvelope
    connect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
  }

  export type EnderecoClinicaUpdateManyWithoutClinicaNestedInput = {
    create?: XOR<EnderecoClinicaCreateWithoutClinicaInput, EnderecoClinicaUncheckedCreateWithoutClinicaInput> | EnderecoClinicaCreateWithoutClinicaInput[] | EnderecoClinicaUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: EnderecoClinicaCreateOrConnectWithoutClinicaInput | EnderecoClinicaCreateOrConnectWithoutClinicaInput[]
    upsert?: EnderecoClinicaUpsertWithWhereUniqueWithoutClinicaInput | EnderecoClinicaUpsertWithWhereUniqueWithoutClinicaInput[]
    createMany?: EnderecoClinicaCreateManyClinicaInputEnvelope
    set?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    disconnect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    delete?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    connect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    update?: EnderecoClinicaUpdateWithWhereUniqueWithoutClinicaInput | EnderecoClinicaUpdateWithWhereUniqueWithoutClinicaInput[]
    updateMany?: EnderecoClinicaUpdateManyWithWhereWithoutClinicaInput | EnderecoClinicaUpdateManyWithWhereWithoutClinicaInput[]
    deleteMany?: EnderecoClinicaScalarWhereInput | EnderecoClinicaScalarWhereInput[]
  }

  export type EnderecoClinicaUncheckedUpdateManyWithoutClinicaNestedInput = {
    create?: XOR<EnderecoClinicaCreateWithoutClinicaInput, EnderecoClinicaUncheckedCreateWithoutClinicaInput> | EnderecoClinicaCreateWithoutClinicaInput[] | EnderecoClinicaUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: EnderecoClinicaCreateOrConnectWithoutClinicaInput | EnderecoClinicaCreateOrConnectWithoutClinicaInput[]
    upsert?: EnderecoClinicaUpsertWithWhereUniqueWithoutClinicaInput | EnderecoClinicaUpsertWithWhereUniqueWithoutClinicaInput[]
    createMany?: EnderecoClinicaCreateManyClinicaInputEnvelope
    set?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    disconnect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    delete?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    connect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    update?: EnderecoClinicaUpdateWithWhereUniqueWithoutClinicaInput | EnderecoClinicaUpdateWithWhereUniqueWithoutClinicaInput[]
    updateMany?: EnderecoClinicaUpdateManyWithWhereWithoutClinicaInput | EnderecoClinicaUpdateManyWithWhereWithoutClinicaInput[]
    deleteMany?: EnderecoClinicaScalarWhereInput | EnderecoClinicaScalarWhereInput[]
  }

  export type DisponibilidadeCreateNestedManyWithoutDiaSemanaInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput> | DisponibilidadeCreateWithoutDiaSemanaInput[] | DisponibilidadeUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaSemanaInput | DisponibilidadeCreateOrConnectWithoutDiaSemanaInput[]
    createMany?: DisponibilidadeCreateManyDiaSemanaInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type DisponibilidadeUncheckedCreateNestedManyWithoutDiaSemanaInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput> | DisponibilidadeCreateWithoutDiaSemanaInput[] | DisponibilidadeUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaSemanaInput | DisponibilidadeCreateOrConnectWithoutDiaSemanaInput[]
    createMany?: DisponibilidadeCreateManyDiaSemanaInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type DisponibilidadeUpdateManyWithoutDiaSemanaNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput> | DisponibilidadeCreateWithoutDiaSemanaInput[] | DisponibilidadeUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaSemanaInput | DisponibilidadeCreateOrConnectWithoutDiaSemanaInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput | DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput[]
    createMany?: DisponibilidadeCreateManyDiaSemanaInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput | DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput | DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput> | DisponibilidadeCreateWithoutDiaSemanaInput[] | DisponibilidadeUncheckedCreateWithoutDiaSemanaInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutDiaSemanaInput | DisponibilidadeCreateOrConnectWithoutDiaSemanaInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput | DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput[]
    createMany?: DisponibilidadeCreateManyDiaSemanaInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput | DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput | DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type DiaSemanaCreateNestedOneWithoutDisponibilidadeInput = {
    create?: XOR<DiaSemanaCreateWithoutDisponibilidadeInput, DiaSemanaUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutDisponibilidadeInput
    connect?: DiaSemanaWhereUniqueInput
  }

  export type DiaSemanaUpdateOneRequiredWithoutDisponibilidadeNestedInput = {
    create?: XOR<DiaSemanaCreateWithoutDisponibilidadeInput, DiaSemanaUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: DiaSemanaCreateOrConnectWithoutDisponibilidadeInput
    upsert?: DiaSemanaUpsertWithoutDisponibilidadeInput
    connect?: DiaSemanaWhereUniqueInput
    update?: XOR<XOR<DiaSemanaUpdateToOneWithWhereWithoutDisponibilidadeInput, DiaSemanaUpdateWithoutDisponibilidadeInput>, DiaSemanaUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type EnderecoUsuarioCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<EnderecoUsuarioCreateWithoutEnderecoInput, EnderecoUsuarioUncheckedCreateWithoutEnderecoInput> | EnderecoUsuarioCreateWithoutEnderecoInput[] | EnderecoUsuarioUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EnderecoUsuarioCreateOrConnectWithoutEnderecoInput | EnderecoUsuarioCreateOrConnectWithoutEnderecoInput[]
    createMany?: EnderecoUsuarioCreateManyEnderecoInputEnvelope
    connect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
  }

  export type EnderecoClinicaCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<EnderecoClinicaCreateWithoutEnderecoInput, EnderecoClinicaUncheckedCreateWithoutEnderecoInput> | EnderecoClinicaCreateWithoutEnderecoInput[] | EnderecoClinicaUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EnderecoClinicaCreateOrConnectWithoutEnderecoInput | EnderecoClinicaCreateOrConnectWithoutEnderecoInput[]
    createMany?: EnderecoClinicaCreateManyEnderecoInputEnvelope
    connect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
  }

  export type EnderecoUsuarioUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<EnderecoUsuarioCreateWithoutEnderecoInput, EnderecoUsuarioUncheckedCreateWithoutEnderecoInput> | EnderecoUsuarioCreateWithoutEnderecoInput[] | EnderecoUsuarioUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EnderecoUsuarioCreateOrConnectWithoutEnderecoInput | EnderecoUsuarioCreateOrConnectWithoutEnderecoInput[]
    createMany?: EnderecoUsuarioCreateManyEnderecoInputEnvelope
    connect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
  }

  export type EnderecoClinicaUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<EnderecoClinicaCreateWithoutEnderecoInput, EnderecoClinicaUncheckedCreateWithoutEnderecoInput> | EnderecoClinicaCreateWithoutEnderecoInput[] | EnderecoClinicaUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EnderecoClinicaCreateOrConnectWithoutEnderecoInput | EnderecoClinicaCreateOrConnectWithoutEnderecoInput[]
    createMany?: EnderecoClinicaCreateManyEnderecoInputEnvelope
    connect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
  }

  export type EnderecoUsuarioUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<EnderecoUsuarioCreateWithoutEnderecoInput, EnderecoUsuarioUncheckedCreateWithoutEnderecoInput> | EnderecoUsuarioCreateWithoutEnderecoInput[] | EnderecoUsuarioUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EnderecoUsuarioCreateOrConnectWithoutEnderecoInput | EnderecoUsuarioCreateOrConnectWithoutEnderecoInput[]
    upsert?: EnderecoUsuarioUpsertWithWhereUniqueWithoutEnderecoInput | EnderecoUsuarioUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: EnderecoUsuarioCreateManyEnderecoInputEnvelope
    set?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    disconnect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    delete?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    connect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    update?: EnderecoUsuarioUpdateWithWhereUniqueWithoutEnderecoInput | EnderecoUsuarioUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: EnderecoUsuarioUpdateManyWithWhereWithoutEnderecoInput | EnderecoUsuarioUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: EnderecoUsuarioScalarWhereInput | EnderecoUsuarioScalarWhereInput[]
  }

  export type EnderecoClinicaUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<EnderecoClinicaCreateWithoutEnderecoInput, EnderecoClinicaUncheckedCreateWithoutEnderecoInput> | EnderecoClinicaCreateWithoutEnderecoInput[] | EnderecoClinicaUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EnderecoClinicaCreateOrConnectWithoutEnderecoInput | EnderecoClinicaCreateOrConnectWithoutEnderecoInput[]
    upsert?: EnderecoClinicaUpsertWithWhereUniqueWithoutEnderecoInput | EnderecoClinicaUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: EnderecoClinicaCreateManyEnderecoInputEnvelope
    set?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    disconnect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    delete?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    connect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    update?: EnderecoClinicaUpdateWithWhereUniqueWithoutEnderecoInput | EnderecoClinicaUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: EnderecoClinicaUpdateManyWithWhereWithoutEnderecoInput | EnderecoClinicaUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: EnderecoClinicaScalarWhereInput | EnderecoClinicaScalarWhereInput[]
  }

  export type EnderecoUsuarioUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<EnderecoUsuarioCreateWithoutEnderecoInput, EnderecoUsuarioUncheckedCreateWithoutEnderecoInput> | EnderecoUsuarioCreateWithoutEnderecoInput[] | EnderecoUsuarioUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EnderecoUsuarioCreateOrConnectWithoutEnderecoInput | EnderecoUsuarioCreateOrConnectWithoutEnderecoInput[]
    upsert?: EnderecoUsuarioUpsertWithWhereUniqueWithoutEnderecoInput | EnderecoUsuarioUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: EnderecoUsuarioCreateManyEnderecoInputEnvelope
    set?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    disconnect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    delete?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    connect?: EnderecoUsuarioWhereUniqueInput | EnderecoUsuarioWhereUniqueInput[]
    update?: EnderecoUsuarioUpdateWithWhereUniqueWithoutEnderecoInput | EnderecoUsuarioUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: EnderecoUsuarioUpdateManyWithWhereWithoutEnderecoInput | EnderecoUsuarioUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: EnderecoUsuarioScalarWhereInput | EnderecoUsuarioScalarWhereInput[]
  }

  export type EnderecoClinicaUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<EnderecoClinicaCreateWithoutEnderecoInput, EnderecoClinicaUncheckedCreateWithoutEnderecoInput> | EnderecoClinicaCreateWithoutEnderecoInput[] | EnderecoClinicaUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: EnderecoClinicaCreateOrConnectWithoutEnderecoInput | EnderecoClinicaCreateOrConnectWithoutEnderecoInput[]
    upsert?: EnderecoClinicaUpsertWithWhereUniqueWithoutEnderecoInput | EnderecoClinicaUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: EnderecoClinicaCreateManyEnderecoInputEnvelope
    set?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    disconnect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    delete?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    connect?: EnderecoClinicaWhereUniqueInput | EnderecoClinicaWhereUniqueInput[]
    update?: EnderecoClinicaUpdateWithWhereUniqueWithoutEnderecoInput | EnderecoClinicaUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: EnderecoClinicaUpdateManyWithWhereWithoutEnderecoInput | EnderecoClinicaUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: EnderecoClinicaScalarWhereInput | EnderecoClinicaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<UsuarioCreateWithoutEnderecosInput, UsuarioUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEnderecosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnderecoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<EnderecoCreateWithoutUsuariosInput, EnderecoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuariosInput
    connect?: EnderecoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutEnderecosNestedInput = {
    create?: XOR<UsuarioCreateWithoutEnderecosInput, UsuarioUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEnderecosInput
    upsert?: UsuarioUpsertWithoutEnderecosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEnderecosInput, UsuarioUpdateWithoutEnderecosInput>, UsuarioUncheckedUpdateWithoutEnderecosInput>
  }

  export type EnderecoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<EnderecoCreateWithoutUsuariosInput, EnderecoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuariosInput
    upsert?: EnderecoUpsertWithoutUsuariosInput
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutUsuariosInput, EnderecoUpdateWithoutUsuariosInput>, EnderecoUncheckedUpdateWithoutUsuariosInput>
  }

  export type ClinicaCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<ClinicaCreateWithoutEnderecosInput, ClinicaUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ClinicaCreateOrConnectWithoutEnderecosInput
    connect?: ClinicaWhereUniqueInput
  }

  export type EnderecoCreateNestedOneWithoutClinicasInput = {
    create?: XOR<EnderecoCreateWithoutClinicasInput, EnderecoUncheckedCreateWithoutClinicasInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutClinicasInput
    connect?: EnderecoWhereUniqueInput
  }

  export type ClinicaUpdateOneRequiredWithoutEnderecosNestedInput = {
    create?: XOR<ClinicaCreateWithoutEnderecosInput, ClinicaUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ClinicaCreateOrConnectWithoutEnderecosInput
    upsert?: ClinicaUpsertWithoutEnderecosInput
    connect?: ClinicaWhereUniqueInput
    update?: XOR<XOR<ClinicaUpdateToOneWithWhereWithoutEnderecosInput, ClinicaUpdateWithoutEnderecosInput>, ClinicaUncheckedUpdateWithoutEnderecosInput>
  }

  export type EnderecoUpdateOneRequiredWithoutClinicasNestedInput = {
    create?: XOR<EnderecoCreateWithoutClinicasInput, EnderecoUncheckedCreateWithoutClinicasInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutClinicasInput
    upsert?: EnderecoUpsertWithoutClinicasInput
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutClinicasInput, EnderecoUpdateWithoutClinicasInput>, EnderecoUncheckedUpdateWithoutClinicasInput>
  }

  export type PacienteCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<PacienteCreateWithoutAgendamentosInput, PacienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutAgendamentosInput
    connect?: PacienteWhereUniqueInput
  }

  export type ProfissionalCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutAgendamentosInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type HistoricoMedicoCreateNestedManyWithoutConsultaInput = {
    create?: XOR<HistoricoMedicoCreateWithoutConsultaInput, HistoricoMedicoUncheckedCreateWithoutConsultaInput> | HistoricoMedicoCreateWithoutConsultaInput[] | HistoricoMedicoUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutConsultaInput | HistoricoMedicoCreateOrConnectWithoutConsultaInput[]
    createMany?: HistoricoMedicoCreateManyConsultaInputEnvelope
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
  }

  export type HistoricoMedicoUncheckedCreateNestedManyWithoutConsultaInput = {
    create?: XOR<HistoricoMedicoCreateWithoutConsultaInput, HistoricoMedicoUncheckedCreateWithoutConsultaInput> | HistoricoMedicoCreateWithoutConsultaInput[] | HistoricoMedicoUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutConsultaInput | HistoricoMedicoCreateOrConnectWithoutConsultaInput[]
    createMany?: HistoricoMedicoCreateManyConsultaInputEnvelope
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PacienteUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<PacienteCreateWithoutAgendamentosInput, PacienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutAgendamentosInput
    upsert?: PacienteUpsertWithoutAgendamentosInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutAgendamentosInput, PacienteUpdateWithoutAgendamentosInput>, PacienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutAgendamentosInput
    upsert?: ProfissionalUpsertWithoutAgendamentosInput
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutAgendamentosInput, ProfissionalUpdateWithoutAgendamentosInput>, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
  }

  export type HistoricoMedicoUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<HistoricoMedicoCreateWithoutConsultaInput, HistoricoMedicoUncheckedCreateWithoutConsultaInput> | HistoricoMedicoCreateWithoutConsultaInput[] | HistoricoMedicoUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutConsultaInput | HistoricoMedicoCreateOrConnectWithoutConsultaInput[]
    upsert?: HistoricoMedicoUpsertWithWhereUniqueWithoutConsultaInput | HistoricoMedicoUpsertWithWhereUniqueWithoutConsultaInput[]
    createMany?: HistoricoMedicoCreateManyConsultaInputEnvelope
    set?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    disconnect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    delete?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    update?: HistoricoMedicoUpdateWithWhereUniqueWithoutConsultaInput | HistoricoMedicoUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: HistoricoMedicoUpdateManyWithWhereWithoutConsultaInput | HistoricoMedicoUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: HistoricoMedicoScalarWhereInput | HistoricoMedicoScalarWhereInput[]
  }

  export type HistoricoMedicoUncheckedUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<HistoricoMedicoCreateWithoutConsultaInput, HistoricoMedicoUncheckedCreateWithoutConsultaInput> | HistoricoMedicoCreateWithoutConsultaInput[] | HistoricoMedicoUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: HistoricoMedicoCreateOrConnectWithoutConsultaInput | HistoricoMedicoCreateOrConnectWithoutConsultaInput[]
    upsert?: HistoricoMedicoUpsertWithWhereUniqueWithoutConsultaInput | HistoricoMedicoUpsertWithWhereUniqueWithoutConsultaInput[]
    createMany?: HistoricoMedicoCreateManyConsultaInputEnvelope
    set?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    disconnect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    delete?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    connect?: HistoricoMedicoWhereUniqueInput | HistoricoMedicoWhereUniqueInput[]
    update?: HistoricoMedicoUpdateWithWhereUniqueWithoutConsultaInput | HistoricoMedicoUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: HistoricoMedicoUpdateManyWithWhereWithoutConsultaInput | HistoricoMedicoUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: HistoricoMedicoScalarWhereInput | HistoricoMedicoScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutHistoricoMedicoInput = {
    create?: XOR<PacienteCreateWithoutHistoricoMedicoInput, PacienteUncheckedCreateWithoutHistoricoMedicoInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutHistoricoMedicoInput
    connect?: PacienteWhereUniqueInput
  }

  export type ProfissionalCreateNestedOneWithoutHistoricoMedicoInput = {
    create?: XOR<ProfissionalCreateWithoutHistoricoMedicoInput, ProfissionalUncheckedCreateWithoutHistoricoMedicoInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutHistoricoMedicoInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type ConsultaCreateNestedOneWithoutHistoricoMedicoInput = {
    create?: XOR<ConsultaCreateWithoutHistoricoMedicoInput, ConsultaUncheckedCreateWithoutHistoricoMedicoInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutHistoricoMedicoInput
    connect?: ConsultaWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutHistoricoMedicoNestedInput = {
    create?: XOR<PacienteCreateWithoutHistoricoMedicoInput, PacienteUncheckedCreateWithoutHistoricoMedicoInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutHistoricoMedicoInput
    upsert?: PacienteUpsertWithoutHistoricoMedicoInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutHistoricoMedicoInput, PacienteUpdateWithoutHistoricoMedicoInput>, PacienteUncheckedUpdateWithoutHistoricoMedicoInput>
  }

  export type ProfissionalUpdateOneRequiredWithoutHistoricoMedicoNestedInput = {
    create?: XOR<ProfissionalCreateWithoutHistoricoMedicoInput, ProfissionalUncheckedCreateWithoutHistoricoMedicoInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutHistoricoMedicoInput
    upsert?: ProfissionalUpsertWithoutHistoricoMedicoInput
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutHistoricoMedicoInput, ProfissionalUpdateWithoutHistoricoMedicoInput>, ProfissionalUncheckedUpdateWithoutHistoricoMedicoInput>
  }

  export type ConsultaUpdateOneRequiredWithoutHistoricoMedicoNestedInput = {
    create?: XOR<ConsultaCreateWithoutHistoricoMedicoInput, ConsultaUncheckedCreateWithoutHistoricoMedicoInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutHistoricoMedicoInput
    upsert?: ConsultaUpsertWithoutHistoricoMedicoInput
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutHistoricoMedicoInput, ConsultaUpdateWithoutHistoricoMedicoInput>, ConsultaUncheckedUpdateWithoutHistoricoMedicoInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTipoRegistroFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRegistro | EnumTipoRegistroFieldRefInput<$PrismaModel>
    in?: $Enums.TipoRegistro[] | ListEnumTipoRegistroFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoRegistro[] | ListEnumTipoRegistroFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoRegistroFilter<$PrismaModel> | $Enums.TipoRegistro
  }

  export type NestedEnumTipoRegistroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoRegistro | EnumTipoRegistroFieldRefInput<$PrismaModel>
    in?: $Enums.TipoRegistro[] | ListEnumTipoRegistroFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoRegistro[] | ListEnumTipoRegistroFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoRegistroWithAggregatesFilter<$PrismaModel> | $Enums.TipoRegistro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoRegistroFilter<$PrismaModel>
    _max?: NestedEnumTipoRegistroFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutPacienteInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    profissional?: ProfissionalCreateNestedOneWithoutUsuariosInput
    enderecos?: EnderecoUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPacienteInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    profissionalId?: string | null
    enderecos?: EnderecoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPacienteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
  }

  export type UsuarioCreateManyPacienteInputEnvelope = {
    data: UsuarioCreateManyPacienteInput | UsuarioCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ConsultaCreateWithoutPacienteInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutPacienteInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    profissionalId: string
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaCreateManyPacienteInputEnvelope = {
    data: ConsultaCreateManyPacienteInput | ConsultaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoMedicoCreateWithoutPacienteInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    profissional: ProfissionalCreateNestedOneWithoutHistoricoMedicoInput
    consulta: ConsultaCreateNestedOneWithoutHistoricoMedicoInput
  }

  export type HistoricoMedicoUncheckedCreateWithoutPacienteInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    profissionalId: string
    consultaId: string
  }

  export type HistoricoMedicoCreateOrConnectWithoutPacienteInput = {
    where: HistoricoMedicoWhereUniqueInput
    create: XOR<HistoricoMedicoCreateWithoutPacienteInput, HistoricoMedicoUncheckedCreateWithoutPacienteInput>
  }

  export type HistoricoMedicoCreateManyPacienteInputEnvelope = {
    data: HistoricoMedicoCreateManyPacienteInput | HistoricoMedicoCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutPacienteInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutPacienteInput, UsuarioUncheckedUpdateWithoutPacienteInput>
    create: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutPacienteInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutPacienteInput, UsuarioUncheckedUpdateWithoutPacienteInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutPacienteInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutPacienteInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: UuidFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    avatar?: StringNullableFilter<"Usuario"> | string | null
    genero?: StringFilter<"Usuario"> | string
    profissionalId?: UuidNullableFilter<"Usuario"> | string | null
    pacienteId?: UuidNullableFilter<"Usuario"> | string | null
  }

  export type ConsultaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutPacienteInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ConsultaScalarWhereInput = {
    AND?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    OR?: ConsultaScalarWhereInput[]
    NOT?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    id?: UuidFilter<"Consulta"> | string
    data?: DateTimeFilter<"Consulta"> | Date | string
    horaInicio?: DateTimeFilter<"Consulta"> | Date | string
    horaFim?: DateTimeFilter<"Consulta"> | Date | string
    turno?: StringFilter<"Consulta"> | string
    tipoConsulta?: StringFilter<"Consulta"> | string
    observacao?: StringNullableFilter<"Consulta"> | string | null
    motivo?: StringFilter<"Consulta"> | string
    avaliacao?: StringNullableFilter<"Consulta"> | string | null
    valor?: FloatNullableFilter<"Consulta"> | number | null
    status?: StringFilter<"Consulta"> | string
    pacienteId?: UuidFilter<"Consulta"> | string
    profissionalId?: UuidFilter<"Consulta"> | string
  }

  export type HistoricoMedicoUpsertWithWhereUniqueWithoutPacienteInput = {
    where: HistoricoMedicoWhereUniqueInput
    update: XOR<HistoricoMedicoUpdateWithoutPacienteInput, HistoricoMedicoUncheckedUpdateWithoutPacienteInput>
    create: XOR<HistoricoMedicoCreateWithoutPacienteInput, HistoricoMedicoUncheckedCreateWithoutPacienteInput>
  }

  export type HistoricoMedicoUpdateWithWhereUniqueWithoutPacienteInput = {
    where: HistoricoMedicoWhereUniqueInput
    data: XOR<HistoricoMedicoUpdateWithoutPacienteInput, HistoricoMedicoUncheckedUpdateWithoutPacienteInput>
  }

  export type HistoricoMedicoUpdateManyWithWhereWithoutPacienteInput = {
    where: HistoricoMedicoScalarWhereInput
    data: XOR<HistoricoMedicoUpdateManyMutationInput, HistoricoMedicoUncheckedUpdateManyWithoutPacienteInput>
  }

  export type HistoricoMedicoScalarWhereInput = {
    AND?: HistoricoMedicoScalarWhereInput | HistoricoMedicoScalarWhereInput[]
    OR?: HistoricoMedicoScalarWhereInput[]
    NOT?: HistoricoMedicoScalarWhereInput | HistoricoMedicoScalarWhereInput[]
    id?: UuidFilter<"HistoricoMedico"> | string
    data?: DateTimeFilter<"HistoricoMedico"> | Date | string
    tipoRegistro?: StringFilter<"HistoricoMedico"> | string
    diagnostico?: StringFilter<"HistoricoMedico"> | string
    sintomas?: StringFilter<"HistoricoMedico"> | string
    tratamentoPrescrito?: StringFilter<"HistoricoMedico"> | string
    medicamentos?: StringFilter<"HistoricoMedico"> | string
    resultadosExames?: StringFilter<"HistoricoMedico"> | string
    observacoes?: StringFilter<"HistoricoMedico"> | string
    alergias?: StringFilter<"HistoricoMedico"> | string
    antecedentesFamiliares?: StringFilter<"HistoricoMedico"> | string
    status?: StringFilter<"HistoricoMedico"> | string
    pacienteId?: UuidFilter<"HistoricoMedico"> | string
    profissionalId?: UuidFilter<"HistoricoMedico"> | string
    consultaId?: UuidFilter<"HistoricoMedico"> | string
  }

  export type UsuarioCreateWithoutProfissionalInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    paciente?: PacienteCreateNestedOneWithoutUsuariosInput
    enderecos?: EnderecoUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProfissionalInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    pacienteId?: string | null
    enderecos?: EnderecoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProfissionalInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput>
  }

  export type UsuarioCreateManyProfissionalInputEnvelope = {
    data: UsuarioCreateManyProfissionalInput | UsuarioCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type ConsultaCreateWithoutProfissionalInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    paciente: PacienteCreateNestedOneWithoutAgendamentosInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutProfissionalInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    pacienteId: string
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutProfissionalInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutProfissionalInput, ConsultaUncheckedCreateWithoutProfissionalInput>
  }

  export type ConsultaCreateManyProfissionalInputEnvelope = {
    data: ConsultaCreateManyProfissionalInput | ConsultaCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoMedicoCreateWithoutProfissionalInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    paciente: PacienteCreateNestedOneWithoutHistoricoMedicoInput
    consulta: ConsultaCreateNestedOneWithoutHistoricoMedicoInput
  }

  export type HistoricoMedicoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    pacienteId: string
    consultaId: string
  }

  export type HistoricoMedicoCreateOrConnectWithoutProfissionalInput = {
    where: HistoricoMedicoWhereUniqueInput
    create: XOR<HistoricoMedicoCreateWithoutProfissionalInput, HistoricoMedicoUncheckedCreateWithoutProfissionalInput>
  }

  export type HistoricoMedicoCreateManyProfissionalInputEnvelope = {
    data: HistoricoMedicoCreateManyProfissionalInput | HistoricoMedicoCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutProfissionalInput, UsuarioUncheckedUpdateWithoutProfissionalInput>
    create: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutProfissionalInput, UsuarioUncheckedUpdateWithoutProfissionalInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutProfissionalInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type ConsultaUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutProfissionalInput, ConsultaUncheckedUpdateWithoutProfissionalInput>
    create: XOR<ConsultaCreateWithoutProfissionalInput, ConsultaUncheckedCreateWithoutProfissionalInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutProfissionalInput, ConsultaUncheckedUpdateWithoutProfissionalInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutProfissionalInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type HistoricoMedicoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: HistoricoMedicoWhereUniqueInput
    update: XOR<HistoricoMedicoUpdateWithoutProfissionalInput, HistoricoMedicoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<HistoricoMedicoCreateWithoutProfissionalInput, HistoricoMedicoUncheckedCreateWithoutProfissionalInput>
  }

  export type HistoricoMedicoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: HistoricoMedicoWhereUniqueInput
    data: XOR<HistoricoMedicoUpdateWithoutProfissionalInput, HistoricoMedicoUncheckedUpdateWithoutProfissionalInput>
  }

  export type HistoricoMedicoUpdateManyWithWhereWithoutProfissionalInput = {
    where: HistoricoMedicoScalarWhereInput
    data: XOR<HistoricoMedicoUpdateManyMutationInput, HistoricoMedicoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type ProfissionalCreateWithoutUsuariosInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    agendamentos?: ConsultaCreateNestedManyWithoutProfissionalInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutUsuariosInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    agendamentos?: ConsultaUncheckedCreateNestedManyWithoutProfissionalInput
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutUsuariosInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutUsuariosInput, ProfissionalUncheckedCreateWithoutUsuariosInput>
  }

  export type PacienteCreateWithoutUsuariosInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
    agendamentos?: ConsultaCreateNestedManyWithoutPacienteInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutUsuariosInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
    agendamentos?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutUsuariosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutUsuariosInput, PacienteUncheckedCreateWithoutUsuariosInput>
  }

  export type EnderecoUsuarioCreateWithoutUsuarioInput = {
    id?: string
    endereco: EnderecoCreateNestedOneWithoutUsuariosInput
  }

  export type EnderecoUsuarioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    enderecoId: string
  }

  export type EnderecoUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: EnderecoUsuarioWhereUniqueInput
    create: XOR<EnderecoUsuarioCreateWithoutUsuarioInput, EnderecoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type EnderecoUsuarioCreateManyUsuarioInputEnvelope = {
    data: EnderecoUsuarioCreateManyUsuarioInput | EnderecoUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProfissionalUpsertWithoutUsuariosInput = {
    update: XOR<ProfissionalUpdateWithoutUsuariosInput, ProfissionalUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ProfissionalCreateWithoutUsuariosInput, ProfissionalUncheckedCreateWithoutUsuariosInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutUsuariosInput, ProfissionalUncheckedUpdateWithoutUsuariosInput>
  }

  export type ProfissionalUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    agendamentos?: ConsultaUpdateManyWithoutProfissionalNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    agendamentos?: ConsultaUncheckedUpdateManyWithoutProfissionalNestedInput
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type PacienteUpsertWithoutUsuariosInput = {
    update: XOR<PacienteUpdateWithoutUsuariosInput, PacienteUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PacienteCreateWithoutUsuariosInput, PacienteUncheckedCreateWithoutUsuariosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutUsuariosInput, PacienteUncheckedUpdateWithoutUsuariosInput>
  }

  export type PacienteUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    agendamentos?: ConsultaUpdateManyWithoutPacienteNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    agendamentos?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type EnderecoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EnderecoUsuarioWhereUniqueInput
    update: XOR<EnderecoUsuarioUpdateWithoutUsuarioInput, EnderecoUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EnderecoUsuarioCreateWithoutUsuarioInput, EnderecoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type EnderecoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EnderecoUsuarioWhereUniqueInput
    data: XOR<EnderecoUsuarioUpdateWithoutUsuarioInput, EnderecoUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type EnderecoUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: EnderecoUsuarioScalarWhereInput
    data: XOR<EnderecoUsuarioUpdateManyMutationInput, EnderecoUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EnderecoUsuarioScalarWhereInput = {
    AND?: EnderecoUsuarioScalarWhereInput | EnderecoUsuarioScalarWhereInput[]
    OR?: EnderecoUsuarioScalarWhereInput[]
    NOT?: EnderecoUsuarioScalarWhereInput | EnderecoUsuarioScalarWhereInput[]
    id?: UuidFilter<"EnderecoUsuario"> | string
    usuarioId?: UuidFilter<"EnderecoUsuario"> | string
    enderecoId?: UuidFilter<"EnderecoUsuario"> | string
  }

  export type EnderecoClinicaCreateWithoutClinicaInput = {
    id?: string
    endereco: EnderecoCreateNestedOneWithoutClinicasInput
  }

  export type EnderecoClinicaUncheckedCreateWithoutClinicaInput = {
    id?: string
    enderecoId: string
  }

  export type EnderecoClinicaCreateOrConnectWithoutClinicaInput = {
    where: EnderecoClinicaWhereUniqueInput
    create: XOR<EnderecoClinicaCreateWithoutClinicaInput, EnderecoClinicaUncheckedCreateWithoutClinicaInput>
  }

  export type EnderecoClinicaCreateManyClinicaInputEnvelope = {
    data: EnderecoClinicaCreateManyClinicaInput | EnderecoClinicaCreateManyClinicaInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoClinicaUpsertWithWhereUniqueWithoutClinicaInput = {
    where: EnderecoClinicaWhereUniqueInput
    update: XOR<EnderecoClinicaUpdateWithoutClinicaInput, EnderecoClinicaUncheckedUpdateWithoutClinicaInput>
    create: XOR<EnderecoClinicaCreateWithoutClinicaInput, EnderecoClinicaUncheckedCreateWithoutClinicaInput>
  }

  export type EnderecoClinicaUpdateWithWhereUniqueWithoutClinicaInput = {
    where: EnderecoClinicaWhereUniqueInput
    data: XOR<EnderecoClinicaUpdateWithoutClinicaInput, EnderecoClinicaUncheckedUpdateWithoutClinicaInput>
  }

  export type EnderecoClinicaUpdateManyWithWhereWithoutClinicaInput = {
    where: EnderecoClinicaScalarWhereInput
    data: XOR<EnderecoClinicaUpdateManyMutationInput, EnderecoClinicaUncheckedUpdateManyWithoutClinicaInput>
  }

  export type EnderecoClinicaScalarWhereInput = {
    AND?: EnderecoClinicaScalarWhereInput | EnderecoClinicaScalarWhereInput[]
    OR?: EnderecoClinicaScalarWhereInput[]
    NOT?: EnderecoClinicaScalarWhereInput | EnderecoClinicaScalarWhereInput[]
    id?: UuidFilter<"EnderecoClinica"> | string
    clinicaId?: UuidFilter<"EnderecoClinica"> | string
    enderecoId?: UuidFilter<"EnderecoClinica"> | string
  }

  export type DisponibilidadeCreateWithoutDiaSemanaInput = {
    id?: string
    horaInicio: Date | string
    horaFim: Date | string
  }

  export type DisponibilidadeUncheckedCreateWithoutDiaSemanaInput = {
    id?: string
    horaInicio: Date | string
    horaFim: Date | string
  }

  export type DisponibilidadeCreateOrConnectWithoutDiaSemanaInput = {
    where: DisponibilidadeWhereUniqueInput
    create: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput>
  }

  export type DisponibilidadeCreateManyDiaSemanaInputEnvelope = {
    data: DisponibilidadeCreateManyDiaSemanaInput | DisponibilidadeCreateManyDiaSemanaInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilidadeUpsertWithWhereUniqueWithoutDiaSemanaInput = {
    where: DisponibilidadeWhereUniqueInput
    update: XOR<DisponibilidadeUpdateWithoutDiaSemanaInput, DisponibilidadeUncheckedUpdateWithoutDiaSemanaInput>
    create: XOR<DisponibilidadeCreateWithoutDiaSemanaInput, DisponibilidadeUncheckedCreateWithoutDiaSemanaInput>
  }

  export type DisponibilidadeUpdateWithWhereUniqueWithoutDiaSemanaInput = {
    where: DisponibilidadeWhereUniqueInput
    data: XOR<DisponibilidadeUpdateWithoutDiaSemanaInput, DisponibilidadeUncheckedUpdateWithoutDiaSemanaInput>
  }

  export type DisponibilidadeUpdateManyWithWhereWithoutDiaSemanaInput = {
    where: DisponibilidadeScalarWhereInput
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaInput>
  }

  export type DisponibilidadeScalarWhereInput = {
    AND?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
    OR?: DisponibilidadeScalarWhereInput[]
    NOT?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
    id?: UuidFilter<"Disponibilidade"> | string
    diaSemanaId?: UuidFilter<"Disponibilidade"> | string
    horaInicio?: DateTimeFilter<"Disponibilidade"> | Date | string
    horaFim?: DateTimeFilter<"Disponibilidade"> | Date | string
  }

  export type DiaSemanaCreateWithoutDisponibilidadeInput = {
    id?: string
    dia: string
  }

  export type DiaSemanaUncheckedCreateWithoutDisponibilidadeInput = {
    id?: string
    dia: string
  }

  export type DiaSemanaCreateOrConnectWithoutDisponibilidadeInput = {
    where: DiaSemanaWhereUniqueInput
    create: XOR<DiaSemanaCreateWithoutDisponibilidadeInput, DiaSemanaUncheckedCreateWithoutDisponibilidadeInput>
  }

  export type DiaSemanaUpsertWithoutDisponibilidadeInput = {
    update: XOR<DiaSemanaUpdateWithoutDisponibilidadeInput, DiaSemanaUncheckedUpdateWithoutDisponibilidadeInput>
    create: XOR<DiaSemanaCreateWithoutDisponibilidadeInput, DiaSemanaUncheckedCreateWithoutDisponibilidadeInput>
    where?: DiaSemanaWhereInput
  }

  export type DiaSemanaUpdateToOneWithWhereWithoutDisponibilidadeInput = {
    where?: DiaSemanaWhereInput
    data: XOR<DiaSemanaUpdateWithoutDisponibilidadeInput, DiaSemanaUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type DiaSemanaUpdateWithoutDisponibilidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
  }

  export type DiaSemanaUncheckedUpdateWithoutDisponibilidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUsuarioCreateWithoutEnderecoInput = {
    id?: string
    usuario: UsuarioCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUsuarioUncheckedCreateWithoutEnderecoInput = {
    id?: string
    usuarioId: string
  }

  export type EnderecoUsuarioCreateOrConnectWithoutEnderecoInput = {
    where: EnderecoUsuarioWhereUniqueInput
    create: XOR<EnderecoUsuarioCreateWithoutEnderecoInput, EnderecoUsuarioUncheckedCreateWithoutEnderecoInput>
  }

  export type EnderecoUsuarioCreateManyEnderecoInputEnvelope = {
    data: EnderecoUsuarioCreateManyEnderecoInput | EnderecoUsuarioCreateManyEnderecoInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoClinicaCreateWithoutEnderecoInput = {
    id?: string
    clinica: ClinicaCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoClinicaUncheckedCreateWithoutEnderecoInput = {
    id?: string
    clinicaId: string
  }

  export type EnderecoClinicaCreateOrConnectWithoutEnderecoInput = {
    where: EnderecoClinicaWhereUniqueInput
    create: XOR<EnderecoClinicaCreateWithoutEnderecoInput, EnderecoClinicaUncheckedCreateWithoutEnderecoInput>
  }

  export type EnderecoClinicaCreateManyEnderecoInputEnvelope = {
    data: EnderecoClinicaCreateManyEnderecoInput | EnderecoClinicaCreateManyEnderecoInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoUsuarioUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: EnderecoUsuarioWhereUniqueInput
    update: XOR<EnderecoUsuarioUpdateWithoutEnderecoInput, EnderecoUsuarioUncheckedUpdateWithoutEnderecoInput>
    create: XOR<EnderecoUsuarioCreateWithoutEnderecoInput, EnderecoUsuarioUncheckedCreateWithoutEnderecoInput>
  }

  export type EnderecoUsuarioUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: EnderecoUsuarioWhereUniqueInput
    data: XOR<EnderecoUsuarioUpdateWithoutEnderecoInput, EnderecoUsuarioUncheckedUpdateWithoutEnderecoInput>
  }

  export type EnderecoUsuarioUpdateManyWithWhereWithoutEnderecoInput = {
    where: EnderecoUsuarioScalarWhereInput
    data: XOR<EnderecoUsuarioUpdateManyMutationInput, EnderecoUsuarioUncheckedUpdateManyWithoutEnderecoInput>
  }

  export type EnderecoClinicaUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: EnderecoClinicaWhereUniqueInput
    update: XOR<EnderecoClinicaUpdateWithoutEnderecoInput, EnderecoClinicaUncheckedUpdateWithoutEnderecoInput>
    create: XOR<EnderecoClinicaCreateWithoutEnderecoInput, EnderecoClinicaUncheckedCreateWithoutEnderecoInput>
  }

  export type EnderecoClinicaUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: EnderecoClinicaWhereUniqueInput
    data: XOR<EnderecoClinicaUpdateWithoutEnderecoInput, EnderecoClinicaUncheckedUpdateWithoutEnderecoInput>
  }

  export type EnderecoClinicaUpdateManyWithWhereWithoutEnderecoInput = {
    where: EnderecoClinicaScalarWhereInput
    data: XOR<EnderecoClinicaUpdateManyMutationInput, EnderecoClinicaUncheckedUpdateManyWithoutEnderecoInput>
  }

  export type UsuarioCreateWithoutEnderecosInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    profissional?: ProfissionalCreateNestedOneWithoutUsuariosInput
    paciente?: PacienteCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutEnderecosInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    profissionalId?: string | null
    pacienteId?: string | null
  }

  export type UsuarioCreateOrConnectWithoutEnderecosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEnderecosInput, UsuarioUncheckedCreateWithoutEnderecosInput>
  }

  export type EnderecoCreateWithoutUsuariosInput = {
    id?: string
    rua: string
    bairro: string
    cep: string
    complemento: string
    estado: string
    cidade: string
    numero: string
    clinicas?: EnderecoClinicaCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateWithoutUsuariosInput = {
    id?: string
    rua: string
    bairro: string
    cep: string
    complemento: string
    estado: string
    cidade: string
    numero: string
    clinicas?: EnderecoClinicaUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoCreateOrConnectWithoutUsuariosInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutUsuariosInput, EnderecoUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutEnderecosInput = {
    update: XOR<UsuarioUpdateWithoutEnderecosInput, UsuarioUncheckedUpdateWithoutEnderecosInput>
    create: XOR<UsuarioCreateWithoutEnderecosInput, UsuarioUncheckedCreateWithoutEnderecosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEnderecosInput, UsuarioUncheckedUpdateWithoutEnderecosInput>
  }

  export type UsuarioUpdateWithoutEnderecosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalUpdateOneWithoutUsuariosNestedInput
    paciente?: PacienteUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEnderecosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    pacienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUpsertWithoutUsuariosInput = {
    update: XOR<EnderecoUpdateWithoutUsuariosInput, EnderecoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<EnderecoCreateWithoutUsuariosInput, EnderecoUncheckedCreateWithoutUsuariosInput>
    where?: EnderecoWhereInput
  }

  export type EnderecoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: EnderecoWhereInput
    data: XOR<EnderecoUpdateWithoutUsuariosInput, EnderecoUncheckedUpdateWithoutUsuariosInput>
  }

  export type EnderecoUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    clinicas?: EnderecoClinicaUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    clinicas?: EnderecoClinicaUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type ClinicaCreateWithoutEnderecosInput = {
    id?: string
    nomeFantasia: string
    razaoSocial: string
    cnpj: string
    inscricaoEstadual: string
    telefone: string
    tipoAtendimento: string
  }

  export type ClinicaUncheckedCreateWithoutEnderecosInput = {
    id?: string
    nomeFantasia: string
    razaoSocial: string
    cnpj: string
    inscricaoEstadual: string
    telefone: string
    tipoAtendimento: string
  }

  export type ClinicaCreateOrConnectWithoutEnderecosInput = {
    where: ClinicaWhereUniqueInput
    create: XOR<ClinicaCreateWithoutEnderecosInput, ClinicaUncheckedCreateWithoutEnderecosInput>
  }

  export type EnderecoCreateWithoutClinicasInput = {
    id?: string
    rua: string
    bairro: string
    cep: string
    complemento: string
    estado: string
    cidade: string
    numero: string
    usuarios?: EnderecoUsuarioCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateWithoutClinicasInput = {
    id?: string
    rua: string
    bairro: string
    cep: string
    complemento: string
    estado: string
    cidade: string
    numero: string
    usuarios?: EnderecoUsuarioUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoCreateOrConnectWithoutClinicasInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutClinicasInput, EnderecoUncheckedCreateWithoutClinicasInput>
  }

  export type ClinicaUpsertWithoutEnderecosInput = {
    update: XOR<ClinicaUpdateWithoutEnderecosInput, ClinicaUncheckedUpdateWithoutEnderecosInput>
    create: XOR<ClinicaCreateWithoutEnderecosInput, ClinicaUncheckedCreateWithoutEnderecosInput>
    where?: ClinicaWhereInput
  }

  export type ClinicaUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: ClinicaWhereInput
    data: XOR<ClinicaUpdateWithoutEnderecosInput, ClinicaUncheckedUpdateWithoutEnderecosInput>
  }

  export type ClinicaUpdateWithoutEnderecosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
  }

  export type ClinicaUncheckedUpdateWithoutEnderecosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricaoEstadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    tipoAtendimento?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUpsertWithoutClinicasInput = {
    update: XOR<EnderecoUpdateWithoutClinicasInput, EnderecoUncheckedUpdateWithoutClinicasInput>
    create: XOR<EnderecoCreateWithoutClinicasInput, EnderecoUncheckedCreateWithoutClinicasInput>
    where?: EnderecoWhereInput
  }

  export type EnderecoUpdateToOneWithWhereWithoutClinicasInput = {
    where?: EnderecoWhereInput
    data: XOR<EnderecoUpdateWithoutClinicasInput, EnderecoUncheckedUpdateWithoutClinicasInput>
  }

  export type EnderecoUpdateWithoutClinicasInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    usuarios?: EnderecoUsuarioUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutClinicasInput = {
    id?: StringFieldUpdateOperationsInput | string
    rua?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    usuarios?: EnderecoUsuarioUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type PacienteCreateWithoutAgendamentosInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
    usuarios?: UsuarioCreateNestedManyWithoutPacienteInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPacienteInput
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutAgendamentosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutAgendamentosInput, PacienteUncheckedCreateWithoutAgendamentosInput>
  }

  export type ProfissionalCreateWithoutAgendamentosInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    usuarios?: UsuarioCreateNestedManyWithoutProfissionalInput
    HistoricoMedico?: HistoricoMedicoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutProfissionalInput
    HistoricoMedico?: HistoricoMedicoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutAgendamentosInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
  }

  export type HistoricoMedicoCreateWithoutConsultaInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    paciente: PacienteCreateNestedOneWithoutHistoricoMedicoInput
    profissional: ProfissionalCreateNestedOneWithoutHistoricoMedicoInput
  }

  export type HistoricoMedicoUncheckedCreateWithoutConsultaInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    pacienteId: string
    profissionalId: string
  }

  export type HistoricoMedicoCreateOrConnectWithoutConsultaInput = {
    where: HistoricoMedicoWhereUniqueInput
    create: XOR<HistoricoMedicoCreateWithoutConsultaInput, HistoricoMedicoUncheckedCreateWithoutConsultaInput>
  }

  export type HistoricoMedicoCreateManyConsultaInputEnvelope = {
    data: HistoricoMedicoCreateManyConsultaInput | HistoricoMedicoCreateManyConsultaInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithoutAgendamentosInput = {
    update: XOR<PacienteUpdateWithoutAgendamentosInput, PacienteUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<PacienteCreateWithoutAgendamentosInput, PacienteUncheckedCreateWithoutAgendamentosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutAgendamentosInput, PacienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type PacienteUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    usuarios?: UsuarioUpdateManyWithoutPacienteNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    usuarios?: UsuarioUncheckedUpdateManyWithoutPacienteNestedInput
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type ProfissionalUpsertWithoutAgendamentosInput = {
    update: XOR<ProfissionalUpdateWithoutAgendamentosInput, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutAgendamentosInput, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ProfissionalUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutProfissionalNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutProfissionalNestedInput
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type HistoricoMedicoUpsertWithWhereUniqueWithoutConsultaInput = {
    where: HistoricoMedicoWhereUniqueInput
    update: XOR<HistoricoMedicoUpdateWithoutConsultaInput, HistoricoMedicoUncheckedUpdateWithoutConsultaInput>
    create: XOR<HistoricoMedicoCreateWithoutConsultaInput, HistoricoMedicoUncheckedCreateWithoutConsultaInput>
  }

  export type HistoricoMedicoUpdateWithWhereUniqueWithoutConsultaInput = {
    where: HistoricoMedicoWhereUniqueInput
    data: XOR<HistoricoMedicoUpdateWithoutConsultaInput, HistoricoMedicoUncheckedUpdateWithoutConsultaInput>
  }

  export type HistoricoMedicoUpdateManyWithWhereWithoutConsultaInput = {
    where: HistoricoMedicoScalarWhereInput
    data: XOR<HistoricoMedicoUpdateManyMutationInput, HistoricoMedicoUncheckedUpdateManyWithoutConsultaInput>
  }

  export type PacienteCreateWithoutHistoricoMedicoInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
    usuarios?: UsuarioCreateNestedManyWithoutPacienteInput
    agendamentos?: ConsultaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutHistoricoMedicoInput = {
    id?: string
    dataNascimento: Date | string
    peso: number
    altura: number
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPacienteInput
    agendamentos?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutHistoricoMedicoInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutHistoricoMedicoInput, PacienteUncheckedCreateWithoutHistoricoMedicoInput>
  }

  export type ProfissionalCreateWithoutHistoricoMedicoInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    usuarios?: UsuarioCreateNestedManyWithoutProfissionalInput
    agendamentos?: ConsultaCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutHistoricoMedicoInput = {
    id?: string
    tipoRegistro: $Enums.TipoRegistro
    numeroRegistro: string
    uf: string
    descricao: string
    instituicaoFormadora: string
    tipoProfissional: string
    especialidade: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutProfissionalInput
    agendamentos?: ConsultaUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutHistoricoMedicoInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutHistoricoMedicoInput, ProfissionalUncheckedCreateWithoutHistoricoMedicoInput>
  }

  export type ConsultaCreateWithoutHistoricoMedicoInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    paciente: PacienteCreateNestedOneWithoutAgendamentosInput
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
  }

  export type ConsultaUncheckedCreateWithoutHistoricoMedicoInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    pacienteId: string
    profissionalId: string
  }

  export type ConsultaCreateOrConnectWithoutHistoricoMedicoInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutHistoricoMedicoInput, ConsultaUncheckedCreateWithoutHistoricoMedicoInput>
  }

  export type PacienteUpsertWithoutHistoricoMedicoInput = {
    update: XOR<PacienteUpdateWithoutHistoricoMedicoInput, PacienteUncheckedUpdateWithoutHistoricoMedicoInput>
    create: XOR<PacienteCreateWithoutHistoricoMedicoInput, PacienteUncheckedCreateWithoutHistoricoMedicoInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutHistoricoMedicoInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutHistoricoMedicoInput, PacienteUncheckedUpdateWithoutHistoricoMedicoInput>
  }

  export type PacienteUpdateWithoutHistoricoMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    usuarios?: UsuarioUpdateManyWithoutPacienteNestedInput
    agendamentos?: ConsultaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutHistoricoMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    usuarios?: UsuarioUncheckedUpdateManyWithoutPacienteNestedInput
    agendamentos?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type ProfissionalUpsertWithoutHistoricoMedicoInput = {
    update: XOR<ProfissionalUpdateWithoutHistoricoMedicoInput, ProfissionalUncheckedUpdateWithoutHistoricoMedicoInput>
    create: XOR<ProfissionalCreateWithoutHistoricoMedicoInput, ProfissionalUncheckedCreateWithoutHistoricoMedicoInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutHistoricoMedicoInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutHistoricoMedicoInput, ProfissionalUncheckedUpdateWithoutHistoricoMedicoInput>
  }

  export type ProfissionalUpdateWithoutHistoricoMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutProfissionalNestedInput
    agendamentos?: ConsultaUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutHistoricoMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoRegistro?: EnumTipoRegistroFieldUpdateOperationsInput | $Enums.TipoRegistro
    numeroRegistro?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    instituicaoFormadora?: StringFieldUpdateOperationsInput | string
    tipoProfissional?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutProfissionalNestedInput
    agendamentos?: ConsultaUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ConsultaUpsertWithoutHistoricoMedicoInput = {
    update: XOR<ConsultaUpdateWithoutHistoricoMedicoInput, ConsultaUncheckedUpdateWithoutHistoricoMedicoInput>
    create: XOR<ConsultaCreateWithoutHistoricoMedicoInput, ConsultaUncheckedCreateWithoutHistoricoMedicoInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutHistoricoMedicoInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutHistoricoMedicoInput, ConsultaUncheckedUpdateWithoutHistoricoMedicoInput>
  }

  export type ConsultaUpdateWithoutHistoricoMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutAgendamentosNestedInput
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutHistoricoMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyPacienteInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    profissionalId?: string | null
  }

  export type ConsultaCreateManyPacienteInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    profissionalId: string
  }

  export type HistoricoMedicoCreateManyPacienteInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    profissionalId: string
    consultaId: string
  }

  export type UsuarioUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalUpdateOneWithoutUsuariosNestedInput
    enderecos?: EnderecoUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultaUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalUpdateOneRequiredWithoutHistoricoMedicoNestedInput
    consulta?: ConsultaUpdateOneRequiredWithoutHistoricoMedicoNestedInput
  }

  export type HistoricoMedicoUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    consultaId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    consultaId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyProfissionalInput = {
    id?: string
    nome: string
    email: string
    senha: string
    telefone: string
    avatar?: string | null
    genero: string
    pacienteId?: string | null
  }

  export type ConsultaCreateManyProfissionalInput = {
    id?: string
    data: Date | string
    horaInicio: Date | string
    horaFim: Date | string
    turno: string
    tipoConsulta: string
    observacao?: string | null
    motivo: string
    avaliacao?: string | null
    valor?: number | null
    status: string
    pacienteId: string
  }

  export type HistoricoMedicoCreateManyProfissionalInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    pacienteId: string
    consultaId: string
  }

  export type UsuarioUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneWithoutUsuariosNestedInput
    enderecos?: EnderecoUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    pacienteId?: NullableStringFieldUpdateOperationsInput | string | null
    enderecos?: EnderecoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: StringFieldUpdateOperationsInput | string
    pacienteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultaUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutAgendamentosNestedInput
    HistoricoMedico?: HistoricoMedicoUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    HistoricoMedico?: HistoricoMedicoUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: StringFieldUpdateOperationsInput | string
    tipoConsulta?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    motivo?: StringFieldUpdateOperationsInput | string
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutHistoricoMedicoNestedInput
    consulta?: ConsultaUpdateOneRequiredWithoutHistoricoMedicoNestedInput
  }

  export type HistoricoMedicoUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    consultaId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    consultaId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUsuarioCreateManyUsuarioInput = {
    id?: string
    enderecoId: string
  }

  export type EnderecoUsuarioUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type EnderecoUsuarioUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    enderecoId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    enderecoId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoClinicaCreateManyClinicaInput = {
    id?: string
    enderecoId: string
  }

  export type EnderecoClinicaUpdateWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    endereco?: EnderecoUpdateOneRequiredWithoutClinicasNestedInput
  }

  export type EnderecoClinicaUncheckedUpdateWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    enderecoId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoClinicaUncheckedUpdateManyWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    enderecoId?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateManyDiaSemanaInput = {
    id?: string
    horaInicio: Date | string
    horaFim: Date | string
  }

  export type DisponibilidadeUpdateWithoutDiaSemanaInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilidadeUncheckedUpdateWithoutDiaSemanaInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutDiaSemanaInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoUsuarioCreateManyEnderecoInput = {
    id?: string
    usuarioId: string
  }

  export type EnderecoClinicaCreateManyEnderecoInput = {
    id?: string
    clinicaId: string
  }

  export type EnderecoUsuarioUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutEnderecosNestedInput
  }

  export type EnderecoUsuarioUncheckedUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUsuarioUncheckedUpdateManyWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoClinicaUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinica?: ClinicaUpdateOneRequiredWithoutEnderecosNestedInput
  }

  export type EnderecoClinicaUncheckedUpdateWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoClinicaUncheckedUpdateManyWithoutEnderecoInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoCreateManyConsultaInput = {
    id?: string
    data: Date | string
    tipoRegistro: string
    diagnostico: string
    sintomas: string
    tratamentoPrescrito: string
    medicamentos: string
    resultadosExames: string
    observacoes: string
    alergias: string
    antecedentesFamiliares: string
    status: string
    pacienteId: string
    profissionalId: string
  }

  export type HistoricoMedicoUpdateWithoutConsultaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutHistoricoMedicoNestedInput
    profissional?: ProfissionalUpdateOneRequiredWithoutHistoricoMedicoNestedInput
  }

  export type HistoricoMedicoUncheckedUpdateWithoutConsultaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoricoMedicoUncheckedUpdateManyWithoutConsultaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoRegistro?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: StringFieldUpdateOperationsInput | string
    tratamentoPrescrito?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    resultadosExames?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    antecedentesFamiliares?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
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