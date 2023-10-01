import React from "react";
import { useForm } from "react-hook-form";
import { TicketFormDTO } from "../types/ticket";
import createOnSubmit from "../factories/on-submit";
import Input from "./Input";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { useTicketService } from "../services/tickets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { defaultLocale } from "../locales/default";

interface NewTicketFormProps {}

const NewTicketForm: React.FC<NewTicketFormProps> = () => {
  const navigate = useNavigate();
  const [service] = useTicketService();
  const { mutate } = useMutation({
    ...service.submitOptions,
    onSuccess() {
      toast(defaultLocale.main.success, { type: "success" });
      navigate("/");
    },
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TicketFormDTO>();

  const onSubmit = handleSubmit(
    createOnSubmit(TicketFormDTO, setError, mutate)
  );

  return (
    <form onSubmit={onSubmit} className="p-4 flex flex-col gap-4">
      <h2 className="text-text-primary">Create a New Ticket</h2>

      <Input label="Title" name="title" register={register} errors={errors} />
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

export default NewTicketForm;
