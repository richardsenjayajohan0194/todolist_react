import IndexLoginRegister from "../components/login_register/IndexLoginRegister";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register () {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <IndexLoginRegister page_status={false}/>
};

