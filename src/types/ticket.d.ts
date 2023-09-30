export enum TicketStatus {
  "PENDING" = "pending",
  "ANSWERED" = "answered",
  "CLOSED" = "closed",
}

export type SingleTicketData = {
  id: number;
  received: string;
  title: string;
  message: string;
  status: TicketStatus;
};
