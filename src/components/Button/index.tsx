interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...attrs }: ButtonProps) => {
  return (
    <button
      className={`${className} text-white font-medium rounded`}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
