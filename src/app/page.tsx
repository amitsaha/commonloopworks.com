import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Engineering Strategy",
    description:
      "Turn product goals into execution plans with pragmatic architecture and delivery guidance.",
  },
  {
    title: "Data & AI Systems",
    description:
      "Design production-ready data pipelines and practical AI workflows that teams can own.",
  },
  {
    title: "Platform Reliability",
    description:
      "Improve observability, deployment confidence, and operational resilience for critical systems.",
  },
];

const highlights = [
  "Hands-on leadership from discovery to delivery",
  "Clear communication across engineering and business teams",
  "A bias for maintainable, measurable outcomes",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-12 md:px-10">
      <section className="space-y-6 border-b border-border pb-12">
        <a href="/" className="inline-flex">
          <div className="w-40 h-40 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <Image
              src="/clw_logo.png"
              alt="Common Loop Works Logo"
              width={500}
              height={500}
              className="w-14 h-14"
            />
          </div>
        </a>
        {/* <Badge variant="secondary">Common Loop Works</Badge> */}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Build software systems that move your business forward.
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          I&apos;m Amit Saha. I partner with teams to solve complex software,
          platform, and data challenges with practical, outcome-focused
          consulting.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/amitsaha0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              Start a conversation <ArrowUpRight className="size-4" />
            </Button>
          </a>
          <a href="https://echorand.me/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Writing & thinking
            </Button>
          </a>
        </div>
        <div className="mt-8 w-full rounded-lg border border-border overflow-hidden">
          <Image
            src="/placeholder-hero.jpg"
            alt="Common Loop Works - Software Consulting"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Services
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item} className="h-full">
            <CardContent className="flex items-start gap-3 p-6">
              <CheckCircle2 className="mt-0.5 size-5 text-primary" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-card p-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Let&apos;s make your next technical bet successful.
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          If you need a trusted consultant to unblock delivery, improve system
          quality, or shape your roadmap, let&apos;s connect.
        </p>
      </section>
    </main>
  );
}
