import { TicketStatus } from "../types/ticket";

/** @desc implementing a proper locale system would've took a long time, here I just use a simple object to illustrate the separation of concerns only */
export const defaultLocale = {
  main: {
    appTitle: "FooTickets",
    notAvailable: "N/A",
    success: "Success!",
    fail: "Something went wrong!",
    notFound: "Not Found!",
  },
  routes: {
    ticketList: {
      submitNewTicketButton: "Submit a new Ticket",
    },
  },
  api: {
    tickets: {
      titles: {
        title: "Title",
        received: "Received",
        status: "Status",
        messages: "Messages",
      },
      status: {
        [TicketStatus.ANSWERED]: "Answered",
        [TicketStatus.CLOSED]: "Closed",
        [TicketStatus.PENDING]: "Pending",
      },
    },
  },
};
