import Link from "next/link";

export default function RegisterForm() {

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-md p-10 bg-white rounded-lg border-t-8 border-yellow-400">
                <form>
                    <h1 className="text-5xl font-bold my-4 mx-10">Register Now</h1>
                    <form className="flex flex-col">
                    <input type="text" placeholder="Name" className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" />
                        <input type="text" placeholder="Email" className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" />
                        <input type="password" placeholder="Password" className="border-2 border-gray-300 p-2 my-2 w-full rounded-lg" />
                        <button type="submit" className="bg-yellow-400 text-white p-2 my-2 w-full rounded-lg hover:bg-yellow-500">Register</button>
                        <div className="bg-red-500 text-white py-1 px-3 w-fit mt-2 rounded-md ">Error message</div>

                        <Link className="text-sm mt-3 text-right" href={'/'}>Already have an Account. <span className="underline">Login</span></Link>
                    </form>
                </form>
            </div>
        </div>
    );

};