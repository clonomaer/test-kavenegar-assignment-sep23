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
import { TicketData } from "../types/ticket";

interface TicketReplyForm {
  ticketId: TicketData["id"];
}

const TicketReplyForm: React.FC<TicketReplyForm> = ({ ticketId }) => {
  const [service] = useSingleTicketService(ticketId);
  const { refetch } = useQuery(service.queryOptions);

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

  const onSubmit = handleSubmit(
    createOnSubmit(TicketMessageFormDTO, setError, mutate)
  );

  return (
    <form onSubmit={onSubmit} className="p-4 flex flex-col gap-4">
      <h2 className="text-text-primary">Submit another message</h2>

      <Input
        element="textarea"
        label="Message"
        name="message"
        register={register}
        className="h-40"
        errors={errors}
      />

      <Button type="submit" className="self-start">
        Submit
      </Button>
    </form>
  );
};

export default TicketReplyForm;
