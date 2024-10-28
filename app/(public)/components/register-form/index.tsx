"use client";

import { useAuth } from "@devpgcs/app/contexts/auth/auth-provider";
import { Button } from "@devpgcs/app/components/button";
import { FormCard } from "@devpgcs/app/components/form-card";
import { Input } from "@devpgcs/app/components/input";
import { useState } from "react";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const phoneNumber = formData.get("phoneNumber") as string;

    await register(username, password, phoneNumber);

    setIsLoading(false);
  };

  return (
    <FormCard onSubmit={handleSubmit}>
      <h2 className="font-semibold">We&apos;re glad you&apos;ll join us!</h2>

      <Input name="username" type="text" label="Username" placeholder="Enter your username" autoComplete="username" />
      <Input
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        autoComplete="new-password"
      />
      <Input
        name="phoneNumber"
        type="tel"
        label="Phone number"
        placeholder="Enter your phone number"
        autoComplete="tel"
      />

      <Button className="w-full" isLoading={isLoading}>
        Register
      </Button>
    </FormCard>
  );
}
