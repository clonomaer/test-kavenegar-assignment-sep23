import { TicketMessageData } from "./ticket-message";

export enum TicketStatus {
  "PENDING" = "pending",
  "ANSWERED" = "answered",
  "CLOSED" = "closed",
}

export type TicketData = {
  id: number;
  received: string;
  title: string;
  message: string;
  status: TicketStatus;
};

export type TicketWithMessagesData = {
  ticket: TicketData;
  messages: TicketMessageData[];
};
