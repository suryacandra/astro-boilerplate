import { useRef, useState } from "react";

export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [status, setStatus] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if(nameRef.current.value === "" || emailRef.current.value === "" || passwordRef.current.value === "") {
        setStatus("Please fill all the fields");
        return;
    }
    if(passwordRef.current.value.length < 6) {
        setStatus("Password should be atleast 6 characters long");
        return;
    }
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    const data = await response.json();
    setStatus(data.message);

    setTimeout(() => {
        window.location.href = "/";
    }, 2000)
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-center m-2 p-2 border-2 border-black"
      >
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          className="ring-2 ring-black p-2"
          placeholder="name..."
        />
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          className="ring-2 ring-black p-2"
          placeholder="email..."
        />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          className="ring-2 ring-black p-2"
          placeholder="password..."
        />
        <button className="bg-black p-2 bg-green-300 px-5">
          Register
        </button>
      </form>
      {status !== '' && <p className="text-center">{status}</p>}
    </>
  );
}
