import { PropsWithChildren } from "react";

interface FormCardProps
  extends PropsWithChildren,
    React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export function FormCard(props: FormCardProps) {
  return (
    <form
      {...props}
      className={
        "p-4 rounded-md shadow-md min-w-96 min-h-96 flex flex-col items-center justify-center gap-8 " +
        (props.className || "")
      }
    />
  );
}
