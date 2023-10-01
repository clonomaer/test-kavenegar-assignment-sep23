import React from "react";
import TicketListItem from "./TicketListItem";
import { useTicketService } from "../services/tickets";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

interface TicketListProps {}

const TicketList: React.FC<TicketListProps> = () => {
  const [service] = useTicketService();
  const { data: tickets, isLoading } = useQuery(service.queryOptions);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {tickets?.map((ticket) => (
        <TicketListItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
