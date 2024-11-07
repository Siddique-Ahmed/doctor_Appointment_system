
import { Button } from "../../components/ui/button";

export default function Signup() {
  return (
    <div className="container mx-auto flex items-center justify-center gap-3 min-h-screen flex-col">
      <Button variant="destructive">Continue with GOOGLE</Button>
      <Button variant="outline">Continue with GITHUB</Button>
    </div>
  );
}
