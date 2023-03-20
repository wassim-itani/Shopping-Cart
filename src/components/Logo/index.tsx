interface LogoProps {
  title: string;
}
const Logo = ({ title }: LogoProps) => {
  return (
    <h1 className="text-red-500 text-3xl font-bold tracking-wide">{title}</h1>
  );
};

export default Logo;
