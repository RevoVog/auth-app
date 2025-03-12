import Link from "next/link";

export default function LoginForm() {


    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-md p-10 bg-white rounded-lg border-t-8 border-green-400">
                <form>
                    <h1 className="text-5xl font-bold my-4">Enter the details</h1>
                    <form className="flex flex-col">
                        <input type="text" placeholder="Email" className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" />
                        <input type="password" placeholder="Password" className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" />
                        <button type="submit" className="bg-green-400 text-white p-2 my-2 w-full rounded-lg hover:bg-green-500">Login</button>
                        <div className="bg-red-500 text-white py-1 px-3 w-fit mt-2 rounded-md ">Error message</div>
                        <Link className="text-sm mt-3 text-right" href={'/register'}>Don't have an Account. <span className="underline">Register</span></Link>
                    </form>
                </form>
            </div>
        </div>
    );
};

