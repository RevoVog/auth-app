'use client';

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [error, setError] = useState('');
    
    const router = useRouter(); // ✅ Correct variable

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill all the fields');
            return;
        }
        
        setError('');

        try {
            const res = await signIn('credentials', { email, password, redirect: false });

            if (res.error) {
                setError(res.error);
                return;
            }

            router.replace('/Dashboard'); // ✅ Corrected from `route.replace`
        } catch (error) {
            console.error("Error in login:", error);
            setError('Error in login');
        }
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-md p-10 bg-white rounded-lg border-t-8 border-green-400">
                <h1 className="text-5xl font-bold my-4">Enter the details</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" 
                        placeholder="Email" 
                        className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" 
                    />
                    <input 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password" 
                        placeholder="Password" 
                        className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" 
                    />
                    <button type="submit" className="bg-green-400 text-white p-2 my-2 w-full rounded-lg hover:bg-green-500">
                        Login
                    </button>
                </form>
                {error && (
                    <div className="bg-red-500 text-white py-1 px-3 w-fit mt-2 rounded-md">
                        {error}
                    </div>
                )}
                <Link className="text-sm mt-3 text-right" href={'/register'}>
                    Don't have an Account? <span className="underline">Register</span>
                </Link>
            </div>
        </div>
    );
}
