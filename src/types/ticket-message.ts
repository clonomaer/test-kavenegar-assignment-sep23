import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export type TicketMessageData = {
  id: number;
  message: string;
};

/** @abstract do not instantiate directly or assign right after instantiation */
export class TicketMessageFormDTO {
  @IsNotEmpty({ message: "Message is required" })
  @MinLength(20, { message: "Message is too short" })
  @MaxLength(2500, { message: "Message is too long" })
  @IsString({ message: "Message must be a string" })
  message!: string;
}
