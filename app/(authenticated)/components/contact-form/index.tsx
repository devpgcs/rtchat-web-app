"use client";

import { Button } from "@devpgcs/app/components/button";
import { FormCard } from "@devpgcs/app/components/form-card";
import { Input } from "@devpgcs/app/components/input";
import { CrudAction } from "@devpgcs/app/enums/crud-action.enum";

interface ContactFormProps {
  /**
   * The action to perform with the form.
   * One of `create` or `update`.
   */
  action: CrudAction.CREATE | CrudAction.UPDATE;
}

export function ContactForm({ action }: ContactFormProps) {
  const title: Record<ContactFormProps["action"], string> = {
    create: "Create contact",
    update: "Update contact",
  };

  return (
    <FormCard className="bg-white">
      <h3 className="font-semibold">{title[action]}</h3>

      <Input label="Username" placeholder="Enter the contact username" />
      <Input label="Nick name" placeholder="Enter the contact nick name" />

      <Button className="w-full">{title[action]}</Button>
    </FormCard>
  );
}
