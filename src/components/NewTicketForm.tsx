import React from "react";
import { useForm } from "react-hook-form";
import { TicketFormDTO } from "../types/ticket";
import createOnSubmit from "../factories/on-submit";
import Input from "./Input";
import Button from "./Button";

interface NewTicketFormProps {}

const NewTicketForm: React.FC<NewTicketFormProps> = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TicketFormDTO>();

  const onSubmit = createOnSubmit(TicketFormDTO, setError, (body) => {
    console.log({ body });
    throw new Error("not implemented");
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-4">
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
