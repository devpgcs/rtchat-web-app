interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Whether the button is in a loading state.
   */
  isLoading?: boolean;
}

export function Button({ isLoading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-slate-800 text-slate-100 py-2 px-4 rounded-md ${props.className || ""} ${
        isLoading ? "!bg-slate-300 text-slate-700 cursor-wait" : ""
      }`}
    />
  );
}
