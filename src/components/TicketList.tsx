import React from "react";
import TicketListItem from "./TicketListItem";
import { useTicketService } from "../services/tickets";
import { useQuery } from "@tanstack/react-query";

interface TicketListProps {}

const TicketList: React.FC<TicketListProps> = () => {
  const [service] = useTicketService();
  const { data: tickets } = useQuery(service.queryOptions);

  return (
    <div>
      {tickets?.map((ticket) => (
        <TicketListItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
