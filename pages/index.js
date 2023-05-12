import Card from "@/components/Card";
import { db } from "../db/db";
import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Welcome to my Plattenladen</h1>
      {session && (
        <>
          Signed in as {session.user.email} <br />
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
          <Card key={entry.id} article={entry} />
        ))}
      </ul>
    </div>
  );
}
