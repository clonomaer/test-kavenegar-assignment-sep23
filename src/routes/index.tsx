import React from "react";
import MainLayout from "../components/MainLayout";
import TicketList from "../components/TicketList";

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <TicketList />
    </MainLayout>
  );
};

export default IndexPage;
