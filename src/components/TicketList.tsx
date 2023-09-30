import React from "react";
import TicketListItem from "./TicketListItem";
import { SingleTicketData } from "../types/ticket";

interface TicketListProps {
  tickets: SingleTicketData[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <div>
      {tickets.map((ticket) => (
        <TicketListItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
