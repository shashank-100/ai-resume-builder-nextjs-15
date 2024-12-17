import { Button } from "@/components/ui/button";
import GraphPaperBackground from "@/components/graph-paper-background";
import logo from "@/assets/logo.svg";
import resumePreview from "@/assets/resume-preview.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="max-w-prose space-y-3">
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 px-6 py-12 text-center md:px-10 lg:px-16 xl:px-24">
      <GraphPaperBackground />
      <div className="container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl space-y-6 lg:max-w-xl">
          <Image
            src={logo} // Updated path
            alt="ResumeAI Logo"
            width={80}
            height={80}
            className="mx-auto lg:mx-0"
          />
          <h1 className="bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl xl:text-6xl">
            Craft Your Future<br />One Resume at a Time
          </h1>
          <p className="text-xl text-gray-600">
            Harness the power of AI to create stunning resumes in minutes. Stand out from the crowd and land your dream job with our intelligent resume builder.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button asChild size="lg" className="rounded-full text-lg">
              <Link href="/resumes">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-lg">
              <Link href="/templates">View Templates</Link>
            </Button>
          </div>
        </div>
        <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-cyan-700/30 blur-3xl" />
          <Image
            src={resumePreview} // Updated path
            alt="Resume preview"
            width={600}
            height={800}
            className="relative z-10 rounded-2xl shadow-2xl transition-all duration-300 hover:rotate-1 hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
}
