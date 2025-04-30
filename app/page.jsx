import RegisterForm from "@/components/RegisterForm";
import { getUserFromCookies } from "@/lib/getUser";
import Dashboard from "@/components/Dashboard";


export default async function Page() {
  const user = await getUserFromCookies();

  return (
    <div className="flex-grow bg-gradient-to-r from-[#1e002b] via-[#160122] to-black">
      {user ? <Dashboard /> : <RegisterForm />}
    </div>
  );
}
