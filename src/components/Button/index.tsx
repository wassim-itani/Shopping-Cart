interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...attrs }: ButtonProps) => {
  return (
    <button
      className={`${
        className ? className : ""
      } text-white font-medium rounded focus:outline-0`}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
