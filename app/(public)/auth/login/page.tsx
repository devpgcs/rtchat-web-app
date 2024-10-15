import { LoginForm } from "../components/login-form";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center" style={{ minHeight: "calc(100vh - 400px)" }}>
      <LoginForm />
    </div>
  );
}
