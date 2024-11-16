// import Header from "../../../components/Header/Header";
// import Footer from "../../../components/Footer/Footer";
import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileClient() {
  const { user } = await getSession();

  return (
    <>
      {/* <Header /> */}
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      {/* <Footer /> */}
    </>
  );
}
