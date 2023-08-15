import logo from "../assets/logo.svg";
import logosmall from "../assets/logo-small.svg";
import background from "../assets/login-background.svg";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="min-w-[300px]">
      <div className=" z-[9999px]  p-[12px] border-b border-gray-400">
        <img className="hidden md:block h-[34px]" src={logo} alt="" />
        <img className="block md:hidden h-[34px]" src={logosmall} alt="" />
      </div>
      <div className="relative flex items-center min-h-[500px]  h-[calc(100vh-60px)] justify-center  z-0 bg-[#e4ecff]">
        <img className="absolute  w-screen z-[-1] bottom-0 " src={background} alt="background" />
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
