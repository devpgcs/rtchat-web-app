import { RegisterForm } from "../../components/register-form";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center" style={{ minHeight: "calc(100vh - 400px)" }}>
      <RegisterForm />
    </div>
  );
}
