import React from "react";
import MainLayout from "../components/MainLayout";
import TicketList from "../components/TicketList";
import { defaultLocale } from "../locales/default";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <Link to="/ticket">
          <Button className="self-start">
            {defaultLocale.routes.ticketList.submitNewTicketButton}
          </Button>
        </Link>
        <TicketList />
      </div>
    </MainLayout>
  );
};

export default IndexPage;
