import React from "react";
import { useForm } from "react-hook-form";
import createOnSubmit from "../factories/on-submit";
import Input from "./Input";
import Button from "./Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { defaultLocale } from "../locales/default";
import { useSingleTicketService } from "../services/single-ticket";
import { TicketMessageFormDTO } from "../types/ticket-message";
import { TicketData, TicketStatus } from "../types/ticket";

interface TicketReplyForm {
  ticketId: TicketData["id"];
}

const TicketReplyForm: React.FC<TicketReplyForm> = ({ ticketId }) => {
  const [service] = useSingleTicketService(ticketId);
  const { data, refetch } = useQuery(service.queryOptions);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<TicketMessageFormDTO>();

  const { mutate } = useMutation({
    ...service.submitMessageOptions,
    onSuccess() {
      toast(defaultLocale.main.success, { type: "success" });
      refetch();
      reset();
    },
  });

  const { mutate: closeTicket } = useMutation({
    ...service.closeTicketOptions,
    onSuccess() {
      toast(defaultLocale.main.success, { type: "success" });
      refetch();
      reset();
    },
  });

  const onSubmit = handleSubmit(
    createOnSubmit(TicketMessageFormDTO, setError, mutate)
  );

  return (
    <form onSubmit={onSubmit} className="p-4 flex flex-col gap-4">
      {data && data?.ticket.status !== TicketStatus.CLOSED && (
        <>
          <h2 className="text-text-primary">Close this ticket</h2>
          <Button
            type="button"
            onClick={() => {
              closeTicket(null);
            }}
            className="self-start"
          >
            Close
          </Button>
        </>
      )}

      <h2 className="text-text-primary">Submit another message</h2>

      <Input
        element="textarea"
        label="Message"
        name="message"
        register={register}
        className="h-40"
        errors={errors}
        disabled={data?.ticket.status === TicketStatus.CLOSED}
      />

      <Button
        type="submit"
        className="self-start"
        disabled={data?.ticket.status === TicketStatus.CLOSED}
      >
        Submit
      </Button>
    </form>
  );
};

export default TicketReplyForm;
