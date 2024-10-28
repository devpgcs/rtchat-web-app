"use client";

import { useAuth } from "@devpgcs/app/contexts/auth/auth-provider";
import { Button } from "@devpgcs/app/components/button";
import { FormCard } from "@devpgcs/app/components/form-card";
import { Input } from "@devpgcs/app/components/input";
import { useState } from "react";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    await login(username, password);

    setIsLoading(false);
  };

  return (
    <FormCard onSubmit={handleSubmit}>
      <h2 className="font-semibold">Welcome back</h2>

      <Input label="Username" placeholder="Enter your username" type="text" name="username" autoComplete="username" />
      <Input
        name="password"
        type="password"
        label="Password"
        autoComplete="current-password"
        placeholder="Enter your password"
      />

      <Button className="w-full" isLoading={isLoading}>
        Login
      </Button>
    </FormCard>
  );
}
