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
  CategoriesControllerCountParams,
  Category,
  CategoryPartial,
  CategoryWithRelations,
  CategoriesControllerFindByIdParams,
  NewCategory,
  CategoriesControllerUpdateAllParams,
  CategoriesControllerFindParams
} from './ecommerceApi.schemas'
import { customInstance } from '../mutator/custom-instance'
import type { ErrorType } from '../mutator/custom-instance'



export const categoriesControllerCount = (
    params?: CategoriesControllerCountParams,
 signal?: AbortSignal
) => {
      return customInstance<LoopbackCount>(
      {url: `/categories/count`, method: 'get',
        params, signal
    },
      );
    }
  

export const getCategoriesControllerCountQueryKey = (params?: CategoriesControllerCountParams,) => [`/categories/count`, ...(params ? [params]: [])];

    
export type CategoriesControllerCountQueryResult = NonNullable<Awaited<ReturnType<typeof categoriesControllerCount>>>
export type CategoriesControllerCountQueryError = ErrorType<unknown>

export const useCategoriesControllerCount = <TData = Awaited<ReturnType<typeof categoriesControllerCount>>, TError = ErrorType<unknown>>(
 params?: CategoriesControllerCountParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof categoriesControllerCount>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCategoriesControllerCountQueryKey(params);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof categoriesControllerCount>>> = ({ signal }) => categoriesControllerCount(params, signal);

  const query = useQuery<Awaited<ReturnType<typeof categoriesControllerCount>>, TError, TData>(queryKey, queryFn, queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

export const categoriesControllerReplaceById = (
    id: string,
    category: Category,
 ) => {
      return customInstance<void>(
      {url: `/categories/${id}`, method: 'put',
      headers: {'Content-Type': 'application/json', },
      data: category
    },
      );
    }
  


    export type CategoriesControllerReplaceByIdMutationResult = NonNullable<Awaited<ReturnType<typeof categoriesControllerReplaceById>>>
    export type CategoriesControllerReplaceByIdMutationBody = Category
    export type CategoriesControllerReplaceByIdMutationError = ErrorType<unknown>

    export const useCategoriesControllerReplaceById = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof categoriesControllerReplaceById>>, TError,{id: string;data: Category}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof categoriesControllerReplaceById>>, {id: string;data: Category}> = (props) => {
          const {id,data} = props ?? {};

          return  categoriesControllerReplaceById(id,data,)
        }

      return useMutation<Awaited<ReturnType<typeof categoriesControllerReplaceById>>, TError, {id: string;data: Category}, TContext>(mutationFn, mutationOptions)
    }
    export const categoriesControllerUpdateById = (
    id: string,
    categoryPartial: CategoryPartial,
 ) => {
      return customInstance<void>(
      {url: `/categories/${id}`, method: 'patch',
      headers: {'Content-Type': 'application/json', },
      data: categoryPartial
    },
      );
    }
  


    export type CategoriesControllerUpdateByIdMutationResult = NonNullable<Awaited<ReturnType<typeof categoriesControllerUpdateById>>>
    export type CategoriesControllerUpdateByIdMutationBody = CategoryPartial
    export type CategoriesControllerUpdateByIdMutationError = ErrorType<unknown>

    export const useCategoriesControllerUpdateById = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof categoriesControllerUpdateById>>, TError,{id: string;data: CategoryPartial}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof categoriesControllerUpdateById>>, {id: string;data: CategoryPartial}> = (props) => {
          const {id,data} = props ?? {};

          return  categoriesControllerUpdateById(id,data,)
        }

      return useMutation<Awaited<ReturnType<typeof categoriesControllerUpdateById>>, TError, {id: string;data: CategoryPartial}, TContext>(mutationFn, mutationOptions)
    }
    export const categoriesControllerFindById = (
    id: string,
    params?: CategoriesControllerFindByIdParams,
 signal?: AbortSignal
) => {
      return customInstance<CategoryWithRelations>(
      {url: `/categories/${id}`, method: 'get',
        params, signal
    },
      );
    }
  

export const getCategoriesControllerFindByIdQueryKey = (id: string,
    params?: CategoriesControllerFindByIdParams,) => [`/categories/${id}`, ...(params ? [params]: [])];

    
export type CategoriesControllerFindByIdQueryResult = NonNullable<Awaited<ReturnType<typeof categoriesControllerFindById>>>
export type CategoriesControllerFindByIdQueryError = ErrorType<unknown>

export const useCategoriesControllerFindById = <TData = Awaited<ReturnType<typeof categoriesControllerFindById>>, TError = ErrorType<unknown>>(
 id: string,
    params?: CategoriesControllerFindByIdParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof categoriesControllerFindById>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCategoriesControllerFindByIdQueryKey(id,params);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof categoriesControllerFindById>>> = ({ signal }) => categoriesControllerFindById(id,params, signal);

  const query = useQuery<Awaited<ReturnType<typeof categoriesControllerFindById>>, TError, TData>(queryKey, queryFn, {enabled: !!(id), ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

export const categoriesControllerDeleteById = (
    id: string,
 ) => {
      return customInstance<void>(
      {url: `/categories/${id}`, method: 'delete'
    },
      );
    }
  


    export type CategoriesControllerDeleteByIdMutationResult = NonNullable<Awaited<ReturnType<typeof categoriesControllerDeleteById>>>
    
    export type CategoriesControllerDeleteByIdMutationError = ErrorType<unknown>

    export const useCategoriesControllerDeleteById = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof categoriesControllerDeleteById>>, TError,{id: string}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof categoriesControllerDeleteById>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  categoriesControllerDeleteById(id,)
        }

      return useMutation<Awaited<ReturnType<typeof categoriesControllerDeleteById>>, TError, {id: string}, TContext>(mutationFn, mutationOptions)
    }
    export const categoriesControllerCreate = (
    newCategory: NewCategory,
 ) => {
      return customInstance<Category>(
      {url: `/categories`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: newCategory
    },
      );
    }
  


    export type CategoriesControllerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof categoriesControllerCreate>>>
    export type CategoriesControllerCreateMutationBody = NewCategory
    export type CategoriesControllerCreateMutationError = ErrorType<unknown>

    export const useCategoriesControllerCreate = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof categoriesControllerCreate>>, TError,{data: NewCategory}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof categoriesControllerCreate>>, {data: NewCategory}> = (props) => {
          const {data} = props ?? {};

          return  categoriesControllerCreate(data,)
        }

      return useMutation<Awaited<ReturnType<typeof categoriesControllerCreate>>, TError, {data: NewCategory}, TContext>(mutationFn, mutationOptions)
    }
    export const categoriesControllerUpdateAll = (
    categoryPartial: CategoryPartial,
    params?: CategoriesControllerUpdateAllParams,
 ) => {
      return customInstance<LoopbackCount>(
      {url: `/categories`, method: 'patch',
      headers: {'Content-Type': 'application/json', },
      data: categoryPartial,
        params
    },
      );
    }
  


    export type CategoriesControllerUpdateAllMutationResult = NonNullable<Awaited<ReturnType<typeof categoriesControllerUpdateAll>>>
    export type CategoriesControllerUpdateAllMutationBody = CategoryPartial
    export type CategoriesControllerUpdateAllMutationError = ErrorType<unknown>

    export const useCategoriesControllerUpdateAll = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof categoriesControllerUpdateAll>>, TError,{data: CategoryPartial;params?: CategoriesControllerUpdateAllParams}, TContext>, }
) => {
      const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof categoriesControllerUpdateAll>>, {data: CategoryPartial;params?: CategoriesControllerUpdateAllParams}> = (props) => {
          const {data,params} = props ?? {};

          return  categoriesControllerUpdateAll(data,params,)
        }

      return useMutation<Awaited<ReturnType<typeof categoriesControllerUpdateAll>>, TError, {data: CategoryPartial;params?: CategoriesControllerUpdateAllParams}, TContext>(mutationFn, mutationOptions)
    }
    export const categoriesControllerFind = (
    params?: CategoriesControllerFindParams,
 signal?: AbortSignal
) => {
      return customInstance<CategoryWithRelations[]>(
      {url: `/categories`, method: 'get',
        params, signal
    },
      );
    }
  

export const getCategoriesControllerFindQueryKey = (params?: CategoriesControllerFindParams,) => [`/categories`, ...(params ? [params]: [])];

    
export type CategoriesControllerFindQueryResult = NonNullable<Awaited<ReturnType<typeof categoriesControllerFind>>>
export type CategoriesControllerFindQueryError = ErrorType<unknown>

export const useCategoriesControllerFind = <TData = Awaited<ReturnType<typeof categoriesControllerFind>>, TError = ErrorType<unknown>>(
 params?: CategoriesControllerFindParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof categoriesControllerFind>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getCategoriesControllerFindQueryKey(params);

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof categoriesControllerFind>>> = ({ signal }) => categoriesControllerFind(params, signal);

  const query = useQuery<Awaited<ReturnType<typeof categoriesControllerFind>>, TError, TData>(queryKey, queryFn, queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}
