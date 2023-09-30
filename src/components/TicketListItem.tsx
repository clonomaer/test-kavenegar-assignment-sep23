import React, { useMemo } from "react";
import { TicketData } from "../types/ticket";
import moment from "moment";
import { parseServerDate } from "../utils/format-server-time";
import { defaultLocale } from "../locales/default";

interface TicketListItemProps {
  ticket: TicketData;
}

const TicketListItem: React.FC<TicketListItemProps> = ({ ticket }) => {
  const relativeTime = useMemo(
    () => moment(parseServerDate(ticket.received)).fromNow(),
    [ticket]
  );

  return (
    <div className="bg-dark p-4 mb-4 rounded-lg border border-primary-800">
      <h3 className="text-text-primary">{ticket.title}</h3>
      <p className="text-text-secondary flex gap-2">
        <span>
          {defaultLocale.api.tickets.titles.received}
          {`:`}
        </span>
        <span>{relativeTime}</span>
      </p>
      <p className="text-text-secondary flex gap-2">
        <span>
          {defaultLocale.api.tickets.titles.status}
          {`:`}
        </span>
        <span>{ticket.status}</span>
      </p>
      {/*  */}
    </div>
  );
};

export default TicketListItem;
