import { getSession, Session } from "@auth0/nextjs-auth0";

export default async function ProfileClient() {
  const session = (await getSession()) as Session | null | undefined;
  const user = session?.user;

  return (
    <>
      {user && (
        <div className="container mx-auto 2xl:px-20">
          <img src={user.picture || ""} alt={user.name || "User"} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
}
