import { axios } from "../helpers/axios";
import { MutationOptions, QueryOptions } from "../types/api";
import { TicketData, TicketFormDTO } from "../types/ticket";
import { useState } from "react";

export class TicketService {
  submitNewTicket() {
    throw new Error("not implemented");
  }

  readonly submitOptions: MutationOptions<TicketFormDTO> = {
    mutationKey: ["submitNewTicket"],
    mutationFn: (body) => axios.post("/ticket", body),
  };

  /** @notice pagination would require more complex abstracting */
  readonly queryOptions: QueryOptions<TicketData[]> = {
    queryKey: ["userTicketsList"],
    queryFn: ({ signal }) => axios.get("/tickets", { signal }),
    select: (res) => res.data.data,
  };
}

export function useTicketService() {
  const [service] = useState(() => new TicketService());
  return [service];
}
