import { ModeToggle } from "@/components/toggle-theme";
import Toolbar from "@/components/toolbar";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Toolbar />
    </div>
  );
}
