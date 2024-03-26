type Props = {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({ type, disabled, children }: Props) {
  return (
    <button disabled={disabled} type={type} className="button--primary">
      {children}
    </button>
  );
}
