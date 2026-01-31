import Hero from "./components/Hero"; // Hero Section
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";

// Main Home Page
export default function Home() {
  return (
    <main className="relative bg-[var(--black-100)] flex flex-col items-center justify-center overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
