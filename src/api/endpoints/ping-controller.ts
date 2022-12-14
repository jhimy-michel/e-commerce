/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Ecommerce API
 * API for e commerce App
 * OpenAPI spec version: 0.0.1
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  PingResponse
} from './ecommerceApi.schemas'
import { customInstance } from '../mutator/custom-instance'
import type { ErrorType } from '../mutator/custom-instance'



export const pingControllerPing = (
    
 signal?: AbortSignal
) => {
      return customInstance<PingResponse>(
      {url: `/ping`, method: 'get', signal
    },
      );
    }
  

export const getPingControllerPingQueryKey = () => [`/ping`];

    
export type PingControllerPingQueryResult = NonNullable<Awaited<ReturnType<typeof pingControllerPing>>>
export type PingControllerPingQueryError = ErrorType<unknown>

export const usePingControllerPing = <TData = Awaited<ReturnType<typeof pingControllerPing>>, TError = ErrorType<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof pingControllerPing>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getPingControllerPingQueryKey();

  

  const queryFn: QueryFunction<Awaited<ReturnType<typeof pingControllerPing>>> = ({ signal }) => pingControllerPing(signal);

  const query = useQuery<Awaited<ReturnType<typeof pingControllerPing>>, TError, TData>(queryKey, queryFn, queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}

