import { TicketMessageData } from "./ticket-message";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

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
  @MinLength(6, { message: "Title is too short" })
  @MaxLength(160, { message: "Title is too long" })
  @IsString({ message: "Title must be a string" })
  title!: string;

  @IsNotEmpty({ message: "Message is required" })
  @MinLength(20, { message: "Message is too short" })
  @MaxLength(2500, { message: "Message is too long" })
  @IsString({ message: "Message must be a string" })
  message!: string;
}
