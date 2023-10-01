import { validateForm } from "../helpers/validate-form";
import { UseFormSetError, Path } from "react-hook-form";
import { keysOf } from "../utils/type-safe";

const createOnSubmit = <T extends object>(
  dtoClass: new () => T,
  setError: UseFormSetError<T>,
  onValidSubmit: (data: T) => void
) => {
  return async (data: object) => {
    const validationErrors = await validateForm(data, dtoClass);

    if (keysOf(validationErrors).length === 0) {
      onValidSubmit(data as T);
    } else {
      keysOf(validationErrors).forEach((fieldName) => {
        setError(fieldName as Path<T>, {
          message: validationErrors[fieldName as Path<T>]?.join(", "),
        });
      });
    }
  };
};

export default createOnSubmit;
