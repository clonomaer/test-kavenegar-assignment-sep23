import { axios } from "../helpers/axios";
import { QueryOptions } from "../types/api";
import React, { useEffect, useState } from "react";
import { TicketDataWithMessages } from "../types/ticket";

export class SingleTicketService {
  readonly queryOptions: QueryOptions<TicketDataWithMessages>;

  constructor(private readonly id: number) {
    this.queryOptions = {
      queryKey: ["userSingleTicket", this.id],
      queryFn: ({ signal }) =>
        axios.get(`/ticket/${this.id}`, {
          signal,
        }),
      select: (res) => res.data.data,
    };
  }

  submitNewMessage() {
    throw new Error("not implemented");
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
