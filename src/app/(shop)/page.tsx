import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main>
      <h1>Hola mundo</h1>
      <Button onClick={() => setTheme("dark")}>Hola</Button>
    </main>
  );
}
