import { axios } from "../helpers/axios";
import { MutationOptions, QueryOptions } from "../types/api";
import React, { useEffect, useState } from "react";
import { TicketWithMessagesData } from "../types/ticket";
import { TicketMessageFormDTO } from "../types/ticket-message";

export class SingleTicketService {
  readonly queryOptions: QueryOptions<TicketWithMessagesData>;
  readonly submitMessageOptions: MutationOptions<TicketMessageFormDTO>;

  constructor(private readonly id: number) {
    this.queryOptions = {
      queryKey: ["userSingleTicket", this.id],
      queryFn: ({ signal }) =>
        axios.get(`/ticket/${this.id}`, {
          signal,
        }),
      select: (res) => res.data.data,
    };
    this.submitMessageOptions = {
      mutationKey: ["submitNewTicketMessage", this.id],
      mutationFn: (body) => axios.post(`/ticket/${this.id}`, body),
    };
  }
}

export function useSingleTicketService(
  id: number,
  dependencies: React.DependencyList = []
) {
  const [service, setService] = useState(() => new SingleTicketService(id));
  useEffect(() => {
    setService(new SingleTicketService(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ...dependencies]);

  return [service];
}
