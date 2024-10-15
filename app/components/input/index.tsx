interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the input, if any.
   */
  label?: string;
}

export function Input({ label, ...inputProps }: InputProps) {
  // Since it can be inside of the label, we need to conditionally add the margin
  // and store the input element in a variable to avoid render unecessary elements
  const inputEl = (
    <input
      {...inputProps}
      className={"block py-2 px-4 rounded-md border w-full " + (label ? "mt-2" : "") + (inputProps.className || "")}
    />
  );

  return (
    <div className="w-full">
      {label ? (
        <label className="font-medium space-y-2">
          {label}
          {inputEl}
        </label>
      ) : (
        inputEl
      )}
    </div>
  );
}
