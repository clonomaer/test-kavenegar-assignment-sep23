import { axios } from "../helpers/axios";
import { ApiResponse, QueryOptions } from "../types/api";
import { TicketData } from "../types/ticket";
import { useState } from "react";

export class TicketService {
  submitNewTicket() {
    throw new Error("not implemented");
  }

  /** @notice pagination would require more complex abstracting */
  readonly queryOptions: QueryOptions<TicketData[]> = {
    queryKey: ["userTicketsList"],
    queryFn: ({ signal }) =>
      axios.get<ApiResponse<TicketData[]>>("/tickets", { signal }),
    select: (res) => res.data.data,
  };
}

export function useTicketService() {
  const [service] = useState(() => new TicketService());
  return [service];
}
