import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"; // ✅ Correct import
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() { // ✅ Make function async
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/Dashboard'); // ✅ Correct usage
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}
