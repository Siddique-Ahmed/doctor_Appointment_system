
import { Button } from "../../components/ui/button";

import { auth, signIn } from "../../auth";
import { redirect } from "next/navigation";

export default async function Signup() {
  const session = await auth()
  if(session) redirect("/")
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <form action={async ()=>{
        "use server"
        await signIn("google")
      }}>

      <Button type="submit" variant="destructive">Continue with GOOGLE</Button>
      </form>
    </div>
  );
}
