import { TicketMessageData } from "./ticket-message";
import { IsNotEmpty, IsString } from "class-validator";

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

/** @abstract do not instantiate directly or assign right after instantiation */
export class TicketFormDTO {
  @IsNotEmpty({ message: "Title is required" })
  @IsString({ message: "Title must be a string" })
  title!: string;

  @IsNotEmpty({ message: "Message is required" })
  @IsString({ message: "Message must be a string" })
  message!: string;
}
