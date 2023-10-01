import {
  UseQueryOptions,
  QueryKey,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export type DataBaseType = Record<string, unknown> | Record<string, unknown>[];

/** @desc could carry status and errors if this API was not mocked */
export type ApiResponse<Data extends DataBaseType | null> = {
  status: number;
  errors: string[] | null;
  data: Data;
};

export type QueryOptions<
  TData extends DataBaseType,
  TQueryKey extends QueryKey = QueryKey
> = UseQueryOptions<
  AxiosResponse<ApiResponse<TData>>,
  AxiosError,
  TData,
  TQueryKey
>;

export type MutationOptions<
  Dto extends object | null,
  TData extends DataBaseType | null = null,
  TContext = unknown
> = UseMutationOptions<
  AxiosResponse<ApiResponse<TData>>,
  AxiosError,
  Dto,
  TContext
>;
