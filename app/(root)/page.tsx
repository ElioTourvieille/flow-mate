import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen from-slate-950 to-slate-900 bg-gradient-to-b dark py-16">
      <BackgroundBeams className="pointer-events-none" />

      <section className="container mx-auto px-10 py-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-extrabold max-w-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-violet-300">
            Streamline your Freelance Workflow.
          </h1>
          <p className="text-xl text-violet-50 max-w-xl my-4">
            Manage your client projects efficienctly with visual workflows,
            automated notifications, and seamless client communication or file
            sharing.
          </p>
          <div className="flex gap-8">
            <Button variant="primary" size="lg" className="w-fit">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="w-fit">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
