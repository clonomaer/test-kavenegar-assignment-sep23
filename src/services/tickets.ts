import { axios } from "../helpers/axios";
import { MutationOptions, QueryOptions } from "../types/api";
import { TicketData, TicketFormDTO } from "../types/ticket";
import { useState } from "react";
import { parseServerDate } from "../utils/format-datetime";

export class TicketService {
  readonly submitOptions: MutationOptions<TicketFormDTO> = {
    mutationKey: ["submitNewTicket"],
    mutationFn: (body) => axios.post("/ticket", body),
  };

  /** @notice pagination would require more complex abstracting */
  readonly queryOptions: QueryOptions<TicketData[]> = {
    queryKey: ["userTicketsList"],
    queryFn: ({ signal }) => axios.get("/tickets", { signal }),
    select: (res) =>
      res.data.data.sort(
        (a, b) =>
          Number(parseServerDate(b.received)) -
          Number(parseServerDate(a.received))
      ),
  };
}

export function useTicketService() {
  const [service] = useState(() => new TicketService());
  return [service];
}
