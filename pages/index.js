import Card from "@/components/Card";
import { db } from "../db/db";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();
  async function handleAdd(id) {
    //console.log(id, "wurde geadded von ", session.user.name); //funktioniert
    const response = await fetch("/api/shoppingcard", {
      method: "POST",
      body: JSON.stringify({ email: session.user.email, id: id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log(await response.json());
    } else {
      console.error(`Error: ${response.status}`);
    }
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
          <Link href="/api/auth/signin">Link to signIn</Link>
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
