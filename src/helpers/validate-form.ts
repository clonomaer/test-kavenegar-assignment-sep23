import { type ValidationError, validateOrReject } from "class-validator";

export const validateForm = async <T extends object>(
  formData: object,
  dtoClass: new () => T
): Promise<Partial<Record<keyof T, string[]>>> => {
  try {
    const dtoInstance = new dtoClass();
    Object.assign(dtoInstance, formData);

    await validateOrReject(dtoInstance, { validationError: { target: false } });

    return {};
  } catch (validationErrors) {
    const errors = validationErrors as ValidationError[] | undefined;
    if (errors) {
      return errors.reduce((acc, error) => {
        const fieldName = error.property as keyof T;
        if (!acc[fieldName]) {
          acc[fieldName] = [];
        }
        if (error.constraints) {
          acc[fieldName]!.push(
            error.constraints[Object.keys(error.constraints)[0]]
          );
        }
        return acc;
      }, {} as Partial<Record<keyof T, string[]>>);
    }
    return {};
  }
};
