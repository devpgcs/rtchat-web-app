interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={"bg-slate-800 text-slate-100 py-2 px-4 rounded-md " + (props.className || "")} />
  );
}
