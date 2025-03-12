"use client"

import {signOut} from "next-auth/react";
import {useRouter} from "next/router";
export default function UserInfo() { 



    return (
        <div className="grid place-items-center h-screen">
        <div className="shadow-md p-10 bg-white rounded-lg border-t-8 border-green-400">
            <h1 className="text-5xl font-bold my-4 mx-10">User Profile</h1>
            <div>
                Name  : <span className="text-green-500">John Doe</span>
            </div>
            <div>
                Email : <span className="text-green-500">Jone@gmail.com</span>
            </div>
            <div>
            <button onClick={signOut} type="submit" className="bg-red-400 text-white p-2 mt-6 w-full rounded-lg hover:bg-red-500">Log Out</button>
            </div>
        </div>
        </div>
    );
};