/** @desc could carry status and errors if this API was not mocked */
export type ApiResponse<Data extends Record<string, unknown>> = {
  status: number;
  errors: string[] | null;
  data: Data;
};
