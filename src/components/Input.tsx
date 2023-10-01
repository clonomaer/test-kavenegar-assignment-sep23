import _ from "lodash";
import React, { PropsWithoutRef, useId, useMemo } from "react";
import type { UseFormRegister, FieldErrors, Path } from "react-hook-form";

type InputProps<T extends object, E extends "textarea" | "input"> = {
  label?: string;
  name: Path<T>;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  element?: E;
  className?: string;
} & PropsWithoutRef<
  Omit<JSX.IntrinsicElements[E], "className" | "children" | "href">
>;

function Input<T extends object, E extends "textarea" | "input">({
  label,
  register,
  name,
  errors,
  element,
  className = "",
  ...rest
}: InputProps<T, E>) {
  const id = useId();
  const error = useMemo(
    () => _.get(errors, [name, "message"])?.toString(),
    [errors, name]
  );

  return (
    <div className="flex flex-col gap-2">
      {!_.isEmpty(label) && (
        <label className="text-text-secondary" htmlFor={id}>
          {label}
        </label>
      )}
      {React.createElement(element ?? "input", {
        className:
          "appearance-none border border-primary rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:shadow-outline bg-primary-900 " +
          className,
        id,
        ...(register?.(name) ?? {}),
        ...rest,
      })}
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}

export default Input;
