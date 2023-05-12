import Card from "@/components/Card";
import { db } from "../db/db";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my plattenladen</h1>
      <ul>
      {
        db.map(entry=>(
          <Card key={entry.id} article={entry}/>
        ))
      }
      </ul>
    </div>
  );
}
