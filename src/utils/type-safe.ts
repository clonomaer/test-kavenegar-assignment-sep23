import _ from "lodash";

export function keysOf<K extends string | number = number>(
  source: { [x in K]?: unknown } | unknown[] | undefined | null
): K[] {
  if (_.isNil(source)) {
    return [];
  }
  return _.keys(source) as K[];
}

export function noNil<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

export function noUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
