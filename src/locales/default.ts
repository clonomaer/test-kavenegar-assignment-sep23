import { TicketStatus } from "../types/ticket";

/** @desc implementing a proper locale system would've took a long time, here I just use a simple object to illustrate the separation of concerns only */
export const defaultLocale = {
  main: {
    notAvailable: "N/A",
  },
  api: {
    tickets: {
      titles: {
        title: "Title",
        received: "Received",
        status: "Status",
      },
      status: {
        [TicketStatus.ANSWERED]: "Answered",
        [TicketStatus.CLOSED]: "Closed",
        [TicketStatus.PENDING]: "Pending",
      },
    },
  },
};
