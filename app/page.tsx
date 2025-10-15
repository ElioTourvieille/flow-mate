import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen from-slate-950 to-slate-900 bg-gradient-to-b dark">
      <BackgroundBeams className="pointer-events-none" />

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-extrabold max-w-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-violet-300">
            Streamline your Freelance Workflow.
          </h1>
          <p className="text-lg font-light text-violet-50 max-w-xl">
            Manage your client projects efficienctly with visual workflows,
            automated notifications, and seamless client communication or file
            sharing.
          </p>
          <Button variant="primary" className="w-fit">Get Started</Button>
        </div>
      </section>
    </main>
  );
}
