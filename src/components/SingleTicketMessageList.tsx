import React from "react";
import { TicketData } from "../types/ticket";
import { useSingleTicketService } from "../services/single-ticket";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import { defaultLocale } from "../locales/default";
import _ from "lodash";
import { formatLocalDateTime, parseServerDate } from "../utils/format-datetime";

interface TicketDetailsProps {
  ticketId: TicketData["id"];
}

const TicketDetails: React.FC<TicketDetailsProps> = ({ ticketId }) => {
  const [service] = useSingleTicketService(ticketId);
  const { data, isLoading } = useQuery(service.queryOptions);

  if (isLoading || _.isUndefined(data)) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-dark p-4 mb-4 rounded-md">
      <h2 className="text-text-primary">{data?.ticket.title}</h2>
      <p className="text-text-secondary flex gap-2">
        <span>
          {defaultLocale.api.tickets.titles.received}
          {`:`}
        </span>
        <span>
          {formatLocalDateTime(parseServerDate(data.ticket.received))}
        </span>
      </p>
      <p className="text-text-secondary flex gap-2">
        <span>
          {defaultLocale.api.tickets.titles.status}
          {`:`}
        </span>
        <span>{defaultLocale.api.tickets.status[data.ticket.status]}</span>
      </p>

      <div className="mt-4">
        <h3 className="text-text-primary">
          {defaultLocale.api.tickets.titles.messages}
        </h3>
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
