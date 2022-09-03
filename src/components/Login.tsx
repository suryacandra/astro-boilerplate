import { useRef } from 'react'
import { signIn } from "@astro-auth/client";

const  Login = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()

    const submitHandler = (e: any) => {
        e.preventDefault()
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        signIn({
            provider: "credential",
            login: {
                username: data.username,
                password: data.password
            }
        })
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col gap-2 items-center m-2 p-2 border-2 border-black'>
            <label htmlFor='username'>Username</label>
            <input ref={usernameRef} type='text' id='username' className='ring-2 ring-black p-2' placeholder='username...' />
            <label htmlFor='password'>Password</label>
            <input ref={passwordRef} type='password' id='password' className='ring-2 ring-black p-2' placeholder='password...' />
            <button className='bg-black text-white p-2 bg-green-300 px-5'>Login</button>
        </form>
    )
}

export default Login;