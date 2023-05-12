import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ShoppingCart() {
  const { data: session } = useSession();
  return (
    <>
      <Link href="/">Zu den Produkten</Link>
      <h1>ShoppingCard</h1>
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </>
  );
}
