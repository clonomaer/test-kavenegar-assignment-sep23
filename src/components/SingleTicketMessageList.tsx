import React from "react";
import { TicketData } from "../types/ticket";
import { useSingleTicketService } from "../services/single-ticket";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

interface TicketDetailsProps {
  ticketId: TicketData["id"];
}

const TicketDetails: React.FC<TicketDetailsProps> = ({ ticketId }) => {
  const [service] = useSingleTicketService(ticketId);
  const { data, isLoading } = useQuery(service.queryOptions);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-dark p-4 mb-4 rounded-md">
      <h2 className="text-text-primary">{data?.ticket.title}</h2>
      <p className="text-text-secondary">Received: {data?.ticket.received}</p>
      <p className="text-text-secondary">Status: {data?.ticket.status}</p>

      <div className="mt-4">
        <h3 className="text-text-primary">Messages</h3>
        <ul>
          {data?.messages.map((message) => (
            <li key={message.id} className="text-text-secondary">
              {message.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TicketDetails;
