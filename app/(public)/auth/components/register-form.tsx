import { Button } from "@devpgcs/app/components/button";
import { FormCard } from "@devpgcs/app/components/form-card";
import { Input } from "@devpgcs/app/components/input";

export function RegisterForm() {
  return (
    <FormCard action="">
      <h2 className="font-semibold">We're glad you'll join us!</h2>

      <Input label="Email" placeholder="Enter your email" type="email" />
      <Input label="Username" placeholder="Enter your username" type="text" />
      <Input label="Password" placeholder="Enter your password" type="password" />

      <Button className="w-full">Register</Button>
    </FormCard>
  );
}
