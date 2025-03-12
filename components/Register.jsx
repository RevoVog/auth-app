"use client";


import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation' ;

export default function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const route = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError('Please fill all the fields');
            return;
        }
        setError('');

        try {

            const resUser = await fetch('/api/userExist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            
            const {user} = await resUser.json();
            
            if(user){  
                setError('User already exists');
                return;}


            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            if (res.status === 200) {
                console.log("User Registered");
                const form = e.target;
                form.reset();
                route.push('/');
            }
            else {
                console.log("Error in registration");
                setError('Error in registration');
            }
        }
        catch (error) {
        }


    }

    // console.log( "Name : ", name);
    // console.log( "Email : ", email);
    // console.log( "Password  : ", password);

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-md p-10 bg-white rounded-lg border-t-8 border-yellow-400">

                <h1 className="text-5xl font-bold my-4 mx-10">Register Now</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="Name" className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" />
                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" />
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" />
                    <button type="submit" className="bg-yellow-400 text-white p-2 my-2 w-full rounded-lg hover:bg-yellow-500">Register</button>
                    {
                        error && (
                            <div className="bg-red-500 text-white py-1 px-3 w-fit mt-2 rounded-md ">{error}</div>
                        )}
                    <Link className="text-sm mt-3 text-right" href={'/'}>Already have an Account. <span className="underline">Login</span></Link>
                </form>

            </div>
        </div>
    );

};