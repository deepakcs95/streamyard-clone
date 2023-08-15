import logo from "../assets/logo-google.svg";

const LoginForm = () => {
  return (
    <div className="font-Poppins w-[max(400px,20%)] z-[9999px] h-max  px-8 py-10 flex flex-col items-center   bg-white border border-gray-300   gap-[20px] rounded-md ">
      <h2 className=" text-2xl text-center font-medium">Create your account</h2>
      <div className="flex items-center justify-center  gap-[24px]  flex-1 w-full border border-gray-200 py-4 rounded cursor-pointer hover:bg-slate-200">
        <img src={logo} alt="google" />
        <p className="w-[18ch]"> Sign up with Google</p>
      </div>
      <div flex-1 w-full>
        <p>Or continue with email</p>
      </div>
      <div className="flex-1 w-full">
        <input
          className="w-full py-4 pl-5 border border-gray-200 rounded-md "
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>

      <button
        className=" flex-1 w-full py-4 rounded-md bg-violet-700 text-white cursor-pointer"
        type="button"
      >
        Get login code
      </button>
      <p>
        Already using StreamYard? <a href="/login">Login</a>
      </p>
    </div>
  );
};
export default LoginForm;
