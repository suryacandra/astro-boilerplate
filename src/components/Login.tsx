import { useRef } from "react";
import { signIn } from "@astro-auth/client";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e: any) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    signIn({
      provider: "credential",
      login: data,
    });
  };
  return (
    <div className='flex flex-col items-center w-full'>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-center w-full m-2 p-2"
      >
        <label htmlFor="username">Username</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          className="ring-2 ring-black p-2 w-1/2"
          placeholder="email..."
        />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          className="ring-2 ring-black p-2 w-1/2"
          placeholder="password..."
        />
        <button className="bg-black w-1/2 p-2 bg-green-300 px-5">
          Login
        </button>
      </form>
      <button className='bg-red-300 p-2 px-5'
        onClick={() => {
          signIn({
            provider: "google",
          });
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
