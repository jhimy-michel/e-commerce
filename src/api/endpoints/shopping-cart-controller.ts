/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Ecommerce API
 * API for e commerce App
 * OpenAPI spec version: 0.0.1
 */
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  LoopbackCount,
  ShoppingCartControllerCountParams,
  ShoppingCart,
  ShoppingCartPartial,
  ShoppingCartWithRelations,
  ShoppingCartControllerFindByIdParams,
  NewShoppingCart,
  ShoppingCartControllerUpdateAllParams,
  ShoppingCartControllerFindParams
} from './ecommerceApi.schemas'
import { customInstance } from '../mutator/custom-instance'
import type { ErrorType } from '../mutator/custom-instance'



export const shoppingCartControllerCount = (
    params?: ShoppingCartControllerCountParams,
 signal?: AbortSignal
) => {
      return customInstance<LoopbackCount>(
      {url: `/shopping-carts/count`, method: 'get',
        params, signal
    },
      );
    }
  

export const getShoppingCartControllerCountQueryKey = (params?: ShoppingCartControllerCountParams,) => [`/shopping-carts/count`, ...(params ? [params]: [])];

    
export type ShoppingCartControllerCountQueryResult = NonNullable<Awaited<ReturnType<typeof shoppingCartControllerCount>>>
export type ShoppingCartControllerCountQueryError = ErrorType<unknown>

export const useShoppingCartControllerCount = <TData = Awaited<ReturnType<typeof shoppingCartControllerCount>>, TError = ErrorType<unknown>>(
 params?: ShoppingCartControllerCountParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof shoppingCartControllerCount>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getShoppingCartControllerCountQueryKey(params);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof shoppingCartControllerCount>>> = ({ signal }) => shoppingCartControllerCount(params, signal);

  const query = useQuery<Awaited<ReturnType<typeof shoppingCartControllerCount>>, TError, TData>(queryKey, queryFn, queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

export const shoppingCartControllerReplaceById = (
    id: string,
    shoppingCart: ShoppingCart,
 ) => {
      return customInstance<void>(
      {url: `/shopping-carts/${id}`, method: 'put',
      headers: {'Content-Type': 'application/json', },
      data: shoppingCart
    },
      );
    }
  


    export type ShoppingCartControllerReplaceByIdMutationResult = NonNullable<Awaited<ReturnType<typeof shoppingCartControllerReplaceById>>>
    export type ShoppingCartControllerReplaceByIdMutationBody = ShoppingCart
    export type ShoppingCartControllerReplaceByIdMutationError = ErrorType<unknown>

    export const useShoppingCartControllerReplaceById = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof shoppingCartControllerReplaceById>>, TError,{id: string;data: ShoppingCart}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof shoppingCartControllerReplaceById>>, {id: string;data: ShoppingCart}> = (props) => {
          const {id,data} = props ?? {};

          return  shoppingCartControllerReplaceById(id,data,)
        }

      return useMutation<Awaited<ReturnType<typeof shoppingCartControllerReplaceById>>, TError, {id: string;data: ShoppingCart}, TContext>(mutationFn, mutationOptions)
    }
    export const shoppingCartControllerUpdateById = (
    id: string,
    shoppingCartPartial: ShoppingCartPartial,
 ) => {
      return customInstance<void>(
      {url: `/shopping-carts/${id}`, method: 'patch',
      headers: {'Content-Type': 'application/json', },
      data: shoppingCartPartial
    },
      );
    }
  


    export type ShoppingCartControllerUpdateByIdMutationResult = NonNullable<Awaited<ReturnType<typeof shoppingCartControllerUpdateById>>>
    export type ShoppingCartControllerUpdateByIdMutationBody = ShoppingCartPartial
    export type ShoppingCartControllerUpdateByIdMutationError = ErrorType<unknown>

    export const useShoppingCartControllerUpdateById = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof shoppingCartControllerUpdateById>>, TError,{id: string;data: ShoppingCartPartial}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof shoppingCartControllerUpdateById>>, {id: string;data: ShoppingCartPartial}> = (props) => {
          const {id,data} = props ?? {};

          return  shoppingCartControllerUpdateById(id,data,)
        }

      return useMutation<Awaited<ReturnType<typeof shoppingCartControllerUpdateById>>, TError, {id: string;data: ShoppingCartPartial}, TContext>(mutationFn, mutationOptions)
    }
    export const shoppingCartControllerFindById = (
    id: string,
    params?: ShoppingCartControllerFindByIdParams,
 signal?: AbortSignal
) => {
      return customInstance<ShoppingCartWithRelations>(
      {url: `/shopping-carts/${id}`, method: 'get',
        params, signal
    },
      );
    }
  

export const getShoppingCartControllerFindByIdQueryKey = (id: string,
    params?: ShoppingCartControllerFindByIdParams,) => [`/shopping-carts/${id}`, ...(params ? [params]: [])];

    
export type ShoppingCartControllerFindByIdQueryResult = NonNullable<Awaited<ReturnType<typeof shoppingCartControllerFindById>>>
export type ShoppingCartControllerFindByIdQueryError = ErrorType<unknown>

export const useShoppingCartControllerFindById = <TData = Awaited<ReturnType<typeof shoppingCartControllerFindById>>, TError = ErrorType<unknown>>(
 id: string,
    params?: ShoppingCartControllerFindByIdParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof shoppingCartControllerFindById>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getShoppingCartControllerFindByIdQueryKey(id,params);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof shoppingCartControllerFindById>>> = ({ signal }) => shoppingCartControllerFindById(id,params, signal);

  const query = useQuery<Awaited<ReturnType<typeof shoppingCartControllerFindById>>, TError, TData>(queryKey, queryFn, {enabled: !!(id), ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

export const shoppingCartControllerDeleteById = (
    id: string,
 ) => {
      return customInstance<void>(
      {url: `/shopping-carts/${id}`, method: 'delete'
    },
      );
    }
  


    export type ShoppingCartControllerDeleteByIdMutationResult = NonNullable<Awaited<ReturnType<typeof shoppingCartControllerDeleteById>>>
    
    export type ShoppingCartControllerDeleteByIdMutationError = ErrorType<unknown>

    export const useShoppingCartControllerDeleteById = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof shoppingCartControllerDeleteById>>, TError,{id: string}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof shoppingCartControllerDeleteById>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  shoppingCartControllerDeleteById(id,)
        }

      return useMutation<Awaited<ReturnType<typeof shoppingCartControllerDeleteById>>, TError, {id: string}, TContext>(mutationFn, mutationOptions)
    }
    export const shoppingCartControllerCreate = (
    newShoppingCart: NewShoppingCart,
 ) => {
      return customInstance<ShoppingCart>(
      {url: `/shopping-carts`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: newShoppingCart
    },
      );
    }
  


    export type ShoppingCartControllerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof shoppingCartControllerCreate>>>
    export type ShoppingCartControllerCreateMutationBody = NewShoppingCart
    export type ShoppingCartControllerCreateMutationError = ErrorType<unknown>

    export const useShoppingCartControllerCreate = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof shoppingCartControllerCreate>>, TError,{data: NewShoppingCart}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof shoppingCartControllerCreate>>, {data: NewShoppingCart}> = (props) => {
          const {data} = props ?? {};

          return  shoppingCartControllerCreate(data,)
        }

      return useMutation<Awaited<ReturnType<typeof shoppingCartControllerCreate>>, TError, {data: NewShoppingCart}, TContext>(mutationFn, mutationOptions)
    }
    export const shoppingCartControllerUpdateAll = (
    shoppingCartPartial: ShoppingCartPartial,
    params?: ShoppingCartControllerUpdateAllParams,
 ) => {
      return customInstance<LoopbackCount>(
      {url: `/shopping-carts`, method: 'patch',
      headers: {'Content-Type': 'application/json', },
      data: shoppingCartPartial,
        params
    },
      );
    }
  


    export type ShoppingCartControllerUpdateAllMutationResult = NonNullable<Awaited<ReturnType<typeof shoppingCartControllerUpdateAll>>>
    export type ShoppingCartControllerUpdateAllMutationBody = ShoppingCartPartial
    export type ShoppingCartControllerUpdateAllMutationError = ErrorType<unknown>

    export const useShoppingCartControllerUpdateAll = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof shoppingCartControllerUpdateAll>>, TError,{data: ShoppingCartPartial;params?: ShoppingCartControllerUpdateAllParams}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof shoppingCartControllerUpdateAll>>, {data: ShoppingCartPartial;params?: ShoppingCartControllerUpdateAllParams}> = (props) => {
          const {data,params} = props ?? {};

          return  shoppingCartControllerUpdateAll(data,params,)
        }

      return useMutation<Awaited<ReturnType<typeof shoppingCartControllerUpdateAll>>, TError, {data: ShoppingCartPartial;params?: ShoppingCartControllerUpdateAllParams}, TContext>(mutationFn, mutationOptions)
    }
    export const shoppingCartControllerFind = (
    params?: ShoppingCartControllerFindParams,
 signal?: AbortSignal
) => {
      return customInstance<ShoppingCartWithRelations[]>(
      {url: `/shopping-carts`, method: 'get',
        params, signal
    },
      );
    }
  

export const getShoppingCartControllerFindQueryKey = (params?: ShoppingCartControllerFindParams,) => [`/shopping-carts`, ...(params ? [params]: [])];

    
export type ShoppingCartControllerFindQueryResult = NonNullable<Awaited<ReturnType<typeof shoppingCartControllerFind>>>
export type ShoppingCartControllerFindQueryError = ErrorType<unknown>

export const useShoppingCartControllerFind = <TData = Awaited<ReturnType<typeof shoppingCartControllerFind>>, TError = ErrorType<unknown>>(
 params?: ShoppingCartControllerFindParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof shoppingCartControllerFind>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getShoppingCartControllerFindQueryKey(params);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof shoppingCartControllerFind>>> = ({ signal }) => shoppingCartControllerFind(params, signal);

  const query = useQuery<Awaited<ReturnType<typeof shoppingCartControllerFind>>, TError, TData>(queryKey, queryFn, queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}
