import Card from "@/components/Card";
import { db } from "../db/db";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();
  function handleAdd(id) {
    console.log(id, "wurde geadded von ", session.user.name);//funktioniert
    
  }

  console.log("Session: ", session);
  return (
    <div>
      <Link href="/shoppingcard">Zum Warenkorb</Link>
      <h1>Welcome to my Plattenladen</h1>
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
      <ul>
        {db.map((entry) => (
          <Card key={entry.id} article={entry} handleAdd={handleAdd} />
        ))}
      </ul>
    </div>
  );
}
