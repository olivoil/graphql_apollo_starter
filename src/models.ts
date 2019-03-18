/* tslint:ignore */
// Generated in 2019-03-18T01:58:44-06:00
export type Maybe<T> = T | null;

export enum IRole {
  Admin = "ADMIN",
  User = "USER"
}

// ====================================================
// Types
// ====================================================

export interface IQuery {
  session?: Maybe<ISession>;

  me?: Maybe<IUser>;

  user?: Maybe<IUser>;
}

export interface ISession {
  authToken: string;

  systemKey: string;

  systemSecret: string;
}

export interface IUser {
  id: string;

  email: string;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  avatar?: Maybe<string>;

  roles?: Maybe<IRole[]>;
}

export interface IMutation {
  login?: Maybe<ISession>;

  register?: Maybe<ISession>;

  logout?: Maybe<boolean>;

  updateUserInfo: IUser;
}

// ====================================================
// Arguments
// ====================================================

export interface ISessionQueryArgs {
  authToken: string;

  systemKey: string;

  systemSecret: string;
}
export interface IUserQueryArgs {
  id: string;
}
export interface ILoginMutationArgs {
  email: string;

  password: string;
}
export interface IRegisterMutationArgs {
  email: string;

  password: string;

  systemKey: string;

  systemSecret: string;
}
export interface ILogoutMutationArgs {
  authToken: string;
}
export interface IUpdateUserInfoMutationArgs {
  id: string;

  email?: Maybe<string>;

  name?: Maybe<string>;

  avatar?: Maybe<string>;
}

import { GraphQLResolveInfo } from "graphql";

import { IContext } from "./context";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = {}> {
    session?: SessionResolver<Maybe<ISession>, TypeParent, TContext>;

    me?: MeResolver<Maybe<IUser>, TypeParent, TContext>;

    user?: UserResolver<Maybe<IUser>, TypeParent, TContext>;
  }

  export type SessionResolver<
    R = Maybe<ISession>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, SessionArgs>;
  export interface SessionArgs {
    authToken: string;

    systemKey: string;

    systemSecret: string;
  }

  export type MeResolver<
    R = Maybe<IUser>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UserResolver<
    R = Maybe<IUser>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, UserArgs>;
  export interface UserArgs {
    id: string;
  }
}

export namespace SessionResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = ISession> {
    authToken?: AuthTokenResolver<string, TypeParent, TContext>;

    systemKey?: SystemKeyResolver<string, TypeParent, TContext>;

    systemSecret?: SystemSecretResolver<string, TypeParent, TContext>;
  }

  export type AuthTokenResolver<
    R = string,
    Parent = ISession,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type SystemKeyResolver<
    R = string,
    Parent = ISession,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type SystemSecretResolver<
    R = string,
    Parent = ISession,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace UserResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = IUser> {
    id?: IdResolver<string, TypeParent, TContext>;

    email?: EmailResolver<string, TypeParent, TContext>;

    firstName?: FirstNameResolver<Maybe<string>, TypeParent, TContext>;

    lastName?: LastNameResolver<Maybe<string>, TypeParent, TContext>;

    avatar?: AvatarResolver<Maybe<string>, TypeParent, TContext>;

    roles?: RolesResolver<Maybe<IRole[]>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = IUser,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type EmailResolver<
    R = string,
    Parent = IUser,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type FirstNameResolver<
    R = Maybe<string>,
    Parent = IUser,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LastNameResolver<
    R = Maybe<string>,
    Parent = IUser,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type AvatarResolver<
    R = Maybe<string>,
    Parent = IUser,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type RolesResolver<
    R = Maybe<IRole[]>,
    Parent = IUser,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace MutationResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = {}> {
    login?: LoginResolver<Maybe<ISession>, TypeParent, TContext>;

    register?: RegisterResolver<Maybe<ISession>, TypeParent, TContext>;

    logout?: LogoutResolver<Maybe<boolean>, TypeParent, TContext>;

    updateUserInfo?: UpdateUserInfoResolver<IUser, TypeParent, TContext>;
  }

  export type LoginResolver<
    R = Maybe<ISession>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, LoginArgs>;
  export interface LoginArgs {
    email: string;

    password: string;
  }

  export type RegisterResolver<
    R = Maybe<ISession>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, RegisterArgs>;
  export interface RegisterArgs {
    email: string;

    password: string;

    systemKey: string;

    systemSecret: string;
  }

  export type LogoutResolver<
    R = Maybe<boolean>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, LogoutArgs>;
  export interface LogoutArgs {
    authToken: string;
  }

  export type UpdateUserInfoResolver<
    R = IUser,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, UpdateUserInfoArgs>;
  export interface UpdateUserInfoArgs {
    id: string;

    email?: Maybe<string>;

    name?: Maybe<string>;

    avatar?: Maybe<string>;
  }
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  IContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  IContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  IContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export type IResolvers<TContext = IContext> = {
  Query?: QueryResolvers.Resolvers<TContext>;
  Session?: SessionResolvers.Resolvers<TContext>;
  User?: UserResolvers.Resolvers<TContext>;
  Mutation?: MutationResolvers.Resolvers<TContext>;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };
