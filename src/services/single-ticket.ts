import { axios } from "../helpers/axios";
import { ApiResponse, QueryOptions } from "../types/api";
import React, { useEffect, useState } from "react";
import { TicketMessageData } from "../types/ticket-message";

export class SingleTicketService {
  constructor(private readonly id: string) {}

  submitNewMessage() {
    throw new Error("not implemented");
  }

  readonly queryOptions: QueryOptions<TicketMessageData[]> = {
    queryKey: ["userSingleTicket", this.id],
    queryFn: ({ signal }) =>
      axios.get<ApiResponse<TicketMessageData[]>>(`/tickets/${this.id}`, {
        signal,
      }),
    select: (res) => res.data.data,
  };
}

export function useSingleTicketService(
  id: string,
  dependencies: React.DependencyList = []
) {
  const [service, setService] = useState(() => new SingleTicketService(id));
  useEffect(() => {
    setService(new SingleTicketService(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return [service];
}
