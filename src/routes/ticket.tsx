import React, { useMemo } from "react";
import MainLayout from "../components/MainLayout";
import { useLocation } from "react-router-dom";
import TicketDetails from "../components/SingleTicketMessageList";
import _ from "lodash";
import NewTicketForm from "../components/NewTicketForm";

const TicketPage: React.FC = () => {
  const location = useLocation();
  const ticketId = useMemo(
    () => new URLSearchParams(location.search).get("id"),
    [location]
  );

  return (
    <MainLayout>
      {!_.isNull(ticketId) && !_.isEmpty(ticketId) ? (
        <TicketDetails ticketId={Number(ticketId)} />
      ) : (
        <NewTicketForm />
      )}
    </MainLayout>
  );
};

export default TicketPage;
