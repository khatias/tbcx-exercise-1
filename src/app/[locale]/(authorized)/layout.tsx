import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login");
  }

  return <>{children}</>;
}
