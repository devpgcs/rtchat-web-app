import { Button } from "@devpgcs/app/components/button";
import { FormCard } from "@devpgcs/app/components/form-card";
import { Input } from "@devpgcs/app/components/input";

export function LoginForm() {
  return (
    <FormCard action="">
      <h2 className="font-semibold">Welcome back</h2>

      <Input label="Username" placeholder="Enter your username" type="text" />
      <Input label="Password" placeholder="Enter your password" type="password" />

      <Button className="w-full">Login</Button>
    </FormCard>
  );
}
