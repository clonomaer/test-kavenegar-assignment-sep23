import React, { useMemo } from "react";
import { TicketData } from "../types/ticket";
import { useSingleTicketService } from "../services/single-ticket";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";
import { defaultLocale } from "../locales/default";
import _ from "lodash";
import { formatLocalDateTime, parseServerDate } from "../utils/format-datetime";
import Button from "./Button";
import { Link } from "react-router-dom";

interface TicketDetailsProps {
  ticketId: TicketData["id"];
}

const TicketDetails: React.FC<TicketDetailsProps> = ({ ticketId }) => {
  const [service] = useSingleTicketService(ticketId);
  const { data, isLoading } = useQuery(service.queryOptions);

  const messages = useMemo(
    () =>
      data
        ? [
            { id: data.ticket.id, message: data.ticket.message },
            ...data.messages,
          ]
        : undefined,
    [data]
  );

  if (isLoading || _.isUndefined(data)) {
    return <LoadingSpinner />;
  }

  if (_.isNull(data)) {
    return <div>{defaultLocale.main.notFound}</div>;
  }

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <Link to={"/"} className="flex">
          <Button>{`<`}</Button>
        </Link>

        <div>
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
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-text-primary">
          {defaultLocale.api.tickets.titles.messages}
        </h3>
        <ul className="flex flex-col gap-2">
          {messages?.map((message) => (
            <li
              key={message.id}
              className="text-text-secondary border-b border-primary-800"
            >
              {message.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TicketDetails;
