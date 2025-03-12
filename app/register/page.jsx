import RegisterForm from "@/components/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"; // ✅ Correct import
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect('/Dashboard'); // ✅ Correct usage
    }

    return (
        <main>
            <RegisterForm />
        </main>
    );
}
